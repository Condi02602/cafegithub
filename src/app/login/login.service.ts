import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hc:HttpClient) { }

  UserLogin(data: any) {
    return this.hc.post("https://localhost:44372/api/Login", data)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
