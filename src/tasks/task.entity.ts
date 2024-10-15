import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    createdBy: string;
}