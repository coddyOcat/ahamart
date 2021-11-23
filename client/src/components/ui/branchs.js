import style from '../../style/ui/branchs.module.sass'

const branchs = () => {
    return (
        <div className={style.branchs}>
            <div className={style.branchsName}>AhaMart</div>
            <div className={style.branchName}>chi nhánh hcm_01</div>
            <div className={style.timeOpen}>6:00a.m - 10:00p.m</div>
            <div className={style.openStatus} style={{color: "green"}}>Open Now</div>
        </div> 
    )
}

export default branchs