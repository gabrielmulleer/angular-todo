import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task.service'; // Importe o serviço

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    task: new FormControl(''),
    isDone: new FormControl(false),
  });

  private nextId: number = 1;

  constructor(private taskService: TaskService) {} // Injeção do serviço

  ngOnInit() {}

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask = {
        ...this.taskForm.value,
        id: this.nextId++,
      };
      this.taskService.addTask(newTask); // Adiciona a tarefa ao serviço

      this.resetForm();
    }
  }

  resetForm() {
    this.taskForm.reset({
      id: '',
      task: '',
      isDone: false,
    });
  }
}
