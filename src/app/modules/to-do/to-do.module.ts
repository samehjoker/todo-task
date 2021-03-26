import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do.component';
import { MaterialModule } from 'src/app/core/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { WarningDialogComponent } from './component/warning-dialog/warning-dialog.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';
import { AddNewTaskComponent } from './component/add-new-task/add-new-task.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AngularSvgIconModule,
    NgxDatatableModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule
  ],
  declarations: [
    ToDoComponent,
    WarningDialogComponent,
    AddNewTaskComponent
  ],
  entryComponents: [
    AddNewTaskComponent
  ]
})
export class ToDoModule { }
