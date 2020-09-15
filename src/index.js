import { Check } from "./checkItems.js"
import { Project } from "./projectItems.js"
import { Todo } from "./todoItems.js"
import { showProject, showTodo } from "./displayController.js"

let todo1 = new Todo("First Todo", "This is such a lovely todo description for my first todo which will be used todo some very interesting stuff I'm sure", "22nd July 2021", 1, "Such amazing notes go here like wow im so glad I have these notes right here I honestly wouldn't know what I'd do without these notes");
let todo2 = new Todo("Second Todo", "This is such a lovely todo", "23nd July 2021", 2, "Notes here");
let todo3 = new Todo("Third Todo", "This is such a lovely todo description for my first todo which will be used todo some very interesting stuff I'm sure", "22nd July 2021", 3, "Such amazing notes go here like wow im so glad I have these notes right here I honestly wouldn't know what I'd do without these notes");
let todo4 = new Todo("Fourth Todo", "This is such a lovely todo description for my first todo which will be used todo some very interesting stuff I'm sure", "22nd July 2021", 4, "Such amazing notes go here like wow im so glad I have these notes right here I honestly wouldn't know what I'd do without these notes");
let todo5 = new Todo("Fifth Todo", "This is such a lovely todo description for my first todo which will be used todo some very interesting stuff I'm sure", "22nd July 2021", 5, "Such amazing notes go here like wow im so glad I have these notes right here I honestly wouldn't know what I'd do without these notes");
let project1 = new Project("First project", "This is such a lovely project", "17th August 2021", [todo1, todo2, todo3, todo4, todo5])

// showTodo(todo4);
showProject(project1);


