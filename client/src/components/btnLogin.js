import style from '../style/components/btnLogin.module.sass'

const btnLogin = () => {
    return (
        <div className={style.btnLogin}>
            <div className={style.loginBtn}>
                {"Đăng nhập"}
            </div>
            <div className={style.otherChoice}>
                <div className={style.choiceText}>Chưa có tài khoản?</div>
                <div className={style.choiceBtn}>Đăng ký</div>
            </div>
        </div>
    )
}

export default btnLogin