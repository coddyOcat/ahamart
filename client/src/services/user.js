import Axios from "./axios";

export const insertCustomer = async (userInfo) => {
    const url = "/user/register"
    const {data} = await Axios.post(url, userInfo)
    return data
}
export const loginCustomer = async (userInfo) => {
    const url = "/user/login"
    const {data} = await Axios.post(url, userInfo).then(res => res)
    return data
}
export const getCustomerInfo = async (userId) => {
    const url = `/user/${userId}`;
    const {data} = await Axios.get(url).then(res => res)
    const Customer = data[0][0]
    const AccInfo = data[1][0]
    const Email = data[2][0].EMAIL
    const PhoneNo = data[3][0].PHONENO
    const PersonalInfo = data[4][0]
    const LoyaltyCard = data[5][0]
    return {
        Ssn: Customer.SSN,
        HouseNo: Customer.HOUSENO,
        StName: Customer.STNAME,
        WardName: Customer.WARDNAME,
        DistName: Customer.DISTNAME,
        CityName: Customer.CITYNAME,
        CountryName: Customer.COUNTRYNAME,
        UserName: AccInfo.USERNAME,
        Passw: AccInfo.PASSW,
        Email: Email,
        PhoneNo: PhoneNo,
        Gender: PersonalInfo.GENDER,
        Nationality: PersonalInfo.NATIONALITY,
        DOB: PersonalInfo.DOB,
        SName: PersonalInfo.SNAME,
        GName: PersonalInfo.GNAME,
        Bid: LoyaltyCard.BID,
        Cid: LoyaltyCard.CID,
        EPoint: LoyaltyCard.EPOINT,
        MClass: LoyaltyCard.MCLASS,
        MPoint: LoyaltyCard.MPOINT
    };
  }