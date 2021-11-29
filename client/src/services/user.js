import Axios from "./axios";

export const findUserName = async (userName) => {
    const url = "/user/find/userName"
    const {data} = await Axios.post(url, [userName]).then(res => res)
    return data
}
export const findPhoneNo = async (phoneNo) => {
    const url = "/user/find/phoneNo"
    const {data} = await Axios.post(url, [phoneNo]).then(res => res)
    return data
}
export const findEmail = async (email) => {
    const url = "/user/find/email"
    const {data} = await Axios.post(url, [email]).then(res => res)
    return data
}
export const findSsn = async (ssn) => {
    const url = "/user/find/ssn"
    const {data} = await Axios.post(url, [ssn]).then(res => res)
    return data
}
export const insertCustomer = async (userInfo) => {
    const url = "/user/register"
    //get data
    var {Ssn, HouseNo, StName, WardName, DistName, CityName, CountryName, UserName, Passw, Email, PhoneNo, Gender, Nationality, DOB, SName, GName} = userInfo
    //process data
    if (Gender == "") {
        return {status: "Chưa đủ thông tin bắt buộc"}
    }
    else if (Gender == "Nam") Gender = "M"
    else if (Gender == "Nữ") Gender = "F"
    else Gender = "O"
    //not null
    const notNull = [Ssn, CityName, CountryName, UserName, Passw, Email, PhoneNo, Gender, Nationality, DOB, SName, GName]
    notNull.map(x => {
        if (x=="") {
            return {status: "Chưa đủ thông tin bắt buộc"}
        }
    })
    const newUser = [Ssn, HouseNo, StName, WardName, DistName, CityName, CountryName, UserName, Passw, Email, PhoneNo, Gender, Nationality, DOB, SName, GName]
    const {data} = await Axios.post(url, newUser).then(res => res)
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