import { Link } from 'react-router-dom'

import style from '../style/components/btnLogin.module.sass'

const btnLogin = ({handleLogin}) => {
    return (
        <div className={style.btnLogin}>
            <div onClick={handleLogin} className={style.loginBtn}>
                {"Đăng nhập"}
            </div>
            <div className={style.otherChoice}>
                <div className={style.choiceText}>Chưa có tài khoản?</div>
                <Link to="/register" className={style.choiceBtn}>Đăng ký</Link>
            </div>
        </div>
    )
}

export default btnLogin