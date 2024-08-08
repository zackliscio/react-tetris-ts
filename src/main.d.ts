export type TetrisConfig = {
  locale?: string;
  height?: string;
  width?: string;
};

declare function App(props: Partial<TetrisConfig>): JSX.Element;
export default App;
