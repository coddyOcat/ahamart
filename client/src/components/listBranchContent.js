import style from '../style/components/listBranchContent.module.sass'

const listBranchContent = ({listBranchsInfo}) => {
    return (
        <div className={style.listBranchContent}>
            <div className={style.listBranchTitle}>Danh sách chi nhánh</div>
            <div className={style.list}>
                {!!listBranchsInfo && listBranchsInfo.map(branch =>
                    <div className={style.branch} key={branch.BID}>
                        <div className={style.branchID}>{branch.BID.substring(4)}</div>
                        <div className={style.branchAddress}>{branch.DISTNAME+", "+branch.CITYNAME}</div>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default listBranchContent