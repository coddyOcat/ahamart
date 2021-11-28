import Axios from "./axios";

export const insertCustomer = async (userInfo) => {
    const url = "/user/register"
    const {data} = await Axios.post(url, userInfo)
    return data
}