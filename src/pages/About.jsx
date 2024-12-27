import React from 'react'

import { useEffect, useRef, useState } from "react";
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { gsap } from 'gsap';

import { LampContainer } from '../components/UI/Lamp';
import SpinningGallery from '../components/UI/SpinningGallery';
import AnimatedTestimonials from '../components/UI/AnimatedTesimonials';


export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1 } },
    exit: { opacity: 0, x: '-100vw', transition: { ease: 'easeInOut' } },
  };
  
  const gallery = useRef(null);
 
  
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);



  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sections[0],
        scrub: 1,
        pin: true,
        start: "top top",
        end: "+=3300",
      },
    });

   

    // Image gallery animations
    gsap.to(".col-1", {
      y: -250,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".image-gallery",
        start: "top center",
        end: "+=3000",
        scrub: true,
      },
    });
    gsap.to(".col-2", {
      y: 250,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".image-gallery",
        start: "top center",
        end: "+=3000",
        scrub: true,
      },
    });
    gsap.to(".col-3", {
      y: -250,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".image-gallery",
        start: "top center",
        end: "+=3000",
        scrub: true,
      },
    });
    

    gsap.from(".row-2", {
      height: "0%",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".section-3",
        start: "40% center",
        toggleActions: "play pause reverse reverse",
      },
    });

    gsap.from(".row li", {
      y: 200,
      opacity: 0,
      ease: "none",
      delay: 2,
      duration: 2,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".row li",
        toggleActions: "play pause reverse reverse",
      },
    });

    gsap.to(".num", {
      x: 600,
      duration: 2,
      scrollTrigger: {
        trigger: ".num",
        start: "right left",
      },
    });
  }, []);

  // testimonial data image  we pass

 const testimonialsData = [
    {
      src: "src/components/images/potrait1.jpg", // Path relative to the public folder
      name: "John Doe",
      designation: "Software Engineer",
      quote: "This is an amazing service!",
    },
    {
      src: "src/components/images/potrait2.jpg",
      name: "Jane Smith",
      designation: "Product Manager",
      quote: "I love using this platform!",
    },
    {
      src: "src/components/images/potrait3.jpg",
      name: "Alice Johnson",
      designation: "Designer",
      quote: "A fantastic experience overall!",
    },
    {
      src: "src/components/images/potrait6.jpg",
      name: "Niki Johnson",
      designation: "Designer",
      quote: "A fantastic experience overall!",
    },
  ];





  return (
    <>
    
    <div className="flex flex-col items-center justify-center w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="mt-10 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16"
      >
        <motion.h1
          variants={containerVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800"
        >
         Discover the Magic of Anime: Reviews, News, and Community
        </motion.h1>
        <motion.p
          variants={containerVariants}
          className="text-lg md:text-xl text-gray-600 max-w-4xl text-center mt-4"
        >
          At AnimeFlix, we are passionate about all things anime! Our mission is to create a vibrant community where fans can come together to share their love for anime, manga, and Japanese culture. Whether you are a seasoned otaku or just starting your journey into the world of anime, you will find a welcoming space here.
        </motion.p>
        <motion.button
          variants={containerVariants}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        >
          Get Your Anime Fix: Binge, Chat, and Cosplay
        </motion.button>
      </motion.div>

      <section className="  overflow-hidden max-w-full mt-4 px-16 py-12 grid grid-cols-1 md:grid-cols-2  gap-5 mx-auto">
    
        <div className='"grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-auto '>
        <div className=" flex flex-col items-center justify-center mt-16 ">
          <span className="block mb-4  text-indigo-500 font-bold text-4xl">Better every day</span>
          <h3 className="text-4xl md:text-5xl font-semibold ">Unleash Your Inner Otaku!</h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">Explore, Discover, and Celebrate Anime Culture</p>
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">Join Us</button>
          
        </div>
        </div>
       
        <ShuffleGrid />
        
      
      </section>
    

      <section className="mt-8 text-center w-full px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-semibold mb-8">Our Mission</h2>
          <p className="text-gray-700 leading-8 text-xl">
            At AnimeWorld, our mission is to bring the vibrant world of anime to fans around the globe. We strive to provide a comprehensive platform where anime enthusiasts can discover, discuss, and enjoy their favorite series and movies. Whether you're a seasoned otaku or a newcomer to the anime community, we aim to create a welcoming space for everyone.
          </p>
        </div>
        <div >
          <img src="src/components/images/mission.png" alt="Our Mission"  />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">How We Work</h2>
        <p className="text-gray-700 text-center">
          Our platform operates by curating a vast library of anime content, including series, movies, and manga.
          <br />
          We collaborate with various distributors and creators to ensure that our users have access to the latest and greatest in the anime world. Here’s how it works:
        </p>

        <div className="p-4 md:p-8 dark:bg-gray-800 w-full flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
            {/* First Music Card */}
            <div className="w-full h-auto bg-slate-300 overflow-hidden cursor-pointer group relative">
              <div
                className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
                style={{
                  backgroundImage: 'url("src/components/images/1.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              ></div>
              <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
                <h4 className="font-semibold text-3xl">Content Curation</h4>
                <p>We continuously update our library with new titles, ensuring that our users have access to the latest releases.</p>
              </div>
            </div>

            <div className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative">
              <div
                className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
                style={{
                  backgroundImage: 'url("src/components/images/2.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              ></div>
              <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-gray-900 transition-colors duration-500 flex flex-col justify-between">
                <h4 className="font-semibold text-3xl">Community Engagement</h4>
                <p>We foster a vibrant community where fans can share their thoughts, reviews, and recommendations.</p>
              </div>
            </div>

            <div className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative">
              <div
                className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
                style={{
                  backgroundImage: 'url("src/components/images/3.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              ></div>
              <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-gray-950 transition-colors duration-500 flex flex-col justify-between">
                <h4 className="font-semibold text-3xl">User -Friendly Interface</h4>
                <p>Our website is designed to be intuitive and easy to navigate, making it simple for users to find their favorite content.</p>
              </div>
            </div>

            <div className="w-full h-64 bg-slate-700 overflow-hidden cursor-pointer group relative">
              <div
                className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
                style={{
                  backgroundImage: 'url("src/components/images/6.jpeg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              ></div>
              <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-gray-900 transition-colors duration-500 flex flex-col justify-between">
                <h4 className="font-semibold text-3xl">Regular Updates</h4>
                <p>We keep our users informed about upcoming releases, events, and news in the anime industry through our blog and newsletter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Meet the Team</h2>
        <p className="text-gray-700 text-center">
          Our team is composed of passionate anime fans who are dedicated to sharing their love for anime with the world.
          <br />
          We come from diverse backgrounds, but we all share a common goal: to create the best anime experience for our users.
        </p>
        <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
      </section>

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Join Us!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-8 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-xl"
        >
          We invite you to join our community and explore the wonderful world of anime with us. <br /> Whether you want to watch, discuss, or learn more about anime, AnimeWorld is the place for you!
        </motion.p>
        <motion.button
          className="mt-8 box w-[200px] h-[40px] rounded-full bg-sky-400 cursor-pointer text-gray-700 font-bold"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        >
          Sign Up
        </motion.button>
      </LampContainer>
    </div>
    </>
  )
}




const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full "
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 4000);
  };

  return (
    <div className="ml-20 grid grid-cols-2 sm:grid-cols-4 md:grid-flow-cols-2 gap-1 h-[350px] ">
      {squares.map((sq) => sq)}

    </div>
  );
};

