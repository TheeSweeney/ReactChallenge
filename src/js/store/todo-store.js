import dispatcher from '../utils/dispatcher';

let ping = function() {
  dispatcher.emit('todo-store:change', todoStore);
}

let todoStore = {
  items: []
};

let addItem = (todoText) => {
  todoStore.items.push({text: todoText, complete: false});
  ping();
};

let deleteItem = (index) => {
  todoStore.items.splice(index, 1);
  ping()
};

let checkItem = (index) => {
  console.log(todoStore.items[index])
  todoStore.items[index].complete = true;
  console.log(todoStore.items[index])
  ping()
}

dispatcher.on('todo:user-added', addItem);
dispatcher.on('todo:user-deleted', deleteItem);
dispatcher.on('todo:user-checked', checkItem);

export default todoStore;
