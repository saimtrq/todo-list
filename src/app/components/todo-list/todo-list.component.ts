import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() todoList;

  constructor() {}

  getFavouriteTask(isFavourite) {
    return this.todoList.filter((item) => item.favourite === isFavourite);
  }
}
