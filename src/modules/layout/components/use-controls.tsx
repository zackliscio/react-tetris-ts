import { useGameCallbacks } from "@/context/game";
import { IconArrowLeft } from "@/icons/IconArrowLeft";
import { IconRotate } from "@/icons/IconRotate";

export function useControls() {
  const { onMoveLeft, onMoveRight, onRotate, onDrop } = useGameCallbacks();

  return {
    left: {
      top: {
        icon: <IconArrowLeft className="flex w-1/3" />,
        onClick: onMoveLeft,
      },
      bottom: {
        icon: <IconRotate className="flex w-1/5" />,
        onClick: onRotate,
      },
    },
    right: {
      top: {
        icon: <IconArrowLeft className="flex w-1/3 transform rotate-180" />,
        onClick: onMoveRight,
      },
      bottom: {
        icon: <IconArrowLeft className="flex w-1/3 transform -rotate-90" />,
        onClick: onDrop,
      },
    },
  };
}
