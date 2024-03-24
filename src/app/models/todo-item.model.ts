export class TodoItem {
  id = Date.now() + Math.round(Math.random() * 1000);
  title = '';
  dueDate = new Date();
  completed = false;
  favourite = false;

  constructor(title: string) {
    this.title = title;
  }
}
