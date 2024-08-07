export type TetrisConfig = {
  locale?: string;
  height?: string;
  width?: string;
};

declare function App(props: { config?: Partial<TetrisConfig> }): JSX.Element;
export default App;
