import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { UpdateTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[]= [
        {
            id:'1',
            title:'first task',
            description:'some task',
            status:TaskStatus.PENDING,
        }
    ]

    getAllTasks() {
        return this.tasks;
    }

    createTask(title:string, description:string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);

        return task;
    }

    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id);
    }

    updateTask(id: string, updatedFields: UpdateTaskDTO): Task {
        const task = this.getTaskById(id);
        const updatedTask = Object.assign(task, updatedFields);
        this.tasks = this.tasks.map(task => task.id === id ? updatedTask : task);
        return updatedTask;
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id != id);
    }
}
