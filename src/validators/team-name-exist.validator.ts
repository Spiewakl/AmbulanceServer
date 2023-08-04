import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Team } from "../entities/team.entity";
import { TeamService } from 'src/services/team.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsTeamNotRegistered implements ValidatorConstraintInterface{
    constructor( private teamService: TeamService){}

    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean>{
      if (value === null || value === undefined) return true;
        const result = await this.teamService.findOneByName(value);
        return result === null;
    }



    defaultMessage?(validationArguments?: ValidationArguments): string {
        return "Team already exist";
    }

    
  }
  export function TeamNotRegistered(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsTeamNotRegistered,
      });
    };
}