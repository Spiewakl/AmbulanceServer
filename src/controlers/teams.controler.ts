import { Controller, Get } from '@nestjs/common';
import { Team } from 'src/entities/team.entity';
import { TeamService } from 'src/repositories/team.service';


@Controller('Team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async getHello(): Promise <Team[]> {
    return this.teamService.findAll();
  }
}