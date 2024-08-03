import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListItemComponent } from "./tod/todo-list-item/todo-list-item.component";
import { TodoSummaryComponent } from "./tod/todo-summary/todo-summary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListItemComponent, TodoSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-ui';
}
