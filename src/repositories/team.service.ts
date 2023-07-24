import { Inject, Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { Team, TeamStatusEnum } from "../entities/team.entity"
import { AddTeamDto } from "src/dto/add-team.dto";
import { UpdateTeamDto } from "src/dto/update-team.dto";

@Injectable()

export class TeamService {
   
    constructor (
        @Inject('TEAM_REPOSITORY')
        private teamRepository: Repository<Team>,
    ){}

    async findAll(): Promise<Team[]> {
        return this.teamRepository.find();
    }

    async addTeam(addTeamDto: AddTeamDto): Promise<Team> {
        const newTeam = this.teamRepository.create({name: addTeamDto.name, status: TeamStatusEnum.Free});
        return this.teamRepository.save(newTeam);
    }

    async deleteTeam(id): Promise<DeleteResult>{
        return this.teamRepository.delete(id);
    }

    async updateTeam(id: number, updateTeamDto: UpdateTeamDto): Promise<Team> {
        const team = await this.teamRepository.findOneBy({id: id});
        team.name=updateTeamDto.name;
        return this.teamRepository.save(team);
      }
}