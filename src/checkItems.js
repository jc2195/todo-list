class Check {
  constructor(item, completed = false) {
    return {item, completed};
  }
  editItem(newItem) {
    item = newItem;
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
export{ Check }