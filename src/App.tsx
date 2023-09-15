import { useEffect } from 'react';

import { Layout } from '@/components/layout/Layout';
import { GREETING } from '@/constants/game';
import { ConfigContextWrap } from '@/context/config/Config.context';
import { AppConfig } from '@/context/config/Config.types';
import { GameContextWrap } from '@/context/game/Game.context';
import { Boards } from '@/sections/boards/Boards';
import { CSSVars } from '@/sections/css-vars/CSSVars';

function App(props: { config?: Partial<AppConfig> }) {
  useEffect(() => console.log(GREETING), []);

  return (
    <ConfigContextWrap config={props.config}>
      <GameContextWrap>
        <CSSVars />
        <Layout>
          <Boards />
        </Layout>
      </GameContextWrap>
    </ConfigContextWrap>
  );
}

export default App;
