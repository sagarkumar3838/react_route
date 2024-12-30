import React, { useState, useRef, useEffect } from "react";
import { Boxes } from "../components/UI/BoxesCore";
import { cn } from "../utils/cn";
import HoverDevCards from "../components/UI/HoverDevCards";
import { LayoutGrid } from "../components/UI/LayoutGrid";
import { ExpandableCardDemo } from "../components/UI/ExpandableCardDemo";
import { ExpandableCardDemo1 } from "../components/UI/ExpandableCardDemo1";

export const Portfolio = () => {
  return (
    <>
      <div className="h-40 relative w-full overflow-hidden bg-gray-700 dark:bg-gray-800 flex flex-col items-center justify-center ">
    <div className="absolute inset-0 w-full h-full dark:bg-gray-800 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
    <Boxes />
    <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Welcome To BLOGflix
    </h1>
    <p className="text-center mt-2 text-neutral-300 relative z-20">
    Subscribe to the ANIMEFLIX Newsletter • Wake up every Sunday to a curated list of ANIMEFLIX most interesting posts of the week.  <span className="text-red-600"> read more </span>  
    </p>
   
  </div>
  <HoverDevCards/>


  <div className="flex flex-col md:flex-row w-full max-w-8xl mx-auto p-4">
  {/* Top News Section */}
  <div className="flex-2  dark:bg-gray-800 p-4 m-2 rounded-lg border sm:w-3/5 lg:w-3/5">
    <h2 className="text-2xl font-bold mb-2 text-center">Top News</h2>
    <h2 className="text-2xl font-bold mb-2 ">Ongoing Anime</h2>

    <div className="h-screen  w-full">
      <LayoutGrid cards={cards} />
    </div>
  </div>

  {/* Column Section */}
  <div className="flex-1 dark:bg-gray-800 border  p-4 m-2 rounded-lg sm:w-2/5 lg:w-2/5">
    <h2 className="text-2xl font-bold mb-4 text-center">Review Section</h2>
      <ExpandableCardDemo/>
  </div>
</div>
<h2 className="text-3xl font-bold text-gray-600 text-center">Recent Updates News</h2>
     <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4">
     
             <ExpandableCardDemo1/>
     </div>

    
    </>
  
  )
}


const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
          Castle in the Sky
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Pazu's life changes when he meets Sheeta, a girl whom pirates are chasing for her crystal amulet, 
      which has the potential to locate Laputa, a legendary castle floating in the sky.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      The Boy and the Heron
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      In the wake of his mother's death and his father's remarriage, 
      a headstrong boy named Mahito ventures into a dreamlike world shared by both the living and the dead.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Landman
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A modern-day tale of fortune seeking in the world of West Texas oil rigs.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Grave of the Fireflies
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A young boy and his little sister struggle to survive in Japan during World War II.
      </p>
    </div>
  );
};


 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/img/col-1_3.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 object-cover",
    thumbnail:
      "/img/col-1_4.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 ",
    thumbnail:
      "/img/col-2_1.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 w-full h-full object-cover ",
    thumbnail:
      "/img/col-2_2.jpg",
  },
 
];
