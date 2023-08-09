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
    StartAction='Przyjęcie zlecenia',
    OnThePlace='Dojazd do pacjenta',
    DuringAction='W trakcie zlecenia',
    ReturnToPlace='Powrót z pacjentem',
    GoWork='Karta na mailu',
    Break='Wracaj do bazy',
}

export const transitions = {
    [TeamStatusEnum.Free]: [TeamStatusEnum.Disinfection, TeamStatusEnum.Refueling, TeamStatusEnum.Malfunction, TeamStatusEnum.StartAction, TeamStatusEnum.Finish, TeamStatusEnum.GoWork, TeamStatusEnum.Break],
    [TeamStatusEnum.Free2]: [TeamStatusEnum.Free, TeamStatusEnum.Comeback, TeamStatusEnum.Disinfection, TeamStatusEnum.Refueling, TeamStatusEnum.Malfunction, TeamStatusEnum.StartAction, TeamStatusEnum.Finish, TeamStatusEnum.GoWork, TeamStatusEnum.Break],
    [TeamStatusEnum.Comeback]: [TeamStatusEnum.Free, TeamStatusEnum.Refueling, TeamStatusEnum.Malfunction, TeamStatusEnum.Finish, TeamStatusEnum.StartAction, TeamStatusEnum.GoWork, TeamStatusEnum.Break],
    [TeamStatusEnum.Disinfection]: [ TeamStatusEnum.Free, TeamStatusEnum.Free2, TeamStatusEnum.Comeback, TeamStatusEnum.Refueling, TeamStatusEnum.Malfunction],
    [TeamStatusEnum.Refueling]: [ TeamStatusEnum.Free2, TeamStatusEnum.Comeback, TeamStatusEnum.Malfunction, TeamStatusEnum.Finish],
    [TeamStatusEnum.Malfunction]: [ TeamStatusEnum.Free, TeamStatusEnum.Free2, TeamStatusEnum.Comeback],
    [TeamStatusEnum.Finish]: [ TeamStatusEnum.Free],
    [TeamStatusEnum.StartAction]: [TeamStatusEnum.Malfunction, TeamStatusEnum.OnThePlace, TeamStatusEnum.ReturnToPlace],
    [TeamStatusEnum.OnThePlace]: [TeamStatusEnum.Free2, TeamStatusEnum.Malfunction, TeamStatusEnum.DuringAction],
    [TeamStatusEnum.DuringAction]: [TeamStatusEnum.Free2, TeamStatusEnum.Disinfection, TeamStatusEnum.Refueling, TeamStatusEnum.Malfunction, TeamStatusEnum.Finish],
    [TeamStatusEnum.ReturnToPlace]: [TeamStatusEnum.Free2, TeamStatusEnum.Disinfection,  TeamStatusEnum.Refueling, TeamStatusEnum.Malfunction, TeamStatusEnum.Finish],
    [TeamStatusEnum.GoWork]: [TeamStatusEnum.StartAction],
    [TeamStatusEnum.Break]: [TeamStatusEnum.Comeback],
}
