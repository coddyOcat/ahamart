import { useState } from 'react'

import {BranchDetailContent, ListBranchContent, HomeContent, HomeHeader, NavBranch, NavRegister } from '../components'

import style from '../style/screens/branchDetail.module.sass'
import image from '../assets'

const BranchDetail = () => {
    const [onActive, setActive] = useState(1)
    const changeActive = (ind) => {
        setActive(ind)
    }
    return (
        <div className={style.branchDetail}>
            <HomeHeader >
                <img className={style.headerImg} src={onActive == 1? image.branchDetail: image.listBranch}/>
            </HomeHeader>
            <NavBranch onActive={onActive} changeActive={changeActive}/>
            <HomeContent>
                {onActive == 1? <BranchDetailContent /> : <ListBranchContent />}
            </HomeContent>
            <NavRegister />
        </div>
    )
}

export default BranchDetail