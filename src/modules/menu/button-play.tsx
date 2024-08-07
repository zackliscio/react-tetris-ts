import { useIntl } from "react-intl";

import { useOnPlay } from "@/context/game/callbacks";
import { IconHourglass } from "@/icons/IconHourglass";
import { IconTetris } from "@/icons/IconTetris";
import { Button } from "@/shared/components/button";

export function ButtonPlay(props: { disabled: boolean }) {
  const { formatMessage } = useIntl();
  const onPlay = useOnPlay();
  return (
    <Button onClick={onPlay} icon={props.disabled ? <IconHourglass /> : <IconTetris />} disabled={props.disabled}>
      {formatMessage({ id: "play" })}
    </Button>
  );
}
