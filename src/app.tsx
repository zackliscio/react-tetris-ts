import { IntlProvider } from "react-intl";

import { AppProvider } from "@/context/app";
import { GameProvider } from "@/context/game";
import { messages } from "@/messages";
import { GameCountdown } from "@/modules/countdown";
import { Game } from "@/modules/game";
import { Layout } from "@/modules/layout";
import { GameMenu } from "@/modules/menu";
import { LOCALE_DEFAULT } from "@/shared/constants/i18n";
import { ROOT_CLASSNAME } from "@/shared/constants/ui";

import "./app.css";
import styles from "./app.module.css";
import { TetrisConfig } from "./main";

export default function App(props?: TetrisConfig) {
  const locale = props?.locale || LOCALE_DEFAULT;
  const width = props?.width || "100svw";
  const height = props?.height || "100dvh";

  return (
    <>
      <div className={ROOT_CLASSNAME} style={{ width, height }}>
        <IntlProvider messages={messages[locale]} locale="en" defaultLocale={LOCALE_DEFAULT}>
          <AppProvider>
            <GameProvider>
              <Layout className="bg-background text-text">
                <div className={styles.root}>
                  <Game />
                  <GameMenu />
                  <GameCountdown />
                </div>
              </Layout>
            </GameProvider>
          </AppProvider>
        </IntlProvider>
      </div>
    </>
  );
}
