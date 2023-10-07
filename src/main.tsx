import App from './App';
import { i18n } from './constants/i18n';
import { TetrisAppConfig as Config } from './types/public';
import { TetrisTheme as Theme } from './types/public';

export type TetrisAppConfig = Config;
export type TetrisTheme = Theme;
export type TetrisI18N = typeof i18n;

export default App;
