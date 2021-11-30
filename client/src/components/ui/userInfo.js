import style from '../../style/ui/userInfo.module.sass'

const userInfo = ({ title, name, value1, value2, value3, value4, value5, content , edit, handleEdit, handleDob, setDOB}) => {
    return (
        <div className={style.userInfo}>
            <div className={style.infoTitle}>{title}</div>
            {!edit? <div className={style.infoContent}>{content}</div>
            : (name == "name")?
                <div className={style.editContainer}>
                    <input className={style.editContent} name={"SName"} value={value1} onChange={handleEdit} style={{width: "90px", marginRight: "10px"}}/>
                    <input className={style.editContent} name={"GName"} value={value2} onChange={handleEdit} style={{width: "60px"}}/>
                </div>
            :(name == "gender")?
                <div className={style.editContainer}>
                    <select className={style.editContent} name={"Gender"} onChange={handleEdit} style={{width: "90px", marginRight: "10px"}}>
                        <option value="M">Nam</option>
                        <option value="F">Nữ</option>
                    </select>
                </div>
            :(name == "dob")?
                <div className={style.editContainer}>
                    <input className={style.editContent} name={"day"} value={value1} onChange={handleDob} onBlur={setDOB} style={{width: "20px", marginRight: "10px"}}/>/
                    <input className={style.editContent} name={"month"} value={value2} onChange={handleDob} onBlur={setDOB} style={{width: "20px", marginRight: "10px"}}/>/
                    <input className={style.editContent} name={"year"} value={value3} onChange={handleDob} onBlur={setDOB} style={{width: "40px"}}/>
                </div>
            :(name == "address")?
                <div className={style.editContainer} style={{flexDirection: "column"}}>
                    <input className={style.editContent} name={"HouseNo"} value={value1} onChange={handleEdit} style={{width: "150px", marginRight: "10px"}}/>
                    <input className={style.editContent} name={"StName"} value={value2}  onChange={handleEdit} style={{width: "150px", marginRight: "10px"}}/>
                    <input className={style.editContent} name={"WardName"} value={value3} onChange={handleEdit} style={{width: "150px", marginRight: "10px"}}/>
                    <input className={style.editContent} name={"DistName"} value={value4} onChange={handleEdit} style={{width: "150px", marginRight: "10px"}}/>
                    <input className={style.editContent} name={"CityName"} value={value5} onChange={handleEdit} style={{width: "150px"}}/>
                </div>
            :(name == "phone")?
                <div className={style.editContainer}>
                    <input className={style.editContent} name={"PhoneNo"} value={value1} onChange={handleEdit} style={{width: "150px"}}/>
                </div>
            :(name == "email")?
                <div className={style.editContainer}>
                    <input className={style.editContent} name={"Email"} value={value1} onChange={handleEdit} style={{width: "180px"}}/>
                </div>
            :(name == "passw")?
                <div className={style.editContainer}>
                    <input type="password" className={style.editContent} name={"Passw"} value={value1} onChange={handleEdit} style={{width: "50px"}}/>
                </div>
            :(<div className={style.infoContent}>{content}</div>)
        }
        </div>
    )
}

export default userInfo