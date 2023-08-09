import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class StatusEvent {
   
    @PrimaryGeneratedColumn()
        id: number;
    
    @Column()
        currentStatus: string;
    
    @Column()
        previousStatus: string;
    
    @Column({ type: 'date' })
        time: string;
}