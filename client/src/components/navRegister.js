import { Link } from 'react-router-dom'

import style from '../style/components/navRegister.module.sass'

const navRegister = () => {
    return (
        <div className={style.navRegister}>
            <Link to="/register" style={{textDecoration: "none"}} className={style.registerBtn}>Đăng ký thẻ thành viên</Link>
            <div className={style.otherChoice}>
                <div className={style.choiceText}>Đã có tài khoản?</div>
                <Link to="/login" className={style.choiceBtn}>Đăng nhập</Link>
            </div>
        </div>
    )
}

export default navRegister