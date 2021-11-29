import { useEffect, useState } from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../../style/ui/inputBox_v3.module.sass'

const inputBox_v3 = ({title, inp_v3_name, userInfo, setUserInfo, dob, handleDob}) => {
    const setDOB = () => {
        setUserInfo({...userInfo, [inp_v3_name]: dob["year"]+"-"+dob["month"]+"-"+dob["day"]})
    }
    return (
        <div className={style.inputBox_v3}>
            <div className={style.inputTitle}>{title}</div>
            <div className={style.InputBox}>
                <div className={`${style.inputBox_v3_1} ${style.inputBox}`}>
                    <input className={style.input} placeholder='DD' name={"day"} value={dob["day"]} onChange={handleDob}/>
                </div>
                <div className={style.slash}>/</div>
                <div className={`${style.inputBox_v3_2} ${style.inputBox}`}>
                    <input className={style.input} placeholder='MM' name={"month"} value={dob["month"]} onChange={handleDob}/>
                </div>
                <div className={style.slash}>/</div>
                <div className={`${style.inputBox_v3_3} ${style.inputBox}`}>
                    <input className={style.input} placeholder='YYYY' name={"year"} value={dob["year"]} onChange={handleDob} onBlur={setDOB}/>
                </div>
            </div>
        </div>
    )
}

export default inputBox_v3