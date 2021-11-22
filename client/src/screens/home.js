import style from '../style/screens/home.module.sass'

const HomeScreen = () => {
    return (
        <div className={style.homeScreen}>
            <div className={style.homeHeader}>
                <div className={style.brand}></div>
                <div className={style.headerImg}></div>
            </div>
            <div className={style.homeContent}>
                <div className={style.welcome}></div>
                <div className={style.devMember}></div>
            </div>
            <div className={style.navRegister}></div>
        </div>
    )
}

export default HomeScreen