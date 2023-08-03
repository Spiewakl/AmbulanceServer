import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { AddDispatcherDto } from "src/dto/dispatcher/add-dispatcher.dto";
import { UpdateDispatcherDto } from "src/dto/dispatcher/update-dispatcher.dto";
import { Dispatcher } from 'src/entities/dispatcher.entity';
import { DispatcherService } from 'src/services/dispatcher.service';
import { DeleteResult } from 'typeorm';


@Controller('Dispatcher')
export class DispatcherController {
  constructor(private readonly dispatcherService: DispatcherService) {}

  @Get()
  async getTeams(): Promise<Dispatcher[]> { 
    return this.dispatcherService.findAll();
  }

  @Post()
  async addTeam(@Body()addDispatcherDto: AddDispatcherDto): Promise<Dispatcher> {
    return this.dispatcherService.addDispatcher(addDispatcherDto);
  }

  @Delete("/:id")
  async deleteTeam(@Param("id") id: number): Promise<DeleteResult> {
    return this.dispatcherService.deleteDispatcher(id);
  }

  @Put("/:id")
  async updateTeam(@Param("id") id: number, @Body()updateTeamDto: UpdateDispatcherDto): Promise<Dispatcher> {
    return this.dispatcherService.updateDispatcher(id, updateTeamDto);
  }
}