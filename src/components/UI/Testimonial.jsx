import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion'; 
import useMeasure from 'react-use-measure';
export const Testimonials = () => {
  const cards = [
    { id: 1, name: "Jen S.", image: "/images/test1.jpeg", text: "AnimeFlix has transformed my anime experience! The community discussions make discovering new favorites so much fun.", founder:"Founder of TechBitz" },
    { id: 2, name: "Paul A.", image: "/images/test2.jpeg", text: "I love the curated content on AnimeFlix! It’s my go-to platform for binge-watching the latest series.", founder:"Founder of MahindraTech" },
    { id: 3, name: "Cindy J.", image: "/images/test3.jpeg", text: "AnimeFlix offers a fantastic selection of titles! The streaming quality is top-notch, making every episode enjoyable.", founder:"Founder of TCS " },
    { id: 4, name: "Danica W.", image: "/images/test4.jpeg", text: "AnimeFlix is more than a streaming service; it’s a community! I’ve made great friends through the forums and watch parties.", founder:"Founder of  MICSOFT" },
    { id: 5, name: "Peter H.", image: "/images/test5.jpeg", text: "The variety of genres on AnimeFlix is amazing! I can always find something that fits my mood.", founder:"Founder of CODEBLOCK" },
   
  ];

  let [ref , {width}] = useMeasure();

  // left testimonial movement

  const xTranslation = useMotionValue(0);

  useEffect(()=>{
    let controls
    let finalPosition = -width / 1 - 8;
  

     controls = animate (xTranslation, [0 , finalPosition ], {
      ease: "linear",
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay : 0,
    })

    
  }, [xTranslation , width])

  // right testimonial movement

  const xTranslationRight = useMotionValue(0);
  const direction = useRef(1); // 1 for right, -1 for left

useEffect(() => {
  let controls;
  let finalPosition = width / 1 + 8; // Set final position to move right

  controls = animate(xTranslationRight, [0, finalPosition], {
    ease: "linear",
    duration: 5,
    onComplete: () => {
      // Reverse direction
      direction.current *= -1;
      xTranslation.set(0); // Reset position
    },
    repeat: Infinity,
    repeatType: "loop",
   
  });

  return () => controls.stop(); // Clean up the animation on unmount
}, [xTranslationRight, width]);


  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 500, behavior: 'smooth' }); // Adjust the scroll amount as needed
      }
    }, 2000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full overflow-hidden ">
    <div className="flex items-center " ref={[carouselRef , xTranslation]}  style={{ display: 'flex', gap: '1rem', transform: `translateX(${xTranslationRight.get()}px)`  }}>
      {/* Duplicate cards for infinite effect */}
      {[...cards, ...cards].map((card) => (
        <motion.div
          key={card.id}
          className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
           
          }}
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          whileTap={{ scale: 0.95 }} // Scale effect on tap
          ref={ref}
          style={{x:xTranslation}}
        >
          <img src={card.image} alt={`Testimonial image for ${card.name}`} className="w-full h-44 object-cover" />
          <div className="bg-slate-900 text-slate-50 p-4">
            <span className="block font-semibold text-lg mb-1">{card.name}</span>
            <span className="block mb-3 text-sm font-medium">{card.founder}</span>
            <span className="block text-sm text-slate-300">{card.text}</span>
          </div>
          <span className="text-7xl absolute top-2 right-2 text-slate-700">"</span>
        </motion.div>

        
      ))}
    </div>

    <div className=" mt-3 flex items-center " ref={[carouselRef , xTranslationRight]}  style={{ display: 'flex', gap: '1rem',  }}>
      {/* Duplicate cards for infinite effect */}
      {[...cards.slice().reverse(), ...cards.slice().reverse()].map((card) => (
        <motion.div
          key={card.id}
          className="shrink-0 w-[300px] sm:w-[400px] md:w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
           
          }}
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          whileTap={{ scale: 0.95 }} // Scale effect on tap
          ref={ref}
          style={{x:xTranslationRight}}
        >
          <img src={card.image} alt={`Testimonial image for ${card.name}`} className="w-full h-44 object-cover" />
          <div className="bg-slate-900 text-slate-50 p-4">
            <span className="block font-semibold text-lg mb-1">{card.name}</span>
            <span className="block mb-3 text-sm font-medium">{card.founder}</span>
            <span className="block text-sm text-slate-300">{card.text}</span>
          </div>
          <span className="text-7xl absolute top-2 right-2 text-slate-700">"</span>
        </motion.div>

        
      ))}
    </div>

    <div className=" mt-3 flex items-center " ref={[carouselRef , xTranslation]}  style={{ display: 'flex', gap: '1rem',  }}>
      {/* Duplicate cards for infinite effect */}
      {[...cards, ...cards].map((card) => (
        <motion.div
          key={card.id}
          className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
           
          }}
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          whileTap={{ scale: 0.95 }} // Scale effect on tap
          ref={ref}
          style={{x:xTranslation}}
        >
          <img src={card.image} alt={`Testimonial image for ${card.name}`} className="w-full h-44 object-cover" />
          <div className="bg-slate-900 text-slate-50 p-4">
            <span className="block font-semibold text-lg mb-1">{card.name}</span>
            <span className="block mb-3 text-sm font-medium">{card.founder}</span>
            <span className="block text-sm text-slate-300">{card.text}</span>
          </div>
          <span className="text-7xl absolute top-2 right-2 text-slate-700">"</span>
        </motion.div>

        
      ))}
    </div>
  </div>
  );
};

export default Testimonials;