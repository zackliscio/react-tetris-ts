/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: '380px',
      xxsMax: { max: '379px' },
      xs: '540px',
      xsMax: { max: '540px' },
      sm: '640px',
      smMax: { max: '639px' },
      md: '768px',
      mdMax: { max: '767px' },
      bg: '962px',
      bgMax: { max: '961px' },
      lg: '1024px',
      lgMax: { max: '1023px' },
      lx: '1180px',
      lxMax: { max: '1179px' },
      xl: '1280px',
      xlMax: { max: '1279px' },
      ['2xl']: '1400px',
      ['2xlMax']: { max: '1399px' },
    },
    extend: {
      animation: {
        fadeIn: 'wiggle 1s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      colors: {
        background: `var(--background)`,
        background_light: `var(--background_light)`,
        background_dark: `var(--background_dark)`,
        board: `var(--board)`,
        button: `var(--button)`,
        button_shade: `var(--button_shade)`,
        button_text: `var(--button_text)`,
        outline: `var(--outline)`,
        text: `var(--text)`,
        shape_i: `var(--shape_i)`,
        shape_j: `var(--shape_j)`,
        shape_l: `var(--shape_l)`,
        shape_o: `var(--shape_o)`,
        shape_s: `var(--shape_s)`,
        shape_t: `var(--shape_t)`,
        shape_z: `var(--shape_z)`,
      },
      height: {
        '3per': '3%',
        '4per': '4%',
        '5per': '5%',
        '7per': '7%',
        '8per': '8%',
        '10per': '10%',
        '80per': '80%',
      },
      minHeight: {
        '1.5': '1.5em'
      },
      translate: {
        screen: '100vh',
      }
    },
  },
  plugins: [],
}

