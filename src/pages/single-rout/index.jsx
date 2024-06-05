import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../../context/api/productsApi";
import { useEffect } from "react";

const Single = () => {
    const { id } = useParams();
    const { data, isLoading } = useSingleProductQuery(id);
    console.log(data);
    console.log(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <section className='single-rout'>
            <div className='container'>
                <div className='single-rout__wrapper'>
                    <div className='single-rout__images-boxes'>
                        <div className='single-rout__base-img-card'>
                            <img src={data?.image} alt={data?.title} />
                        </div>
                    </div>
                    <div className='single-rout__info-boxes'>
                        <h3 className='single-rout__title'>{data?.title}</h3>
                        <p className='single-rout__text'>{data?.price}</p>
                        <p className='single-rout__text'>{data?.category}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Single;
