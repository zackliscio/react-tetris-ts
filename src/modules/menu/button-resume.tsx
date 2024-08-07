import { useIntl } from "react-intl";

import { useGameCallbacks } from "@/context/game";
import { IconTetris } from "@/icons/IconTetris";
import { Button } from "@/shared/components/button";

export function ButtonResume() {
  const { formatMessage } = useIntl();
  const { onUnpause } = useGameCallbacks();
  return (
    <Button onClick={onUnpause} icon={<IconTetris />}>
      {formatMessage({ id: "resume" })}
    </Button>
  );
}
