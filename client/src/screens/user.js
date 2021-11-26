import { UserCreditCardContent, UserHeader, UserHomeContent, UserInfoContent, UserPointPacketContent, UserPromoContent } from '../components'

import style from '../style/screens/user.module.sass'

const user = () => {
    return (
        <div className={style.user}>
            <UserHeader title="Thông tin khách hàng" cardOn={0} />
            <div className={style.userContent}>
                {/* <UserHomeContent /> */}
                {/* <UserInfoContent /> */}
                {/* <UserCreditCardContent /> */}
                {/* <UserPointPacketContent /> */}
                <UserPromoContent />
            </div>
        </div>
    )
}

export default user