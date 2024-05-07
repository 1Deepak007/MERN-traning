import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBBtn } from 'mdb-react-ui-kit';
import { FaCartPlus } from "react-icons/fa";


export default function DisplayIndiProd({ name, price, description, image }) {
    return (
        <div className="container">
            <div className='mx-2'>
                <div className="row my-3">
                    <div className="col text-center">
                        <img src={image} alt={name} height="300px" />
                    </div>
                    <div className="col">
                        <h2>{name}</h2>
                        <h3>Rs. {price}</h3>
                        <p>{description}</p>
                        <MDBBtn outline rounded color='success'><FaCartPlus/> Add to Cart</MDBBtn>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <h2 className='text-center'>Specifications</h2>
                        <ul>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ab.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ab.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ab.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ab.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ab.</li>
                        </ul>
                    </div>
                    <div className="col">
                        <MDBCarousel showControls>
                            <MDBCarouselItem itemId={1}>
                                <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={2}>
                                <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId={3}>
                                <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
                            </MDBCarouselItem>
                        </MDBCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}



