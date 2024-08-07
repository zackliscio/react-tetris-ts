import { Labeled } from "@/shared/components/labeled";
import { useScore } from "@/shared/hooks/use-score";
import { useIntl } from "react-intl";

export function MenuScore(props: { className?: string }) {
  const { formatMessage } = useIntl();
  const score = useScore();
  return <Labeled className={props.className} label={formatMessage({ id: "score" })} value={score} />;
}
