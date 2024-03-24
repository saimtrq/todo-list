import { Injectable } from '@angular/core';
import { TodoList } from '../../models/todo-list.model';
import { TodoItem } from '../../models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  L_KEY_TODO_LIST = 'todo-list';
  todoListsArray: TodoList[] = [];

  constructor() {}

  getTodoLists() {
    const todoListsString = localStorage.getItem(this.L_KEY_TODO_LIST);
    if (todoListsString) {
      this.todoListsArray = JSON.parse(todoListsString);
    } else {
      this.todoListsArray = [];
    }
    return this.todoListsArray;
  }
  addList(listName) {
    this.todoListsArray.push(new TodoList(listName));
    localStorage.setItem(
      this.L_KEY_TODO_LIST,
      JSON.stringify(this.todoListsArray)
    );
  }
  addListItem(listId, itemName) {
    const listObject = this.todoListsArray.filter(
      (listItem) => listItem.id === listId
    )[0];

    listObject.todos.push(new TodoItem(itemName));

    localStorage.setItem(
      this.L_KEY_TODO_LIST,
      JSON.stringify(this.todoListsArray)
    );
  }
}
