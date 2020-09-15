const showProject = (project) => {
  const todoContainer = document.querySelector(".todocontainer");
  todoContainer.style.display = "none";

  document.querySelector(".projecttitle").innerHTML = project.title;
  document.querySelector(".projectduedate").innerHTML = project.dueDate;
  document.querySelector(".projectdescription").innerHTML = project.description;
  
  const todosContainer = document.querySelector(".todoscontainer");
  todosContainer.innerHTML = "";
  project.todoItems.forEach(function(todoItem, index) {
    const todoTab = document.createElement("div");
    todoTab.classList.add("todotab");

    const todoTabTitle = document.createElement("div");
    todoTabTitle.classList.add("todotabtitle");
    todoTabTitle.innerHTML = todoItem.title;
    todoTab.appendChild(todoTabTitle)

    const todoTabDate = document.createElement("div");
    todoTabDate.classList.add("todotabdate");
    todoTabDate.innerHTML = todoItem.dueDate;
    todoTab.appendChild(todoTabDate);

    const todoTabCheck = document.createElement("div");
    todoTabCheck.classList.add("todotabcheck");
    todoTabCheck.innerHTML = checkmark(todoItem.completed);
    todoTabCheck.addEventListener("click", () => {
      todoItems.toggleCompleted(index);
    });
    todoTab.appendChild(todoTabCheck);

    todoTab.style.backgroundColor = priorityColor(todoItem.priority);

    todosContainer.appendChild(todoTab);
  });

  const projectContainer = document.querySelector(".projectcontainer");
  projectContainer.style.display = "block";
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
  const projectContainer = document.querySelector(".projectcontainer");
  projectContainer.style.display = "none";

  document.querySelector(".todotitle").innerHTML = todo.title;
  document.querySelector(".tododuedate").innerHTML = todo.dueDate;
  document.querySelector(".tododescription").innerHTML = todo.description;
  document.querySelector(".todopriority").innerHTML = priorityText(todo.priority);
  document.querySelector(".todonotescontent").innerHTML = todo.notes;

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
export { showProject, showTodo }