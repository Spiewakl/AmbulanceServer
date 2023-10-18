import { Controller, Get, Post, Body, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { AddTeamDto } from 'src/dto/team/add-team.dto';
import { UpdateTeamDto } from 'src/dto/team/update-team.dto';
import { Team } from 'src/entities/team.entity';
import { TeamService } from 'src/services/team.service';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { EventsGateway } from 'src/events/events.gateway';


@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('Team')
export class TeamController {
  constructor(private readonly teamService: TeamService, 
    private readonly eventGateway: EventsGateway,) {}

  @Get()
  async getTeams(): Promise<Team[]> { 
    return this.teamService.findAll();
  }

  @Post()
  @Roles(Role.Admin)
  async addTeam(@Body()addTeamDto: AddTeamDto): Promise<Team> {
    return this.teamService.addTeam(addTeamDto);
  }

  @Delete("/:id")
  @Roles(Role.Admin)
  async deleteTeam(@Param("id") id: number): Promise<DeleteResult> {
    return this.teamService.deleteTeam(id);
  }

  @Put("/:id")
  @Roles(Role.Team, Role.Admin)
  async updateTeam(@Param("id") id: number, @Body()updateTeamDto: UpdateTeamDto): Promise<Team> {
    this.eventGateway.server.emit('events', 'Emit działa')
    return this.teamService.updateTeam(id, updateTeamDto);
  }
  @Post("/emit")
  @Roles(Role.Team, Role.Admin)
  async emitEvent(){
    this.eventGateway.server.emit('events', 'Emit działa')
  }

  @Get("/allowedStatus/:id")
  @Roles(Role.Team, Role.Admin)
  async getAllowedStatusesForTeam(@Param("id") id: number): Promise<string[]>{
    return this.teamService.allowedStatuses(id)
  }
}