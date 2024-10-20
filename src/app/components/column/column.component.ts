import { Component, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [TaskComponent, CdkDrag],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent {
  readonly tasks = input.required<string[]>();
  readonly colTitle = input.required<string>();
}
