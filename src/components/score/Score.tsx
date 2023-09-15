import { LayoutNumber } from '@/components/layout-number/LayoutNumber';
import { useConfigContext } from '@/context/config/Config.utils';
import { useGameContext } from '@/context/game/Game.utils';
import { getScore } from '@/utils/score';

export function Score(props: { isSmall?: boolean }) {
  const { i18N } = useConfigContext();
  const { state } = useGameContext();

  const score = state.game
    ? getScore(state.game.score, state.config.initialLevel, state.config.initialRows)
    : 0;

  return (
    <LayoutNumber
      isSmall={props.isSmall}
      label={props.isSmall ? i18N.score.scoreSmall : i18N.score.score}
      number={score}
    />
  );
}
