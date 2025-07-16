# ⚛️ Vite-React-Structure

A reference guide for the file structure used in building my new **portfolio website** using **Vite**, **React**, and **Tailwind CSS**.

---

## 📁 Folder & File Overview

### `public/`

* Stores **static assets** like images and favicons.
* Files here are **not processed** by Vite.
* Assets can be accessed directly without importing:

  ```jsx
  <img src="/ats_website/raleigh.jpg" alt="Me" className="object-cover w-full h-full" />
  ```

---

### `src/`

The core of the application. Contains all files that Vite processes and bundles.

#### `components/`

* Holds all **reusable UI components** (`.jsx`).
* Components define styles, layout blocks, text content, etc.

#### `pages/`

* Contains top-level `.jsx` files that make up the **main pages** of the site.
* Imports and assembles components.

#### `style/`

* Stores custom CSS stylesheets, e.g. `global.css`.
* Imported in `index.jsx`.

#### `App.jsx`

* Defines **app routes** and imports pages.
* Includes logic like **scroll-to-top** behavior.

#### `index.jsx`

* Entry point of the app.
* Imports `App.jsx`, `index.css`, `global.css`, and wraps `<App />` in `<BrowserRouter>`.
* Called from the root `div` in `index.html`.

#### `index.css`

* Tailwind’s default CSS base, components, and utilities.

#### `main.jsx`

* **Not used** in this project (leftover from some Vite templates).

---

### `index.html`

* Sets up the root structure of the app.
* Add your **favicon** and website **title** here.
* Calls `index.jsx`.

---

### `tailwind.config.js`

* Customize Tailwind settings such as screen sizes:

  ```js
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        // more breakpoints...
      }
    }
  }
  ```
