import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BtnRegister, RegisterHeader, RegisterStepFinal, RegisterStepOne, RegisterStepTwo } from '../components'

import style from '../style/screens/register.module.sass'

const register = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const changeStep = () => {
        setStep(step + 1)
        if(step == 3) navigate('/user/123')
    }
    return (
        <div className={style.register}>
            <RegisterHeader page="ĐĂNG KÝ" step={step}/>
            <div className={style.registerInput}>
                {step == 1? <RegisterStepOne /> : step == 2? <RegisterStepTwo /> : <RegisterStepFinal />}
            </div>
            <BtnRegister step={step} changeStep={changeStep}/>
            <div className={style.navBack} onClick={() => setStep((step > 1? step-1: step))}/>
        </div>
    )
}

export default register