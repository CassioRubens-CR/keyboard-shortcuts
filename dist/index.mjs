// src/HomeShortcut.tsx
import { useState as useState2 } from "react";

// src/constants/shortcuts.ts
var SHORTCUTS = [
  // General System & File Shortcuts (Windows)
  { key: "ctrl+c", label: "Copy" },
  { key: "ctrl+insert", label: "Copy" },
  { key: "ctrl+x", label: "Cut" },
  { key: "shift+delete", label: "Cut" },
  { key: "ctrl+v", label: "Paste" },
  { key: "shift+insert", label: "Paste" },
  { key: "ctrl+z", label: "Undo" },
  { key: "ctrl+y", label: "Redo" },
  { key: "delete", label: "Move to Recycle Bin" },
  { key: "ctrl+d", label: "Move to Recycle Bin" },
  { key: "shift+delete", label: "Permanent Delete" },
  { key: "f2", label: "Rename" },
  { key: "f3", label: "Search File/Folder" },
  { key: "alt+enter", label: "Properties" },
  { key: "alt+f4", label: "Close App" },
  { key: "meta+d", label: "Show Desktop (Win)" },
  { key: "ctrl+esc", label: "Open Start Menu" },
  // Text Editing Shortcuts
  { key: "ctrl+a", label: "Select All" },
  { key: "ctrl+arrowleft", label: "Move Cursor by Word (Left)" },
  { key: "ctrl+arrowright", label: "Move Cursor by Word (Right)" },
  { key: "ctrl+arrowup", label: "Move Cursor by Paragraph (Up)" },
  { key: "ctrl+arrowdown", label: "Move Cursor by Paragraph (Down)" },
  { key: "ctrl+shift+arrowleft", label: "Highlight Word (Left)" },
  { key: "ctrl+shift+arrowright", label: "Highlight Word (Right)" },
  { key: "ctrl+shift+arrowup", label: "Highlight Paragraph (Up)" },
  { key: "ctrl+shift+arrowdown", label: "Highlight Paragraph (Down)" },
  { key: "ctrl+backspace", label: "Delete Word Left" },
  { key: "ctrl+delete", label: "Delete Word Right" },
  // Browser/Web Shortcuts
  { key: "ctrl+t", label: "New Tab" },
  { key: "ctrl+shift+t", label: "Reopen Closed Tab" },
  { key: "ctrl+l", label: "Focus Address Bar" },
  { key: "ctrl+f", label: "Find" },
  { key: "f3", label: "Find" },
  { key: "ctrl+r", label: "Refresh" },
  { key: "f5", label: "Refresh" },
  { key: "ctrl+plus", label: "Zoom In" },
  { key: "ctrl+-", label: "Zoom Out" },
  { key: "alt+arrowleft", label: "Back" },
  { key: "alt+arrowright", label: "Forward" },
  // macOS Equivalents
  { key: "meta+c", label: "Copy (macOS)" },
  { key: "meta+v", label: "Paste (macOS)" },
  { key: "meta+x", label: "Cut (macOS)" },
  { key: "meta+z", label: "Undo (macOS)" },
  { key: "meta+space", label: "Spotlight Search" },
  { key: "meta+q", label: "Quit App" },
  { key: "meta+w", label: "Close Window" },
  { key: "alt+meta+esc", label: "Force Quit" }
];
var SHORTCUTS_MAP = Object.fromEntries(
  SHORTCUTS.map(({ key, label }) => [key, label])
);

// src/hooks/use-shortcut.ts
import { useEffect, useState } from "react";
function useShortcut() {
  const [keyCode, setKeyCode] = useState({
    key: "",
    code: ""
  });
  useEffect(() => {
    const handleKeyboardEvent = (event) => {
      const info = {
        key: event.key,
        code: event.code,
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
        meta: event.metaKey
      };
      const shortcuts = SHORTCUTS_MAP;
      const combo = [
        event.ctrlKey ? "ctrl" : "",
        event.shiftKey ? "shift" : "",
        event.altKey ? "alt" : "",
        event.metaKey ? "meta" : "",
        event.key.toLowerCase()
      ].filter(Boolean).join("+");
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

// src/Shortcut.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Shortcut({ setShortcutEnabled }) {
  const { key, code, shortcutName } = useShortcut();
  const handleShortcutKey = () => {
    const shortcutObj = SHORTCUTS.find((s) => s.label === shortcutName);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "shortcut-shortcut-name", children: [
        "Shortcut: ",
        shortcutName
      ] }),
      shortcutObj && /* @__PURE__ */ jsxs("div", { className: "shortcut-shortcut-key", children: [
        "Key: ",
        shortcutObj.key
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "shortcut-header", children: [
      /* @__PURE__ */ jsx("span", { children: "keyboard shortcuts" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "shortcut-close-btn",
          onClick: () => setShortcutEnabled((prev) => !prev),
          children: "X"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "shortcut-container", children: key.length === 0 ? /* @__PURE__ */ jsx("h2", { className: "shortcut-message", children: "Press any key..." }) : /* @__PURE__ */ jsx("ul", { className: "shortcut-list", children: /* @__PURE__ */ jsxs("li", { className: "shortcut-item", children: [
      /* @__PURE__ */ jsxs("div", { className: "shortcut-key-display", children: [
        "key: ",
        key
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "shortcut-code-display", children: [
        "code: ",
        code
      ] }),
      shortcutName && handleShortcutKey()
    ] }) }) })
  ] });
}

// src/HomeShortcut.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function HomeShortcut() {
  const [shortcutEnabled, setShortcutEnabled] = useState2(false);
  return /* @__PURE__ */ jsx2("main", { children: /* @__PURE__ */ jsxs2("div", { className: "home-handle-shortcut", children: [
    !shortcutEnabled && /* @__PURE__ */ jsx2(
      "button",
      {
        className: "home-handle-shortcut-btn",
        onClick: () => setShortcutEnabled((prev) => !prev),
        children: "This button has keyboard shortcuts enabled!"
      }
    ),
    shortcutEnabled && /* @__PURE__ */ jsx2(Shortcut, { setShortcutEnabled })
  ] }) });
}
export {
  HomeShortcut,
  Shortcut,
  useShortcut
};
