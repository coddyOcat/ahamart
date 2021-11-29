import { useEffect } from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../../style/ui/inputBox_v2.module.sass'

const inputBox_v2 = ({ title, name_1, name_2, userInfo, handleForm}) => {
    return (
        <div className={style.inputBox_v2}>
            <div className={style.inputTitle}>{title}</div>
            <div className={style.InputBox}>
                <div className={`${style.inputBox_v2_1} ${style.inputBox}`}>
                    <input className={style.input} type={name_1 == "Passw"? "password":"text"} name={name_1} value={userInfo[name_1]} onChange={handleForm}/>
                </div>
                <div className={`${style.inputBox_v2_2} ${style.inputBox}`}>
                    <input className={style.input} type={name_2 == "Passw"? "password":"text"} name={name_2} value={userInfo[name_2]} onChange={handleForm}/>
                </div>
            </div>
        </div>
    )
}

export default inputBox_v2