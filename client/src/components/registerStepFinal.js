import { InputBox, InputBoxV2 } from "./ui"

import style from '../style/components/registerStepFinal.module.sass' 

const registerStepFinal = ({userInfo, handleForm}) => {
    return (
        <div className={style.registerStepFinal}>
            <InputBoxV2 title="Số nhà, tên đường" name_1="HouseNo" name_2="StName" check={0} userInfo={userInfo} handleForm={handleForm}/>
            <InputBoxV2 title="Phường/Xã, Quận/Huyện" name_1="WardName" name_2="DistName" check={0} userInfo={userInfo} handleForm={handleForm}/>
            <InputBox title="Thành phố/Tỉnh" name="CityName" check={0} userInfo={userInfo} handleForm={handleForm}/>
            <InputBox title="Quốc gia" name="CountryName" check={0} userInfo={userInfo} handleForm={handleForm}/>
        </div>
    )
}

export default registerStepFinal