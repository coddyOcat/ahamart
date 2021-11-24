import { Brand } from '../components/ui'

import style from '../style/components/registerHeader.module.sass'
import image from '../assets'

const registerHeader = ({ step, page }) => {
    return (
        <div className={style.registerHeader}>
            <div className={style.background}/>
            <Brand />
            <div className={style.title}>
                <div className={style.TITLE}>{page}</div>
                <div className={style.titleDes}>
                    {step == 1? "Hãy đăng ký tài khoản để tiếp tục": "Nhập thông tin cá nhân"}
                </div>
            </div>
            <img className={style.packetLogo} src={image.packetLogo}/>
        </div>
    )
}

export default registerHeader