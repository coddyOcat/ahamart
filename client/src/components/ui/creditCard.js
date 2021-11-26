import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../../style/ui/creditCard.module.sass'

const creditCard = ({ title, content, active}) => {
    return (
        <div className={style.creditCard}>
            <i className={`${style.card} bi bi-credit-card`}/>
            <div className={style.content}>
                <div className={style.infoTitle}>{title}</div>
                <div className={style.infoContent}>{content}</div>
            </div>
            {!!active && <i className={`${style.active} bi bi-broadcast`}/>}
        </div>
    )
}

export default creditCard