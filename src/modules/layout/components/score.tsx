import { Labeled } from "@/shared/components/labeled";
import { useScore } from "@/shared/hooks/use-score";
import { useIntl } from "react-intl";

export function Score() {
  const { formatMessage } = useIntl();
  const score = useScore();
  return <Labeled label={formatMessage({ id: "score" })} value={score} />;
}
