import style from '../style/components/listBranchContent.module.sass'

const listBranchContent = ({listBranchsInfo, branchIndex, setBranchIndex}) => {
    return (
        <div className={style.listBranchContent}>
            <div className={style.listBranchTitle}>Danh sách chi nhánh</div>
            <div className={style.list}>
                {!!listBranchsInfo && listBranchsInfo.map((branch, index) =>
                    <div className={style.branch} key={branch.BID}>
                        <div className={style.branchID} onClick={() => setBranchIndex(index)} style={{backgroundColor: (index == branchIndex)? "#DA3B31":"#0274BC"}}>{branch.BID.substring(4)}</div>
                        <div className={style.branchAddress}>{branch.DISTNAME+", "+branch.CITYNAME}</div>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default listBranchContent