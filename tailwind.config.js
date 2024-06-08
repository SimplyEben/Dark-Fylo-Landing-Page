/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "992px",
      xl: "1280",
      xxl: "1440px",
    },
    extend: {
      colors: {
        dBlue: "hsl(217, 28%, 15%)",
        daBlue: "hsl(218, 28%, 13%)",
        darBlue: "hsl(216, 53%, 9%)",
        darkBlue: "hsl(219, 30%, 18%)",
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
        White: "hsl(0, 0%, 100%)",
      },

      backgroundImage: {
        "curvy-desktop": "url('images/bg-curvy-desktop.svg')",
        "curvy-mobile": "url('images/bg-curvy-mobile.svg')",
      },
    },
  },
  plugins: [],
};

