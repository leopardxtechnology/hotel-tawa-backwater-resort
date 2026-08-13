/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        resort: {
          bg: "#FFFFFF",
          section: "#F8FAF8",
          greenPrimary: "#2F6B3E",
          greenSecondary: "#4F8A5B",
          gold: "#C9A227",
          goldLight: "#E8D9A8",
          heading: "#1B1B1B",
          body: "#555555",
          border: "#ECECEC",
          card: "#FFFFFF"
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'luxury': '0 20px 40px -10px rgba(47, 107, 62, 0.08)',
        'gold-glow': '0 4px 20px rgba(201, 162, 39, 0.25)',
        'glass': '0 8px 30px rgba(0, 0, 0, 0.04)'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A227 0%, #E8D9A8 50%, #B58F1C 100%)',
        'green-gradient': 'linear-gradient(135deg, #2F6B3E 0%, #4F8A5B 100%)',
        'soft-overlay': 'linear-gradient(to bottom, rgba(27, 27, 27, 0.4) 0%, rgba(27, 27, 27, 0.65) 100%)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px'
      }
    },
  },
  plugins: [],
}
