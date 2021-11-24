import { BtnRegister, RegisterHeader, RegisterStepFinal, RegisterStepOne, RegisterStepTwo } from '../components'

import style from '../style/screens/register.module.sass'

const register = () => {
    return (
        <div className={style.register}>
            <RegisterHeader step={3}/>
            <div className={style.registerInput}>
                {/* <RegisterStepOne /> */}
                {/* <RegisterStepTwo /> */}
                <RegisterStepFinal />
            </div>
            <BtnRegister step={3}/>
        </div>
    )
}

export default register