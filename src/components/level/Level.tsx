import { LayoutNumber } from '@/components/layout-number/LayoutNumber';
import { useTetrisContext } from '@/context/Context.utils';
import { getLevel } from '@/utils/score';

export function Level(props: { className?: string; isSmall?: boolean }) {
  const { state } = useTetrisContext();
  const { config, game, gameSetup } = state;
  const { i18N } = config;

  const level = game ? getLevel(game.score, gameSetup.initialLevel) : state.gameSetup.initialLevel;

  return (
    <LayoutNumber
      className={props.className}
      isSmall={props.isSmall}
      label={props.isSmall ? i18N.score.levelSmall : i18N.score.level}
      number={level}
    />
  );
}
