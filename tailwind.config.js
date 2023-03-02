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
        //background images
        "main-bg-img": "url('/src/assets/images/background.png')",
        "footer-img": "url('/src/components/footer/assets/footer_img.png')",
        "side-menu-img": "url('/src/components/header/assets/sidemenu.png')",

        //HomePage
        "XIII-img": "url('/src/components/homepage/assets/XIII.png')",
        "bg_img": "url('/src/components/homepage/assets/bg_img.png')",

        //content images
        "contact-img": 'url("/src/components/contact/assets/Frame41711.png")',
      },
      fontFamily: {
        InaiMathi: ["/public/fonts/InaiMathi.ttf"],
      },
    },
  },
  plugins: [],
};
