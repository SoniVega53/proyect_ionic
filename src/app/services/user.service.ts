import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {


  getLogin(email: string, password: string): Observable<any> {
    return this.getService(`login/${email}/${password}`);
  }

  postRegistre(email: string, password: string, name: string, lastname: string, phone: string): Observable<any> {
    const body = {
      "email": email,
      "password": password,
      "name": name,
      "lastname": lastname,
      "phone": phone,
      "role": "user"
    }

    return this.postServiceBody(`userSave`, body);
  }

  postUpdate(id: string,passwordCon: string,password: string, name: string, lastname: string, phone: string): Observable<any> {
    const body = {
      "password": password,
      "name": name,
      "lastname": lastname,
      "phone": phone,
    }

    return this.putServiceBody(`userSave/${id}/${passwordCon}`, body);
  }

  getAuth(): boolean {
    const isAuth = window.sessionStorage.getItem('Session')
    if (isAuth) {
      return true;
    }
    return false;
  }

  getInfoUser(): any {
    const valor = window.sessionStorage.getItem('user'); 
    return JSON.parse(valor!);
  }

  getLogout() {
    window.sessionStorage.clear()
  }
}
