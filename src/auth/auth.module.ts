import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TeamModule } from '../modules/team.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { DispatcherModule } from 'src/modules/dispatcher.module';

@Module({
    imports: [
    TeamModule,
    DispatcherModule,
    JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1h' },
    })
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService],
})

export class AuthModule {}