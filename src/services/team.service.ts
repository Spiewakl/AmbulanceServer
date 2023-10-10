import { Inject, Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { Team, TeamStatusEnum } from "../entities/team.entity"
import { AddTeamDto } from "src/dto/team/add-team.dto";
import { UpdateTeamDto } from "src/dto/team/update-team.dto";
import { StatusService } from "./transitions.service";

@Injectable()

export class TeamService {
    constructor (
        @Inject('TEAM_REPOSITORY')
        private teamRepository: Repository<Team>,
        private transitions: StatusService,
    ){}

    async findAll(): Promise<Team[]> {
        return this.teamRepository.find();
    }

    async findOneById(id: number): Promise<Team | null> {
        const result = await this.teamRepository.findOneBy({id: id});
        return result;
    }

    async findOneByName(name: string): Promise<Team | null> {
        const result = await this.teamRepository.findOneBy({name: name});
        return result;
    }

    async addTeam(addTeamDto: AddTeamDto): Promise<Team> {
        const newTeam = this.teamRepository.create({name: addTeamDto.name, password: addTeamDto.password, status: TeamStatusEnum.Free});
        return this.teamRepository.save(newTeam);
    }

    async deleteTeam(id): Promise<DeleteResult>{
        return this.teamRepository.delete(id);
    }

    async updateTeam(id: number, updateTeamDto: UpdateTeamDto): Promise<Team> {
        const team = await this.teamRepository.findOneBy({id: id});
        if(updateTeamDto.name !== null) {
            team.name = updateTeamDto.name;
        }
        if(updateTeamDto.status !== null) {
            this.transitions.transitionTo(updateTeamDto.status, team.status)
            team.status = updateTeamDto.status;
        }
        if(updateTeamDto.password != null){
            team.password = updateTeamDto.password;
        }
        return this.teamRepository.save(team);
      }

}