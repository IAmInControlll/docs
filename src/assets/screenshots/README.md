# Screenshots

Drop real screenshots here as the user provides them. The `Screenshot` component checks for the file by name and renders it if present, otherwise shows a styled placeholder.

## Expected filenames

| Filename | Used by | Notes |
|---|---|---|
| `hero-workspace.png` | Hero | Before/after or workspace-over-desktop composition. 16:9. |
| `grid-view.png` | FeatureShowcase tab 1 | The main visual workspace, drag-and-drop grid. |
| `folders.png` | FeatureShowcase tab 2 | In-app folders, junctions, navigation. |
| `themes.png` | FeatureShowcase tab 3 | Personalisation, themes, tile size, opacity. |
| `peek.png` | FeatureShowcase tab 4 | Peek file previews. |
| `palette.png` | FeatureShowcase tab 5 | Command Palette (local, Google, Wikipedia). |

Place files at `src/assets/screenshots/<filename>` and import them through the `Screenshot` component. Do not put screenshots in `public/` - they should be processed by the build so they get hashed and optimized.
