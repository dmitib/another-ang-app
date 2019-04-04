import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksServicesModule } from './tasks-service.module';
import { TaskListComponent, TaskComponent } from './components';
// import { TaskComponent } from './components/task/task.component

@NgModule({
  declarations: [TaskListComponent, TaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    TasksServicesModule
  ]
})
export class TasksModule { }
