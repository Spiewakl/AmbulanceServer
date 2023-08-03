import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: TeamStatusEnum;

    @Column()
    password: string;
};
export enum TeamStatusEnum{
    Free='base',
    Free2='oobase',
    
}