import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(data:any):Observable<any>{
    return this.http.post('https://localhost:44372/api/Employee', data)
  }

  getEmployee():Observable<any>{
    return this.http.get('https://localhost:44372/api/Employee')
  }

  deleteEmployee(id:number): Observable<any>{
    return this.http.delete(`https://localhost:44372/api/Employee/${id}`)
  }

  editEmployee(id:number,data:any):Observable<any>{
    return this.http.patch(`https://localhost:44372/api/Employee/${id}`, data)
  }

}

