module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: "#FCE4EC", // pink-50
          100: "#F8BBD9", // pink-100
          200: "#F48FB1", // pink-200
          300: "#F06292", // pink-300
          400: "#EC407A", // pink-400
          500: "#E91E63", // pink-500
          600: "#D81B60", // pink-600
          700: "#C2185B", // pink-700
          800: "#AD1457", // pink-800
          900: "#880E4F", // pink-900
          DEFAULT: "#E91E63", // pink-500
        },
        
        // Secondary Colors
        secondary: {
          light: "#FCE4EC", // pink-50
          DEFAULT: "#F8BBD9", // pink-100
          dark: "#F48FB1", // pink-200
        },
        
        // Accent Colors
        accent: {
          light: "#C2185B", // pink-700
          DEFAULT: "#AD1457", // pink-800
          dark: "#880E4F", // pink-900
        },
        
        // Background Colors
        background: "#FAFAFA", // gray-50
        surface: {
          DEFAULT: "#FFFFFF", // white
          hover: "#F5F5F5", // gray-100
        },
        
        // Text Colors
        text: {
          primary: "#212121", // gray-900
          secondary: "#757575", // gray-600
          muted: "#9E9E9E", // gray-500
          light: "#BDBDBD", // gray-400
        },
        
        // Status Colors
        success: {
          light: "#81C784", // green-300
          DEFAULT: "#4CAF50", // green-500
          dark: "#388E3C", // green-700
        },
        warning: {
          light: "#FFB74D", // orange-300
          DEFAULT: "#FF9800", // orange-500
          dark: "#F57C00", // orange-700
        },
        error: {
          light: "#E57373", // red-300
          DEFAULT: "#F44336", // red-500
          dark: "#D32F2F", // red-700
        },
        
        // Border Colors
        border: {
          light: "#EEEEEE", // gray-200
          DEFAULT: "#E0E0E0", // gray-300
          dark: "#BDBDBD", // gray-400
        },
      },
      
      fontFamily: {
        // Headings
        inter: ['Inter', 'sans-serif'],
        // Body text
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        // Captions
        nunito: ['Nunito Sans', 'sans-serif'],
        // Code/Data
        mono: ['JetBrains Mono', 'monospace'],
        // Default sans
        sans: ['Source Sans Pro', 'Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'focus': '0 0 0 3px rgba(233, 30, 99, 0.1)',
      },
      
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s infinite',
      },
      
      transitionTimingFunction: {
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      
      backdropBlur: {
        'xs': '2px',
        'glass': '10px',
      },
      
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fit-sm': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.backdrop-blur-glass': {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
        '.grid-auto-fit': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        },
        '.grid-auto-fill': {
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}