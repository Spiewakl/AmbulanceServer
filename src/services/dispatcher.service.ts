import { Inject, Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { Dispatcher } from "../entities/dispatcher.entity"
import { AddDispatcherDto } from "../dto/dispatcher/add-dispatcher.dto";
import { UpdateDispatcherDto } from "../dto/dispatcher/update-dispatcher.dto";

@Injectable()

export class DispatcherService {
   
    constructor (
        @Inject('DISPATCHER_REPOSITORY')
        private dispatcherRepository: Repository<Dispatcher>,
    ){}

    async findAll(): Promise<Dispatcher[]> {
        return this.dispatcherRepository.find();
    }

    async findByName(name: string): Promise<Dispatcher | null> {
        const result = await this.dispatcherRepository.findOneBy({name: name});
        return result;
    }

    async addDispatcher(addDispatcherDto: AddDispatcherDto): Promise<Dispatcher> {
        const newDispatcher = this.dispatcherRepository.create({name: addDispatcherDto.name, password: addDispatcherDto.password});
        return this.dispatcherRepository.save(newDispatcher);
    }

    async deleteDispatcher(id): Promise<DeleteResult>{
        return this.dispatcherRepository.delete(id);
    }

    async updateDispatcher(id: number, updateDispatcherDto: UpdateDispatcherDto): Promise<Dispatcher> {
        const dispatcher = await this.dispatcherRepository.findOneBy({id: id});
        if(updateDispatcherDto.name !== null) {
            dispatcher.name = updateDispatcherDto.name;
        }
        if(updateDispatcherDto.password !== null) {
            dispatcher.password = updateDispatcherDto.password;
        }
        return this.dispatcherRepository.save(dispatcher);
      }

}