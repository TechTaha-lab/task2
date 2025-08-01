/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [

    require('@aegov/design-system'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  
  ],
}
/* your tailwind.config.js file */

