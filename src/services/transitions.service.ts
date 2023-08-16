import { Injectable, BadRequestException } from '@nestjs/common';
import { Team, TeamStatusEnum, transitions } from 'src/entities/team.entity';

@Injectable()
export class StatusService {
    
    canTransitionTo(targetState: TeamStatusEnum, oldState: TeamStatusEnum): boolean {
        const allowedTransitions = transitions[oldState];
        return allowedTransitions.includes(targetState);
    }
    
    transitionTo(targetState: TeamStatusEnum, oldState: TeamStatusEnum): void {
        if (this.canTransitionTo(targetState, oldState)) {
           return
        } else {
          throw new BadRequestException(`Nie można zmienić statusu ${oldState} na ${targetState}`);
        }
    }
}