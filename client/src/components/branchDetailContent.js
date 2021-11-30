import { Branchs, BranchsAdd, BranchsContact } from '../components/ui'

import style from '../style/components/branchDetailContent.module.sass'

const branchDetailContent = ({branchsInfo}) => {
    return (
        <div className={style.branchDetailContent}>
            <Branchs branchsInfo={branchsInfo}/>
            <BranchsAdd branchsInfo={branchsInfo}/>
            <BranchsContact branchsInfo={branchsInfo}/>
        </div>
    )
}

export default branchDetailContent