import { BoardGame } from './BoardGame';
import { BoardMenu } from './BoardMenu';
import { BoardOverlay } from './BoardOverlay';

export function Boards() {
  return (
    <>
      <BoardGame />
      <BoardMenu />
      <BoardOverlay />
    </>
  );
}
