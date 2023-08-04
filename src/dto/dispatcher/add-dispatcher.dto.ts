import { ApiProperty } from "@nestjs/swagger";

export class AddDispatcherDto{
    @ApiProperty()
    name: string;
};