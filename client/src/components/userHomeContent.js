import { Link } from 'react-router-dom'

import style from '../style/components/userHomeContent.module.sass' 
import { UserNav } from './ui'

const userHomeContent = ({setCardInd, setCardOn}) => {
    return (
        <div className={style.userHomeContent}>
            <UserNav title={'Thông tin khách hàng'} icon={'bi-info-circle'} setCardInd={() => {setCardInd(0), setCardOn(0)}}/>
            <div className={style.line} />
            <UserNav title={'Thẻ tín dụng'} icon={'bi-credit-card'} setCardInd={() => {setCardInd(1), setCardOn(0)}}/>
            <div className={style.line} />
            <UserNav title={'Danh sách gói điểm'} icon={'bi-card-list'} setCardInd={() => {setCardInd(2), setCardOn(0)}}/>
            <div className={style.line} />
            <UserNav title={'Danh sách ưu đãi'} icon={'bi-bag-plus'} setCardInd={() => {setCardInd(3), setCardOn(0)}}/>
            <div className={style.line} />
            <UserNav title={'Đổi quà tặng'} icon={'bi-gift'} setCardInd={() => {setCardInd(4), setCardOn(0)}}/>
            <div className={style.line} />
            <UserNav title={'Hỗ trợ'} icon={'bi-life-preserver'} setCardInd={() => {setCardInd(5), setCardOn(0)}}/>
            <div className={style.line} />
            <Link to="/" className={style.navEnd}>Đăng xuất</Link>
        </div>
    )
}

export default userHomeContent