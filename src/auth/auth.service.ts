import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TeamService } from '../services/team.service';

@Injectable()
export class AuthService {
  constructor(private teamService: TeamService) {}

  async signIn(name: string, pass: string): Promise<any> {
    const team = await this.teamService.findOne(name);
    if (team?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = team;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}