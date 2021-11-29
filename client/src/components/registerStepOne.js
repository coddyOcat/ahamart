import { InputBox } from "./ui"

import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../style/components/registerStepOne.module.sass' 

const registerStepOne = ({userInfo, handleForm, status}) => {
    return (
        <div className={style.registerStepOne}>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-person`}></i>
                <InputBox title="Tên đăng nhập *" name="UserName" check={status[0]} userInfo={userInfo} handleForm={handleForm}/>
            </div>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-phone-vibrate`}></i>
                <InputBox title="Số điện thoại *" name="PhoneNo"  check={status[1]} userInfo={userInfo} handleForm={handleForm}/>
            </div>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-envelope-check`}></i>
                <InputBox title="Email *" name="Email" check={status[2]} userInfo={userInfo} handleForm={handleForm}/>
            </div>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-shield-lock`}></i>
                <InputBox title="Mật khẩu *" name="Passw" check={-1} userInfo={userInfo} handleForm={handleForm}/>
            </div>
        </div>
    )
}

export default registerStepOne