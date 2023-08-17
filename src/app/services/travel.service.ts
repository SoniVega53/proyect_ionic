import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelService extends BaseService{

  getLoadAll(): Observable<any> {
    return this.getService(`viewJourneyHasPlace`);
  }

  getLoadPlaceById(id:string): Observable<any> {
    return this.getService(`viewJourneyHasPlaces/${id}`);
  }

  getLoadPlaceJourneyById(id:string): Observable<any> {
    return this.getService(`viewJourneyHasPlaces/${id}`);
  }


  //Reservation
  getLoadReservations(id:string): Observable<any> {
    return this.getService(`reservationsUser/${id}`);
  }

  getLoadReservationsJourney(id:string,journey:string): Observable<any> {
    return this.getService(`reservations/${id}/${journey}`);
  }

  getLoadCancelById(id:string): Observable<any> {
    return this.getService(`reservation/${id}`);
  }

  postReservation(idUser: string, idJourney: string, observation: string, countPeople: string): Observable<any> {
    const params = new HttpParams()
    .set('countPeople', countPeople)
    .set('observation', observation);

    return this.postServiceParams(`reservation/${idUser}/${idJourney}`,null ,params);
  }

  postReservationUpdate(id:string,idUser: string, idJourney: string, observation: string, countPeople: string): Observable<any> {
    const params = new HttpParams()
    .set('countPeople', countPeople)
    .set('observation', observation)
    .set('status', "activo");

    return this.postServiceParams(`reservation/${id}/${idUser}/${idJourney}`,null ,params);
  }

  //comment
  getLoadAllCommentByJourney(id:string): Observable<any> {
    return this.getService(`comments/${id}`);
  }

  postComment(idUser: string, idJourney: string, description: string): Observable<any> {
    const params = new HttpParams()
    .set('description', description);

    return this.postServiceParams(`comment/${idUser}/${idJourney}`,null ,params);
  }
}
