import { Brand } from './ui'

import image from '../assets'
import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../style/components/userHeader.module.sass' 

const userHeader = ({ cardOn, title, customerInfo }) => {
    return (
        <div className={style.userHeader}>
            <Brand />
            <div className={style.userBox}>
                <img className={style.avatar} src={image.avatars} />
                <div className={style.card} style={{display: !!cardOn? "block": "none"}}>
                    <img className={style.cardBackground} src={
                        customerInfo.MClass == "bronze"? image.bronzeCard:
                        customerInfo.MClass == "silver"? image.silverCard:
                        customerInfo.MClass == "gold"? image.goldCard:
                        image.vipCard
                } />
                    <img className={style.logo} src={image.brandLogo} />
                    <div className={style.containerCard}>
                        <div className={style.class}>
                            <div className={style.classTitle}>HẠNG</div>
                            <div className={style.className}>{
                            customerInfo.MClass == "bronze"? "đồng":
                            customerInfo.MClass == "silver"? "bạc":
                            customerInfo.MClass == "gold"? "vàng":
                            "vip"}</div>
                        </div>
                        <div className={style.mPoint}>{'Điểm tích lũy: ' + customerInfo.MPoint}</div>
                        <div className={style.ePoint}>{'Điểm đổi quà: ' + customerInfo.EPoint}</div>
                    </div>
                </div>
            </div>
            <div className={style.userName} style={{width: !!cardOn? "80%": ""}}>{customerInfo.SName+" "+customerInfo.GName}</div>
            <div className={style.infoBar}>
                {!!cardOn? <div className={style.userHomeHeader}>
                    <i className="bi-geo-alt"></i>
                    <div>{customerInfo.HouseNo+", "+customerInfo.StName+", "+customerInfo.WardName+", "+customerInfo.DistName+", "+customerInfo.CityName}</div>
                </div>
                :<div className={style.userDetailHeader}>{title}</div>}
            </div>
        </div>
    )
}

export default userHeader