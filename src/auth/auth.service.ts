import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TeamService } from '../services/team.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private teamService: TeamService,
    private jwtService: JwtService
    ) {}

  async signIn(name: string, pass: string): Promise<any> {
    const team = await this.teamService.findOneByName(name);
    if (team?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: team.id, username: team.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}