import { LayoutNumber } from '@/components/layout-number/LayoutNumber';
import { useTetrisContext } from '@/context/Context.utils';
import { getScore } from '@/utils/score';

export function Score(props: { isSmall?: boolean }) {
  const { state } = useTetrisContext();
  const { config, game, gameSetup } = state;
  const { i18N } = config;

  const score = game ? getScore(game.score, gameSetup.initialLevel, gameSetup.initialRows) : 0;

  return (
    <LayoutNumber
      isSmall={props.isSmall}
      label={props.isSmall ? i18N.score.scoreSmall : i18N.score.score}
      number={score}
    />
  );
}
