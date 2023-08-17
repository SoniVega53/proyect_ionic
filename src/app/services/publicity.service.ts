import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicityService extends BaseService{


  getLoadByIndex(index: string): Observable<any> {
    return this.getService(`viewPublicityDate/${index}`);
  }

  getLoadAll(): Observable<any> {
    return this.getService(`viewPublicityDate`);
  }
}
