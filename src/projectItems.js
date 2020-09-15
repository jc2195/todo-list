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
export { Project }