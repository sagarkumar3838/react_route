
import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import { useInView } from 'react-intersection-observer';
import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";

// Main Home Component
export const Home = () => {
  return (
    <div className=" dark:bg-slate-800  ">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
        <HoverImageLinks />
        {/* <Schedule /> */}
        
        <BlurIn >
        TOP M<b>O</b>VIES & ANIME
      </BlurIn>
      <HorizontalScrollCarousel/>
      
      <InfiniteMovingCardsDemo />
      </ReactLenis>
      
     
    </div>
  );
};



// main component end
const Hero = () => {
  return (
    <div className="relative w-full" style={{ height: 'calc(2500px + 100vh)' }}>
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(scrollY, [0, 2500 + 500], ["170%", "100%"]);
  const opacity = useTransform(scrollY, [2500, 2500 + 500], [1, 0]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        position: 'fixed',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="src/components/video/bg3.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[900px]">
      <ParallaxImg
        src="src/components/images/jujustu.png"
        alt="An example of a space launch"
        start={-200}
        end={200}
        className="w-1/3 cover-fill"
      />
      <ParallaxImg
        src="src/components/images/naruto-and-sasuke-ivea9e5wh3akps7z.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="src/components/images/solo.png"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="src/components/images/wp5105985.webp"
        alt="An example of a space launch"
        start={-200}
        end={200}
        className="w-2/4 cover-fill"
      />
 <ParallaxImg
        src="src/components/images/gojo1.png"
        alt="Orbiting satellite"
        start={100}
        end={-100}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};



// carosel start


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
     
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    
    <div
      key={card.id}
      className="group relative h-[450px] w-[350px] overflow-hidden bg-neutral-200"
    >
       
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-4 z-10 grid place-content-evenly mt-40">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "src/components/images/card1.webp",
    title: "Watch Options",
    id: 1,
  },
  {
    url: "src/components/images/card2.webp",
    title: "Watch Options",
    id: 2,
  },
  {
    url: "src/components/images/card3.webp",
    title: "Watch Options",
    id: 3,
  },
  {
    url: "src/components/images/card4.webp",
    title: "Watch Options",
    id: 4,
  },
  {
    url: "src/components/images/card5.webp",
    title: "Watch Options",
    id: 5,
  },
  {
    url: "src/components/images/card6.webp",
    title: "Watch Options",
    id: 6,
  },
  {
    url: "src/components/images/card7.webp",
    title: "Watch Options",
    id: 7,
  },
];

const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Best of 2024"
          subheading="The year in review"
          imgSrc="src\components\images\demonCard.webp"
          href="#"
        />
        <Link
          heading="Top picks"
          subheading="TV shows and movies just for you"
          imgSrc="src\components\images\spiderCard.webp"
          href="#"
        />
        <Link
          heading="Fan Favorites"
          subheading="This week's top TV and movies"
          imgSrc="src\components\images\soloCards.webp"
          href="#"
        />
        <Link
          heading="Popular interests"
          subheading="Browse all genres"
          imgSrc="src\components\images\jujuCard.webp"
          href="#"
        />
        <Link
          heading="IMDB Originals"
          subheading="Celebrity interviews , trending entertainment stories, and expert analysis  "
          imgSrc="src\components\images\bleachcard.webp"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

const BlurIn = ({ children }) => {
  const ref = React.useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 1, triggerOnce: true });

  return (
    <motion.h2
      ref={inViewRef}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={inView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className=" bg-gray-900 text-gray-600 hover:text-gray-300 text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
    >
      {children}
    </motion.h2>
  );
};


// scroll animated






 const InfiniteMovingCards = ({
  items = [],
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

 

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full  overflow-hidden ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full h-16 shrink-0 gap-1 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className=" max-w-full relative rounded-xl  flex-shrink-0  px-4 py-6 w-[50px] md:w-[100px] lg:w-[150px]"
            
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              >
                   <img
        src={item.image} // Use the image property from the item
        alt={item.name1} // Use the name as alt text for accessibility
        className="w-24  mb-1" // Adjust size and styling as needed
      />

              </div>
             
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.url}
              </span>
            </blockquote>
          </li>
        ))}
       
      </ul>
    </div>
  );
};

export function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
       image: "src/components/images/logo7.png",
       name1: " logo1"
     
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
      image: "src/components/images/log8.png",
       name1: " logo8"
     
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      image: "src/components/images/logo4.png",
       name1: " logo3"
      
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      image: "src/components/images/logo5.png",
       name1: " logo4"
      
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
      image: "src/components/images/logo6.png",
       name1: " logo5"
      
    },
  ];

  return (
    <div className="  h-[4rem] rounded-md flex flex-col antialiased bg-gray-900 dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
     
    </div>
  );
}

export default Home;