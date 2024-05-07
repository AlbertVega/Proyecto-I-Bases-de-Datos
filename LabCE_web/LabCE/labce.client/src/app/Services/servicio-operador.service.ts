import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../Interfaces/registro';
import { ResponseApi } from '../Interfaces/response-api'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioOperadorService {

  private urlApi: string = "https://localhost:5000/api/";

  constructor(private http: HttpClient) { }

  register(request: Registro): Observable<ResponseApi> {

    return this.http.post<ResponseApi>(this.urlApi + "OpRegister", request);
  }

  getOperators(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.urlApi + "Operator");
  }
}
