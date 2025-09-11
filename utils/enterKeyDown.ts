import { KeyboardEvent } from "react";

export function handleEnterKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
  if (e.key === "Enter") {
    e.currentTarget.blur();
  }
}
