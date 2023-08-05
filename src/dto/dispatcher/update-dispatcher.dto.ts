import { ApiProperty } from "@nestjs/swagger";

export class UpdateDispatcherDto{
    @ApiProperty()
    name?: string | null;
    @ApiProperty()
    password?: string | null;
};