import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TeamService } from '../services/team.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, UserTypeEnum } from 'src/dto/team/login.dto';
import { DispatcherService } from 'src/services/dispatcher.service';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private teamService: TeamService,
    private dispatcherService: DispatcherService,
    private jwtService: JwtService
    ) {}

  async signIn(loginDto: LoginDto): Promise<any> {
    let user;
    switch(loginDto.source){
      case UserTypeEnum.Dispatcher:
        user = await this.dispatcherService.findOneByName(loginDto.name);
        break;
      case UserTypeEnum.Team:
        user = await this.teamService.findOneByName(loginDto.name);
        break;
    }
    if (user?.password !== loginDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name, roles: [this.mapToRoleEnum(loginDto.source)] };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private mapToRoleEnum(userType: UserTypeEnum): Role{
    switch (userType){
      case UserTypeEnum.Dispatcher:
        return Role.Admin;
      case UserTypeEnum.Team:
        return Role.Team;
    }
  }
}