# Vite-React-Structure for new portfolio website.

- Public folder: used for static assets e.g images, etc. that don't need processing by the build tool. Files in this folder are directly accessible and won't be processed by Vite. One can call images in .jsx files without having to import it as a component e.g  "<img src="/ats_website/raleigh.jpg" alt="Me" className="object-cover w-full h-full" " /> if they are stored there.
  
- Src folder: where the application's source code resides. It includes all the JavaScript/JSX, CSS, and other files that need to be processed and bundled by Vite.
  
- index.html: where one can add the favicon, and webapp/website title, it contains the entry point of the vite project e.g. index.jsx
  
- tailwind.config.js: if using tailwind css, one can define screen size values here using theme as a property
  
- src/components: .jsx files that need to be imported to pages. Components hold the exact content and styles for the webapp/website e.g text, text cells, etc.
  
- src/pages: components are imported here. pages are .jsx files too
  
- src/style: contains custom css stylesheet e.g global.css, which is imported in index.jsx
  
- src/App.jsx: imports pages, contains path names definitions in routes,  and the 'scroll to the top' component
  
- src/index.css: holds tailwind's base, components and utilities 
  
- src/index.jsx: imports index.css, global.css (custom stylesheet), App.jsx, BrowserRouter, ReactDom, called in the root defined in index.html i.e index.jsx, <App> is enclosed in BrowserRouter
  
- src/main.jsx: (not needed)
