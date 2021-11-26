import style from '../../style/ui/supStaff.module.sass'

const supStaff = ({ name, phone, active}) => {
    return (
        <div className={style.supStaff}>
            <div className={style.name}>{"NV. " + name}</div>
            <div className={style.phone}>{"SĐT: " + phone}</div>
            {/* {!!active && <i className={`${style.active} bi bi-broadcast`}/>} */}
        </div>
    )
}

export default supStaff