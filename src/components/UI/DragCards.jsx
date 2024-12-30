import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="  relative grid min-h-screen w-full place-content-center overflow-hidden dark:bg-gray-700">
      <h2 className="relative z-0 text-[20vw] font-black text-gray-600 sm:text-[30px] md:text-[50px] lg:text-[100px]">
        DEVELOPER<span className="text-indigo-500">  ZONE</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10 " ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/img/dev1.webp"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="/img/dev2.webp"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48 lg:w-60"
      />
      <Card
        containerRef={containerRef}
        src="/img/dev3.webp"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/img/dev4.webp"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="/img/dev7.webp"
        alt="Example image"
        rotate="1deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/img/dev8.webp"
        alt="Example image"
        rotate="-2deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
       <Card
        containerRef={containerRef}
        src="/img/dev9.webp"
        alt="Example image"
        rotate="-2deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
       <Card
        containerRef={containerRef}
        src="/img/dev10.webp"
        alt="Example image"
        rotate="-2deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
       <Card
        containerRef={containerRef}
        src="/img/dev11.webp"
        alt="Example image"
        rotate="-2deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
        
      />


    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className  }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className,
        
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};