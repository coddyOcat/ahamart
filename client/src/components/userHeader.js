import { Brand } from './ui'

import image from '../assets'
import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../style/components/userHeader.module.sass' 

const userHeader = ({ cardOn, title }) => {
    return (
        <div className={style.userHeader}>
            <Brand />
            <div className={style.userBox}>
                <img className={style.avatar} src={image.avatars} />
                <div className={style.card} style={{display: !!cardOn? "block": "none"}}>
                    <img className={style.cardBackground} src={image.vipCard} />
                    <img className={style.logo} src={image.brandLogo} />
                    <div className={style.containerCard}>
                        <div className={style.class}>
                            <div className={style.classTitle}>HẠNG</div>
                            <div className={style.className}>vip</div>
                        </div>
                        <div className={style.mPoint}>{'Điểm tích lũy: ' + '200'}</div>
                        <div className={style.ePoint}>{'Điểm đổi quà: ' + '180'}</div>
                    </div>
                </div>
            </div>
            <div className={style.userName} style={{width: !!cardOn? "80%": ""}}>Đặng Hoài Bão</div>
            <div className={style.infoBar}>
                {!!cardOn? <div className={style.userHomeHeader}>
                    <i class="bi-geo-alt"></i>
                    <div>21 Khu 6, Dĩ An, Thủ Đức, Tp. Hồ Chí Minh</div>
                </div>
                :<div className={style.userDetailHeader}>{title}</div>}
            </div>
        </div>
    )
}

export default userHeader