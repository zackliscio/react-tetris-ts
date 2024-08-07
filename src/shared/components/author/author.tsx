import { useIntl } from "react-intl";

import { IconArrowLeft } from "@/icons/IconArrowLeft";
import { Labeled } from "@/shared/components/labeled";
import { CIBULKA_WEB } from "@/shared/constants/cibulka";

export function Author() {
  const { formatMessage } = useIntl();

  const link = <span className="underline">{CIBULKA_WEB.replace("https://", "")}</span>;

  return (
    <Labeled
      label={
        <span className="flex items-center gap-2">
          {formatMessage({ id: "authorLabel" })}
          <span className="text-xl">{formatMessage({ id: "authorEmoji" })}</span>
        </span>
      }
    >
      <div className="flex items-center gap-1">
        <a href={CIBULKA_WEB} className="block text-xs">
          {formatMessage(
            {
              id: "authorText",
            },
            {
              link,
            }
          )}
        </a>
        <span className="short:hidden flex w-6 h-6 transform rotate-180">
          <IconArrowLeft className="fill-current" />
        </span>
      </div>
    </Labeled>
  );
}
