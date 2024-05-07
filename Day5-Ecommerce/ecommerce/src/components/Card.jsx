import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import allproducts from '../resources/productsList.json';
import { FaEye, FaCartPlus } from "react-icons/fa";

import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

import CardCss from '../Styles/CardCss.css';

export default function Card({ id, name, image, desc }) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <>
            <div style={{ marginLeft: '0%', display: 'flex' }} className='row'>
                {/* <MDBCarousel showControls fade>
                    <MDBCarouselItem itemId={1}> */}
                <div className="col">
                    <div className="card col-md-3 p-3" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top zoom-img" alt="no image found" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <div className='row'>
                                {showFullDescription ? (
                                    <>
                                        {desc}

                                        <div className="col md-3">
                                            <Link onClick={toggleDescription} className=''>Show Less</Link>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {desc.length > 30 ? desc.slice(0, 50) + '...' : desc}

                                        <div className="col md-3">
                                            {desc.length > 30 && <Link onClick={toggleDescription} className=''>Show More</Link>}
                                        </div>
                                    </>
                                )}
                                <div className="row">

                                    <Link to={`viewproduct/${id}`}>
                                        <MDBBtn outline rounded color='danger'><FaEye /> View Product </MDBBtn>

                                        {/* <MDBBtn variant="outlined" color='success'><FaEye/> View Product </MDBBtn> */}
                                    </Link>

                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* </MDBCarouselItem>
                </MDBCarousel> */}
            </div>
        </>
    )
}
