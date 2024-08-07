<div align="center" className="flex flex-col items-center gap-4">
  <img src="https://www.cibulka.codes/onion-dark.png" height="128" width="128" />
  <h1 align="center" className="text-5xl font-bold">
    <a href="https://www.cibulka.codes/tetris">www.cibulka.codes/tetris</a>
  </h1>
</div>

<br />

_This project is a tribute to original Tetris game. It is intended to test the capibilities of React and is not affiliated with [The Tetris Company](https://tetris.com/) in any way. It is completely open-source and not used for any commercial purposes._

<br />

<div align="center" className="flex justify-center items-center gap-4">
  <a aria-label="NPM package" href="https://npmjs.com/react-tetris-ts">
    <img src="https://img.shields.io/badge/NPM_package-black?logo=NPM&labelColor=black" />
  </a>
  <a aria-label="React" href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-black?logo=React&labelColor=black" />
  </a>
  <a aria-label="Vite" href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-black?logo=vite&labelColor=black" />
  </a>
  <a aria-label="TypeScript" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-black?logo=TypeScript&labelColor=black" />
  </a>
  <a aria-label="Tailwind" href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-black?logo=tailwindcss&labelColor=black" />
  </a>
  <a aria-label="My resumé" href="https://www.cibulka.codes/cv.pdf">
    <img src="https://img.shields.io/badge/Download_my_resumé!-blue" />
  </a>
</div>

<br />

<img src="https://www.cibulka.codes/og_tetris.png" className="mb-12" />

<br />

## 🔧 Install & Use

This project is built as a NPM module easily includable to any React application ([www.cibulka.codes](https://www.github.com/cibulka/cibulka.codes), for example).

### Install as NPM module

1. Install the project as one of your dependencies.

```bash
npm install https://www.github.com/cibulka/react-tetris-ts
```

2. Import the library to your project.

```tsx
import Tetris from "react-tetris-ts";

export default function PageWithTetris() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Tetris />
    </div>
  );
}
```

> **Important note**: The game is fully responsive, it will adapt (stretch) to the size of its container. For this reason the container **must have set size**. Use any unit comfortable for you: pixels, percentages, viewport units or else.

### Launch as a standalone app

1. Clone the repo

```
git clone https://www.github.com/cibulka/react-tetris
```

2. Install the dependencies and run

```
cd react-tetris
npm install
npm run dev
```

3. Open the local URL (shown in your terminal window), usually [http://localhost:5173](http://localhost:5173).

## 📦 Features

<details>
    <summary>📏 Fully responsive (container queries)</summary>
    <br />

The game is fully responsive to its container with the help of [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries). This is done so it reacts to the space you allocate for it in your layout, not size of the window.

> This however means that **the container needs to have a set size**. Use any unit comfortable for you: pixels, percentages, viewport units or else.

</details>

<br />

<details>
    <summary>👉 Fully optimised for touch screens</summary>
    <br />

The game is fully optimized for touch screens with [react-swipable](https://www.npmjs.com/package/react-swipeable), the only external dependency of the project outside of React.js.

</details>

<br />

<details>
    <summary>🕵️ GDPR compliant</summary>
    <br />

The game does not persists any information: Neither through cookies, nor through the `localStorage`. For this reason it is fully GDPR compliant and there is no need to have a cookie bar.

</details>

<br />

<details>
    <summary>💋 KISS ("Keep it simple, stupid")</summary>
    <br />

The game aims to be as simple as possible: Both through UI design, UX and technical sollution. It has only 2 production dependencies: [React.js](https://react.dev) and [React-swipable](https://github.com/FormidableLabs/react-swipeable) (to help with touch screen optimization).

</details>

<br />

<details>
    <summary>🍭 A little bit addictive</summary>
    <br />

Hopefully just enough.

</details>

## 🎨 Configuration (TypeScript)

All configuration is optional, library works out of the box.

If you want to include your configuration, pass it as a prop during the import:

```tsx
import Tetris, { TetrisAppConfig } from "react-tetris-ts";

export default function PageWithTetris() {
  const config: AppConfig = {
    // Your configuration
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Tetris />
    </div>
  );
}
```

<details>
    <summary>TetrisAppConfig (TS)</summary>
    <br />

```ts
type Config = {
  // Button in the menu that prompts the user to some action other than playing. It can be given either `href` (string with URL) or `onClick` (function triggered after clicking the button).
  action?: {
    href?: string;
    icon?: JSX.Element;
    onClick?: () => void;
    label: string;
  };
  // If you want to change color palette. Dark and light mode available.
  colors?: {
    main?: Partial<TetrisTheme>;
    dark?: Partial<TetrisTheme>;
    light?: Partial<TetrisTheme>;
  };
  // Text content of the app. Useful if your app is translated to multiple languages.
  i18N?: TetrisI18N;
  // CSS value of padding that should be applied around the board.
  padding = 0;
  // Dark mode preference
  theme?: 'dark' | 'mode';
};
```

</details>

<details>
    <summary>TetrisTheme (TS)</summary>
    <br />

```ts
type TetrisTheme = {
  background: string;
  board: string;
  button: string;
  button_shade: string;
  button_text: string;
  outline: string;
  text: string;
  shape_i: string;
  shape_j: string;
  shape_l: string;
  shape_o: string;
  shape_s: string;
  shape_t: string;
  shape_z: string;
};
```

</details>

<details>
    <summary>TetrisI18N (TS)</summary>
    <br />

```ts
type TetrisI18N = {
  action: string;
  menu: {
    initial: {
      level: string;
      rows: string;
    };
    colors: string;
    resume: string;
    start: string;
  };
  next: string;
  score: {
    level: string;
    levelSmall: string;
    score: string;
    scoreSmall: string;
  };
};
```

</details>

## 🧔‍♂️ The author

Coded with love by **Petr Cibulka**. Fully open-source. [Check my website](https://www.cibulka.codes), I might be looking for a job. 😊
