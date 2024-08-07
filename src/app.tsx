import { IntlProvider } from "react-intl";

import { AppProvider } from "@/context/app";
import { GameProvider } from "@/context/game";
import { messages } from "@/messages";
import { GameCountdown } from "@/modules/countdown";
import { Game } from "@/modules/game";
import { Layout } from "@/modules/layout";
import { GameMenu } from "@/modules/menu";
import { LOCALE_DEFAULT } from "@/shared/constants/i18n";

import "./app.css";
import styles from "./app.module.css";
import { TetrisConfig } from "./main";

export default function App(props?: TetrisConfig) {
  const locale = props?.locale || LOCALE_DEFAULT;
  return (
    <IntlProvider messages={messages[locale]} locale="en" defaultLocale={LOCALE_DEFAULT}>
      <AppProvider>
        <GameProvider>
          <Layout className="react-tetris-ts bg-background text-text">
            <div className={styles.root}>
              <Game />
              <GameMenu />
              <GameCountdown />
            </div>
          </Layout>
        </GameProvider>
      </AppProvider>
    </IntlProvider>
  );
}
