import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../../style/ui/inputBox.module.sass'

const inputBox = ({ title, check}) => {
    return (
        <div className={style.inputBox}>
            <div className={style.inputTitle}>{title}</div>
            <div className={style.inputBorder}><input className={style.input} /></div>
            { !!check && <div className={style.check}>
                <i className="bi bi-check" style={{color: "#2F9055"}}/>
                <i className="bi bi-exclamation" style={{color: "#EE0000"}}/>
            </div>}
        </div>
    )
}

export default inputBox