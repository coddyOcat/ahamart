import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { BtnLogin, RegisterHeader } from '../components'
import { loginCustomer } from '../services/user'
import { InputBox } from '../components/ui'

import style from '../style/screens/login.module.sass'

const login = () => {
    const [userInfo, setUserInfo] = useState({"UserName": "", "Passw":""})
    const handleForm = (e) => {
        const {name, value} = e.target
        setUserInfo({...userInfo, [name]: value})
    }
    const navigate = useNavigate()
    const [isUserNameNotAvail, setUserNameNotAvail] = useState(-1)
    const [isWrongPassw, setIsWrongPassw] = useState(-1)
    const [wrongPass, setWrongPass] = useState(false)
    const [wrongPassTimes, setWrongPassTimes] = useState(3)
    const [wrongPassCountDown, setWrongPassCountDown] = useState(false)
    const [wrongPassCountDownTime, setWrongPassCountDownTime] = useState(5)

    const handleLogin = async () => {
        if (!wrongPassCountDown) {
            const res = await loginCustomer(userInfo)
            if (res.status == "OK") navigate(`/user/${res.SSN}`)
            else if (res.status == "Wrong Pass") {
                setIsWrongPassw(0)
                setUserNameNotAvail(-1)
                setWrongPassTimes(wrongPassTimes-1)
            }
            else if (res.status == "No Username Available") { setIsWrongPassw(-1), setUserNameNotAvail(0)}
        }
    }
    useEffect(() => {
        if(wrongPassTimes == 0) {
            setWrongPass(false)
            setWrongPassTimes(3)
            setWrongPassCountDown(true)
        }
        else if (wrongPassTimes == 1 || wrongPassTimes == 2) setWrongPass(true)
    }, [wrongPassTimes])
    useEffect(() => {
        if (wrongPassCountDown) {
            setTimeout(() => {
                setWrongPassCountDownTime(wrongPassCountDownTime - 1)
            }, 1000);
            if (wrongPassCountDownTime == 0) setWrongPassCountDown(false)
        }
        else setWrongPassCountDownTime(5)
    },[wrongPassCountDown, wrongPassCountDownTime])
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
                <div className={style.message} style={{display: wrongPass? "block": "none"}}>{"Số lần nhập mật khẩu sai còn lại: " + wrongPassTimes} </div>
                <div className={style.message} style={{display: wrongPassCountDown? "block": "none"}}>{"Đợi " + wrongPassCountDownTime + "s rồi đăng nhập lại"} </div>
                <BtnLogin handleLogin={handleLogin}/>
            </div>
        </div>
    )
}

export default login