import style from '../style/components/navBranch.module.sass'

const navBranch = ({onActive}) => {
    return (
        <div className={style.navBranch}>
            <div className={style.branchDetail} style={{backgroundColor: onActive == 1? "#0066A6": "#0274BC", fontWeight: onActive == 1? "bold": "lighter"}}>Thông tin</div>
            <div className={style.listBranch} style={{backgroundColor: onActive == 2? "#0066A6": "#0274BC", fontWeight: onActive == 2? "bold": "lighter"}}>Chi nhánh</div>
        </div>
    )
}

export default navBranch