import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from '../service/task.service';
import { Task } from '../task.entity';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    async findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Task> {
       const task = await this.taskService.findOne(id);
         if (!task) {
              throw new Error('Task not found');
         }else {
              return task;
         }
    }

    @Post()
    async create(@Body() task: Task): Promise<Task> {
        return this.taskService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() task: Task): Promise<Task> {
       const updatedTask = await this.taskService.update(id, task);
            if (!updatedTask) {
                throw new Error('Task not found');
            }else {
                return updatedTask;
            }
            
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.taskService.delete(id);
    }
}
