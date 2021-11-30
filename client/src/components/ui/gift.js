import { useState } from 'react'
import image from '../../assets'
import style from '../../style/ui/gift.module.sass'

const gift = ({ title, point, isChange }) => {
    const [isChanged, setIsChanged] = useState(isChange)
    return (
        <div className={style.gift}>
            <img className={style.giftImg} src={image.gift} />
            <div className={style.infoTitle}>{title}</div>
            <div className={style.footer}>
                <div className={style.infoPoint}>{ point + ' điểm'}</div>
                <div className={style.change} onClick={() => setIsChanged(true)} style={{backgroundColor: isChanged? "#DA3B31": "green"}}>{isChanged? "Đổi" : "OK"}</div>
            </div>
        </div>
    )
}

export default gift