import { PropsWithChildren } from "react";

import { ColumnControls } from "./components/column-controls";
import { ColumnStats } from "./components/column-stats";
import { Level } from "./components/level";
import { NextShape } from "./components/next-shape";
import { Score } from "./components/score";
import styles from "./layout.module.css";

export function Layout({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={[styles.layout, className].filter(Boolean).join(" ")}>
      <ColumnStats side="left">
        <NextShape />
      </ColumnStats>
      <ColumnControls side="left" />
      <div className={[styles.board, "relative z-10"].join(" ")}>{children}</div>
      <ColumnStats side="right">
        <Score />
        <Level />
      </ColumnStats>
      <ColumnControls side="right" />
    </div>
  );
}
