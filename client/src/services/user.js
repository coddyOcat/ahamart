import Axios from "./axios";

export const test = async () => {
    const url = `/hi`
    Axios.get(url)
}