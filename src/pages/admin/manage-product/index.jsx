import SpreadProduct from "../../../components/spread-product"
import { useDeleteProductMutation, useGetProductsQuery } from "../../../context/api/productsApi"
import "./ManageProduct.scss"
const ManageProduct = () => {
    let { data, isLoading } = useGetProductsQuery()
    let [deleteProduct] = useDeleteProductMutation()
    return (
        <>
            <section className="manage-product">
                <div className="manage-product__wrapper admin-container">
                    <h1>Manage Product</h1>
                    <SpreadProduct data={data} deleteProduct={deleteProduct} isAdmin={true} loading={isLoading} />
                </div>
            </section>
        </>
    )
}

export default ManageProduct