# Major Exam Creator

Builds the Table of Specification, the major exam (Set A and B), answer keys, and Bubble Tsek answer sheets from a question bank. Works in any computer browser, installs like an app, and works offline after the first visit.

Four steps: **1 Exam details** (school template, subject, test parts) → **2 Question bank** (pick or upload one) → **3 Contents & hours** (tick the bank's contents and objectives, type the hours; it shows if the bank is short and lets you request or add only the missing questions) → **4 TOS & exam** (create and download everything).

## Put it online with GitHub Pages (free)

1. Sign in at https://github.com. Click **+ → New repository**.
2. Name it `major-exam-creator`, choose **Public** (Pages is free for public repositories), and click **Create repository**.
3. Click **uploading an existing file**. Drag in **everything inside** this folder (index.html, sw.js, manifest.webmanifest, and the icons, lib and fonts folders), then click **Commit changes**.
4. Go to **Settings → Pages**. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
5. Wait 1–2 minutes and refresh. Your link appears at the top, like
   `https://YOUR-USERNAME.github.io/major-exam-creator/`

## Install it on your computer
- Open the link in **Chrome** or **Edge**.
- Click the **Install app** button at the bottom of the dark sidebar (or the install icon at the right end of the address bar).
- It gets its own window and a desktop / Start menu icon, and works offline.

## Updating
Upload the changed files to the same repository (drag in everything again; GitHub replaces files with the same name). Each update package already has a new `VERSION` in `sw.js` (this one is `majorexam-v6`); if you edit files yourself, bump it (v3, v4, and so on) so installed copies pick up the change. Close and reopen the app once after an update.

## Question banks
Question banks you upload are saved in the browser on that computer (Question banks page in the sidebar). To move a bank to another computer or keep a backup, use **Export CSV** on its card and upload that file on the other computer.

Your inputs and question bank stay in the browser on the computer where you use the site. Nothing is sent to any server.
