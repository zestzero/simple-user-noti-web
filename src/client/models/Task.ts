export interface Task {
    _id: string;
    title: string;
    assignees: string;
    completed: boolean;
    createWhen: Date;
    lastModifiedWhen: Date;    
}
