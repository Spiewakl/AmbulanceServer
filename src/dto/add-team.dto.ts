import { ApiProperty } from "@nestjs/swagger";

export class AddTeamDto{
    @ApiProperty()
    name: string;
};