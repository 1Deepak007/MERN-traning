import React, { useEffect, useState } from 'react';

// import Carousel from 'react-bootstrap/Carousel';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption} from 'mdb-react-ui-kit';
// import {MDBCarouselInner} from 'mdbreact';
import Card from '../components/Card';
// import allproducts from '../resources/productsList.json';
import axios from 'axios';


const Home = () => {

    const [AllProducts, SetallProducts] = useState([]);
    // getting products by calling api
    const getAllproducts = () => {
        axios.get('http://localhost:8089/api/products').then((res)=>{
            SetallProducts(res.data);
        })
        // fetch('/api/products')
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error fetching products:', error));
    }
    useEffect(() => {
        getAllproducts();
    }, [])

    return (
        <>
            {/* <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem itemId={1}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' style={{height:'30%'}} alt='...' />
                    <MDBCarouselCaption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' style={{height:'30%'}} alt='...' />
                    <MDBCarouselCaption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' style={{height:'30%'}} alt='...' />
                    <MDBCarouselCaption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel> */}

            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem itemId={1}>
                <div className="row">
                    <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                    {/* <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' style={{height:'30%'}} alt='...' />
                    <MDBCarouselCaption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption> */}
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' style={{height:'30%'}} alt='...' />
                    <MDBCarouselCaption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' style={{height:'30%'}} alt='...' />
                    <MDBCarouselCaption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>


            <h3 className='text-center my-3 text-decoration-underline'>Checkout Trend</h3>

            {/* <div style={{ display: "flex", overflowX: "auto" }}>
                {
                    allproducts.map((product) => (
                        <Card key={product.productid} id={product.productid} name={product.productname} price={product.productprice} image={product.productimage} desc={product.productdescription} />
                    ))
                }
            </div> */}

            <div style={{ display: "flex", overflowX: "auto" }}>
                {
                    AllProducts.map((product) => (
                        <Card key={product.product_id} id={product.product_id} name={product.product_name} price={product.product_price} image={product.product_image} desc={product.product_description} trending={product.trending}/>
                    ))
                }
            </div>


            {/* ----------------------------------------------------------- */}
            {/* <MDBCarousel
            activeItem={1}
            length={AllProducts.length}
            slide={true}
            showControls={true}
            multiItem
            >
            <MDBCarouselInner>
                {AllProducts.map((chunk, index) => (
                <MDBCarouselItem itemId={index + 1} key={index}>
                    <MDBRow>
                    {chunk.map(product => (
                        <MDBCol md="4" key={product.id}>
                        <Card
                            id={product.product_id}
                            name={product.product_name}
                            image={product.product_image}
                            price={product.product_price}
                            description={product.product_description}
                            trending={product.product_trending}
                        />
                        </MDBCol>
                    ))}
                    </MDBRow>
                </MDBCarouselItem>
                ))}
            </MDBCarouselInner>
            </MDBCarousel> */}

        </>
    );
}


export default Home;