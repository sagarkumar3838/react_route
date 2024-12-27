import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, CardBody, CardItem, useMouseEnter  } from "../components/UI/CardContainer"







export const Service = () => {
  return (

    <div className="container mx-auto px-4 py-8">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold">Our Anime Services</h1>
      <p className="text-lg text-gray-600">From Reviews to Merchandise, We’ve Got You Covered!</p>
    </header>

   

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Anime Reviews */}

      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="600"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  

      {/* Merchandise Store */}
      

      {/* Community Events */}
      

      {/* Anime News */}
      
    </section>

    {/* Testimonials Section */}
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-4">What Our Users Say</h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="testimonial bg-gray-100 p-4 rounded-lg shadow-md mb-4 md:mb-0">
          <p className="text-gray-700">"This site has the best anime reviews! I found my new favorite series thanks to them!"</p>
          <p className="font-semibold mt-2">- Alex</p>
        </div>
        <div className="testimonial bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700">"I love the merchandise selection! I got my favorite character's figure!"</p>
          <p className="font-semibold mt-2">- Jamie</p>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input className="w-full border border-gray-300 p-2 rounded" type="text" id="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input className="w-full border border-gray-300 p-2 rounded" type="email" id="email" required />
        </div>
        <div class ="mb-4">
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea className="w-full border border-gray-300 p-2 rounded" id="message" rows="4" required></textarea>
        </div>
        <button className="w-full bg-indigo-500 text-white py-2 rounded" type="submit">Send Message</button>
      </form>
    </section>
  </div>
  )
}
