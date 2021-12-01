import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UserCreditCardContent, UserGiftContent, UserHeader, UserHomeContent, UserInfoContent, UserPointPacketContent, UserPromoContent, UserSupportContent } from '../components'
import { getCustomerInfo, getPointPacket, getSupport, updateCustomer } from '../services/user'

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
        WardName: "",
        MClass: "",
        MPoint: 0,
        EPoint: 0
    })
    const { id } = useParams()
    const [pointPacket, setPointPacket] = useState([{POINTS:0}])
    const [supports, setSupport] = useState()
    useEffect( () => {
        const fetchCustomerInfoById = async () => {
            try {
                // const data = await getCustomerInfo(id)
                setCustomerInfo(await getCustomerInfo(id))
                setPointPacket(await getPointPacket(id))
                setSupport(await getSupport())
            } catch (error) { }
        }
        fetchCustomerInfoById()
    }, [])
    useEffect(() => {
        var SUM = 0
        var TYPE = "bronze"
        if (pointPacket[0].POINTS != 0) pointPacket.map(x => SUM += x.POINTS)
        if (SUM >= 1000) TYPE="vip"
        else if (SUM >= 500) TYPE="gold"
        else if (SUM >= 250) TYPE="silver"
        else TYPE = "bronze"
        if (customerInfo.EPoint == 0) setCustomerInfo({...customerInfo, "MPoint": SUM, "EPoint": SUM > 300 ? SUM - 300 : SUM, "MClass": TYPE})
    },[pointPacket])
    const [giftStatus, setGiftStatus] = useState([false, true])
    const changeGift = (index) => {
        if(giftStatus[index]){
            setGiftStatus([false,false])
            setCustomerInfo({...customerInfo, "EPoint": customerInfo.EPoint - 300})
        }
    }
    useEffect( () => {
        updateCustomer(customerInfo)
    }, [customerInfo.EPoint])
    const contentRender = () => {
        if(cardOn) return (<UserHomeContent setCardInd={setCardInd} setCardOn={setCardOn}/>)
        else {
            if (cardInd == 0) return (<UserInfoContent customerInfo={customerInfo} setCustomerInfo={setCustomerInfo}/>)
            else if (cardInd == 1) return (<UserCreditCardContent />)
            else if (cardInd == 2) return (<UserPointPacketContent pointPacket={pointPacket}/>)
            else if (cardInd == 3) return (<UserPromoContent />)
            else if (cardInd == 4) return (<UserGiftContent giftStatus={giftStatus} setGiftStatus={changeGift}/>)
            else if (cardInd == 5) return (<UserSupportContent supports={supports}/>)
        }
    }
    return (
        <div className={style.user}>
            <UserHeader title={route[cardInd]} cardOn={cardOn} customerInfo={customerInfo}/>
            <div className={style.userContent}>
                {contentRender()}
            </div>
            <div className={style.navBack} onClick={() => setCardOn(1)}/>
        </div>
    )
}

export default user