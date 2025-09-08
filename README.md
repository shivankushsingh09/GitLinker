# GitLinker: A GitHub Profile URL Generator

Get your GitHub profile URL from just your username — quick, simple, and hassle-free!

![GitHub URL Generator Screenshot](img/GitHub-URL-Generator.png)

## 🚀 Live Demo

[Try it on CodeSandbox](https://codesandbox.io/p/devbox/ng1-1-forked-ljtzsg)

<!-- Replace above with your deployed URL if/when hosting on GitHub Pages or elsewhere -->

---

## 📋 Description

**GitLinker** is a lightweight web app that instantly generates a direct link to any GitHub profile by entering a valid username. It features a minimalist interface styled with [Pico CSS](https://picocss.com/).

---

## ✨ Features

- ✅ Simple and intuitive UI
- ✅ Real-time validation for GitHub usernames
- ✅ Instant clickable GitHub URL generation
- ✅ Clean and responsive design

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (with [Pico CSS](https://picocss.com/) and custom styling in `css/main.css`)
- **JavaScript (Vanilla JS)** (`js/main.js`)

---

## 📂 Project Structure

```
GitLinker/
├── css/
│   └── main.css         # Custom styles for the app
├── img/
│   └── GitHub-URL-Generator.png # Screenshot asset
├── js/
│   └── main.js          # JavaScript logic for URL generation & validation
├── Prv/
│   └── Preview.mp4      # Preview video or demo assets
├── .gitignore           # Untracked files to ignore
├── index.html           # Entry point of the application
├── License.md           # License information
└── README.md            # Project documentation
```

---

## 🎮 How to Use

1. **Open** `index.html` in your browser.
2. **Enter a GitHub username** in the input field.
3. **Click "Generate URL"**.
4. A clickable link to the GitHub profile will be displayed.

---

## ⚠️ Username Validation Rules

- Only alphanumeric characters or hyphens allowed.
- No multiple consecutive hyphens.
- Cannot begin or end with a hyphen.
- Maximum length: 39 characters.

---

## 📸 Preview

![Preview](Prv/Preview.mp4)

---

## 📝 License

This project is licensed under the [MIT License](./License.md).

---

## 🙌 Acknowledgments

- [Pico CSS](https://picocss.com/) — Minimalist CSS framework
- GitHub — For inspiring the idea of profile linking
