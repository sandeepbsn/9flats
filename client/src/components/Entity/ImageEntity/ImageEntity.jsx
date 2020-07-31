import React from 'react'

export default function ImageEntity() {
    return (
        <div>
            <div className="container">
                <div className=" d-flex flex-row mb-3 p-4 border rounded bg-light" style={{ maxWidth: 1220, marginTop: 100 }}>
                    <div className="col-6 col-md-4">
                        <h3><b>The Trident</b></h3>
                        <h5>Bangalore, India</h5>
                    </div>
                    <div className="col-md-4 d-none d-md-block">

                    </div>

                    <div className="col-6 col-md-4 ">
                        <div className=" text-center rounded text-white ml-auto" style={{ height:50, width: 90, backgroundColor:"green",fontSize: "200%" }}>
                            4 &#9733;
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-md-row mb-3 justify-content-around flex-column p-3 border rounded bg-light " style={{ maxWidth: 1120 }}>
                    <div className="col-md-8 col-12" style={{ height: 450 }}>
                        <img
                            className="img-fluid"
                            style={{ objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%" }}
                            src="https://a0.muscache.com/im/pictures/5d9cf3ef-0348-4aee-8d25-ad32acaaed8a.jpg?aki_policy=large"
                            alt=""
                        />
                    </div>
                    <div className="col-md-2 col-12 d-flex flex-row flex-md-column justify-content-around p-1 m-0" style={{ height: 450 }} >
                        <div className="pb-lg-2 pb-md-2 " style={{ height: 150 }}>
                            <img
                                className="img-fluid"
                                style={{ objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%" }}
                                src="https://a0.muscache.com/im/pictures/5d9cf3ef-0348-4aee-8d25-ad32acaaed8a.jpg?aki_policy=large"
                                alt=""
                            />
                        </div>
                        <div className="pb-lg-2 pb-md-2 " style={{ height: 150 }}>
                            <img
                                className="img-fluid"
                                style={{ objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%" }}
                                src="https://a0.muscache.com/im/pictures/5d9cf3ef-0348-4aee-8d25-ad32acaaed8a.jpg?aki_policy=large"
                                alt=""
                            />
                        </div>
                        <div style={{ height: 150 }}>
                            <img
                                style={{ objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%" }}
                                src="https://a0.muscache.com/im/pictures/5d9cf3ef-0348-4aee-8d25-ad32acaaed8a.jpg?aki_policy=large"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-2 d-flex flex-row flex-md-column justify-content-around p-1 m-0" style={{ height: 450 }} >
                        <div className="pb-lg-2 pb-md-2 " style={{ height: 150 }}>
                            <img
                                className="img-fluid"
                                style={{ objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%" }}
                                src="https://a0.muscache.com/im/pictures/5d9cf3ef-0348-4aee-8d25-ad32acaaed8a.jpg?aki_policy=large"
                                alt=""
                            />
                        </div>
                        <div className="pb-lg-2 pb-md-2 " style={{ height: 150 }}>
                            <img
                                className="img-fluid"
                                style={{ objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%" }}
                                src="https://a0.muscache.com/im/pictures/5d9cf3ef-0348-4aee-8d25-ad32acaaed8a.jpg?aki_policy=large"
                                alt=""
                            />
                        </div>
                        <div style={{ height: 150 }}>
                            <img
                                style={{ objectFit: "cover", verticalAlign: "bottom", height: "100%", width: "100%" }}
                                src="https://a0.muscache.com/im/pictures/5d9cf3ef-0348-4aee-8d25-ad32acaaed8a.jpg?aki_policy=large"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
