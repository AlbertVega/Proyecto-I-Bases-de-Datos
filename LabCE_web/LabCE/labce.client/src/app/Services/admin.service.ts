import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Interfaces/login';
import { Observable } from 'rxjs';
import { ResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlApi: string = "https://localhost:5000/api/OpRegister";

  constructor(private http: HttpClient) { }

  login(request: Login): Observable<ResponseApi> {

    return this.http.post<ResponseApi>(this.urlApi, request);
  }
}
