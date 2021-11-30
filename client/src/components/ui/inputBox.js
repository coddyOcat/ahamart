import { useEffect } from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../../style/ui/inputBox.module.sass'

const inputBox = ({ title, name, check, checkInfo, userInfo, handleForm}) => {
    const checkkk = () => {
        if (!checkInfo) return
        if (name == "UserName" || name == "PhoneNo" || name == "Email" || name == "Ssn") checkInfo()
        else return null
    }
    return (
        <div className={style.inputBox}>
            <div className={style.inputTitle}>{title}</div>
            <div className={style.inputBorder}>
                <input className={style.input} type={name == "Passw"? "password":"text"} name={name} value={userInfo[name]} onChange={handleForm} onBlur={checkkk} />
            </div>
            { check == 0 && <div className={style.check}>
                <i className="bi bi-exclamation" style={{color: "#EE0000"}}/>
            </div>}
            { check == 1 && <div className={style.check}>
                <i className="bi bi-check" style={{color: "#2F9055"}}/>
            </div>}
        </div>
    )
}

export default inputBox