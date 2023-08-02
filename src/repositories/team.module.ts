import { Module } from '@nestjs/common';
import { DatabaseModule } from '../providers/database/database.module';
import { teamProviders } from './team.repository';
import { TeamService } from './team.service';
import { TeamController } from 'src/controlers/teams.controler';
import { IsTeamNotRegistered } from 'src/validators/team-name-exist.validator';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...teamProviders,
    TeamService,
    IsTeamNotRegistered,
  ],
  controllers: [TeamController],
})
export class TeamModule {}