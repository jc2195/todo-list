import globals from "./globals.js"
import { saveData } from "./storageController.js";
import { showProject, showProjectTabs } from "./displayController.js";

class Project {
  constructor(title, description = "", dueDate = "", todoItems = []) {
    return {title, description, dueDate, todoItems};
  }
  editTitle(newTitle) {
    title = newTitle;
  }
  editDescription(newDescription) {
    description = newDescription;
  }
  editDueDate(newDueDate) {
    dueDate = newDueDate;
  }
  editTodoItems(newTodoItems) {
    todoItems = newTodoItems;
  }
}

const deleteProject = (project) => {
  const projectIndex = globals.appData.indexOf(project);
  globals.appData.splice(projectIndex, 1);
}

const createProject = () => {
  const projectTitle = document.getElementById("projectformtitle").value;
  const projectDescription = document.getElementById("projectformdescription").value;
  const projectDueDate = document.getElementById("projectformduedate").value;

  const newProject = new Project(projectTitle, projectDescription, projectDueDate);
  globals.currentProject = newProject;
  globals.appData.push(newProject);
  saveData();
  showProject(newProject);
  showProjectTabs(globals.appData);
  return false;
}

const editProject = () => {
  const projectTitle = document.getElementById("projectformtitle").value;
  const projectDescription = document.getElementById("projectformdescription").value;
  const projectDueDate = document.getElementById("projectformduedate").value;

  globals.currentProject.title = projectTitle;
  globals.currentProject.description = projectDescription;
  globals.currentProject.dueDate = projectDueDate;
  saveData();
  showProject(globals.currentProject);
  showProjectTabs(globals.appData);
  return false;
}

export { Project, deleteProject, createProject, editProject }