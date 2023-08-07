import { createContext, useContext, useEffect, useState } from 'react'
import { getProducts } from '../services/productServices'
const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([
        { name: 'Buku', price: 5000 },
        { name: 'Pensil', price: 2000 }

    ])

    const [isLoadingProduct, setIsLoadingProduct] = useState(false)

    const getProductCall = async () => {
        setIsLoadingProduct(true)
        const data = await getProducts()
        setIsLoadingProduct(false)


        setProduct(data)
    }

    useEffect(() => {
        getProductCall()
    }, [])

    return (
        <ProductContext.Provider value={{ product, isLoadingProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    return useContext(ProductContext)
}

export default ProductContext