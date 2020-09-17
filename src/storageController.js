import { Project } from "./projectItems.js"
import { Todo } from "./todoItems.js"
import globals from "./globals.js"

const initData = () => {
  if (localStorage.getItem("todoAppData") === null) {
    const todoData = [new Project("Sample Project", 
                                  "Your description will appear where this block of text is. Your project due date will appear to the right. Click on the title of a todo to view it, or on the check/cross to toggle it complete. Todos will have different colors depending on their priority. You can edit your project by clicking 'Edit' and remove it by clicking 'Delete'. To add a new project, click the plus symbol at the top of the projects bar. To create a new todo, click the plus symbol at the bottom of the list of todos.", 
                                  "2099-01-01", 
                                  [new Todo("Very Low Priority Todo", 
                                            "This is what a very low priority todo looks like. Your todo description will go here.",
                                            "2099-01-01",
                                            1,
                                            "You can add notes to your todo. They will appear here. You can edit your todo by clicking 'Edit' and remove it by clicking 'Delete'."),
                                  new Todo("Low Priority Todo", 
                                            "This is what a low priority todo looks like. Your todo description will go here.",
                                            "2099-01-01",
                                            2,
                                            "You can add notes to your todo. They will appear here. You can edit your todo by clicking 'Edit' and remove it by clicking 'Delete'."),
                                  new Todo("Medium Priority Todo", 
                                            "This is what a medium priority todo looks like. Your todo description will go here.",
                                            "2099-01-01",
                                            3,
                                            "You can add notes to your todo. They will appear here. You can edit your todo by clicking 'Edit' and remove it by clicking 'Delete'."),
                                  new Todo("High Priority Todo", 
                                            "This is what a high priority todo looks like. Your todo description will go here.",
                                            "2099-01-01",
                                            4,
                                            "You can add notes to your todo. They will appear here. You can edit your todo by clicking 'Edit' and remove it by clicking 'Delete'."),
                                  new Todo("Very High Priority Todo", 
                                            "This is what a very high priority todo looks like. Your todo description will go here.",
                                            "2099-01-01",
                                            5,
                                            "You can add notes to your todo. They will appear here. You can edit your todo by clicking 'Edit' and remove it by clicking 'Delete'."),
                                  new Todo("No Priority Todo", 
                                            "This is what a no priority todo looks like. Your todo description will go here.",
                                            "2099-01-01",
                                            0,
                                            "You can add notes to your todo. They will appear here. You can edit your todo by clicking 'Edit' and remove it by clicking 'Delete'.")
                                  ])
                      ];
    localStorage.setItem("todoAppData", JSON.stringify(todoData));
    return todoData;
  }
  else {
    const todoData = JSON.parse(localStorage.getItem("todoAppData"));
    return todoData;
  }
}
const initCurrentProject = (appData) => {
  if (localStorage.getItem("todoAppCurrentProject") === null) {
    return appData[0];
  }
  else {
    return JSON.parse(localStorage.getItem("todoAppCurrentProject"));
  }
}
const initCurrentTodo = (appData) => {
  if (localStorage.getItem("todoAppCurrentTodo") === null) {
    return null;
  }
  else {
    return JSON.parse(localStorage.getItem("todoAppCurrentTodo"));
  }
}
const saveData = () => {
  localStorage.setItem("todoAppData", JSON.stringify(globals.appData));
  localStorage.setItem("todoAppCurrentProject", JSON.stringify(globals.currentProject));
  localStorage.setItem("todoAppCurrentTodo", JSON.stringify(globals.currentTodo));
}
export { initData, saveData, initCurrentProject, initCurrentTodo }