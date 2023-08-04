import { Inject, Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { Team, TeamStatusEnum } from "../entities/team.entity"
import { AddTeamDto } from "src/dto/team/add-team.dto";
import { UpdateTeamDto } from "src/dto/team/update-team.dto";

@Injectable()

export class TeamService {
   // findOne(name: string) {
      //  throw new Error('Method not implemented.');
    //}
   
    constructor (
        @Inject('TEAM_REPOSITORY')
        private teamRepository: Repository<Team>,
    ){}

    async findAll(): Promise<Team[]> {
        return this.teamRepository.find();
    }

    async findOneByName(name: string): Promise<Team | null> {
        const result = await this.teamRepository.findOneBy({name: name});
        return result;
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
        if(updateTeamDto.name !== null) {
            team.name = updateTeamDto.name;
        }
        if(updateTeamDto.status !== null) {
            team.status = updateTeamDto.status;
        }
        if(updateTeamDto.password != null){
            team.password = updateTeamDto.password;
        }
        return this.teamRepository.save(team);
      }

}