import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode } from '@swimlane/ngx-datatable';
import ToDo from 'src/app/core/model/to-do.model';
import { AddNewTaskComponent } from './component/add-new-task/add-new-task.component';
import { WarningDialogComponent } from './component/warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  editingRowIndex = -1;
  editingRow = new ToDo();
  rows = [];
  columns = [];

  ColumnMode = ColumnMode;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.columns = [
      {
        name: "Title",
        prop: 'title'
      },
      {
        name: "Description",
        prop: 'description'
      },
      {
        name: "Due date",
        prop: 'dueDate'
      },
      {
        name: "actions"
      }
    ];
    this.rows = [
      {

        title: "Task 1",
        description: "note for task one",
        dueDate: new Date(),
        id: "1"
      },
      {
        title: "Task 2",
        description: "note for task Two ",
        dueDate: new Date(),
        id: "2"
      },
      {
        title: "Task 3",
        description: "note for task Three",
        dueDate: new Date(),
        id: "3"
      },
      {
        title: "Task 4",
        description: "note for task Four",
        dueDate: new Date(),
        id: "4"
      },
      {
        title: "Task 5",
        description: "note for task 5",
        dueDate: new Date(),
        id: "5"
      },
      {
        title: "Task 6",
        description: "note for task 6",
        dueDate: new Date(),
        id: "6"
      },
      {
        title: "Task 7",
        description: "note for task 7",
        dueDate: new Date(),
        id: "7"
      },
      {
        title: "Task 8",
        description: "note for task 8",
        dueDate: new Date(),
        id: "8"
      },
      {
        title: "Task 9",
        description: "note for task 9",
        dueDate: new Date(),
        id: "9"
      },
      {
        title: "Task 10",
        description: "note for task 10",
        dueDate: new Date(),
        id: "10"
      },
      {
        title: "Task 11",
        description: "note for task 11",
        dueDate: new Date(),
        id: "11"
      },
      {
        title: "Task 12",
        description: "note for task 12",
        dueDate: new Date(),
        id: "12"
      },
      {
        title: "Task 13",
        description: "note for task 13",
        dueDate: new Date(),
        id: "13"
      },
      {
        title: "Task 14",
        description: "note for task 14",
        dueDate: new Date(),
        id: "14"
      },
      {
        title: "Task 15",
        description: "note for task 15",
        dueDate: new Date(),
        id: "15"
      }
    ];
  }

  addNewToDo() {
    const dialogRef = this.dialog.open(AddNewTaskComponent, {
      width: '460px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        res.id = this.rows.length + 1 + '';
        this.rows.push(res);
        this.rows = [...this.rows];
      }
    })
  }

  editRowValue(rowIndex) {
    this.editingRow = Object.assign({}, this.rows[rowIndex]);
    this.editingRowIndex = rowIndex;
  }

  cancelEdit() {
    this.editingRowIndex = -1;
  }

  finishTask(rowIndex) {

  }

  updateRowValues() {
    this.rows[this.editingRowIndex] = Object.assign({}, this.editingRow);
    this.rows = [...this.rows];
    this.editingRowIndex = -1;
  }

  deleteToDo(todo: ToDo) {
    const warningDialogRef = this.dialog.open(WarningDialogComponent, {
      width: '460px',
    });
    const instance = warningDialogRef.componentInstance;
    instance.iconSrc = `assets/icons/delete.svg`;
    instance.title = `Delete To Do`;
    instance.textMessage = ` Are you sure you want to delete ${todo.title}?`;
    instance.buttons = [
      { name: 'No', type: 'no' },
      { name: 'Delete', type: 'delete' }
    ];

    warningDialogRef.afterClosed().subscribe(res => {
      if (res.type === 'delete') {
        this.rows.splice(this.rows.findIndex(item => item.id === todo.id), 1);
        this.rows = [...this.rows];
      }
    });
  }

}
