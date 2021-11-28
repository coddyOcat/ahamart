import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { insertCustomer } from '../services/user'
import { BtnRegister, RegisterHeader, RegisterStepFinal, RegisterStepOne, RegisterStepTwo } from '../components'

import style from '../style/screens/register.module.sass'

const register = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [message, setMessage] = useState("")
    const changeStep = async () => {
        setStep(step + 1)
        if(step == 3) {   
            const res = await insertCustomer(userInfo) 
            if (res == "OK") navigate(`/user/${userInfo.Ssn == ""? 0: userInfo.Ssn}`)
            else {
                setMessage(res)
                setStep(3)
            }
        }
    }

    const [userInfo, setUserInfo] = useState({"Ssn":""})

    const handleForm = (e) => {
        const {name, value} = e.target
        setUserInfo({...userInfo, [name]: value})
    }
    return (
        <div className={style.register}>
            <RegisterHeader page="ĐĂNG KÝ" step={step}/>
            <div className={style.registerInput}>
                {step == 1? <RegisterStepOne handleForm={handleForm} userInfo={userInfo}/> 
                : step == 2? <RegisterStepTwo handleForm={handleForm} setUserInfo={setUserInfo} userInfo={userInfo}/> 
                : <RegisterStepFinal handleForm={handleForm} userInfo={userInfo}/>}
            </div>
            <BtnRegister step={step} changeStep={changeStep}/>
            <div className={style.navBack} onClick={() => setStep((step > 1? step-1: step), setMessage(""))}/>
            <div className={style.message}>{message}</div>
        </div>
    )
}

export default register