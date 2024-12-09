/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';


const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],

  theme: {
    container: {
      center: true,   // Center container by default
      padding: '1rem', // Optional: Add padding to the container
    },
  },
  plugins: [],
}

export default config;

