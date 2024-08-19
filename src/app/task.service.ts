import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  task: string;
  isDone: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {}

  // Adicionar uma nova tarefa
  addTask(task: Task) {
    this.tasks.push(task);
  }

  // Obter a lista de tarefas
  getTasks(): Task[] {
    return this.tasks;
  }

  // Remover uma tarefa pelo índice
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
