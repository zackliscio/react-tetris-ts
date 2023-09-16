import { Level } from '@/components/level/Level';
import { Next } from '@/components/next/Next';
import { Score } from '@/components/score/Score';
import { GAME_ACTION } from '@/context/Context.actionTypes';
import { useTetrisContext } from '@/context/Context.utils';

export function LayoutTopBar(props: { className?: string }) {
  const { dispatch } = useTetrisContext();

  return (
    <div className={props.className}>
      <Next isSmall />
      <Level className="@md/layout:flex hidden" isSmall />
      <Score isSmall />
      <button
        className="absolute inset-0 focus:outline-none"
        type="button"
        onClick={() => dispatch({ type: GAME_ACTION.TOGGLE_PAUSE })}
      />
    </div>
  );
}
