import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu():Observable<any>{
    return this.http.get("https://localhost:44372/api/Menu").pipe(map((res:any)=>{
      return res;
    }))
    
  }
}
