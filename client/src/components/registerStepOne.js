import { InputBox } from "./ui"

import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../style/components/registerStepOne.module.sass' 

const registerStepOne = ({userInfo, handleForm}) => {
    return (
        <div className={style.registerStepOne}>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-person`}></i>
                <InputBox title="Tên đăng nhập" name="UserName" check={0} userInfo={userInfo} handleForm={handleForm}/>
            </div>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-phone-vibrate`}></i>
                <InputBox title="Số điện thoại" name="PhoneNo"  check={0} userInfo={userInfo} handleForm={handleForm}/>
            </div>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-envelope-check`}></i>
                <InputBox title="Email" name="Email" check={0} userInfo={userInfo} handleForm={handleForm}/>
            </div>
            <div className={style.boxbox}>
                <i className={`${style.icon} bi bi-shield-lock`}></i>
                <InputBox title="Mật khẩu" name="Passw" check={0} userInfo={userInfo} handleForm={handleForm}/>
            </div>
        </div>
    )
}

export default registerStepOne