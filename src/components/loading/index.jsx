import "./Loading.scss";

const Loading = () => {
    return (
        <>
            <section className="loading">
                <div className="container">
                    <div className="loading__cards">
                        {Array.from({ length: 30}).map((_, index) => (
                            <div key={index} className="loading__card">
                                <div className="loading__img-box loading__animation"></div>
                                <div className="loading__info-box">
                                    <div className="loading__animation"></div>
                                    <div className="loading__animation"></div>
                                    <div className="loading__animation"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Loading;
