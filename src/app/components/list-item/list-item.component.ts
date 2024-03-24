import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent implements OnInit {
  @Input() listItem;

  constructor() {}

  ngOnInit(): void {}

  toggleFavourite() {
    this.listItem.favourite = !this.listItem.favourite;
  }
}
