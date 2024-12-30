

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white  dark:bg-slate-700 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}`}>
                <img
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}`}
            key={`card-${card.title}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex -row ">
              <motion.div layoutId={`image-${card.title}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 dark:bg-slate-700 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Anime Series Review",
    title: "Tonbo! Season 2",
    src: "/img/review1.jpg",
    ctaText: "Anime",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Former golfer Kazuyoshi Igarashi has convinced prodigy golfer Tonbo Ōi to leave her remote island family and head to the mainland to pursue an education and further her golf career.
           Now that the fire of competition has been lit within her, Tonbo will take on increasingly tough competition in her first golf tournament.
           Tonbo! is streaming on Amazon Prime and Hulu.
        </p>
      );
    },
  },
  {
    description: "Episodes 26-47 Anime Series Review",
    title: "PreCure Max Heart",
    src: "/img/review2.jpg",
    ctaText: "Anime",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          As Hikari and the mysterious boy continue to try and figure out their purposes, 
          the evil forces allied against Pretty Cure grow step up their efforts to revive the Evil King.
           With new attacks and power boosts courtesy of Lulun, Polun's little sister, the stakes feel ever higher for the Cures and Shiny Luminous, while in their day-to-day lives, Nagisa and Honoka have to face a different looming change: graduation.
        </p>
      );
    },
  },
  {
    description: "Volume 1 Manga Review",
    title: "Ashita no Joe: Fighting For Tomorrow",
    src: "/img/review3.jpg",
    ctaText: "Manga",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Joe Yabuki is a teenage orphan who runs away from his orphanage to live life in the slums of Tokyo. There, he has a chance encounter with a drunk named Danpei Tange,
          who turns out to be a former boxer, and thinks that Joe has the potential to be one as well. While Joe dismisses the idea of becoming a boxer, when he ends up landing in juvie, 
          and later a special reform school, boxing ends up being the key to his survival, and helps him dream of a better future. Will Joe be able to seize tomorrow, or will he be condemned to life as an underdog?
          Story by Asao Takamori, art by Tetsuya Chiba. Translation by Asa Yoneda.
        </p>
      );
    },
  },
  {
    description: "Volumes 1-6 Manga Review",
    title: "There's No Freaking Way I'll Be Your Lover! Unless...",
    src: "/img/review4.jpg",
    ctaText: "Manga",
    ctaLink: "https://www.animenewsnetwork.com/review/there-no-freaking-way-ill-be-your-lover-unless/volumes-1-6/.218999",
    content: () => {
      return (
        <p>
          Renako spent middle school feeling like an outsider, but now that she's in high school,
           she's determined to manage a glow-up: she will be “normal!” Her goals seem within reach when she manages to wind up in a friend group with four beautiful girls,
            but things take a turn for the weird when one of them, Mai, suddenly declares her love for her. Renako's not sure she's ready for a girlfriend,
             and things get even more complicated when Ajisai and Satsuki, two of the other girls in her group, start looking attractive (and attracted) as well! Is Renako's normal high school life just a pipe dream?
             There's No Freaking Way I'll Be Your Lover! Unless… is translated by Avery Hutley and lettered by Mercedes McGarry, with an adaptation by Amanda Lafrenais.
        </p>
      );
    },
  },
  {
    description: "Volume 9",
    title: "Haibara's Teenage New Game+",
    src: "/img/review5.jpg",
    ctaText: "Novel",
    ctaLink: "https://www.animenewsnetwork.com/news/2024-12-30/haibara-teenage-new-game-novels-to-enter-final-arc-in-volume-9/.219587",
    content: () => {
      return (
        <p>
         Kazuki Amamiya reported in the afterword for the eighth Haibara's Teenage New Game+ light novel volume on Friday that the series will begin its final arc, the second-year arc, in the next volume in 2025.
         We all have embarrassing memories or deep regrets from high school, right? Socially anxious college senior Natsuki Haibara sure does. When he thinks back on that time of his life, all he has are fleeting fantasies of a happy adolescence that could have been. Imagine his bewilderment and surprise, then, when he inexplicably finds himself seven years in the past—one month before his first year of high school!
        </p>
      );
    },
  },
];