import { JSX } from "react";

export type BulletPoint = {
  text?: string | JSX.Element;
  lines?: (string | JSX.Element)[];
};