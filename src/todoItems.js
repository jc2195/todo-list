class todo {
  constructor(title, description = "", dueDate = "", priority = 0, notes = "", checklist = []) {
    return {title, description, dueDate, priority, notes, checkList};
  }

}
export { todo }