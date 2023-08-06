import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await axios(url)
                setData(response.data)
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }

        }
        fetchData()
    }, [])

    return { isLoading, data, error }

}

export default useFetch