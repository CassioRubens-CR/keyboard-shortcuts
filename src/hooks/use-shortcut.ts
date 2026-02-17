'use client'

import { useEffect, useState } from "react";
import { SHORTCUTS_MAP } from "../constants/shortcuts";

type ShortcutInfo = {
  key: string;
  code: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  meta?: boolean;
  shortcutName?: string;
};

export function useShortcut() {
  const [keyCode, setKeyCode] = useState<ShortcutInfo>({
    key: "",
    code: "",
  });

  useEffect(() => {
    const handleKeyboardEvent = (event: KeyboardEvent) => {
      const info: ShortcutInfo = {
        key: event.key,
        code: event.code,
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
        meta: event.metaKey,
      };

      const shortcuts = SHORTCUTS_MAP;

      const combo = [
        event.ctrlKey ? "ctrl" : "",
        event.shiftKey ? "shift" : "",
        event.altKey ? "alt" : "",
        event.metaKey ? "meta" : "",
        event.key.toLowerCase(),
      ]
        .filter(Boolean)
        .join("+");

      if (shortcuts[combo]) {
        info.shortcutName = shortcuts[combo];
      }

      setKeyCode(info);
    };

    window.addEventListener("keydown", handleKeyboardEvent);
    return () => window.removeEventListener("keydown", handleKeyboardEvent);
  }, []);

  return keyCode;
}
