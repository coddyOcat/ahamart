import style from '../style/components/btnRegister.module.sass'

const btnRegister = ({ step }) => {
    return (
        <div className={style.btnRegister}>
            <div className={style.registerBtn}>
                {step == 3? "Bước tiếp theo": "Hoàn tất đăng ký"}
            </div>
            <div className={style.otherChoice}>
                <div className={style.choiceText}>Đã có tài khoản?</div>
                <div className={style.choiceBtn}>Đăng nhập</div>
            </div>
        </div>
    )
}

export default btnRegister