import React, { useState } from 'react';

// import Carousel from 'react-bootstrap/Carousel';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import Card from '../components/Card';
import allproducts from '../resources/productsList.json';


const Home = () => {
    return (
        <>

            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem itemId={1}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>


            <h3 className='text-center my-3 text-decoration-underline'>Checkout Trend</h3>

            <div style={{ display: "flex", overflowX: "auto" }}>
                {
                    allproducts.map((product) => (
                        <Card key={product.productid} id={product.productid} name={product.productname} price={product.productprice} image={product.productimage} desc={product.productdescription} />
                    ))
                }
            </div>
        </>
    );
}


export default Home;