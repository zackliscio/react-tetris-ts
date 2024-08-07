import { useIntl } from "react-intl";

import { useAppCallbacks, useAppContext } from "@/context/app";
import { Labeled } from "@/shared/components/labeled";
import { Range } from "@/shared/components/range";
import { ROWS_INITIAL_MAX, ROWS_INITIAL_MIN } from "@/shared/constants/initial";

export function InitialLevel() {
  const intl = useIntl();
  const {
    state: { initialLevel },
  } = useAppContext();
  const { onChangeInitialLevel } = useAppCallbacks();

  return (
    <Labeled label={intl.formatMessage({ id: "initialLevel" })}>
      <Range
        className="-mt-2"
        min={ROWS_INITIAL_MIN}
        max={ROWS_INITIAL_MAX}
        onChange={onChangeInitialLevel}
        value={initialLevel}
      />
    </Labeled>
  );
}
