import axios from "axios"

export const getProducts = async () => {
    const data = await axios.get(process.env.REACT_APP_BASE_URL)
    return data.data
}