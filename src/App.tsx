import { useEffect } from 'react';

import { Layout } from '@/components/layout/Layout';
import { GREETING } from '@/constants/branding';
import { TetrisContextWrap } from '@/context/Context';
import { Boards } from '@/sections/boards/Boards';
import { CSSVars } from '@/sections/css-vars/CSSVars';
import { TetrisAppConfig } from '@/types/public';

import './index.css';

function App(props: { config?: Partial<TetrisAppConfig> }) {
  useEffect(() => console.log(GREETING), []);

  return (
    <TetrisContextWrap config={props.config}>
      <CSSVars />
      <Layout>
        <Boards />
      </Layout>
    </TetrisContextWrap>
  );
}

export default App;
