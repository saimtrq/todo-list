import { Component, OnInit } from '@angular/core';
import { TodoList } from '../../models/todo-list.model';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  todoListsArray: TodoList[];
  selectedTodoList: TodoList;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoListsArray = this.todoService.getTodoLists();
    this.selectedTodoList = this.todoListsArray[0];
  }
  selectTodoList(todoList) {
    this.selectedTodoList = todoList;
  }
  onListAdded() {
    if (this.todoListsArray.length == 1) {
      this.selectedTodoList = this.todoListsArray[0];
    }
  }
}
