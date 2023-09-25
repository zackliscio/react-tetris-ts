import { Button } from '@/components/button/Button';
import { LayoutForm } from '@/components/layout-form/LayoutForm';
import { Range } from '@/components/range/Range';
import { Score } from '@/components/score/Score';
import { ThemeSwitchButton } from '@/components/theme-switch-button/ThemeSwitchButton';
import { LEVEL_MAX, LEVEL_MIN, ROWS_MAX, ROWS_MIN, TETRIS_STATUS } from '@/constants/game';
import { TETRIS_THEME_MODE } from '@/constants/theme';
import { GAME_ACTION } from '@/context/Context.actionTypes';
import { useTetrisContext } from '@/context/Context.utils';
import { IconBriefcase } from '@/icons/IconBriefcase';
import { IconTetris } from '@/icons/IconTetris';

const { INITIAL_LEVEL, INITIAL_ROWS, START_COUNTDOWN } = GAME_ACTION;

export function BoardMenu() {
  const { state, dispatch } = useTetrisContext();
  const { game, config } = state;
  const { action, i18N } = config;
  const isFinished = Boolean(game?.isFinished);
  const isResumable = game && !isFinished;
  const startCountdown = () => dispatch({ type: START_COUNTDOWN });
  const setInitialLevel = (payload: number) => dispatch({ type: INITIAL_LEVEL, payload });
  const setInitialRows = (payload: number) => dispatch({ type: INITIAL_ROWS, payload });

  return (
    <div
      className={[
        'absolute top-0 left-0 w-full h-full',
        'flex items-center justify-center',
        state.status === TETRIS_STATUS.PLAYING && !isFinished && 'hidden',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="absolute inset-0 bg-board opacity-80" />
      <div
        className={['relative', 'flex flex-col', '@md/layout:gap-8 gap-6']
          .filter(Boolean)
          .join(' ')}
      >
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
              value={state.gameSetup.initialLevel}
              onChange={setInitialLevel}
            />
            <Range
              label={i18N.menu.initial.rows}
              min={ROWS_MIN}
              max={ROWS_MAX}
              value={state.gameSetup.initialRows}
              onChange={setInitialRows}
            />
          </>
        )}
        <LayoutForm label={i18N.menu.colors}>
          <div className="flex gap-4 text-text">
            <ThemeSwitchButton theme={TETRIS_THEME_MODE.DARK} />
            <ThemeSwitchButton theme={TETRIS_THEME_MODE.LIGHT} />
          </div>
        </LayoutForm>
        {action && (
          <Button icon={<IconBriefcase />} href={action.href} onClick={action.onClick}>
            {action.label}
          </Button>
        )}
      </div>
    </div>
  );
}
