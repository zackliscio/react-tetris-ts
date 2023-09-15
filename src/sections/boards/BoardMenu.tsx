import { Board } from '@/components/board/Board';
import { Button } from '@/components/button/Button';
import { LayoutForm } from '@/components/layout-form/LayoutForm';
import { Range } from '@/components/range/Range';
import { Score } from '@/components/score/Score';
import { ThemeSwitchButton } from '@/components/theme-switch-button/ThemeSwitchButton';
import { THEME_MODE } from '@/constants/colors';
import { LEVEL_MAX, LEVEL_MIN, ROWS_MAX, ROWS_MIN, TETRIS_STATUS } from '@/constants/game';
import { useConfigContext } from '@/context/config/Config.utils';
import { GAME_ACTION } from '@/context/game/Game.actionTypes';
import { useGameContext } from '@/context/game/Game.utils';
import { IconBriefcase } from '@/icons/IconBriefcase';
import { IconTetris } from '@/icons/IconTetris';

export function BoardMenu() {
  const { state, actions } = useGameContext();
  const startCountdown = actions[GAME_ACTION.START_COUNTDOWN];
  const setInitialLevel = actions[GAME_ACTION.INITIAL_LEVEL];
  const setInitialRows = actions[GAME_ACTION.INITIAL_ROWS];
  const isFinished = Boolean(state.game?.isFinished);
  const isResumable = state.game && !isFinished;

  const config = useConfigContext();
  const { action, i18N } = config;

  return (
    <Board id="menu" isVisible={state.status !== TETRIS_STATUS.PLAYING || isFinished}>
      <div className="flex flex-col md:gap-8 gap-6">
        <Score />
        <Button icon={<IconTetris />} onClick={startCountdown}>
          {isResumable ? i18N.menu.resume : i18N.menu.start}
        </Button>
        {!isResumable && (
          <>
            <Range
              label={i18N.menu.initial.level}
              min={LEVEL_MIN}
              max={LEVEL_MAX}
              value={state.config.initialLevel}
              onChange={setInitialLevel}
            />
            <Range
              label={i18N.menu.initial.rows}
              min={ROWS_MIN}
              max={ROWS_MAX}
              value={state.config.initialRows}
              onChange={setInitialRows}
            />
          </>
        )}
        <LayoutForm label={i18N.menu.colors}>
          <div className="flex gap-4 text-text">
            <ThemeSwitchButton theme={THEME_MODE.DARK} />
            <ThemeSwitchButton theme={THEME_MODE.LIGHT} />
            <ThemeSwitchButton theme={THEME_MODE.SYSTEM} />
          </div>
        </LayoutForm>
        {action && (
          <Button icon={<IconBriefcase />} href={action.href} onClick={action.onClick}>
            {action.label}
          </Button>
        )}
      </div>
    </Board>
  );
}
