import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../../style/ui/inputBox.module.sass'

const inputBox = ({ title, check}) => {
    return (
        <div className={style.inputBox}>
            <div className={style.inputTitle}>{title}</div>
            <div className={style.inputBorder}><input className={style.input} /></div>
            { !!check && <div className={style.check}>
                <i class="bi bi-check" style={{color: "green"}}/>
                <i class="bi bi-exclamation" style={{color: "red"}}/>
            </div>}
        </div>
    )
}

export default inputBox