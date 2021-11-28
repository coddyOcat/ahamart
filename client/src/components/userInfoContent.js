import moment from "moment"

import { UserInfo } from './ui'

import style from '../style/components/userInfoContent.module.sass'

const userInfoContent = ({ customerInfo }) => {
    return (
        <div className={style.userInfoContent}>
            <UserInfo title="Họ và tên" content={customerInfo.SName+" "+customerInfo.GName}/>
            <UserInfo title="Giới tính" content={customerInfo.Gender == "M"? "Nam": customerInfo.Gender == "F"? "Nữ": "Không xác định"}/>
            <UserInfo title="Ngày sinh" content={(new Date(customerInfo.DOB)).toLocaleDateString("en-GB")}/>
            <UserInfo title="Địa chỉ" content={customerInfo.HouseNo+", "+customerInfo.StName+", "+customerInfo.WardName+", "+customerInfo.DistName+", "+customerInfo.CityName}/>
            <UserInfo title="Số điện thoại" content={customerInfo.PhoneNo}/>
            <UserInfo title="Email" content={customerInfo.Email}/>
            <UserInfo title="Tên đăng nhập" content={customerInfo.UserName}/>
            <UserInfo title="Mật khẩu" content={"*".repeat(customerInfo.Passw.length)}/>
            <div className={style.navEnd}>Chỉnh sửa</div>
        </div>
    )
}

export default userInfoContent