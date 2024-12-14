/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "media-240": "250px",
        "media-350": "350px",
        "media-476": "455px",
        "media-576": "576px",
        "media-676": "676px",
        "media-776": "776px",
        "media-996": "996px",
        "media-1096": "1096px",
        "media-1276": "1276px",
        "media-1440": "1440px",
      },

      padding: {
        "padding-10": "2px",
        "padding-50": ".5rem",
        "padding-100": "1rem",
        "padding-200": "2rem",
        "padding-250": "3rem",
        "padding-300": "5rem",
        "padding-400": "10rem",
        "padding-500": "20rem",
      },
      colors: {
        colorLogo: "blue", // Blue logo
        "color-100": "#F3F5F7", // white color
        "color-200": "#F47067", // Fail red color
        "color-300": "#e4e4e7",
        "color-400": "#161617", // Body color
        "color-500": "rgb(24, 24, 24)", // Timeline scroll color
        "color-600": "#96D0FF", // Demo link color
        "color-golden-rod": "#F59F25", // Golden rod
        "color-slideshow-background": "#B98E8E", // Slideshow background
        "color-nav": "#242424", // Navbar and footer color
        "color-1000": "#473A14", // Background color
      },
      borderRadius: {},
      boxShadow: {
        "bottom-dark":
          "rgba(0, 0, 0, 0.25) 0px 20px 10px, rgba(0, 0, 0, 0.12) 0px -12px 10px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        "bottom-light":
          "#FFFFFF 0px 10px 25px -20px, #FFFFFF 0px 20px 60px -30px",
        "top-dark": "rgba(0, 0, 0, 0.56) 0px 10px 40px 4px",
        "bottom-dark-light":
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        colorful:
          "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px",
      },

      fontSize: {
        sizeHero: "calc(.85rem + 3vw)",
        sizeTitle: "calc(.85rem + 2vw)",
        sizeSubtitle: "calc(.45rem + 1vw)",
        sizeCarousel: "calc(.85rem + 2vw)",
        sizeParagraphBase: ".95rem",
        sizeParagraphSm: "0.75rem",
        sizeLogo: "calc(.45rem + 2vw)",
        sizeFooter: "calc(.45rem + 2vw)",
        sizeBig: "calc(2.5rem + 4vw)",
      },
      height: {
        socialHight: "calc(3rem + 3vw)",
      },
      width: {
        socialWidth: "calc(3rem + 3vw)",
      },
      fontWeight: {
        // General
        "bold-100": "500",
        // Paragraph
        "bold-200": "600",
        // Sub title
        "bold-300": "800",
        // title
        "bold-400": "900",
      },
      fontFamily: {
        pixel: ["var(--font-karmatic)"],
        jersey: ["var(--font-jersey)"],
        general: "monospace",
      },
    },
  },
  plugins: [],
};
