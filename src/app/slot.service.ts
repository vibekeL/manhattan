import { Injectable } from '@angular/core';
import { Slot } from './slot.model';
import { SLOTS } from './mock-slots';
import { MessageService } from './messages.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable()
export class SlotService {
  private slotsUrl = 'api/slots';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getSlots(): Observable<Slot[]> {
   return this.http.get<Slot[]>(this.slotsUrl).pipe(
     tap((slots) => this.log('fetched slots')),
     catchError(this.handleError('getSlots', []))
   );
  }


  updateSlot(slot: Slot): Observable<any> {
    return this.http.put(this.slotsUrl, slot, httpOptions).pipe(
      tap((_) => this.log(`updated slot id=${slot.id}`)),
      catchError(this.handleError<any>('updateSlot'))
    );
  }

  getSlot(id: number): Observable<Slot> {
    // Todo: send the message _after_ fetching the slot
    this.messageService.add(`SlotService: fetched slot id=${id}`);
    return of(SLOTS.find((slot) => slot.id === id));
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a SlotService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SlotsService: ${message}`);
  }
}
