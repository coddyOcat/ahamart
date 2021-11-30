import { useState } from 'react'

import { UserInfo } from './ui'
import { updateCustomer } from '../services/user'

import style from '../style/components/userInfoContent.module.sass'

const userInfoContent = ({ customerInfo, setCustomerInfo}) => {
    const [edit, setEdit] = useState(false)
    const [dob, setDob] = useState({"day": (new Date(customerInfo.DOB)).getDate(), "month": (new Date(customerInfo.DOB)).getMonth() + 1, "year": (new Date(customerInfo.DOB)).getFullYear()})

    const enableEdit = () => {
        setEdit(true)
    }
    const saveEdit = async () => {
        setEdit(false)
        await updateCustomer(customerInfo)
    }
    const handleEdit = (e) => {
        const {name, value} = e.target
        setCustomerInfo({...customerInfo, [name]: value})
    }
    const handleDob = async (e) => {
        const {name, value} = e.target
        setDob({ ...dob, [name]: value })
    } 
    const setDOB = () => {
        setCustomerInfo({...customerInfo, ["DOB"]: dob["year"]+"-"+dob["month"]+"-"+dob["day"]})
    }
    return (
        <div className={style.userInfoContent}>
            <UserInfo title="Họ và tên" name="name" 
                value1={customerInfo.SName} value2={customerInfo.GName} 
                edit={edit} handleEdit={handleEdit}
                content={customerInfo.SName+" "+customerInfo.GName}/>
            <UserInfo title="Giới tính" name="gender" 
                edit={edit} handleEdit={handleEdit}
                value1={customerInfo.Gender == "M"? "Nam": customerInfo.Gender == "F"? "Nữ": "Không xác định"}
                content={customerInfo.Gender == "M"? "Nam": customerInfo.Gender == "F"? "Nữ": "Không xác định"}/>
            <UserInfo title="Ngày sinh" name="dob" 
                value1={dob.day} value2={dob.month} value3={dob.year}
                edit={edit} handleEdit={handleEdit} handleDob={handleDob} setDOB={setDOB}
                content={(new Date(customerInfo.DOB)).toLocaleDateString("en-GB")}/>
            <UserInfo title="Địa chỉ" name="address" 
                edit={edit} handleEdit={handleEdit}
                value1={customerInfo.HouseNo} value2={customerInfo.StName} value3={customerInfo.WardName} value4={customerInfo.DistName} value5={customerInfo.CityName}
                content={customerInfo.HouseNo+", "+customerInfo.StName+", "+customerInfo.WardName+", "+customerInfo.DistName+", "+customerInfo.CityName}/>
            <UserInfo title="Số điện thoại" name="phone" 
                edit={edit} handleEdit={handleEdit}
                value1={customerInfo.PhoneNo}
                content={customerInfo.PhoneNo}/>
            <UserInfo title="Email" name="email" 
                edit={edit} handleEdit={handleEdit}
                value1={customerInfo.Email}
                content={customerInfo.Email}/>
            <UserInfo title="Tên đăng nhập" name="username" 
                edit={edit} handleEdit={handleEdit}
                content={customerInfo.UserName}/>
            <UserInfo title="Mật khẩu" name="passw" 
                edit={edit} handleEdit={handleEdit}
                value1={customerInfo.Passw}
                edit={edit} content={"*".repeat(6)}/>
            <div className={style.navEnd} onClick={enableEdit} style={{display: edit? "none": "block"}}>Chỉnh sửa</div>
            <div className={style.navSave} onClick={saveEdit} style={{display: edit? "block": "none"}}>Lưu</div>
        </div>
    )
}

export default userInfoContent