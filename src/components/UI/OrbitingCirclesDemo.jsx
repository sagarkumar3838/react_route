import OrbitingCircles from "../magicui/OrbitingCircles";


export default function OrbitingCirclesDemo() {
    const icons = [
        {
          Icon: () => <svg width="24" height="24" fill="red"><circle cx="12" cy="12" r="10" /></svg>,
          radius: 80,
          duration: 15,
          delay: 5,
          reverse: false,
        },
        {
          Icon: () => <svg width="24" height="24" fill="blue"><circle cx="12" cy="12" r="10" /></svg>,
          radius: 60,
          duration: 10,
          delay: 3,
          reverse: true,
        },
      ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
      </span>
      {icons.map(({ Icon, radius, duration, delay, reverse }, index) => (
        <OrbitingCircles
          key={index}
          className="size-[30px] border-none bg-transparent"
          radius={radius}
          duration={duration}
          delay={delay}
          reverse={reverse}
        >
          <Icon />
        </OrbitingCircles>
      ))}
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <svg width="100" height="100" viewBox="0 0 438.549 438.549">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c..."
      />
    </svg>
  ),
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      ...
    </svg>
  ),
  whatsapp: () => (
    <svg> {/* Add WhatsApp SVG here */} </svg>
  ),
  googleDrive: () => (
    <svg> {/* Add Google Drive SVG here */} </svg>
  ),
};
