import style from '../../style/ui/supStaff.module.sass'

const supStaff = ({ support, name, phone, email, active}) => {
    return (
        <div className={style.supStaff}>
            <div className={style.name} onClick={() => console.log(support)}>{"NV. " + name}</div>
            <div className={style.phone}>{"SĐT: " + phone}</div>
            <div className={style.phone}>{"Email: " + email}</div>
            {!!active && <i className={`${style.active} bi bi-telephone-forward-fill`}/>}
        </div>
    )
}

export default supStaff