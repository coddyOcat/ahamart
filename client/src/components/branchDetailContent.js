import { Branchs, BranchsAdd, BranchsContact } from '../components/ui'

import style from '../style/components/branchDetailContent.module.sass'

const branchDetailContent = () => {
    return (
        <div className={style.branchDetailContent}>
            <Branchs />
            <BranchsAdd />
            <BranchsContact />
        </div>
    )
}

export default branchDetailContent