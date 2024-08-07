import { useAppCallbacks, useLightMode } from "@/context/app";
import { IconDarkMode } from "@/icons/IconDarkMode";
import { IconLightMode } from "@/icons/IconLightMode";
import { ThemeMode } from "@/shared/constants/theme";

const icons = {
  [ThemeMode.LIGHT]: IconLightMode,
  [ThemeMode.DARK]: IconDarkMode,
};

export function LightModeIcon(props: { themeMode: ThemeMode }) {
  const currentLightMode = useLightMode();
  const { onThemeModeDark, onThemeModeLight } = useAppCallbacks();

  const callbacks = {
    [ThemeMode.LIGHT]: onThemeModeLight,
    [ThemeMode.DARK]: onThemeModeDark,
  };
  const Icon = icons[props.themeMode];
  const onClick = callbacks[props.themeMode];

  const isReady = Boolean(currentLightMode && onClick);
  const isActive = currentLightMode === props.themeMode;

  return isReady ? (
    <button
      type="button"
      className={["w-8 h-8", isActive ? "text-shape_z" : "text-board_shade"].filter(Boolean).join(" ")}
      onClick={onClick}
    >
      <Icon className="fill-current" />
    </button>
  ) : (
    <span className="w-8 h-8 rounded-full bg-board_shade animate-pulse" />
  );
}
