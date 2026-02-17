'use client'

import { useState } from "react";
import Shortcut from "./Shortcut";
import "./styles/page.css";

export default function HomeShortcut() {
  const [shortcutEnabled, setShortcutEnabled] = useState(false);

  return (
    <main>
      <div className="home-handle-shortcut">
        {!shortcutEnabled && (
          <button
            className="home-handle-shortcut-btn"
            onClick={() => setShortcutEnabled((prev) => !prev)}
          >
            This button has keyboard shortcuts enabled!
          </button>
        )}
        {shortcutEnabled && <Shortcut setShortcutEnabled={setShortcutEnabled} />}
      </div>
    </main>
  );
}
