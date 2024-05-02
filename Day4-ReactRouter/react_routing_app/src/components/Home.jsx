import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Card() {
    return (
        <>
            <div>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://unsplash.com/photos/flatlay-photography-of-wireless-headphones-PDX_a_82obo"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://unsplash.com/photos/white-iphone-11-on-white-surface-crblx-CmCns"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://unsplash.com/photos/flatlay-photography-of-wireless-headphones-PDX_a_82obo"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ background: "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)", marginTop: '0px', paddingBottom: "50px" }}>
                <h3 className='text-decoration-underline text-center m-2 mb-3'>Deals of the day</h3>

                <div className="container text-center">
                    <div className="row">
                        <div className="card" style={{ width: "18rem", marginRight: '15px' }}>
                            <img src="https://images.unsplash.com/photo-1586062129117-08db958ba215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D" className="card-img-top my-2" alt="image here" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                <a href="#" className="btn btn-success mx-2">Buy Now</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem", marginRight: '15px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D"
                                className="card-img-top my-2" alt="image here" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                <a href="#" className="btn btn-success mx-2">Buy Now</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem", marginRight: '15px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1586062129117-08db958ba215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D"
                                className="card-img-top my-2" alt="image here" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                <a href="#" className="btn btn-success mx-2">Buy Now</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem", marginRight: '15px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D"
                                className="card-img-top my-2" alt="image here" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary mx-2">Add to Cart</a>
                                <a href="#" className="btn btn-success mx-2">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div style={{ background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", color: 'white', paddingBottom:'50px', paddingTop:"25px" }}>
                <h2 className='text-center text-decoration-underline'>Shop By Categories</h2>
                <div className="container text-center">
                    <div className="row">
                        <div className="card" style={{ width: "18rem", marginRight: '15px' }}>
                            <img src="https://images.unsplash.com/photo-1586062129117-08db958ba215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D" className="card-img-top my-2" alt="image here" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem", marginRight: '15px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D"
                                className="card-img-top my-2" alt="image here" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem", marginRight: '15px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1586062129117-08db958ba215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D"
                                className="card-img-top my-2" alt="image here" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem", marginRight: '15px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D"
                                className="card-img-top my-2" alt="image here" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='mb-4'></div>
        </>
    )
}
