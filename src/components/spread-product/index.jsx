import PropTypes from 'prop-types';
import "./SpreadProduct.scss"
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { wishlist } from '../../context/slice/wishlistSlice';
import Loading from '../loading';
import { Link } from 'react-router-dom';
const SpreadProduct = ({ data, loading, isAdmin, deleteProduct }) => {
    let wishlistData = useSelector(state => state.wishlist)
    let dispatch = useDispatch()


    const product = data?.map((product) => (
        <div className="spread-product__card" key={product.id}>
            <Link to={`/single-rout/${product.id}`}>
                <div className="spread-product__image-box">
                    <img src={product.images} alt="" />
                    <button onClick={() => dispatch(wishlist(product))} className='spread-product__wishlist-btn'> {
                        wishlistData.some((el) => el.id === product.id) ?
                            <FaHeart /> :
                            <FaRegHeart />
                    }
                    </button>
                </div>
            </Link>
            <div className="spread-product__info-box">
                <h3 className='spread-product__title'>{product.title}</h3>
                <p className='spread-product__text'><span>Price:</span>{product.price}</p>
                <p className='spread-product__text'><span>Category:</span>{product.category}</p>
                {
                    isAdmin ? <div className="product__info__btns">
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        <button>Edit</button>
                    </div> : <></>
                }
            </div>
        </div>
    ))
    return (
        <>
            <div className="spread-product__cards">
                {
                    loading ?
                        <Loading />
                        :
                        product
                }
            </div>
        </>
    )
}
SpreadProduct.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
    isAdmin: PropTypes.bool,
    deleteProduct:PropTypes.array
};

export default SpreadProduct;