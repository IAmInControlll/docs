---
title: CleanLaunch
description: Documentation, privacy policy, terms, and support for CleanLaunch, a minimal desktop shortcut manager for Windows.
wide: true
---

<div class="hero">
  <img class="hero-mark" src="{{ '/assets/img/icon.png' | relative_url }}" alt="" width="64" height="64">
  <h1>CleanLaunch</h1>
  <p class="lede">A clean, minimal desktop shortcut manager for Windows. Drag your shortcuts in, arrange them on a grid, and launch them with a click or a keystroke.</p>
</div>

<ul class="cards">
  <li><a class="card" href="{{ '/privacy/' | relative_url }}"><strong>Privacy Policy</strong><span>What is stored on your device, what leaves it, and how to remove it.</span></a></li>
  <li><a class="card" href="{{ '/terms/' | relative_url }}"><strong>Terms of Use</strong><span>The licence the app is provided under, and the limits of that licence.</span></a></li>
  <li><a class="card" href="{{ '/support/' | relative_url }}"><strong>Support</strong><span>Where your data lives, common questions, uninstalling, and how to get help.</span></a></li>
</ul>

## What it does

Drop a `.lnk`, `.url`, or `.exe` file onto the window and CleanLaunch copies it into a managed folder, pulls out its icon, and places it on a snap-to-grid layout you can rearrange by dragging. Click to launch. Drag in an external folder and it becomes a Windows junction, so the original contents stay exactly where they are.

<ul class="feature-list">
  <li>Grid and list views with drag-and-drop</li>
  <li>In-app folders with colour coding</li>
  <li>37 themes, light, dark, and retro</li>
  <li>Global hotkey to show or hide the window</li>
  <li>Command Palette with local, Google, and Wikipedia scopes</li>
  <li>Peek for quick file previews</li>
  <li>Volume, audio device switching, and a per-app mixer</li>
  <li>Power actions with confirmation prompts</li>
  <li>Full keyboard navigation and type-to-find</li>
  <li>Backup and restore to a single file</li>
</ul>

## Where your data goes

Short version: your workspace stays on your machine, in `%APPDATA%\CleanLaunch\`. There is no account, no telemetry, no analytics, and no crash reporting. The app talks to the network in three narrow cases, all of which you trigger yourself: Wikipedia lookups in the Command Palette, opening a Google search in your browser, and downloading the European Central Bank rate feed for currency answers.

The [Privacy Policy]({{ '/privacy/' | relative_url }}) spells out each of those, file by file.

## Getting help

Questions, bugs, and feature requests are welcome. See [Support]({{ '/support/' | relative_url }}) for the fastest route, or email <a href="mailto:{{ site.contact_email }}">{{ site.contact_email }}</a>.
