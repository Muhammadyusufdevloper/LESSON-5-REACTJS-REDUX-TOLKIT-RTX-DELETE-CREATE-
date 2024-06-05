import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../../context/api/productsApi";
import { useEffect } from "react";
import "./Single.scss";

const Single = () => {
    const { id } = useParams();
    const { data, isLoading } = useSingleProductQuery(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (isLoading) {
        return (
            <section className='single-rout'>
                <div className='container'>
                    <div className='single-rout__wrapper'>
                        <div className='single-rout__loading-wrapper'>
                            <div className='single-rout__loading-images-boxes'>
                                <div className='single-rout__loading-base-img-card loading__animation'></div>
                            </div>
                            <div className='single-rout__loading-info-boxes'>
                                <div className='loading__animation'></div>
                                <div className='loading__animation'></div>
                                <div className='loading__animation'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className='single-rout'>
            <div className='container'>
                <div className='single-rout__wrapper'>
                    <div className='single-rout__images-boxes'>
                        <div className='single-rout__base-img-card'>
                            <img src={data?.images} alt={data?.title} />
                        </div>
                    </div>
                    <div className='single-rout__info-boxes'>
                        <h3 className='single-rout__title'><span>Title:</span> {data?.title}</h3>
                        <p className='single-rout__text'><span>Price:</span> {data?.price}</p>
                        <p className='single-rout__text'><span>Category:</span> {data?.category}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Single;

