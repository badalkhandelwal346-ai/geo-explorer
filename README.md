# 🌍 GeoExplorer — Global Insight Dashboard

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![REST Countries API](https://img.shields.io/badge/API-REST%20Countries-4CAF50?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge)

> An interactive web application to explore and analyze data from **250+ countries** — powered by the REST Countries API and built entirely with Vanilla JavaScript.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [API Integration](#-api-integration)
- [JavaScript Logic & HOFs](#-javascript-logic--hofs)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## 🧭 Overview

**GeoExplorer** is a dynamic, client-side web application that fetches real-world country data and lets users instantly search, filter, and sort through it — all without making repeated server requests.

The project is designed to demonstrate:
- ✅ Asynchronous programming with the **Fetch API**
- ✅ **Array Higher-Order Functions (HOFs)** for real-time data manipulation
- ✅ Clean, responsive UI with **CSS Grid & Flexbox**
- ✅ Performance-first thinking through a **"fetch once, use everywhere"** data strategy

---

## 🚀 Live Demo

> 🔗 **[View Live Demo](#)** *(Link will be updated once deployed)*

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Real-Time Search** | Instantly filter countries by name as you type |
| 🌐 **Region Filter** | Narrow results by continent (Africa, Europe, Asia, etc.) |
| 🔃 **Sorting** | Sort by Population (High → Low) or Alphabetically (A → Z) |
| 🏳️ **SVG Flags** | High-quality country flags rendered via the API |
| 🔢 **Formatted Numbers** | Population figures displayed with locale-aware comma formatting |
| 📱 **Fully Responsive** | Mobile-first CSS Grid layout adapts to any screen size |
| ❌ **Clear Search** | One-click button to instantly reset the search field |

---

## 🛠 Tech Stack

```
├── Structure  →  HTML5 (Semantic Elements)
├── Styling    →  CSS3 (Custom Properties, Flexbox, CSS Grid)
└── Logic      →  Vanilla JavaScript (ES6+, Fetch API, DOM Manipulation)
```

**No frameworks. No libraries. No build tools.** Just clean, modern web standards.

---

## 🌐 API Integration

**Provider:** [REST Countries API v3.1](https://restcountries.com/)

**Strategy:** The entire dataset is fetched **once on page load**. All subsequent search, filter, and sort operations run locally in the browser — meaning zero additional network requests and a near-instant UI.

**Endpoint used:**

```
GET https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,flags,region
```

> Only **6 essential fields** are requested to minimize payload size and maximize response speed.

**Response fields used:**

| Field | Usage |
|---|---|
| `name` | Display name + search matching |
| `capital` | Shown on country card |
| `region` | Populates the region filter dropdown |
| `population` | Displayed with number formatting + used for sorting |
| `flags` | SVG flag image rendered on each card |
| `currencies` | Shown on country card |

---

## ⚙️ JavaScript Logic & HOFs

All data manipulation happens locally using **Array Higher-Order Functions**, keeping the UI fast and responsive.

```javascript
// 🔍 Searching — real-time name matching
const results = allCountries.filter(country =>
  country.name.common.toLowerCase().includes(query.toLowerCase())
);

// 🌐 Filtering by Region
const filtered = allCountries.filter(country =>
  country.region === selectedRegion
);

// 🔃 Sorting by Population (High → Low)
const sorted = [...countries].sort((a, b) => b.population - a.population);

// 🔡 Sorting Alphabetically (A → Z)
const sorted = [...countries].sort((a, b) =>
  a.name.common.localeCompare(b.name.common)
);

// 🃏 Rendering Cards
countries.forEach(country => {
  const card = createCard(country);
  container.appendChild(card);
});
```

---

## 📁 Project Structure

```
GeoExplorer/
│
├── index.html          # Main HTML structure (semantic elements)
├── style.css           # All styling — custom properties, grid, responsive
└── app.js              # All JavaScript — fetch, HOFs, DOM rendering
```

---

## 🏁 Getting Started

No installation or build process required. Just clone and open.

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/GeoExplorer.git

# 2. Navigate into the project folder
cd GeoExplorer

# 3. Open in your browser
# Simply open index.html in any modern browser
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using Vanilla JavaScript &nbsp;|&nbsp; Data from <a href="https://restcountries.com">REST Countries API</a>
</p>