import { ApiProperty } from "@nestjs/swagger";
import { TeamStatusEnum } from "src/entities/team.entity";

export class UpdateTeamDto{
    @ApiProperty()
    name?: string | null;
    @ApiProperty()
    status?: TeamStatusEnum;
};