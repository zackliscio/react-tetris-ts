import { PropsWithChildren } from "react";

import styles from "./column-stats.module.css";

export function ColumnStats(props: PropsWithChildren<{ side: "left" | "right" }>) {
  return (
    <div className={styles.root}>
      <div
        className={["sm:w-40 flex flex-col gap-8 lg:gap-12", props.side === "right" && "justify-end"]
          .filter(Boolean)
          .join(" ")}
      >
        {props.children}
      </div>
    </div>
  );
}
