import { useProduct } from "../context/ProductContext"
export default function ListProduct() {
    const { product, isLoadingProduct } = useProduct()
    return (
        <>
            <div>
                {isLoadingProduct ? (<div>Data Sedang Loading...</div>) : (<></>)}
                {product.map((item) => (
                    <div>{item.title}</div>
                ))}
            </div>
        </>
    )
}
