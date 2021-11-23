import style from '../style/components/navRegister.module.sass'

const navRegister = () => {
    return (
        <div className={style.navRegister}>
            <div className={style.registerBtn}>Đăng ký thẻ thành viên</div>
            <div className={style.otherChoice}>
                <div className={style.choiceText}>Đã có tài khoản?</div>
                <div className={style.choiceBtn}>Đăng nhập</div>
            </div>
        </div>
    )
}

export default navRegister