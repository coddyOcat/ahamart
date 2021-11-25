import style from '../style/components/userHomeContent.module.sass' 
import { UserNav } from './ui'

const userHomeContent = () => {
    return (
        <div className={style.userHomeContent}>
            <UserNav title={'Thông tin khách hàng'} icon={'bi-info-circle'}/>
            <div className={style.line} />
            <UserNav title={'Thẻ tín dụng'} icon={'bi-credit-card'}/>
            <div className={style.line} />
            <UserNav title={'Danh sách gói điểm'} icon={'bi-card-list'}/>
            <div className={style.line} />
            <UserNav title={'Danh sách ưu đãi'} icon={'bi-bag-plus'}/>
            <div className={style.line} />
            <UserNav title={'Đổi quà tặng'} icon={'bi-gift'}/>
            <div className={style.line} />
            <UserNav title={'Hỗ trợ'} icon={'bi-life-preserver'}/>
            <div className={style.line} />
            <div className={style.navEnd}>Đăng xuất</div>
        </div>
    )
}

export default userHomeContent