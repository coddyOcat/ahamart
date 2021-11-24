import { InputBox } from "./ui"

import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../style/components/registerStepOne.module.sass' 

const registerStepOne = () => {
    return (
        <div className={style.registerStepOne}>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-person`}></i>
                <InputBox title="Tên đăng nhập" check={0}/>
            </div>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-phone-vibrate`}></i>
                <InputBox title="Số điện thoại" check={0}/>
            </div>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-envelope-check`}></i>
                <InputBox title="Email" check={0}/>
            </div>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-shield-lock`}></i>
                <InputBox title="Mật khẩu" check={0}/>
            </div>
        </div>
    )
}

export default registerStepOne