import { 
    Body, 
    Controller, 
    Post, 
    HttpCode, 
    HttpStatus,
 } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../dto/team/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.signIn(signInDto.name, signInDto.password);
  }

}