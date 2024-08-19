import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { TableModule } from 'primeng/table';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  cols!: Column[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'task', header: 'Task' },
      { field: 'isDone', header: 'Done' },
    ];
  }
}
