import { Controller, Get, Post, Body, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { AddDispatcherDto } from "../dto/dispatcher/add-dispatcher.dto";
import { UpdateDispatcherDto } from "../dto/dispatcher/update-dispatcher.dto";
import { Dispatcher } from '../entities/dispatcher.entity';
import { DispatcherService } from '../services/dispatcher.service';
import { DeleteResult } from 'typeorm';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('Dispatcher')
export class DispatcherController {
  constructor(private readonly dispatcherService: DispatcherService) {}

  @Get()
  async getDispatcher(): Promise<Dispatcher[]> { 
    return this.dispatcherService.findAll();
  }

  @Post()
  async addDispatcher(@Body()addDispatcherDto: AddDispatcherDto): Promise<Dispatcher> {
    return this.dispatcherService.addDispatcher(addDispatcherDto);
  }

  @Delete("/:id")
  async deleteDispatcher(@Param("id") id: number): Promise<DeleteResult> {
    return this.dispatcherService.deleteDispatcher(id);
  }

  @Put("/:id")
  async updateDispatcher(@Param("id") id: number, @Body()updateDispatcherDto: UpdateDispatcherDto): Promise<Dispatcher> {
    return this.dispatcherService.updateDispatcher(id, updateDispatcherDto);
  }
}