import { ApiProperty } from "@nestjs/swagger";
import {IsEnum} from "class-validator";

export enum UserTypeEnum{
    Team = 'team',
    Dispatcher = 'dispatcher',
}

export class LoginDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    @IsEnum(UserTypeEnum)
    source: UserTypeEnum;
}