import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GetProducts } from "src/api/products/allProducts/products";

const CardView = () => {
    const [data, setData] = useState([]);
const history =useHistory();


    async function getProducts() {
        let res = await GetProducts();

        if (res.success === true) {
            setData(res.data)
        }

    
    }





    useEffect(() => {
        getProducts();
       
    }, [])

    return (
        <div>
            <div className="container-fluid  payment1">
                <div className="row m-0" >
                    {
                        data.slice(0, 1).map((it) => {
                            return (
                                <>
                                    <div className="col-lg-6 pb-5 pe-lg-5">
                                        <div className="row">
                                            <div className="col-12 p-5">
                                                <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/Acedex-P-1.jpg"
                                                    alt="medicine" style={{ height: '100%', width: '100%' }}  />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-5 p-0 ps-lg-4">
                                        <div className="row m-0">

                                            <div className="col-12 px-4">
                                                <div className="d-flex align-items-end mt-4 mb-2">
                                                    <p className="h4 m-0">{it.name}</p>

                                                </div>
                                                <div className="d-flex justify-content-between mb-2">
                                                    <p className="textmuted">{it.description}</p>

                                                </div>
                                                <div className="d-flex justify-content-between mb-2">
                                                    <p className="textmuted">Sku:{it.sku}</p>
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <p className="textmuted">Category:<Link>{it.packing_type}</Link></p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <p className="textmuted fw-bold ">Share

                                                        <a className="text-dark pl-2 text-decoration-none" target="_blank" href="#"><i className="fab fa-facebook-f fa-md fa-fw"></i></a>
                                                        <a className="text-dark  pl-2 text-decoration-none" target="_blank" href="#"><i className="fab fa-twitter fa-md fa-fw"></i></a>
                                                        <a className="text-dark  pl-2 text-decoration-none" target="_blank" href="#"><i className="fab fa-instagram fa-md fa-fw"></i></a>
                                                        <a className="text-dark  pl-2 text-decoration-none" target="_blank" href="#"><i className="fab fa-pinterest fa-md fa-fw"></i></a>
                                                        <a className="text-dark  pl-2 text-decoration-none" target="_blank" href="#"><i className="fab fa-youtube fa-md fa-fw"></i></a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 px-0">
                                                <div className="row bg-light m-0">
                                                    <div className="col-12 px-4 my-4">
                                                        <p className="fw-bold "> Additional information</p>
                                                    </div>
                                                    <div className="col-12 px-4">
                                                        <div className="d-flex  mb-4">

                                                            <p className="text-muted"><strong>packingstyle:</strong></p> &nbsp;  &nbsp;   &nbsp;
                                                            <p className="text-muted">{it.packing_type}</p>



                                                        </div>

                                                    </div>
                                                </div>


                                                <div className="row m-0">
                                                    <div className="col-12  mb-4 p-0">
                                                        <div className="btn btn-primary">Purchase<span className="fas fa-arrow-right ps-2"></span>
                                                        </div>
                                                    </div>
                                                </div>*

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CardView
