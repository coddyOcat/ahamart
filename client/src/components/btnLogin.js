import { Link } from 'react-router-dom'

import style from '../style/components/btnLogin.module.sass'

const btnLogin = () => {
    return (
        <div className={style.btnLogin}>
            <Link to="/user/123" style={{textDecoration: "none"}} className={style.loginBtn}>
                {"Đăng nhập"}
            </Link>
            <div className={style.otherChoice}>
                <div className={style.choiceText}>Chưa có tài khoản?</div>
                <Link to="/register" className={style.choiceBtn}>Đăng ký</Link>
            </div>
        </div>
    )
}

export default btnLogin