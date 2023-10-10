import { Module } from '@nestjs/common';
import { DatabaseModule } from '../providers/database/database.module';
import { teamProviders } from '../repositories/team.repository';
import { TeamService } from '../services/team.service';
import { TeamController } from 'src/controlers/teams.controler';
import { IsTeamNotRegistered } from 'src/validators/team-name-exist.validator';
import { StatusService } from 'src/services/transitions.service';
import { TeamStatusController } from 'src/controlers/teamStatus.controler';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...teamProviders,
    TeamService,
    IsTeamNotRegistered,
    StatusService,
  ],
  controllers: [TeamController, TeamStatusController],
  exports: [TeamService],
})
export class TeamModule {}