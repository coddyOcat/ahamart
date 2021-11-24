import { BtnLogin, RegisterHeader } from '../components'
import { InputBox } from '../components/ui'
import style from '../style/screens/login.module.sass'

const login = () => {
    return (
        <div className={style.login}>
            <RegisterHeader page="ĐĂNG NHẬP" step={0} />
            <div className={style.loginBox}>
                <div className={style.loginInput}>
                    <div className={style.boxbox}>
                        <i className={`${style.icon} bi bi-person`}></i>
                        <InputBox title="Tên đăng nhập" check={0}/>
                    </div>
                    <div className={style.boxbox}>
                        <i className={`${style.icon} bi bi-shield-lock`}></i>
                        <InputBox title="Mật khẩu" check={0}/>
                        <div className={style.forgetPass}>Forget?</div>
                    </div>
                </div>
                <BtnLogin />
            </div>
        </div>
    )
}

export default login