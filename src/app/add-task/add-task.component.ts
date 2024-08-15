import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    task: new FormControl(''),
    isDone: new FormControl(false),
  });

  private nextId: number = 1;
  ngOnInit() {}
  onSubmit() {
    if (this.taskForm.valid) {
      const newTask = {
        ...this.taskForm.value,
        id: this.nextId++,
      };
      console.warn(newTask);

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
