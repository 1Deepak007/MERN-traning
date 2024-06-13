import React from 'react'
import Section from './utils/Section'
import CarouselComponent from './utils/CarouselComponent'
import ProdCarousel from './utils/ProdCarousel'


const Services = () => {
  return (
    <div>
       <Section heading='Our Services' bg='bg-gray-800' detail='Hear are top-notch services available specially for you.'/>
       
       {/* <CarouselComponent /> */}
       <ProdCarousel appliance='fan'/>

    </div>
  )
}

export default Services
