import { Controller, Get, Post, Body, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { AddTeamDto } from 'src/dto/team/add-team.dto';
import { UpdateTeamDto } from 'src/dto/team/update-team.dto';
import { Team, transitions } from 'src/entities/team.entity';
import { TeamService } from 'src/services/team.service';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/auth/roles.decorator';


@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('TeamStatus')
export class TeamStatusController {
  constructor(private readonly teamService: TeamService) {}


  @Get("/:id")
  @Roles(Role.Team)
  async getTeamAvaibleStatus(@Param("id") id: number): Promise<string[]> {
   const team = await this.teamService.findOneById(id)
   const teamStatus = team.status
   const statusList = transitions[teamStatus]
   return statusList
  }
}
