import globals from "./globals.js"
import { showProject, showTodo, showProjectTabs, hideViews, showNewProjectForm, showTodoForm } from "./displayController.js"
import { initData, saveData, initCurrentProject, initCurrentTodo } from "./storageController.js"


class Todo {
  constructor(title, description = "", dueDate = "", priority = 0, notes = "", completed = false) {
    return {title, description, dueDate, priority, notes, completed};
  }
  editTodoTitle(newTitle) {
    title = newTitle;
  }
  
  editTodoDescription(newDescription) {
    description = newDescription;
  }
  
  editTodoDueDate(newDueDate) {
    dueDate = newDueDate;
  }
  
  editTodoPriority(newPriority) {
    priority = newPriority
  }
  
  editTodoNotes(newNotes) {
    notes = newNotes;
  }
}

const toggleTodoCompleted = (todo) => {
  if (todo.completed) {
    todo.completed = false;
  }
  else {
    todo.completed = true;
  }
}

const deleteTodo = (todo) => {
  const todoIndex = globals.currentProject.todoItems.indexOf(todo);
  globals.currentProject.todoItems.splice(todoIndex, 1);
}

const createTodo = () => {
  const todoTitle = document.getElementById("todoformtitle").value;
  const todoDescription = document.getElementById("todoformdescription").value;
  const todoDueDate = document.getElementById("todoformduedate").value;
  const todoPriority = document.getElementById("todoformpriority").value;
  const todoNotes = document.getElementById("todoformnotes").value;

  const newTodo = new Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoNotes);
  globals.currentTodo = newTodo;

  const project = globals.currentProject;

  const projectIndex = globals.appData.indexOf(project);
  globals.currentProject.todoItems.push(newTodo);
  globals.appData[projectIndex] = globals.currentProject;

  saveData();
  showProject(globals.appData[projectIndex]);
  return false;
}

const editTodo = () => {
  const todoTitle = document.getElementById("todoformtitle").value;
  const todoDescription = document.getElementById("todoformdescription").value;
  const todoDueDate = document.getElementById("todoformduedate").value;
  const todoPriority = document.getElementById("todoformpriority").value;
  const todoNotes = document.getElementById("todoformnotes").value;

  globals.currentTodo.title = todoTitle;
  globals.currentTodo.description = todoDescription;
  globals.currentTodo.dueDate = todoDueDate;
  globals.currentTodo.priority = todoPriority;
  globals.currentTodo.notes = todoNotes;

  saveData();
  showTodo(globals.currentTodo);
  return false;
}

export { Todo, toggleTodoCompleted, deleteTodo, createTodo, editTodo }