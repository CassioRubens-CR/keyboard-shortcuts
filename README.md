 
## Keyboard Shortcuts React Library

### Summary
This project is a React library for displaying and handling keyboard shortcuts in web applications. It provides a modern, professional, and futuristic UI for shortcut visualization and detection.

### Technologies Used
- React (18+)
- TypeScript
- CSS Modules (pure CSS)
- Bundler: tsup

### Features
- Detects and displays keyboard shortcuts pressed by the user
- Beautiful, customizable UI for shortcut presentation
- Easy integration with any React or Next.js project

### Installation

Install via npm:

```bash
npm install keyboard-shortcuts-cr
```

### Usage

Import the main component and CSS in your project:

```tsx
import { HomeShortcut } from 'keyboard-shortcuts-cr';
import "keyboard-shortcuts-cr/dist/index.css";
// Ex Path: node_modules\keyboard-shortcuts-cr\dist\index.css

export default function Home() {
	return <HomeShortcut />;
}
```

### Components
- `HomeShortcut`: Entry component with button and shortcut visualization
- `Shortcut`: Standalone shortcut visualization component
- `useShortcut`: Hook to access shortcut info programmatically

```tsx
<div align="center">
  <picture>
    <img src="/public/image-1.png" width="500" style="max-width: 100%; height: auto; display: block; margin: 20px auto;" alt="Keyboard Shortcuts - Main Interface">
  </picture>
  <picture>
    <img src="/public/image.png" width="500" style="max-width: 100%; height: auto; display: block; margin: 20px auto;" alt="Keyboard Shortcuts - Detection Demo">
  </picture>
  <picture>
    <img src="/public/image-2.png" width="500" style="max-width: 100%; height: auto; display: block; margin: 20px auto;" alt="Keyboard Shortcuts - Shortcut Display">
  </picture>
  <picture>
    <img src="/public/image-3.png" width="500" style="max-width: 100%; height: auto; display: block; margin: 20px auto;" alt="Keyboard Shortcuts - Multiple Keys">
  </picture>
  <picture>
    <img src="/public/image-4.png" width="500" style="max-width: 100%; height: auto; display: block; margin: 20px auto;" alt="Keyboard Shortcuts - Advanced Usage">
  </picture>
</div>
```

### Example

```tsx
import { HomeShortcut, useShortcut } from 'keyboard-shortcuts-cr';
import "keyboard-shortcuts-cr/dist/index.css";
// Ex Path: node_modules\keyboard-shortcuts-cr\dist\index.css

export default function Home() {
	const shortcut = useShortcut();
	return (
		<>
			<HomeShortcut />
			<pre>{JSON.stringify(shortcut, null, 2)}</pre>
      // "pre" For verification and debugging purposes only.
      // "pre" Do not leave in the code.
		</>
	);
}
```

### License
MIT
