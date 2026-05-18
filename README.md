# ProFront Performance Audit 🚀

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-green.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**ProFront Performance Audit** is a powerful, lightweight browser extension designed specifically for front-end developers to audit web performance, analyze DOM complexity, and check code quality in real-time directly inside the browser environment.

---

## 🌟 Key Features

* **Real-Time Performance Metrics:** Instantly captures essential page load speeds and DOM Content Loaded time to keep your sites running fast.
* **DOM Tree Complexity Analysis:** Monitors deeply nested elements and heavy DOM structures to prevent layout thrashing and rendering bottlenecks.
* **Front-End Code Quality Audits:** Automatically scans the active page to flag common developer oversights, such as leftover `console.log` statements or missing image `alt` attributes.
* **Heavy Resource Flagging:** Instantly detects and highlights unoptimized bundle sizes or asset files that exceed 1MB.

---

## 🛠️ How It Works

Built natively on top of the browser's custom **Performance API**, the extension gathers highly precise data entirely locally. It operates with **zero external server dependencies**, making it 100% compatible with secure staging environments and local development workflows like `localhost`.

---

## 📂 Installation (For Developers)

To run this extension locally in developer mode:

1. **Clone or Download** this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top-right corner.
4. Click the **Load unpacked** button in the top-left corner.
5. Select the `src` folder (the directory containing the `manifest.json` file) from this project.

---

## 💻 Tech Stack

* **Manifest V3:** Fully compliant with modern browser extension architecture requirements for maximum security and efficiency.
* **Vanilla JavaScript & CSS3:** Lightweight, zero-dependency execution ensuring the extension never compromises your testing environment's performance.

---

## 🔒 User Data & Privacy

* **Privacy-First Architecture:** ProFront Performance Audit operates strictly on the client side. 
* **Zero Data Collection:** It does not track user activity, collect browsing history, or transmit private information to external servers. Your code metrics stay exactly where they belong—on your machine.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
