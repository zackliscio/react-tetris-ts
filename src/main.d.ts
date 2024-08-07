import { TetrisConfig } from "@/shared/types/config";

export type { TetrisConfig } from "@/shared/types/config";

declare function App(props: { config?: Partial<TetrisConfig> }): JSX.Element;
export default App;
