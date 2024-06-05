import { useSelector } from "react-redux"
import SpreadProduct from "../../components/spread-product"
import "./Wishlist.scss"
import { useGetProductsQuery } from "../../context/api/productsApi"
const Wishlist = () => {
    let wishlistData = useSelector(state => state.wishlist)
    let { isLoading } = useGetProductsQuery()
    console.log(wishlistData);
    return (
        <>
            <section className="wishlist">
                <div className="container">
                    {
                        wishlistData.length ?
                    <SpreadProduct data={wishlistData} loading={isLoading} isAdmin={false} />
                    : <h1>Sewimlilar Qolmadi</h1>
                    }
                </div>
            </section>
        </>
    )
}

export default Wishlist