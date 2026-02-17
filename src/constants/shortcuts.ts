export const SHORTCUTS = [
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
  { key: "alt+meta+esc", label: "Force Quit" },
];

export const SHORTCUTS_MAP = Object.fromEntries(
  SHORTCUTS.map(({ key, label }) => [key, label])
);
