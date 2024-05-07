import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import allproducts from '../resources/productsList.json';



export default function Card({ id, name, image, desc }) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <>
            <div style={{ marginLeft: '0%', display: 'flex' }} className='row'>
                <MDBCarousel showControls fade>
                    <MDBCarouselItem itemId={1}>
                        <div className="col">
                            <div className="card col-md-3 p-3" style={{ width: "18rem" }}>
                                <img src={image} className="card-img-top" alt="no image found" />
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <div className='row'>
                                        {showFullDescription ? (
                                            <>
                                                {desc}
                                                <br />
                                                <div className="col">
                                                    <button onClick={toggleDescription} className='btn btn-primary'>Show Less</button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {desc.length > 30 ? desc.slice(0, 50) + '...' : desc}
                                                <br />
                                                <div className="col">
                                                    {desc.length > 30 && <button onClick={toggleDescription} className='btn btn-success'>Show More</button>}
                                                </div>
                                            </>
                                        )}
                                        <div className="col">
                                            <Link className='btn btn-primary' to={`viewproduct/${id}`}>View Product</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
        </>
    )
}
