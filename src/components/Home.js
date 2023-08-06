import { useEffect, useState } from 'react';
import axios from 'axios';

import useFetch from '../hooks/useFetch';
function Home() {
    const { isLoading, data, error } = useFetch(process.env.REACT_APP_BASE_URL)

    console.log(data, 'data')
    // const [dataProduct, setDataProduct] = useState([])
    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_BASE_URL}`).then((res) => {
    //         setDataProduct(res.data)
    //     })

    // }, [])

    // console.log(dataProduct, 'DATAPRODUCT')

    return (
        <>
            {isLoading ? 'Sedang Loading' : ''}
            <div>
                {data.map((item) => (<div>{item.title}</div>))}
            </div>
        </>
    )
}

export default Home