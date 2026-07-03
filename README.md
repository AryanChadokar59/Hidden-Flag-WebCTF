# 🔒 Hidden Developer Console

## Challenge Information

| Field               | Details                  |
|---------------------|--------------------------|
| **Challenge Title** | Hidden Developer Console |
| **Category**        | Web                      |
| **Difficulty**      | Easy                     |
| **Flag Format**     | `GCS{...}`               |

---

# Challenge Overview

**Hidden Developer Console** is a beginner-friendly Web Capture The Flag (CTF) challenge designed to introduce participants to browser Developer Tools and basic client-side security concepts.

Participants are presented with a login portal that appears to reject every login attempt. However, the application contains a hidden developer mode that can only be activated by discovering a secret interaction. Once activated, an encoded message is revealed inside the browser's Developer Console. Participants must identify the encoding method, decode the message, and retrieve the hidden flag.

This challenge teaches users to think beyond the visible interface and inspect the application's underlying behavior.

---

# Story

A Devlopers Team recently developed an internal login portal for administrators.

During development, one of the developers accidentally left a hidden **Developer Mode** inside the application for debugging purposes.

Management believed it had been removed before deployment.

Your mission is to investigate the portal, discover the hidden developer feature, and recover the secret flag left behind by the developer.

Can you uncover what was never meant to be seen?

---

# Learning Objectives

After completing this challenge, participants will understand:

- Browser Developer Tools
- HTML and JavaScript inspection
- Event-based interactions
- Client-side security concepts
- Base64 encoding and decoding
- Why sensitive information should never be stored on the client side

---

# Requirements

- Google Chrome, Microsoft Edge, or Mozilla Firefox
- No additional software required

---

# Setup Instructions

1. Download or clone this repository.

```
git clone <repository-link>
```

2. Open the project folder.

3. Double-click **index.html**

or

Open **index.html** in your preferred web browser.

No web server is required.

---

# Challenge Objective

Recover the hidden flag.

The login page will always reject your credentials.

Investigate the application carefully.

Remember:

> Sometimes the answer isn't visible on the webpage.

---

# Challenge Files

```
Hidden-Developer-Console/

│── index.html
│── style.css
│── script.js
│── README.md
```

---

# Expected Solution Path

1. Open the website.
2. Observe that every login attempt fails.
3. Explore the page for unusual behaviour.
4. Click the portal logo five times.
5. A message indicates that Developer Mode has been enabled.
6. Open the browser Developer Tools (`F12`).
7. Navigate to the **Console** tab.
8. Locate the Base64 encoded string displayed in the console.
9. Decode the Base64 string.
10. Retrieve the flag.

---

# Flag

```
Congratulations ! You Successfully Logged In
```

---

# Technical Concepts Covered

- HTML
- CSS
- JavaScript
- DOM Events
- Event Listeners
- Browser Console
- Base64 Encoding
- Basic Web Security

---

# Educational Purpose

This challenge demonstrates how developers sometimes leave sensitive information inside client-side code during development.

Participants learn that:

- Hidden functionality may exist inside JavaScript.
- Browser Developer Tools are essential during web security assessments.
- Client-side code should never contain confidential information.
- Base64 is an encoding technique, not encryption.

---

# Challenge Walkthrough (For Organizers)

1. Open the application.
2. Click the **🔏 My Secure Login ** logo five times.
3. Developer Mode activates.
4. Open the browser console.
5. Copy the encoded text.
6. Decode it using any Base64 decoder or the browser's `atob()` function.
7. Obtain the flag.

---

# Author

**Name:** Aryan Chadokar

---

# License

This project was created for educational purposes as part of a Capture The Flag (CTF) internship assignment.
