import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-new-list-input',
  templateUrl: './new-list-input.component.html',
  styleUrl: './new-list-input.component.css',
})
export class NewListInputComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<null>();
  newListForm: FormGroup;

  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.newListForm = new FormGroup({
      listName: new FormControl(null, Validators.required),
    });
  }

  addList($event, formDirective) {
    if (this.newListForm.valid) {
      $event.target.blur();
      this.todoService.addList(this.newListForm.value.listName);
      formDirective.resetForm();
      this.newListForm.reset();
      this.itemAdded.emit();
    }
  }
}
