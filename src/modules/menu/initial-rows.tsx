import { useAppCallbacks, useAppContext } from "@/context/app";
import { Labeled } from "@/shared/components/labeled";
import { Range } from "@/shared/components/range";
import { ROWS_INITIAL_MAX, ROWS_INITIAL_MIN } from "@/shared/constants/initial";
import { useIntl } from "react-intl";

export function InitialRows() {
  const { formatMessage } = useIntl();
  const {
    state: { initialRows },
  } = useAppContext();
  const { onChangeInitialRows } = useAppCallbacks();

  return (
    <Labeled label={formatMessage({ id: "initialRows" })}>
      <Range
        className="-mt-2"
        min={ROWS_INITIAL_MIN}
        max={ROWS_INITIAL_MAX}
        onChange={onChangeInitialRows}
        value={initialRows}
      />
    </Labeled>
  );
}
