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

## 📦 Features

<details>
    <summary>📏 Fully responsive</summary>
    <br />

The game is fully responsive and allows the user to select their preferred way how to interact with it: in portrait or landscape mode.

To span 100% of the viewport, the game uses `dvh` units (to prevent layout shifts on change of browser's UI).

</details>

<br />

<details>
    <summary>👉 Fully optimised for touch screens (in both landscape and portrait mode)</summary>
    <br />

Touch screens are interacted with by **swiping** (to indicate the direction or to "drop" the shape) and **tapping** (to rotate the shape). If a user flips their device to landscape, they get to use more traditional **tap-based controls** as well.

</details>

<br />

<details>
    <summary>⌨️ Keyboard navigation</summary>
    <br />

The game works **on desktop** through keyboard navigation: by pressing arrow keys (⬅️⬆️⬇️➡️) or WASD. Pressing the spacebar pauses (or unpauses) the game.

</details>

<br />

<details>
    <summary>🕵️ GDPR compliant</summary>
    <br />

The game does not persists any information: Neither through cookies, nor through the `localStorage`. For this reason it is fully GDPR compliant and there is no need to have a cookie bar.

</details>

<br />

<details>
    <summary>🌚 Dark & Light mode</summary>
    <br />

Users can switch between dark and light mode. Personally I find the dark mode more aesthetically pleasing, so I've decided to set it as the default.

The light mode is done through CSS, so there is no color flash before the UI hydration.

</details>

<br />

<details>
    <summary>🎚️ Game settings & Game UX</summary>
    <br />

Users can select both the **initial level** and **initial rows**, to set the difficulty of the game as they please.

The speed of the game gradually increases with the score, to prevent users from being bored.

If the user resumes the game from the "paused state", the countdown of 3 seconds is shown first: This is to prevent users from cheating in higher speeds.

</details>

<br />

<details>
    <summary>🌐 Internalization (i18n)</summary>
    <br />
The game is fully translatable to any language, it uses [react-intl](https://formatjs.io/docs/react-intl/) to prevent any text to be hardcoded. At the moment I provide English and Czech languages - in the future the list might extend.

The language is provided as the prop to the defualt export: I did not want to clutter the game's UI with the language switcher.

</details>

<br />

<details>
    <summary>💋 KISS ("Keep it simple, stupid")</summary>
    <br />

The game aims to be as simple as possible: Both through UI design, UX and technical sollution.

Besides [React.js](https://react.dev) and i18n solution (see above), it has only 2 UI production dependencies:

- [react-swipable](https://github.com/FormidableLabs/react-swipeable): API for swipe gestures to provide touch display optimizations
- [react-range](https://github.com/tajo/react-range): Headless solution for `[input type=range]`, that is a bit easier to style than native browser solution.

</details>

<br />

<details>
    <summary>🍭 A little bit addictive</summary>
    <br />

Hopefully the game is addictive _just enough_. :)

</details>

## 🎮 Go play!

You can find the demo at [cibulka.codes/tetris](https://www.cibulka.codes/tetris).

## 🔧 Install & Use

This project is built as a NPM module easily includable to any React application ([www.cibulka.codes](https://www.github.com/cibulka/cibulka.codes), for example).

### Install as NPM module

1. Install the project as one of your dependencies.

```bash
npm install react-tetris-ts
```

2. Import the library to your project.

```tsx
import Tetris from "react-tetris-ts";

export default function PageWithTetris() {
  return <Tetris />;
}
```

### Launch as a standalone app

1. Clone the repo

```
git clone https://www.github.com/cibulka/react-tetris-ts
```

2. Install the dependencies and run

```
cd react-tetris-ts
npm install
npm run dev
```

3. Open the local URL (shown in your terminal window), usually [http://localhost:5173](http://localhost:5173).

## 🎨 Configuration (TypeScript)

All configuration is optional, library works out of the box.

```tsx
import Tetris from "react-tetris-ts";

export default function PageWithTetris() {
  return <Tetris />;
}
```

<details>
    <summary>TetrisConfig (TS)</summary>
    <br />

```ts
type TetrisConfig = {
  /**
   * The language of the app.
   * @default en
   */
  locale?: "cs" | "en";
  /**
   * Height of the screen - any CSS unit.
   * @default 100dvh
   */
  height?: string;
  /**
   * Width of the screen - any CSS unit.
   * @default 100dvw
   */
  width?: string;
};
```

</details>

## 🧔‍♂️ Made by

Coded with love by **Petr Cibulka**. Fully open-source. [Check my website](https://www.cibulka.codes), I might be looking for a job. 😊
