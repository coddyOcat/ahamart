import style from '../style/components/navBranch.module.sass'

const navBranch = ({onActive, changeActive}) => {
    return (
        <div className={style.navBranch}>
            <div className={style.branchDetail} onClick={() => changeActive(1)} style={{backgroundColor: onActive == 1? "#0066A6": "#0274BC", fontWeight: onActive == 1? "bold": "lighter"}}>Thông tin</div>
            <div className={style.listBranch} onClick={() => changeActive(2)} style={{backgroundColor: onActive == 2? "#0066A6": "#0274BC", fontWeight: onActive == 2? "bold": "lighter"}}>Chi nhánh</div>
        </div>
    )
}

export default navBranch