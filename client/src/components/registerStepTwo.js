import { InputBox, InputBoxV2, InputBoxV3 } from "./ui"

import style from '../style/components/registerStepTwo.module.sass' 

const registerStepTwo = ({userInfo, setUserInfo, handleForm}) => {
    return (
        <div className={style.registerStepTwo}>
            <InputBoxV2 title="Họ và tên" name_1="SName" name_2="GName" check={0} userInfo={userInfo} handleForm={handleForm}/>
            <InputBox title="CCCD/CMND" name="Ssn" check={0} userInfo={userInfo} handleForm={handleForm}/>
            <InputBox title="Giới tính" name="Gender" check={0} userInfo={userInfo} handleForm={handleForm}/>
            <InputBoxV3 title="Ngày sinh" inp_v3_name="DOB" userInfo={userInfo} setUserInfo={setUserInfo}/>
            <InputBox title="Quốc tịch" name="Nationality" check={0} userInfo={userInfo} handleForm={handleForm}/>
        </div>
    )
}

export default registerStepTwo