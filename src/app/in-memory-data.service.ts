import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Slot } from './slot.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
const slots: Slot[] = [
         {
           id: 11,
           name: '09-10',
           cartId: 1,
           location: 'Dronning L',
    group: '1',
           perticipants: new Array('Ditte', 'Dolly'),
         },
         {
           id: 12,
           name: '10-11',
           cartId: 1,
            location: 'Kgs. Nytorv',
           group: '2',
           perticipants: new Array('Kaj', 'Andrea'),
         },
         {
           id: 13,
           name: '11-12',
           cartId: 1,
            location: 'Dronning L',
           group: '3',
           perticipants: new Array('NA'),
         },
         {
           id: 14,
           name: '12-13',
           cartId: 1,
            location: 'Dronning L',
           group: '0',
           perticipants: new Array('Anders', 'Andersine'),
         },
         {
           id: 15,
           name: '13-14',
           cartId: 1,
           location: 'Dronning L',
           group: '3',
           perticipants: new Array('Gurli', 'Thormod'),
         },
         {
           id: 16,
           name: '14-15',
           cartId: 1, location: 'Dronning L',
           group: '4',
           perticipants: new Array('Grit', 'Githa'),
         },
         {
           id: 17,
           name: '15-16',
           cartId: 1,
            location: 'Dronning L',
           group: '5',
           perticipants: new Array('Nemo', 'Momo'),
         },
         {
           id: 18,
           name: '16-17',
           cartId: 1,
            location: 'Dronning L',
           group: '6',
           perticipants: new Array('NA'),
         },
       ];
return {slots};
  }

  // Overrides the genId method to ensure that a slot always has an id.
  // If the heroes array is empty,
  genId(slots: Slot[]): number {
    return slots.length > 0 ? Math.max(...slots.map(slot => slot.id)) + 1 : 11;
  }
}

