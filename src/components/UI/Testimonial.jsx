import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const cards = [
    { id: 1, name: "Jen S.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 2, name: "Paul A.", image: "src/components/images/test2.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 3, name: "Cindy J.", image: "src/components/images/test3.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 4, name: "Danica W.", image: "src/components/images/test4.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 5, name: "Peter H.", image: "src/components/images/test5.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 6, name: "Lanny B.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 7, name: "Alex F.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 8, name: "Claude O.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 9, name: "Max Q.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 10, name: "Jeff R.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 11, name: "Kevin K.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 12, name: "Andrea B.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 13, name: "Danny G.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 14, name: "Ian D.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 15, name: "Ben S.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 16, name: "Matthew I.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 17, name: "Garrett P.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
    { id: 18, name: "Xavier C.", image: "src/components/images/test1.jpeg", text: "Lorem ipsum dolor sit amet." },
  ];


  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 500, behavior: 'smooth' }); // Adjust the scroll amount as needed
      }
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full overflow-hidden">
    <div className="flex items-center  gap-4" ref={carouselRef}style={{ width: '100%', display: 'flex', gap: '1rem' }}>
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          whileTap={{ scale: 0.95 }} // Scale effect on tap
        >
          <img src={card.image} alt={`Testimonial image for ${card.name}`} className="w-full h-44 object-cover" />
          <div className="bg-slate-900 text-slate-50 p-4">
            <span className="block font-semibold text-lg mb-1">{card.name}</span>
            <span className="block mb-3 text-sm font-medium">Founder of XYZ</span>
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