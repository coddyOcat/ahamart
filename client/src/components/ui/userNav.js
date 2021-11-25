import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../../style/ui/userNav.module.sass'

const userNav = ({icon, title}) => {
    return (
        <div className={style.userNav}>
            <i className={`${style.icon} bi ${icon}`}></i>
            <div className={style.navTitle}>{title}</div>
            <i className={`${style.navBtn} bi bi-chevron-right`}></i>
        </div>
    )
}

export default userNav