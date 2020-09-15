class Todo {
  constructor(title, description = "", dueDate = "", priority = 0, notes = "", completed = false) {
    return {title, description, dueDate, priority, notes, completed};
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
  editPriority(newPriority) {
    priority = newPriority
  }
  editNotes(newNotes) {
    notes = newNotes;
  }
  toggleCompleted() {
    if (completed) {
      completed = false;
    }
    else {
      completed = true;
    }
  }
}
export { Todo }