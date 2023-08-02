import { ApiProperty } from "@nestjs/swagger";
import { TeamStatusEnum } from "src/entities/team.entity";
import { TeamNotRegistered } from "src/validators/team-name-exist.validator";

export class UpdateTeamDto{
    @ApiProperty()
    @TeamNotRegistered()
    name?: string | null;
    @ApiProperty()
    status?: TeamStatusEnum;
};