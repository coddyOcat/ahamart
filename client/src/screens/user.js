import { UserCreditCardContent, UserGiftContent, UserHeader, UserHomeContent, UserInfoContent, UserPointPacketContent, UserPromoContent, UserSupportContent } from '../components'

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
                {/* <UserPromoContent /> */}
                {/* <UserGiftContent /> */}
                <UserSupportContent />
            </div>
        </div>
    )
}

export default user