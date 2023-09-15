import { LayoutNumber } from '@/components/layout-number/LayoutNumber';
import { useConfigContext } from '@/context/config/Config.utils';
import { useGameContext } from '@/context/game/Game.utils';
import { getLevel } from '@/utils/score';

export function Level() {
  const { i18N } = useConfigContext();
  const { state } = useGameContext();

  const score = state.game
    ? getLevel(state.game.score, state.config.initialLevel)
    : state.config.initialLevel;

  return <LayoutNumber label={i18N.score.level} number={score} />;
}
