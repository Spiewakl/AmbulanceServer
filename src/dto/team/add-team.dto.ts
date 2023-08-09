import { ApiProperty } from "@nestjs/swagger";
import { TeamStatusEnum } from "src/entities/team.entity";
import { TeamNotRegistered } from "src/validators/team-name-exist.validator";

export class AddTeamDto{
    @ApiProperty()
    @TeamNotRegistered()
    name: string;
    @ApiProperty()
    password: string;
};