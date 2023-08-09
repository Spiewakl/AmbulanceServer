import { Injectable, BadRequestException } from '@nestjs/common';
import { TeamStatusEnum, transitions } from 'src/entities/team.entity';

@Injectable()
export class StatusService {
    public currentState: TeamStatusEnum = TeamStatusEnum.Free;
    
    canTransitionTo(targetState: TeamStatusEnum): boolean {
        const allowedTransitions = transitions[this.currentState];
        return allowedTransitions.includes(targetState);
    }
  
    transitionTo(targetState: TeamStatusEnum): void {
        if (this.canTransitionTo(targetState)) {
            this.currentState = targetState;
        } else {
          throw new BadRequestException(`Nie można zmienić statusu ${this.currentState} na ${targetState}`);
        }
    }
     getCurrentState(): TeamStatusEnum {
        return this.currentState;
    }
}