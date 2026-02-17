'use client'

import React from "react";
import { SHORTCUTS } from "./constants/shortcuts";
import { useShortcut } from "./hooks/use-shortcut";
import "./styles/Shortcut.css";

type ShortcutProps = {
  setShortcutEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Shortcut({ setShortcutEnabled }: ShortcutProps) {
  const { key, code, shortcutName } = useShortcut();

  const handleShortcutKey = () => {
    const shortcutObj = SHORTCUTS.find(s => s.label === shortcutName);
    return (
      <>
        <div className="shortcut-shortcut-name">Shortcut: {shortcutName}</div>
        {shortcutObj && (
          <div className="shortcut-shortcut-key">Key: {shortcutObj.key}</div>
        )}
      </>
    );
  };

  return (
    <>
      <div className="shortcut-header">
        <span>keyboard shortcuts</span>
        <button
          className="shortcut-close-btn"
          onClick={() => setShortcutEnabled((prev) => !prev)}
        >
          X
        </button>
      </div>
      <div className="shortcut-container">
        {key.length === 0 ? (
          <h2 className="shortcut-message">Press any key...</h2>
        ) : (
          <ul className="shortcut-list">
            <li className="shortcut-item">
              <div className="shortcut-key-display">key: {key}</div>
              <div className="shortcut-code-display">code: {code}</div>
              {shortcutName && handleShortcutKey()}
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
