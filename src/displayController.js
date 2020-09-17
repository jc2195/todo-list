import globals from "./globals.js"
import { Todo, toggleTodoCompleted, deleteTodo, createTodo, editTodo } from "./todoItems.js"
import { initData, saveData, initCurrentProject, initCurrentTodo } from "./storageController.js"
import { Project, deleteProject, createProject, editProject } from "./projectItems.js"
import { format } from "date-fns"

const formatDate = (date) => {
  if (date != "") {
    return format(date, "do LLLL yyyy");
  }
  else {
    return date;
  }
}

const formatFormDate = (date) => {
  if (date != "") {
    return format(date, "yyyy-MM-dd");
  }
  else {
    return date;
  }
}

const dateMaker = (date) => {
  if (date == "") {
    return date;
  }
  else {
    return new Date(date);
  }
}

const showProjectTabs = (projects) => {
  const projectsContainer = document.querySelector(".projectscontainer");
  projectsContainer.innerHTML = "";
  projects.forEach(function(project) {
    const projectTab = document.createElement("div");
    projectTab.classList.add("projecttab");
    projectTab.innerHTML = project.title;
    projectTab.addEventListener("click", () => {
      globals.currentProject = project;
      showProject(project);
    });
    projectsContainer.appendChild(projectTab);
  });
}

const showProject = (project) => {
  hideViews();

  globals.currentProject = project;

  document.querySelector(".projecttitle").innerHTML = project.title;
  document.querySelector(".projectduedate").innerHTML = formatDate(dateMaker(project.dueDate));
  document.querySelector(".projectdescription").innerHTML = project.description;

  const modifyProject = document.querySelector(".modifyproject");
  modifyProject.innerHTML = "";

  const editProject = document.createElement("div");
  editProject.classList.add("editproject");
  editProject.innerHTML = "Edit";
  editProject.addEventListener("click", () => {
    showEditProjectForm();
  });
  modifyProject.appendChild(editProject);

  const deleteProjectButton = document.createElement("div");
  deleteProjectButton.classList.add("deleteproject");
  deleteProjectButton.innerHTML = "Delete";
  deleteProjectButton.addEventListener("click", () => {
    deleteProject(project);
    globals.currentProject = null;
    globals.currentTodo = null;
    showProjectTabs(globals.appData);
    saveData();
    hideViews();
  });
  modifyProject.appendChild(deleteProjectButton);
  
  const todosContainer = document.querySelector(".todoscontainer");
  todosContainer.innerHTML = "";
  project.todoItems.forEach(function(todoItem, index) {
    const todoTab = document.createElement("div");
    todoTab.classList.add("todotab");

    todoTab.addEventListener("click", () => {
      globals.currentTodo = todoItem;
      showTodo(todoItem);
    });

    const todoTabTitle = document.createElement("div");
    todoTabTitle.classList.add("todotabtitle");
    todoTabTitle.innerHTML = todoItem.title;
    todoTab.appendChild(todoTabTitle)

    const todoTabDate = document.createElement("div");
    todoTabDate.classList.add("todotabdate");
    todoTabDate.innerHTML = formatDate(dateMaker(todoItem.dueDate));
    todoTab.appendChild(todoTabDate);

    const todoTabCheck = document.createElement("div");
    todoTabCheck.classList.add("todotabcheck");
    todoTabCheck.innerHTML = checkmark(todoItem.completed);
    todoTabCheck.addEventListener("click", () => {
      toggleTodoCompleted(todoItem);
      showProject(globals.currentProject);
    });
    todoTab.appendChild(todoTabCheck);

    todoTab.style.backgroundColor = priorityColor(todoItem.priority);

    todosContainer.appendChild(todoTab);
  });

  const projectContainer = document.querySelector(".projectcontainer");
  projectContainer.style.display = "block";
}

const showNewProjectForm = () => {
  hideViews();

  document.getElementById("projectformtitle").value = "";
  document.getElementById("projectformdescription").value = "";
  document.getElementById("projectformduedate").value = "";

  const projectFormContainer = document.querySelector(".projectformcontainer");
  projectFormContainer.style.display = "block";

  const form = document.getElementById("projectform");
  form.setAttribute("onsubmit", "return createProject()");
}

const showEditProjectForm = () => {
  hideViews();

  document.getElementById("projectformtitle").value = globals.currentProject.title;
  document.getElementById("projectformdescription").value = globals.currentProject.description;
  document.getElementById("projectformduedate").value = formatFormDate(dateMaker(globals.currentProject.dueDate));

  const projectFormContainer = document.querySelector(".projectformcontainer");
  projectFormContainer.style.display = "block";

  const form = document.getElementById("projectform");
  form.setAttribute("onsubmit", "return editProject()");
}

const showNewTodoForm = () => {
  hideViews();

  document.getElementById("todoformtitle").value = "";
  document.getElementById("todoformdescription").value = "";
  document.getElementById("todoformduedate").value = "";
  document.getElementById("todoformpriority").value = "";
  document.getElementById("todoformnotes").value = "";

  const todoFormContainer = document.querySelector(".todoformcontainer");
  todoFormContainer.style.display = "block";

  const form = document.getElementById("todoform");
  form.setAttribute("onsubmit", "return createTodo()");
}

const showEditTodoForm = () => {
  hideViews();

  document.getElementById("todoformtitle").value = globals.currentTodo.title;
  document.getElementById("todoformdescription").value = globals.currentTodo.description;
  document.getElementById("todoformduedate").value = formatFormDate(dateMaker(globals.currentTodo.dueDate));
  document.getElementById("todoformpriority").value = globals.currentTodo.priority;
  document.getElementById("todoformnotes").value = globals.currentTodo.notes;

  const todoFormContainer = document.querySelector(".todoformcontainer");
  todoFormContainer.style.display = "block";

  const form = document.getElementById("todoform");
  form.setAttribute("onsubmit", "return editTodo()");
}

const hideViews = () => {
  const todoContainer = document.querySelector(".todocontainer");
  todoContainer.style.display = "none";

  const projectContainer = document.querySelector(".projectcontainer");
  projectContainer.style.display = "none";

  const projectFormContainer = document.querySelector(".projectformcontainer");
  projectFormContainer.style.display = "none";

  const todoFormContainer = document.querySelector(".todoformcontainer");
  todoFormContainer.style.display = "none";
}

const checkmark = (completed) => {
  if (completed) {
    return "✓";
  }
  else {
    return "✗";
  }
}

const showTodo = (todo) => {
  hideViews();

  document.querySelector(".todotitle").innerHTML = todo.title;
  document.querySelector(".tododuedate").innerHTML = formatDate(dateMaker(todo.dueDate));
  document.querySelector(".tododescription").innerHTML = todo.description;
  document.querySelector(".todonotescontent").innerHTML = todo.notes;

  const modifyTodo = document.querySelector(".modifytodo");
  modifyTodo.innerHTML = "";

  const editTodo = document.createElement("div");
  editTodo.classList.add("edittodo");
  editTodo.innerHTML = "Edit";
  editTodo.addEventListener("click", () => {
    showEditTodoForm();
  });
  modifyTodo.appendChild(editTodo);

  const todoPriority = document.createElement("div");
  todoPriority.classList.add("todopriority");
  todoPriority.innerHTML = priorityText(todo.priority);
  modifyTodo.appendChild(todoPriority);

  const deleteTodoButton = document.createElement("div");
  deleteTodoButton.classList.add("deletetodo");
  deleteTodoButton.innerHTML = "Delete";
  deleteTodoButton.addEventListener("click", () => {
    deleteTodo(todo);
    saveData();
    showProject(globals.currentProject);
  });
  modifyTodo.appendChild(deleteTodoButton);

  const todoContainer = document.querySelector(".todo");
  todoContainer.style.backgroundColor = priorityColor(todo.priority);

  document.querySelector(".todocontainer").style.display = "block";
}

const priorityText = (priority) => {
  if (priority == 0) {
    return "No Priority Assigned";
  }
  else if (priority == 1) {
    return "Very Low Priority";
  }
  else if (priority == 2) {
    return "Low Priority";
  }
  else if (priority == 3) {
    return "Medium Priority"
  }
  else if (priority == 4) {
    return "High Priority"
  }
  else {
    return "Very High Priority"
  }
}

const priorityColor = (priority) => {
  if (priority == 0) {
    return "white";
  }
  else if (priority == 1) {
    return "rgb(182, 221, 195)";
  }
  else if (priority == 2) {
    return "rgb(188, 233, 177)";
  }
  else if (priority == 3) {
    return "rgb(255, 250, 176)"
  }
  else if (priority == 4) {
    return "rgb(255, 223, 176)"
  }
  else {
    return "rgb(233, 177, 177)"
  }
}

  // window.addEventListener('load', () => {
  //   loadSkeleton();
  // });
export { showProject, showTodo, showProjectTabs, hideViews, showNewProjectForm, showNewTodoForm }