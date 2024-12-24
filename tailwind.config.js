import daisyui from "daisyui";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const darkMode = "class";
export const theme = {
  screens: {
    'sm': '640px', // Small devices (landscape phones, 640px and up)
    'md': '768px', // Medium devices (tablets, 768px and up)
    'lg': '1024px', // Large devices (desktops, 1024px and up)
    'xl': '1280px', // Extra large devices (large desktops, 1280px and up)
    '2xl': '1536px', // 2X extra large devices (larger desktops, 1536px and up)
  },
  extend: {
    animation: {
      scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
    },
  },
};
export const plugins = [daisyui, addVariablesForColors];
export const daisyui = {
  themes: ["light", "dark"],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}