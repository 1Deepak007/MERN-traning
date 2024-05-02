import React, { useEffect, useState } from 'react'
import allproducts from '../resources/productsList.json';

import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';


export default function Card() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };



    return (
        <>
            {
                allproducts.map(product => {
                    return (
                        <>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                <div className="row">
                                    <div className="col-md-3" key={product.productid}>
                                        <div className="card" style={{ width: "18rem", marginRight: '15px' }}>
                                            <img src={product.productimage} className="card-img-top my-2" alt="image here" />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.productname}</h5>
                                                <p className="card-text">{product.productdescription}</p>
                                                <a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                                <a href="#" className="btn btn-success mx-2">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>


                            {/* <div className="row">
                                <div className='col-md-12'>
                                    <div class="row owl-carousel owl-theme">
                                        <div class="col-md-3 p-1 product_data.item"> 
                                            <div class="card">
                                                <img src={product.productimage} class="card-img-top" alt="image here" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </>
                    );
                })
            }
        </>
    )
}

//-----------------------------------------------------------------------------------------------------







