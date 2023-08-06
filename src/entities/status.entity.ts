import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StatusEvent {
   
    @PrimaryGeneratedColumn()
        id: number;
    
    @Column()
        currentStatus: string;
    
    @Column()
        previousStatus: string;
    
    @Column()
        time: number;
}