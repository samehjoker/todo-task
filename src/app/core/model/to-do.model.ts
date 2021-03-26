export default class ToDo {

    id: string;
    title: string;
    description: string;
    dueDate: Date;
    isDone: boolean;

    constructor() {
        this.title = '';
    }
}