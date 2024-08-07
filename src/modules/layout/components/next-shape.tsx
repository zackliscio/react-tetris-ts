import { useMemo } from "react";

import { useGameContext } from "@/context/game/hooks";
import { BoardCell } from "@/shared/components/board-cell";
import { Labeled } from "@/shared/components/labeled";
import { BOARD_AREA_SMALL } from "@/shared/constants/board";
import { SHAPES_SMALL } from "@/shared/constants/shape";
import { useIntl } from "react-intl";

export function NextShape() {
  const { formatMessage } = useIntl();
  const { state } = useGameContext();
  const coords = state ? SHAPES_SMALL[state.shapeNext][state.rotateNext] : null;

  const boardCells = useMemo(() => [...Array(BOARD_AREA_SMALL)].map((_el, index) => index), []);

  return (
    <Labeled label={formatMessage({ id: "next" })}>
      <div className="flex mt-2">
        <div className="grid gap-1 grid-cols-4">
          {boardCells.map((index) => (
            <BoardCell
              classNameEmpty="bg-board"
              key={index}
              shape={state && coords?.includes(index) ? state.shapeNext : null}
            />
          ))}
        </div>
      </div>
    </Labeled>
  );
}
