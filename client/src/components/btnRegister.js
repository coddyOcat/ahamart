import { Link } from 'react-router-dom'

import style from '../style/components/btnRegister.module.sass'

const btnRegister = ({ step, changeStep }) => {
    return (
        <div className={style.btnRegister}>
            <div className={style.registerBtn} onClick={changeStep}>
                {step == 3? "Hoàn tất đăng ký": "Bước tiếp theo"}
            </div>
            <div className={style.otherChoice}>
                <div className={style.choiceText}>Đã có tài khoản?</div>
                <Link to="/login" className={style.choiceBtn}>Đăng nhập</Link>
            </div>
        </div>
    )
}

export default btnRegister