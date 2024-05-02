import React from 'react';
import Card from '../components/Card';
// import Carousel from 'react-bootstrap/Carousel';



export default function Home() {
    return (
        <>
            <div style={{ background: "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)", marginTop: '0px', paddingBottom: "50px" }}>
                <h3 className='text-decoration-underline text-center m-2 mb-3'>Deals of the day</h3>

                <div className="container text-center">
                    <div className="row">
                        <Card />
                    </div>
                </div>

                <Card />



            </div>


            {/* <div style={{ background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", color: 'white', paddingBottom: '50px', paddingTop: "25px" }}>
                <h2 className='text-center text-decoration-underline'>Shop By Categories</h2>
                <Carousel>
                    <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1586062129117-08db958ba215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D" className="card-img-top my-2" alt="image here" />
                        
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHN8ZW58MHwwfDB8fHww" className="card-img-top my-2" alt="image here" />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1586062129117-08db958ba215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZWN0cm9uaWNzfGVufDB8MHwwfHx8MA%3D%3D" className="card-img-top my-2" alt="image here" />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> */}



            <div className='mb-4'></div>
        </>
    )
}
