import Axios from "./axios";

export const getListBranchsInfo = async () => {
    const url = "/branch"
    const {data} = await Axios.get(url).then(res => res)
    return data
}