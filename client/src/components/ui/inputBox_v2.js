import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../../style/ui/inputBox_v2.module.sass'

const inputBox_v2 = ({ title }) => {
    return (
        <div className={style.inputBox_v2}>
            <div className={style.inputTitle}>{title}</div>
            <div className={style.InputBox}>
                <div className={`${style.inputBox_v2_1} ${style.inputBox}`}>
                    <input className={style.input} />
                </div>
                <div className={`${style.inputBox_v2_2} ${style.inputBox}`}>
                    <input className={style.input} />
                </div>
            </div>
        </div>
    )
}

export default inputBox_v2