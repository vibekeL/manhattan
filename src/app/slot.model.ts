import { Time } from '@angular/common';

export class Slot {
         id: number;
         cartId: number;
         location: string;
         group: string;
         name: string;
         from?: Time;
         toTime?: Time;
         weekNo?: Date;
         perticipants: string[];
       }
