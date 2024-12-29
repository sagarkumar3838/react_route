import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, CardBody, CardItem, useMouseEnter  } from "../components/UI/CardContainer"
import Testimonials from '../components/UI/Testimonial';
import DynamicIconCloud from '../components/UI/DynamicIconCloud';
import OrbitingCirclesDemo from '../components/UI/OrbitingCirclesDemo';
import { DragCards } from '../components/UI/DragCards';







export const Service = () => {
  return (

    <div className="container mx-auto px-4 py-8">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold">Our Anime Services</h1>
      <p className="text-lg text-gray-600">From Reviews to Merchandise, We’ve Got You Covered!</p>
    </header>

   

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
      {/* Anime Reviews */}

      <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:w-[20rem] h-auto rounded-xl p-6 border">
      <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
      STREAMING
    </CardItem>
    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
    Watch the latest anime series and movies
    </CardItem>
    <CardItem translateZ="100" className="w-full mt-4">
      <img
        src="src/components/images/streaming.webp"
        height={1000}
        width={1000}
        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      <CardItem
        translateZ={20}
        as={Link}
        href="https://twitter.com/mannupaaji"
        target="_blank"
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
        Try now →
      </CardItem>
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
       Start Watching Now
      </CardItem>
    </div>
  </CardBody>
    </CardContainer>
  

      {/* Merchandise Store */}
      <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:w-[20rem] h-auto rounded-xl p-6 border">
      <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
      MANGA
    </CardItem>
    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
    Get the new Collection of every MANGA
    </CardItem>
    <CardItem translateZ="100" className="w-full mt-4">
      <img
        src="src/components/images/manga.webp"
        height={1000}
        width={1000}
        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      <CardItem
        translateZ={20}
        as={Link}
        href="https://twitter.com/mannupaaji"
        target="_blank"
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
        Try now →
      </CardItem>
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
       Get it Now
      </CardItem>
    </div>
  </CardBody>
    </CardContainer>

      {/* Community Events */}
      <CardContainer className="inter-var  ">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:w-[20rem] h-auto rounded-xl p-6 border">
      <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
      EVENTS
    </CardItem>
    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
    Get ready for an epic celebration of all things comics  
    
    
    </CardItem>
    <CardItem translateZ="100" className="w-full mt-4">
      <img
        src="src/components/images/experiential.webp"
        height={1000}
        width={1000}
        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      <CardItem
        translateZ={20}
        as={Link}
        href="https://twitter.com/mannupaaji"
        target="_blank"
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
        Try now →
      </CardItem>
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
       Tune my vibe
      </CardItem>
    </div>
  </CardBody>
    </CardContainer>

      {/* Anime News */}
      <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:w-[20rem] h-auto rounded-xl p-6 border">
      <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
      THEATICAL DISTRIBUTION
    </CardItem>
    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
    Get exclusive access to top distributors and market trends.
    </CardItem>
    <CardItem translateZ="100" className="w-full mt-4">
      <img
        src="src/components/images/theatrical.webp"
        height={1000}
        width={1000}
        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      <CardItem
        translateZ={20}
        as={Link}
        href="https://twitter.com/mannupaaji"
        target="_blank"
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
        Try now →
      </CardItem>
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
       Start Networking
      </CardItem>
    </div>
  </CardBody>
    </CardContainer>
      
    </section>

    {/* Testimonials Section */}
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-4">What Our Users Say</h2>
      <Testimonials/>
    </section>

    {/* Contact Form Section */}
    <section>
      <h2 className="text-4xl font-bold text-center mb-8">Developer Community</h2>
      
     <DragCards/>

    </section>
  </div>
  )
}
