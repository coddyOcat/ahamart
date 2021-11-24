import { InputBox, InputBoxV2 } from "./ui"

import style from '../style/components/registerStepFinal.module.sass' 

const registerStepFinal = () => {
    return (
        <div className={style.registerStepFinal}>
            <InputBoxV2 title="Số nhà, tên đường"/>
            <InputBox title="Quận/Huyện" check={0}/>
            <InputBox title="Thành phố/Tỉnh" check={0}/>
            <InputBox title="Quốc gia" check={0}/>
        </div>
    )
}

export default registerStepFinal