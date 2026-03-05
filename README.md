# Attendance Tracker (MML Helper)

A lightweight Chrome extension that helps trainees **keep track of their attendance history locally** while using the MML trainee portal.

This tool automatically records attendance when it detects a successful attendance submission on the portal and allows users to **view, export, and import attendance records**.

---

# ⚠️ IMPORTANT DISCLAIMER

**This is NOT an official Accenture extension.**

This project was created as a **personal utility to help trainees monitor their attendance locally in their browser.**

Please note:

• This extension **does NOT modify official attendance records**  
• It **does NOT guarantee that attendance has been successfully recorded on the MML portal**  
• Official attendance should **always be verified on the official portal**

Attendance data stored by this extension:

• Exists **only in your browser's local storage**  
• Can be **edited or deleted manually**  
• Should **NOT be considered official proof of attendance**

Use this tool **only as a personal tracker**.

---

# Features

• Automatically records attendance after successful submission  
• Shows full attendance history  
• Calculates attendance statistics:
  - Total sessions
  - Present sessions
  - Missed sessions
  - Estimated attendance percentage  
• Export attendance records to CSV  
• Import previously saved CSV records  
• Scrollable history with quick navigation  

---

# Installation Guide

Since this extension is not published on the Chrome Web Store, it must be installed manually.

### Step 1 — Download the Extension

Click **Code → Download ZIP** on the GitHub repository.

Extract the downloaded ZIP file.

---

### Step 2 — Open Chrome Extensions

Open Chrome and go to:

```
chrome://extensions
```

---

### Step 3 — Enable Developer Mode

Turn on **Developer Mode** using the toggle in the **top-right corner**.

---

### Step 4 — Load the Extension

Click **Load unpacked**.

Then select the extracted extension folder.

The extension should now appear in your Chrome toolbar.

---

# How to Use

1. Open the MML trainee portal:

https://mml.accenture.com/trainee-portal

2. Mark attendance normally on the portal.

3. When the portal shows the **attendance success message**, the extension records the session automatically.

4. Click the extension icon to view your attendance statistics and history.

---

# Export Attendance

Click **Export CSV** to download your attendance history.

Example CSV format:

```
Date,Code,Status
1/4/2026,48291321,Present
4/4/2026,29384756,Present
7/4/2026,12345678,Present
```

---

# Import Attendance

Click **Import CSV** to restore attendance records from a previously exported CSV file.

Imported records will merge with existing records while avoiding duplicates.

---

# Data Storage

All data is stored using:

```
chrome.storage.local
```

This means:

• Data stays **only in your browser**  
• No information is sent to external servers  
• No user data is collected  

---

# Privacy

This extension:

• Does **not collect personal data**  
• Does **not track user activity**  
• Does **not communicate with any external server**

Everything runs **entirely inside your browser**.

---

# Limitations

This extension provides **only an estimated attendance record**.

It may not reflect official records because:

• Attendance may be modified manually on the portal  
• Sessions might not occur every day  
• Portal behavior may change in the future

Always verify attendance on the **official MML portal**.

---

# Developed By

**Divyansh Bajpai**

Created to make attendance tracking easier for trainees.
