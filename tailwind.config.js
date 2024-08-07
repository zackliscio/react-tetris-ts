/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: `var(--background)`,
        background_light: `var(--background_light)`,
        background_dark: `var(--background_dark)`,
        board: `var(--board)`,
        board_shade: `var(--board_shade)`,
        button: `var(--button)`,
        button_shade: `var(--button_shade)`,
        button_text: `var(--button_text)`,
        control_focus: `var(--control_focus)`,
        outline: `var(--outline)`,
        text: `var(--text)`,
        shape_i: `var(--shape_i)`,
        shape_j: `var(--shape_j)`,
        shape_l: `var(--shape_l)`,
        shape_o: `var(--shape_o)`,
        shape_s: `var(--shape_s)`,
        shape_t: `var(--shape_t)`,
        shape_z: `var(--shape_z)`,
        shape_full: `var(--shape_full)`,
        shape_hint: `var(--shape_hint)`,
      },
      flex: {
        '2': '2 2 0%'
      },
      screens: {
        'touch': {
          'raw': '(hover:none)'
        },
        'notouch': {
          'raw': '(hover:hover)'
        },
        'short': {
          'raw': '(max-height: 600px)'
        },
        'tall': {
          'raw': '(min-height: 800px)'
        },
      }
    },
  },
  plugins: [],
}

