---
title: Privacy Policy
heading: Alcove Privacy Policy
summary: What Alcove keeps on your device, the three cases where anything leaves it, and how to remove all of it.
description: The Alcove privacy policy. Alcove is a visual workspace for Windows with no accounts, no telemetry, and no analytics.
updated: 2026-08-16
toc: true
---

Alcove is a visual workspace for Windows. This policy explains what data Alcove stores, where anything is sent, and how you can control it.

Alcove is a personal project built by [IAmInControlll](https://github.com/IAmInControlll), who is the data controller for the purposes of this policy. There's no company behind it, no account system, and no server that Alcove reports to. Contact details are at the [end of this page](#contact).

## In short

- Everything Alcove stores about your workspace lives on your own disk, in `%APPDATA%\Alcove\`.
- There is no account, no sign-in, and no identifier that ties your installation to you.
- There is no telemetry, no analytics, and no crash reporting.
- Three features reach the network, and all three are ones you trigger: Wikipedia lookups, opening a Google search in your browser, and downloading the European Central Bank rate feed.
- Nothing is sold, shared, or handed to an advertiser, because nothing is collected in the first place.

## What Alcove does not do

Alcove does not:

- Collect usage analytics, event data, or product metrics of any kind.
- Send crash reports, stack traces, or diagnostic logs anywhere.
- Create an account, a licence key, a device ID, or any other identifier for you.
- Contact a server of its own. There is no Alcove backend, and the app has no auto-updater, so it never checks in for a new version by itself.
- Read your browsing history, your documents, your email, or your clipboard.
- Show ads, or include any advertising or marketing SDK.
- Sell, rent, or share personal information with third parties.

## Data stored locally on your device

Alcove stores the following in `%APPDATA%\Alcove\`. All of it stays on your machine unless you export a backup yourself.

- **Your shortcut files** - when you add a shortcut, Alcove **copies the actual file** (`.lnk`, `.url`, or `.exe`) into the `shortcuts\` folder inside its own data folder. That copy is what the grid shows and launches, which is why removing an item from Alcove never touches the original on your desktop.
- **Linked folders** - an external folder you drag in becomes a Windows junction instead of a copy. Only the link is stored. The folder's contents are never copied and never moved.
- **Grid layout** - `positions.json` maps each item's path to its column and row on the grid.
- **Folder colours** - `folder_colors.json` maps in-app folders to the colour you picked for them.
- **Launch statistics** - `launch_stats.json` holds a launch count and a last-launch timestamp per item, used to rank recent and frequent entries in the Command Palette. No file contents are recorded.
- **Search history** - when you use the Command Palette in Google or Wikipedia mode, your queries are saved to `search_history.json` so you can re-run them. Each mode keeps a separate list of up to 20 queries, most recent first, deduplicated by normalised text. Wikipedia queries are recorded when you scroll an article preview, when a preview stays on screen for three seconds, or when you open the article in your browser. Google queries are recorded when you launch the search.
- **Settings** - `settings.json` holds your theme, window position and size, opacity, tile size, hotkey assignments, and the other preferences from the Settings modal.
- **Cached exchange rates** - `exchange_rates.json` holds the most recent European Central Bank reference rate feed, so currency answers keep working offline.
- **Icon cache** - `icons\` holds icons extracted from your shortcuts, as PNG and ICO files, so the grid loads quickly.

Alcove does not upload any of these files.

## Backups you create

Alcove can save your whole workspace to a single `.alcove-backup` file, at a location you choose, and restore from one later. A backup is an ordinary ZIP archive, and it is written and read only when you ask for it.

What a backup contains:

- Your settings, grid layout, folder colours, launch statistics, and **search history**.
- Copies of your shortcut files from the `shortcuts\` folder.
- A manifest recording each linked folder's path along with **the real path on disk that it points to**.

What a backup does not contain: the icon cache and the cached exchange rates, both of which are rebuilt afterwards, and the contents of linked folders, which are never copied.

Two things worth knowing:

- **A backup file carries your search history and your folder paths.** If you send a backup to somebody, or store it in shared or cloud storage, that information goes with it. Treat a backup as personal.
- **Backups are outside Alcove's control once written.** They live wherever you saved them, so deleting the Alcove data folder does not delete them. Delete backup files yourself when you no longer want them.

Restoring a backup replaces your current workspace. Only import backup files you trust: an archive can contain any kind of file, including programs, and restored files become launchable shortcuts.

## Data sent to external services

Alcove reaches the network in these cases only. As with any network request, the service on the other end sees your IP address and standard request headers. That's how HTTP works, not something Alcove adds.

- **Wikipedia search** - when you select the Wikipedia scope in the Command Palette, Alcove sends what you type to the Wikimedia Foundation API at `en.wikipedia.org`. This happens automatically as you type: once your query reaches two characters, it is sent about 300 milliseconds after you stop typing. **You do not have to press Enter for this to happen.** Selecting a result can trigger a second request for that article's text, shown in the preview pane under the CC BY-SA 4.0 licence. Nothing is sent to Wikipedia while you are in Local or Google mode. Wikimedia's handling of these requests is governed by the [Wikimedia Foundation Privacy Policy](https://foundation.wikimedia.org/wiki/Policy:Privacy_policy).
- **Google search** - when you select the Google scope and launch a search, Alcove opens your default browser at a Google search URL. It does not contact Google itself, and typing alone sends nothing. From that point on you are in your browser, and Google's own [privacy policy](https://policies.google.com/privacy) applies.
- **Currency exchange rates** - when you type a conversion such as `100 USD to EUR`, Alcove downloads the daily reference rate feed from the European Central Bank at `www.ecb.europa.eu`. Your query text is never sent; the same public feed is downloaded regardless of what you typed. Rates are cached locally for up to 24 hours, so repeated conversions usually make no request at all.
- **Microsoft Store** - if you installed Alcove from the Microsoft Store, the Store handles installation and updates under Microsoft's own privacy policy. Alcove itself performs no update checks.

To summarise what typing alone does: in Local mode nothing is sent anywhere; in Google mode nothing is sent until you launch the search; in Wikipedia mode your query is sent to Wikipedia automatically, as described above.

## How long data is kept

- **Workspace data** (shortcuts, layout, folder colours, settings, launch statistics) is kept until you delete the item, reset the setting, or remove the data folder. Nothing expires on its own.
- **Search history** keeps at most 20 queries per mode. The twenty-first pushes the oldest out.
- **Cached exchange rates** are treated as stale after 24 hours and replaced on the next conversion.
- **The icon cache** is kept until you clear it or the shortcut it belongs to is removed.

Because none of this leaves your device, there is no server-side copy with its own retention period.

## Removing your data

You can remove any of it at any time:

- **Search history** - in the Command Palette, switch to Google or Wikipedia mode with an empty query, then use the "Clear" button in the history header for that mode. Individual entries have an x button.
- **Launch statistics** - in the Command Palette, use "Clear recents" on an empty Local query.
- **Icon cache** - Settings > About > "Clear cache".
- **Settings** - Settings > About > "Reset settings". This deletes `settings.json` and restores the defaults. It does **not** delete your shortcuts, grid layout, folder colours, launch statistics, or search history.
- **Individual shortcuts** - delete them from the grid. For a linked folder, only the junction is removed; the original folder and everything in it is left alone.
- **Everything** - delete the `%APPDATA%\Alcove\` folder. That removes every file Alcove stores locally. Uninstalling through the Windows installer also offers to remove it.
- **Backups** - delete the `.alcove-backup` files yourself, wherever you saved them. Nothing else removes them.

## Permissions

Alcove requests the following Windows capabilities:

- **File system access** - to copy, organise, and launch your shortcuts.
- **Shell access** - to launch applications, extract icons, and work with Windows system folders.
- **Audio control** - to read and set system volume, switch output devices, and drive the per-app mixer.
- **Power actions** - to shut down, restart, sleep, or lock the machine when you confirm one of those actions.
- **Network access** - for Wikipedia lookups and the ECB rate feed only.
- **Global hotkeys** - to show or hide the window, Peek, and the Command Palette from anywhere.

Alcove does not access your camera, microphone, location, contacts, messages, or browsing history.

## Security

Alcove stores its files unencrypted in your Windows user profile, in the same way most desktop applications store their settings. They are protected by your Windows account: anyone who can sign in as you, or who has physical or administrative access to the machine, can read them. If that matters for your threat model, consider full-disk encryption such as BitLocker, and keep backup files somewhere you control.

## Your rights

Depending on where you live, data protection law such as the EU or UK GDPR, or the CCPA in California, gives you rights over personal data an organisation holds about you: access, correction, deletion, portability, and objection.

Here those rights are simple to exercise, because nothing is held about you anywhere but your own computer:

- **Access and portability** - every file is on your disk in plain JSON, and the backup feature exports the whole workspace in one archive.
- **Deletion** - see [Removing your data](#removing-your-data). No request to anyone is needed.
- **Objection and restriction** - the network features are opt-in by use. Staying in Local mode and not using currency conversion means nothing is requested at all.

The one exception is anything you send directly. If you email the address below, that message and your email address are processed by the relevant email provider so it can be read and answered, and are kept only as long as needed for that. If you open a GitHub issue instead, that content is public and is handled under [GitHub's Privacy Statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).

## This website

These pages are hosted on GitHub Pages. This site sets no cookies and loads no fonts, scripts, or trackers from third parties. GitHub does log request information, including visitor IP addresses, when serving the pages, as described in [GitHub's Privacy Statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement). Your theme preference is stored in your browser's local storage on your device and is never sent anywhere.

## Children's privacy

Alcove is a general-purpose utility and is not directed at children under 13. No data is knowingly collected from anyone, of any age.

## Changes to this policy

If this policy changes, the updated version will be published here and included with the next release of Alcove, and the "Last updated" date at the top of this page will change. Material changes will be called out in the app's changelog.

## Contact

For privacy questions, requests, or concerns, email <a href="mailto:iamincontrol.dev@gmail.com">iamincontrol.dev@gmail.com</a>.

You can also open an issue at [https://github.com/IAmInControlll/docs/issues](https://github.com/IAmInControlll/docs/issues). Anyone can open one and no special access is needed, but **issues there are public**, so use email for anything you would rather not publish.
