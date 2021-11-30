import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { findUserName, findPhoneNo, findEmail, findSsn, insertCustomer } from '../services/user'
import { BtnRegister, RegisterHeader, RegisterStepFinal, RegisterStepOne, RegisterStepTwo } from '../components'

import style from '../style/screens/register.module.sass'

const register = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [message, setMessage] = useState("")
    const [dob, setDob] = useState({"day":"", "month":"", "year":""})
    const [userInfo, setUserInfo] = useState({"Ssn": "", "HouseNo": "", "StName": "", "WardName": "", "DistName": "", "CityName": "", "CountryName": "", "UserName": "", "Passw": "", "Email": "", "PhoneNo": "", "Gender": "", "Nationality": "", "DOB": "", "SName": "", "GName": ""})
    
    const [userNameExist, setUserNameExist] = useState(-1)
    const [phoneExist, setPhoneExist] = useState(-1)
    const [emailExist, setEmailExist] = useState(-1)
    const [ssnExist, setSsnExist] = useState(-1)
    
    const changeStep = async () => {
        setStep(step + 1)
        if(step == 1) {
            const res1 = await findUserName(userInfo.UserName)
            const res2 = await findPhoneNo(userInfo.PhoneNo)
            const res3 = await findEmail(userInfo.Email)
            if (res1.status == "OK") {
                setUserNameExist(0)
                setStep(1)
            }
            else if (userInfo.UserName != "") setUserNameExist(1)
            else setUserNameExist(-1)
            if (res2.status == "OK") {
                setPhoneExist(0)
                setStep(1)
            }
            else if (userInfo.PhoneNo != "") setPhoneExist(1)
            else setPhoneExist(-1)
            if (res3.status == "OK") {
                setEmailExist(0)
                setStep(1)
            }
            else if (userInfo.Email != "") setEmailExist(1)
            else setEmailExist(-1)
        }
        else if (step == 2) {
            const res4 = await findSsn(userInfo.Ssn)
            if (res4.status == "OK") {
                setSsnExist(0)
                setStep(2)
            }
            else if (userInfo.Ssn != "") setSsnExist(1)
            else setSsnExist(-1)
        }
        else if(step == 3) {   
            const res = await insertCustomer(userInfo) 
            if (res.status == "OK") navigate("/")
            else {
                setMessage(res.status)
                setStep(3)
            }
        }
    }
    const checkUserName = async () => {
        const res1 = await findUserName(userInfo.UserName)
        if (res1.status == "OK") {
            setUserNameExist(0)
        }
        else if (userInfo.UserName != "") setUserNameExist(1)
        else setUserNameExist(-1)
    }
    const checkPhoneNo = async () => {
        const res2 = await findPhoneNo(userInfo.PhoneNo)
        if (res2.status == "OK") {
            setPhoneExist(0)
        }
        else if (userInfo.PhoneNo != "") setPhoneExist(1)
        else setPhoneExist(-1)
    }
    const checkEmail = async () => {
        const res3 = await findEmail(userInfo.Email)
        if (res3.status == "OK") {
            setEmailExist(0)
        }
        else if (userInfo.Email != "") setEmailExist(1)
        else setEmailExist(-1)
    } 
    const checkSsn = async () => {
        const res4 = await findSsn(userInfo.Ssn)
        if (res4.status == "OK") {
            setSsnExist(0)
            setStep(2)
        }
        else if (userInfo.Ssn != "") setSsnExist(1)
        else setSsnExist(-1)
    }
    const handleDob = async (e) => {
        const {name, value} = e.target
        setDob({ ...dob, [name]: value })
        
    }
    const handleForm = (e) => {
        const {name, value} = e.target
        setUserInfo({...userInfo, [name]: value})
    }
    return (
        <div className={style.register}>
            <RegisterHeader page="ĐĂNG KÝ" step={step}/>
            <div className={style.registerInput}>
                {step == 1? <RegisterStepOne handleForm={handleForm} userInfo={userInfo} checkInfo={[checkUserName,checkPhoneNo,checkEmail]} status={[userNameExist, phoneExist, emailExist]}/> 
                : step == 2? <RegisterStepTwo handleForm={handleForm} setUserInfo={setUserInfo} userInfo={userInfo} dob={dob} handleDob={handleDob} checkInfo={[checkSsn]} status={[ssnExist]}/> 
                : <RegisterStepFinal handleForm={handleForm} userInfo={userInfo}/>}
            </div>
            <BtnRegister step={step} changeStep={changeStep}/>
            <div className={style.navBack} onClick={() => setStep((step > 1? step-1: step), setMessage(""))}/>
            <div className={style.message}>{message}</div>
        </div>
    )
}

export default register