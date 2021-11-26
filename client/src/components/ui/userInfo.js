import style from '../../style/ui/userInfo.module.sass'

const userInfo = ({ title, content }) => {
    return (
        <div className={style.userInfo}>
            <div className={style.infoTitle}>{title}</div>
            <div className={style.infoContent}>{content}</div>
        </div>
    )
}

export default userInfo