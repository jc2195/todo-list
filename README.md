# Todo App
The goal of this project was to build a local in-browser Todo app using javascript and webpack. Users can create projects (with title, description and due date), and inside those projects create Todos (with title, description, due date, priority and notes).

App data is automatically saved using local storage in the browser, so that even if the browser is closed, the user won't lose their data. On browsers that do not support local storage, the app functions normally, however all data will be lost upon closing the browser window.