import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UserCreditCardContent, UserGiftContent, UserHeader, UserHomeContent, UserInfoContent, UserPointPacketContent, UserPromoContent, UserSupportContent } from '../components'
import { getCustomerInfo } from '../services/user'

import style from '../style/screens/user.module.sass'

const user = () => {
    const route = [
        "Thông tin khách hàng",
        "Thẻ tín dụng",
        "Danh sách gói điểm",
        "Danh sách ưu đãi",
        "Quà tặng",
        "Tư vấn, Hổ trợ"
    ]
    const [cardOn, setCardOn] = useState(1)
    const [cardInd, setCardInd] = useState(-1)
    const [customerInfo, setCustomerInfo] = useState({
        CityName: "",
        CountryName: "",
        DOB: "",
        DistName: "",
        Email: "",
        GName: "",
        Gender: "",
        HouseNo: "",
        Nationality: "",
        Passw: "",
        PhoneNo: "",
        SName: "",
        Ssn: "",
        StName: "",
        UserName: "",
        WardName: ""
    })
    const { id } = useParams()
    useEffect( () => {
        const fetchCustomerInfoById = async () => {
            try {
                // const data = await getCustomerInfo(id)
                setCustomerInfo(await getCustomerInfo(id))
            } catch (error) { }
        }
        fetchCustomerInfoById()
    }, [])
    const contentRender = () => {
        if(cardOn) return (<UserHomeContent setCardInd={setCardInd} setCardOn={setCardOn}/>)
        else {
            if (cardInd == 0) return (<UserInfoContent customerInfo={customerInfo}/>)
            else if (cardInd == 1) return (<UserCreditCardContent />)
            else if (cardInd == 2) return (<UserPointPacketContent />)
            else if (cardInd == 3) return (<UserPromoContent />)
            else if (cardInd == 4) return (<UserGiftContent />)
            else if (cardInd == 5) return (<UserSupportContent />)
        }
    }
    return (
        <div className={style.user}>
            <UserHeader title="Thông tin khách hàng" cardOn={cardOn} customerInfo={customerInfo}/>
            <div className={style.userContent}>
                {contentRender()}
            </div>
            <div className={style.navBack} onClick={() => setCardOn(1)}/>
        </div>
    )
}

export default user