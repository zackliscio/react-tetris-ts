import { useGameCallbacks } from "@/context/game";
import { IconArrowLeft } from "@/icons/IconArrowLeft";
import { IconRotate } from "@/icons/IconRotate";

export function useControls() {
  const { onMoveLeft, onMoveRight, onRotate, onDropStart } = useGameCallbacks();

  return {
    drop: {
      icon: <IconArrowLeft className="flex w-1/3 transform -rotate-90" />,
      onClick: onDropStart,
    },
    left: {
      icon: <IconArrowLeft className="flex w-1/3" />,
      onClick: onMoveLeft,
    },
    right: {
      icon: <IconArrowLeft className="flex w-1/3 transform rotate-180" />,
      onClick: onMoveRight,
    },
    rotate: {
      icon: <IconRotate className="flex w-1/5" />,
      onClick: onRotate,
    },
  };
}
