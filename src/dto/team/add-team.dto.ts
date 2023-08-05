import { ApiProperty } from "@nestjs/swagger";
import { TeamNotRegistered } from "src/validators/team-name-exist.validator";

export class AddTeamDto{
    @ApiProperty()
    @TeamNotRegistered()
    name: string;
    @ApiProperty()
    password: string;
};