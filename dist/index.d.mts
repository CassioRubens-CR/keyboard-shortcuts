import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare function HomeShortcut(): react_jsx_runtime.JSX.Element;

type ShortcutProps = {
    setShortcutEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};
declare function Shortcut({ setShortcutEnabled }: ShortcutProps): react_jsx_runtime.JSX.Element;

type ShortcutInfo = {
    key: string;
    code: string;
    ctrl?: boolean;
    shift?: boolean;
    alt?: boolean;
    meta?: boolean;
    shortcutName?: string;
};
declare function useShortcut(): ShortcutInfo;

export { HomeShortcut, Shortcut, useShortcut };
