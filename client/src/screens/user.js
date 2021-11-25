import { UserHeader, UserHomeContent } from '../components'

import style from '../style/screens/user.module.sass'

const user = () => {
    return (
        <div className={style.user}>
            <UserHeader title="Thông tin khách hàng" cardOn={1} />
            <div className={style.userContent}>
                <UserHomeContent />
            </div>
        </div>
    )
}

export default user