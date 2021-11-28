import { useState } from 'react'
import { useNavigate } from 'react-router'

import { BtnLogin, RegisterHeader } from '../components'
import { loginCustomer } from '../services/user'
import { InputBox } from '../components/ui'

import style from '../style/screens/login.module.sass'

const login = () => {
    const [userInfo, setUserInfo] = useState({})
    const handleForm = (e) => {
        const {name, value} = e.target
        setUserInfo({...userInfo, [name]: value})
    }
    const navigate = useNavigate()
    const [isUserNameNotAvail, setUserNameNotAvail] = useState(false)
    const [isWrongPassw, setIsWrongPassw] = useState(false)
    const handleLogin = async () => {
        const res = await loginCustomer(userInfo)
        if (res.status == "OK") navigate(`/user/${res.SSN}`)
        else if (res.status == "Wrong Pass") {setIsWrongPassw(true), setUserNameNotAvail(false)}
        else if (res.status == "No Username Available") { setIsWrongPassw(false), setUserNameNotAvail(true)}
    }
    return (
        <div className={style.login}>
            <RegisterHeader page="ĐĂNG NHẬP" step={0} />
            <div className={style.loginBox}>
                <div className={style.loginInput}>
                    <div className={style.boxbox}>
                        <i className={`${style.icon} bi bi-person`}></i>
                        <InputBox title="Tên đăng nhập" name="UserName" userInfo={userInfo} handleForm={handleForm} check={isUserNameNotAvail}/>
                    </div>
                    <div className={style.boxbox}>
                        <i className={`${style.icon} bi bi-shield-lock`}></i>
                        <InputBox title="Mật khẩu" name="Passw" userInfo={userInfo} handleForm={handleForm} check={isWrongPassw}/>
                        <div className={style.forgetPass}>Forget?</div>
                    </div>
                </div>
                <BtnLogin handleLogin={handleLogin}/>
            </div>
        </div>
    )
}

export default login