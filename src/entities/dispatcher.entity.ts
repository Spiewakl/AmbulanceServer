import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dispatcher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

};