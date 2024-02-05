import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private hc:HttpClient) { }

  UserRegistration(data: any) {
    return this.hc.post("https://localhost:44372/api/Registration", data)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}

