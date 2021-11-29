import { InputBox, InputBoxV2 } from "./ui"

import style from '../style/components/registerStepFinal.module.sass' 

const registerStepFinal = ({userInfo, handleForm}) => {
    return (
        <div className={style.registerStepFinal}>
            <InputBoxV2 title="Số nhà, tên đường" name_1="HouseNo" name_2="StName" check={-1} userInfo={userInfo} handleForm={handleForm}/>
            <InputBoxV2 title="Phường/Xã, Quận/Huyện" name_1="WardName" name_2="DistName" check={-1} userInfo={userInfo} handleForm={handleForm}/>
            <InputBox title="Thành phố/Tỉnh *" name="CityName" check={-1} userInfo={userInfo} handleForm={handleForm}/>
            <InputBox title="Quốc gia *" name="CountryName" check={-1} userInfo={userInfo} handleForm={handleForm}/>
        </div>
    )
}

export default registerStepFinal