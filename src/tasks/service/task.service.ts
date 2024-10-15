import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private usersRepository: Repository<Task>,
    ) {}
    
    async findAll(): Promise<Task[]> {
        return this.usersRepository.find();
    }
    async findOne(id: number): Promise<Task> {
        return this.usersRepository.findOne({ where: { id } });
    }

    async create(task: Task): Promise<Task> {
       const newUser = this.usersRepository.create(task);
         return this.usersRepository.save(newUser);
    }

    async update(id: number, task: Task): Promise<Task> {
        await this.usersRepository.update(id, task);
        return await this.usersRepository.findOne({ where: { id } });
    }

    async delete (id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
