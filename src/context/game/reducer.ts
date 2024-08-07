import { GameAction, GameActionType } from "./action-types";
import { move, rotate } from "./actions/move";
import { countdownFinished, drop, pause, restart, unpause } from "./actions/status";
import { tick } from "./actions/tick";
import { GameContextValue } from "./types";

export function gameReducer(state: GameContextValue, action: GameAction) {
  switch (action.type) {
    case GameActionType.COUNTDOWN_FINISHED: {
      return countdownFinished(state);
    }
    case GameActionType.DROP: {
      return drop(state, action.payload);
    }
    case GameActionType.PAUSE: {
      return pause(state);
    }
    case GameActionType.UNPAUSE: {
      return unpause(state);
    }
    case GameActionType.RESTART: {
      return restart(state, action.payload);
    }
    case GameActionType.ROTATE: {
      return rotate(state, action.payload);
    }
    case GameActionType.TICK: {
      return tick(state);
    }
    case GameActionType.MOVE: {
      return move(state, action.payload);
    }
  }
}
