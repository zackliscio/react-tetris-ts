import { BoardGame } from './BoardGame';
import { BoardMenu } from './BoardMenu';
import { BoardOverlay } from './BoardOverlay';

export function Boards() {
  return (
    <>
      <div className="glob-game-board-bg bg-board absolute inset-0" />
      <BoardGame />
      <BoardMenu />
      <BoardOverlay />
    </>
  );
}
