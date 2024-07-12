import React from 'react';
import ProdCarousel from "./utils/ProdCarousel";
import ChooseUs from './utils/ChooseUs';
import Section from './utils/Section';

export default function Home() {
  // https://source.unsplash.com/1600x900/?beach


  // working in postman
  //https://www.pexels.com/search/washingmachine?


  return (
    <>
      <main className="flex-1">
        <div className="w-full xl:pt-24 md:pt-24 sm:pt-1 border-y md:mb-0 pb-0">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-2 sm:mt-2 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Reliable Appliance Repair, Anytime
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 md:mt-2">
                  We are certified technicians available 24/7 to repair all your household appliances, guaranteed.
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4">
                <img src="https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHJlcGFpciUyMGFwcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D" alt="Hero" className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover" />
              </div>
              

<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">  
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHJlcGFpciUyMGFwcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D" className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHJlcGFpciUyMGFwcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D" className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHJlcGFpciUyMGFwcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D" className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHJlcGFpciUyMGFwcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D" className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHJlcGFpciUyMGFwcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D" className="mx-auto aspect-[5/4] overflow-hidden rounded-t-xl object-cover" alt="..."/>
        </div>
    </div>
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <section className="text-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
              <div className="space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <ProdCarousel />
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Repair?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We provide you best repair service for your appliances guaranteed.
              All kinds of washing machines, fridges and air conditioners are repaired by us.
            </p>
          </div>
        </div>




        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-800">
          <div className="space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us?</h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our appliance repair service offers unbeatable quality and convenience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <ChooseUs title="24/7 Availability" detail="Our technicians are on call 24 hours a day, 7 days a week to handle any emergency."/>
              <ChooseUs title="Certified Technicians" detail="All our technicians are factory-trained and certified to work on all major appliance brands."/>
              <ChooseUs title="Guaranteed Repairs" detail="We stand behind our work with a 100% satisfaction guarantee on all repairs."/>
              <ChooseUs title='Upfront Pricing' detail='We provide transparent, fixed-rate pricing so you know the cost before we start the repair.'/>
              <ChooseUs title='Prompt Service' detail='Our technicians arrive on time and work efficiently to get your appliances back up and running quickly.' />
              <ChooseUs title='Eco-Friendly Parts' detail='We use energy-efficient, environmentally-friendly parts whenever possible.'/>
            </div>
          </div>
        </section>


        <Section heading='What Our Customers Say' bg='bg-white' dark='dark:bg-gray-800' detail='Hear from real customers who have experienced our top-notch appliance repair service.'/>
        <Section heading='Frequently Asked Questions' bg='bg-grey-800' dark='dark:bg-gray-800' detail='Get answers to the most common questions about our appliance repair service.'/>
        

      </main>
    </>
  );
}