import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { AddTeamDto } from 'src/dto/team/add-team.dto';
import { UpdateTeamDto } from 'src/dto/team/update-team.dto';
import { Team } from 'src/entities/team.entity';
import { TeamService } from 'src/services/team.service';
import { DeleteResult } from 'typeorm';


@Controller('Team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async getTeams(): Promise<Team[]> { 
    return this.teamService.findAll();
  }

  @Post()
  async addTeam(@Body()addTeamDto: AddTeamDto): Promise<Team> {
    return this.teamService.addTeam(addTeamDto);
  }

  @Delete("/:id")
  async deleteTeam(@Param("id") id: number): Promise<DeleteResult> {
    return this.teamService.deleteTeam(id);
  }

  @Put("/:id")
  async updateTeam(@Param("id") id: number, @Body()updateTeamDto: UpdateTeamDto): Promise<Team> {
    return this.teamService.updateTeam(id, updateTeamDto);
  }
}