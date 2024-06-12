import React from 'react'
import './utils/css/fonts.css'
import ShopLocation from './utils/ShopLocation'
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Contact = ({ shopLatitude, shopLongitude }) => {
  return (
    <>
      {/* <div className="container mx-auto p-4">
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 bg-gray-300 rounded-xl p-4">
            <h2 className="text-center text-lg font-semibold">Contact us</h2>
            <div className="card bg-gray-200 p-4 rounded-xl">  
              <h2>Contact : 8303182843</h2>
              <span className="h-4.5 p-1 mb-1">Shop No.8, Morya Building</span>
              <span className="h-4.5 p-1 mb-1">Kalbhor Nagar, Chinchwad</span>
              <span className="h-4.5 p-1 mb-1">Pune, Maharashtra</span>
              <span className="h-4.5 p-1">Pin Code - 411019</span>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 bg-white p-4 text-center">
            <h2 className="text-lg font-semibold">Right Column</h2>
            <ShopLocation className='text-center' latitude={shopLatitude} longitude={shopLongitude} />
          </div>
        </div>
      </div> */}





      <section class="w-full py-12 md:py-10 lg:py-10">
        {/* <div class="container px-4 md:px-6"> */}
          <div class="flex flex-col items-center justify-center space-y-4">
            <div class="space-y-2">
              <h2 class="text-3xl tracking-tighter sm:text-5xl text-center" style={{'fontFamily':'roboto', 'fontWeight':'600'}}>Contact Us</h2>
              <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get in touch with us for all your appliance repair needs.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div className='overflow-hidden'>
                <h3 class="text-3xl font-bold mb-4 text-center">Location</h3>
                <div class="mb-6">
                  <ShopLocation className='text-center' latitude={shopLatitude} longitude={shopLongitude} />
                </div>
              </div>
              <div>
                <h3 class="text-3xl roboto-xl font-bold mb-4 text-center">Contact Info</h3>
                <div class="space-y-4">
                  <div class="flex items-center gap-4">
                    <FaLocationDot  className='text-3xl'/>
                    <div>
                      <p class="font-medium">Address</p>
                      <p class="text-gray-500 dark:text-gray-400">
                        Shop No.8, Morya Building
                        Kalbhor Nagar, Chinchwad
                        Pune, Maharashtra
                        Pin Code - 411019
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <IoPhonePortrait className='text-3xl'/>
                    <div>
                      <p class="font-medium">Phone</p>
                      <p class="text-gray-500 dark:text-gray-400">8303182843</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                      <IoIosMail className='text-3xl'/>
                      <div>
                        <p class="font-medium">Mail</p>
                        <p class="text-gray-500 dark:text-gray-400"> Khanakhlaq0817@gmail.com </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>




      {/* <div className=''>
        {/* animate-pulse
        <div role="status" className="row space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
          
          <div className="col flex items-center justify-center w-full h-48 bg-gray-300 my-36 rounded sm:w-96 dark:bg-gray-700">
            <div className="h-5.5 p-1 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3 mb-4 font-bold text-xl">Comfirt Aircool System</div>
            <div className="card bg-gray-200 p-4 rounded-xl">  
              <div className="h-4.5 p-1 mb-1">Contact : 8303182843</div>
              <div className="h-4.5 p-1 mb-1">Shop No.8, Morya Building</div>
              <div className="h-4.5 p-1 mb-1">Kalbhor Nagar, Chinchwad</div>
              <div className="h-4.5 p-1 mb-1">Pune, Maharashtra</div>
              <div className="h-4.5 p-1">Pin Code - 411019</div>
            </div>
          </div>

          <div className="col">
            <ShopLocation className='text-center' latitude={shopLatitude} longitude={shopLongitude} />
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
    </>
  );
}

export default Contact
