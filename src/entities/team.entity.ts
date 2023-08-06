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
    Free='Wolny - w bazie',
    Free2='Wolny - poza bazą',
    Comeback='Powrót do bazy',
    Disinfection='Dezynfekcja',
    Refueling='Tankowanie/Mycie',
    Malfunction='Awaria',
    Finish='Po dyżurze',
    DuringAction='W trakcie zlecenia',
    OnThePlace='Dojazd do pacjenta',
    ReturnToPlace='Powrót z pacjentem',
    GoWork='Karta na mailu',
    Break='Wracaj do bazy',
}