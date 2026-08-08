# CleanLaunch Privacy Policy

Last updated: 2026-08-08

CleanLaunch is a Windows desktop shortcut manager. This policy explains what data CleanLaunch collects, where it is sent, and how you can control it.

## Data stored locally on your device

CleanLaunch stores the following data in `%APPDATA%/CleanLaunch/` on your device:

- **Shortcut layout** - file names, folder structure, grid positions, and folder colours for the shortcuts you add to the grid.
- **Launch statistics** - a launch count and last-launch timestamp per shortcut, used to rank recent and frequently used items in the Command Palette. No file contents are stored.
- **Search history** - when you use the Command Palette in Google or Wikipedia mode, your search queries are saved locally so you can quickly re-run them. Each mode (Google, Wikipedia) keeps a separate list of up to 20 queries, stored most-recent-first, in `search_history.json`. Wikipedia history is recorded when you scroll an article preview, when it stays on screen for three seconds, or when you open the article in your browser (from the result row or the Source link under the preview). Google history is recorded when you launch a Google search. Queries are deduplicated by normalized text.
- **Settings** - theme, window opacity, tile size, hotkey configuration, and other preferences.
- **Icon cache** - extracted shortcut icons cached as PNG files for fast loading.

None of this local data is uploaded by CleanLaunch. It never leaves your device.

## Data sent to external services

CleanLaunch sends data to external services only in these specific cases:

- **Wikipedia search** - when you select the Wikipedia scope in the Command Palette, CleanLaunch sends what you type to the Wikimedia Foundation API (`en.wikipedia.org`). This happens automatically while you type: as soon as your query is at least two characters long, it is sent about 300 milliseconds after you stop typing. **You do not have to press Enter for this to happen.** Selecting an article can trigger a second request to the same service for that article's text, which is then shown in the preview pane under the CC BY-SA 4.0 licence. Nothing is sent to Wikipedia while you are in Local or Google mode.
- **Google search** - when you select the Google scope and launch a search, your query is sent to Google by opening your default browser. CleanLaunch does not send your query to Google directly; it opens your browser to a Google search URL. Typing alone sends nothing.
- **Currency exchange rates** - when you type a currency conversion in the Command Palette (e.g. "100 USD to EUR"), CleanLaunch fetches reference exchange rates from the European Central Bank (`www.ecb.europa.eu`). Rates are cached locally for up to 24 hours and remain available offline. No query text is sent to the ECB; only the rate feed is downloaded.
- **Microsoft Store** - if you installed CleanLaunch from the Microsoft Store, the Store handles installation and updates according to Microsoft's own privacy policy.

To summarise what typing alone does: in Local mode nothing is sent anywhere, in Google mode nothing is sent until you launch the search, and in Wikipedia mode your query is sent to Wikipedia automatically as described above.

## Removing your data

You can remove data at any time:

- **Search history** - in the Command Palette, switch to Google or Wikipedia mode with an empty query, then click the "Clear" button in the history header to clear that mode's list. You can also remove individual entries with the x button on each row.
- **Launch statistics** - in the Command Palette, use the "Clear recents" button on an empty Local query.
- **Icon cache** - in Settings > About, click "Clear cache".
- **Settings** - in Settings > About, click "Reset settings". This deletes `settings.json` and restores the defaults. It does **not** delete your search history, launch statistics, shortcut layout, or icon cache.
- **Everything** - delete the `%APPDATA%/CleanLaunch/` folder. That removes all data CleanLaunch stores locally, including your search history.

## Permissions

CleanLaunch requests the following Windows capabilities:

- **File system access** - to copy, organize, and launch your shortcuts.
- **Shell access** - to launch applications, extract icons, and interact with Windows system folders.
- **Audio control** - to adjust system volume and switch audio devices.
- **Network access** - for Wikipedia search, Google search (via your browser), and ECB currency rates only.
- **Global hotkey** - to show or hide the window from anywhere.

CleanLaunch does not access your camera, microphone, location, contacts, messages, or browsing history.

## Children's privacy

CleanLaunch is a general-purpose utility and is not directed at children under 13. We do not knowingly collect any data from anyone.

## Changes to this policy

If this policy changes, the updated version will be included with the next release of CleanLaunch and the date above will be updated.

## Contact

For privacy questions or concerns, please open an issue at [https://github.com/IAmInControlll/docs/issues](https://github.com/IAmInControlll/docs/issues). Anyone can open an issue there; no special access is needed.
