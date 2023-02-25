/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      backgroundImage: {
        "footer-img": "url('/src/components/footer/assets/footer_img.png')",
        "contact-img":'url("/src/components/contact/assets/Frame41711.png")'
      },
    },
  },
  plugins: [],
};
