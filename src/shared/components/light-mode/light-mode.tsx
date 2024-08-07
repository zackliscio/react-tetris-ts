import { Labeled } from "@/shared/components/labeled";
import { ThemeMode } from "@/shared/constants/theme";
import { useIntl } from "react-intl";
import { LightModeIcon } from "./icon";

export function LightMode() {
  const { formatMessage } = useIntl();
  return (
    <Labeled label={formatMessage({ id: "lightMode" })}>
      <div className="flex items-center gap-4">
        <LightModeIcon themeMode={ThemeMode.LIGHT} />
        <LightModeIcon themeMode={ThemeMode.DARK} />
      </div>
    </Labeled>
  );
}
