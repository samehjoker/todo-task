import { of } from "rxjs";
import ToDo from "../model/to-do.model";

const data: Array<ToDo> = [
    {
        id: "1",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: true
    },
    {
        id: "2",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: true
    },
    {
        id: "3",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "4",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "5",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "6",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "7",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "8",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "9",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "10",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "11",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "12",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "13",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "14",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    },
    {
        id: "15",
        title: "Task 1",
        description: "note for task one don't remove it",
        dueDate: new Date(),
        isDone: false
    }
];

export function getAllToDos(filterList) {
    let filteredData = data;
    for (let i = 0; i < filterList.length; i++) {
        const filter = filterList[i];
        if (!filter.searchValue) {
            continue;
        }
        switch (filter.columnName) {
            case "title":
                filteredData = filteredData.filter((element) =>
                    element.title.toLowerCase().includes(filter.searchValue.toLowerCase())
                );
                break;
            case "description":
                filteredData = filteredData.filter((element) =>
                    element.description.toLowerCase().includes(filter.searchValue.toLowerCase())
                );
                break;
            case "dueDate":
                filteredData = filteredData.filter((element) =>
                    element.dueDate <= filter.searchValue[1] &&
                    element.dueDate >= filter.searchValue[0]
                );
                break;
        }
    }
    return of(filteredData);
}


export function applyActionToToDO(id, action) {
    const index = data.findIndex((element) => element.id === id);
    switch (action) {
        case "delete":
            data.splice(index, 1);
            return of('Todo has been deleted successfully');
        case "done":
            data[index].isDone = true;
            return of('Todo is Done now');
    }
}

export function addNewSenderName(todo: ToDo) {
    todo.id = data.length + 1 + "";
    data.splice(0, 0, todo);
    return of('Todo has been added successfully');
}

