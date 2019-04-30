import { Pipe, PipeTransform } from '@angular/core';
import { EventInfo } from 'src/app/core/models/event/event-info.model';

@Pipe({ name: 'sortEvents' })
export class SortEventsPipe implements PipeTransform {
  transform(value: EventInfo[]): EventInfo[] {
      return value.sort((a, b) => b.peopleInterestedIn - a.peopleInterestedIn);
  }
}