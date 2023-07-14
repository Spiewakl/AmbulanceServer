import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Team } from "../entities/team.entity"
@Injectable()

export class TeamService {
    constructor (
        @Inject('TEAM_REPOSITORY')
        private teamRepository: Repository<Team>,
    ){}

    async findAll(): Promise<Team[]> {
        return this.teamRepository.find();
    }
}