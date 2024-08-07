import { useIntl } from "react-intl";

import { useOnPlay } from "@/context/game/callbacks";
import { IconTetris } from "@/icons/IconTetris";
import { Button } from "@/shared/components/button";

export function ButtonPlay() {
  const { formatMessage } = useIntl();
  const onPlay = useOnPlay();
  return (
    <Button onClick={onPlay} icon={<IconTetris />}>
      {formatMessage({ id: "play" })}
    </Button>
  );
}
