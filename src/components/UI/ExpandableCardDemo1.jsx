
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";

export function ExpandableCardDemo1() {
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
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
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
      <ul className="max-w-6xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-10 flex-col md:flex-row ">
              <motion .div layoutId={`image-${card.title}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-30 md:w-30 rounded-lg object-cover object-top"
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
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
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
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
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
    description: "The Mikako's Room: 20th Anniversary Special livestream event announced a new Mahou Shoujo Lyrical Nanoha (Magical Girl Lyrical Nanoha) ",
    title: "New 'Mahou Shoujo Lyrical Nanoha' TV Anime in Production",
    src: "/img/r1.jpeg",
    ctaText: "visit",
    ctaLink: "https://myanimelist.net/news/72179912",
    content: () => {
      return (
        <p>
          The Mikako's Room: 20th Anniversary Special livestream event announced a new Mahou Shoujo Lyrical Nanoha (Magical Girl Lyrical Nanoha) television anime on Sunday, titled Mahou Shoujo Lyrical Nanoha Exceeds: Gun Blaze Vengeance. This marks the first anime in the franchise in six years since Mahou Shoujo Lyrical Nanoha: Detonation premiered in 2018.
Original creator Masaki Tsuzuki and illustrator Shuuichi Kawakami will begin serializing a manga adaptation of the new anime in Suiyoubi no Sirius in 2025. The event also unveiled a teaser visual for the new manga (pictured right)
        </p>
      );
    },
  },
  {
    description: "The 14th and final episode of the Bleach: Sennen Kessen-hen - Soukoku-tan (Bleach: Thousand-Year Blood War - The Conflict) television anime announced on Saturday",
    title: "'Bleach: Sennen Kessen-hen' Fourth Part Announced as Final Season",
    src: "/img/r2.jpeg",
    ctaText: "Visit",
    ctaLink: "https://myanimelist.net/news/72179758",
    content: () => {
      return (
        <p>
          The 14th and final episode of the Bleach: Sennen Kessen-hen -
           Soukoku-tan (Bleach: Thousand-Year Blood War - The Conflict) television anime announced on Saturday that the fourth part of the anime series, subtitled Kashin-tan (The Calamity Arc), will serve as the final season. The official website also revealed an announcement promo, a visual (pictured above), 
          and a final episode visual for the current arc (pictured right).
        </p>
      );
    },
  },
  {
    description: "The official X (formely Twitter) account of the Ballpark de Tsukamaete! (The Catcher in the Ballpark!) television anime unveiled additional cast members on Friday.",
    title: "'Ballpark de Tsukamaete!' Unveils Additional Cast [Update 12/29]",
    src: "/img/r3.jpeg",
    ctaText: "Visit",
    ctaLink: "https://myanimelist.net/news/72178988",
    content: () => {
      return (
        <p>
          The official X (formely Twitter) account of the Ballpark de Tsukamaete! (The Catcher in the Ballpark!) television anime unveiled additional cast members on Friday. The anime series adapting Tatsurou Suga's sports comedy manga will premiere in 2025.
          Junichi Kitamura (Isekai de Mofumofu Nadenade suru Tame ni Ganbattemasu.) is directing the anime at EMT Squared. Shigeru Murakoshi (Dark Gathering) is handling the series composition. Fumio Iida (Basquash!) is designing the characters and MONACA (Aharen-san wa Hakarenai) is composing the music.
        </p>
      );
    },
  },
  {
    description: "The official website of the Uma Musume: Cinderella Gray television anime revealed additional cast, staff, and a second teaser visual (pictured) on Wednesday.",
    title: "'Uma Musume: Cinderella Gray' Reveals Additional Cast, Staff, Split Cours",
    src: "/img/r4.jpeg",
    ctaText: "Visit",
    ctaLink: "https://myanimelist.net/news/72169975",
    content: () => {
      return (
        <p>
         The official website of the Uma Musume: Cinderella Gray television anime revealed additional cast, staff, and a second teaser visual (pictured) on Wednesday. The anime series adapting Taiyou Kuzumi's spin-off manga will air in split cours on TBS' 28 affiliate stations, with the first part premiering in April 2025.
         Takehiro Miura (Yuuki Bakuhatsu Bang Bravern episode director) is now co-directing the anime with Yuuki Itou (Granblue Fantasy The Animation) at CygamesPictures. Kenji Kawai (Touken Ranbu: Hanamaru) is composing the music.
        </p>
      );
    },
  },
]; 