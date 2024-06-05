import { useEffect, useState } from 'react';
import "./CreateProduct.scss";
import { useCreateProductMutation } from '../../../context/api/productsApi';
import { useNavigate } from 'react-router-dom';

const initialState = {
    title: 'Apple',
    price: '2319',
    category: 'Fruit',
    images: 'https://dostavo4ka.uz/upload-file/2021/05/05/4921/750x750-7bffb8d4-039d-4d80-bf98-5feb96961f95.jpg',
};

const CreateProduct = () => {
    const [formData, setFormData] = useState(initialState);
    const [createData, { isSuccess, isLoading }] = useCreateProductMutation()
    let navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            setFormData(initialState)
        }
    }, [isSuccess])
    const handleSubmit = (e) => {
        e.preventDefault();
        createData(formData)
        navigate("/admin/manage-product")
    };

    return (
        <>
            <div className="crate-product">
                <div className="admin-container">
                    <h1>Create product</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input required type="text" id="title" name="title" value={formData.title} onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="price">price</label>
                            <input required type="number" id="price" name="price" value={formData.price} onChange={(e) => setFormData((p) => ({ ...p, price: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <input required type="text" id="category" name="category" value={formData.category} onChange={(e) => setFormData((p) => ({ ...p, category: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="images">Images</label>
                            <input required type="text" id="images" name="images" value={formData.images} onChange={(e) => setFormData((p) => ({ ...p, images: e.target.value }))} />
                        </div>
                        <button disabled={isLoading} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateProduct;
