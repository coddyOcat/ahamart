import 'bootstrap-icons/font/bootstrap-icons.css'
import style from '../../style/ui/inputBox_v3.module.sass'

const inputBox_v3 = () => {
    return (
        <div className={style.inputBox_v3}>
            <div className={style.inputTitle}>Ngày sinh</div>
            <div className={style.InputBox}>
                <div className={`${style.inputBox_v3_1} ${style.inputBox}`}>
                    <input className={style.input} placeholder='DD'/>
                </div>
                <div className={style.slash}>/</div>
                <div className={`${style.inputBox_v3_2} ${style.inputBox}`}>
                    <input className={style.input} placeholder='MM'/>
                </div>
                <div className={style.slash}>/</div>
                <div className={`${style.inputBox_v3_3} ${style.inputBox}`}>
                    <input className={style.input} placeholder='YYYY'/>
                </div>
            </div>
        </div>
    )
}

export default inputBox_v3