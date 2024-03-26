// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.7rem",
      sm: '0.8rem',
      normal: '1rem',
      md: '1.2rem',
      lg: '1.8rem',
      xl: '2.4rem',
      xxl: '3.6rem',
      xxxl: '5rem'
    },
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1020px'
    },

    extend: {
      colors: {
        primary: "#374BB8",
        greyB: "#EEECEB",
        lightPurple: "#FB9DFB",
        greyBg: "#D9D9D9",
        skeletonBg: "#bbbaba"
        
      },
      fontFamily: {
        // sans: ['DM Sans', 'sans-serif'],
        // inter: ['Inter', 'sans-serif'],
        // nunito: ['Nunito Sans', 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],

      },
    },
  },
  plugins: [],
}

