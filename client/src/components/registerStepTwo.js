import { InputBox, InputBoxV2, InputBoxV3 } from "./ui"

import style from '../style/components/registerStepTwo.module.sass' 

const registerStepTwo = () => {
    return (
        <div className={style.registerStepTwo}>
            <InputBoxV2 title="Họ và tên"/>
            <InputBox title="Giới tính" check={0}/>
            <InputBoxV3 />
            <InputBox title="Quốc tịch" check={0}/>
        </div>
    )
}

export default registerStepTwo