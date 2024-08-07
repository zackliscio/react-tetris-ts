import { Labeled } from "@/shared/components/labeled";
import { useLevel } from "@/shared/hooks/use-level";
import { useIntl } from "react-intl";

export function Level() {
  const intl = useIntl();
  const level = useLevel();
  return <Labeled label={intl.formatMessage({ id: "level" })} value={level} />;
}
