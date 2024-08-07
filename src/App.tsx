import { AppProvider } from "@/context/app";
import { GameProvider } from "@/context/game";
import { messages } from "@/messages";
import { GameCountdown } from "@/modules/countdown";
import { Game } from "@/modules/game";
import { Layout } from "@/modules/layout";
import { GameMenu } from "@/modules/menu";

import { IntlProvider } from "react-intl";
import "./app.css";
import styles from "./app.module.css";

export default function App() {
  return (
    <IntlProvider messages={messages} locale="en" defaultLocale="en">
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
  );
}
