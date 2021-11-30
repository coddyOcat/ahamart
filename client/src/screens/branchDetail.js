import { useEffect, useState } from 'react'

import { getListBranchsInfo } from '../services/branch'
import {BranchDetailContent, ListBranchContent, HomeContent, HomeHeader, NavBranch, NavRegister } from '../components'

import style from '../style/screens/branchDetail.module.sass'
import image from '../assets'

const BranchDetail = () => {
    const [onActive, setActive] = useState(1)
    const [branchIndex, setBranchIndex] = useState(0)
    const changeActive = (ind) => {
        setActive(ind)
    }
    const [listBranchsInfo, setListBranchsInfo] = useState([{BID:"", CITYNAME:"", DISTNAME:"", PHONENO:""}])
    useEffect( () => {
        const fetchGetListBranchsInfo = async () => {
            try {
                setListBranchsInfo(await getListBranchsInfo())
            } catch (error) { }
        }
        fetchGetListBranchsInfo()
    }, [])
    return (
        <div className={style.branchDetail}>
            <HomeHeader >
                <img className={style.headerImg} src={onActive == 1? image.branchDetail: image.listBranch}/>
            </HomeHeader>
            <NavBranch onActive={onActive} changeActive={changeActive}/>
            <HomeContent>
                {onActive == 1? <BranchDetailContent branchsInfo={listBranchsInfo[branchIndex]}/> : <ListBranchContent listBranchsInfo={listBranchsInfo} branchIndex={branchIndex} setBranchIndex={setBranchIndex}/>}
            </HomeContent>
            <NavRegister />
        </div>
    )
}

export default BranchDetail