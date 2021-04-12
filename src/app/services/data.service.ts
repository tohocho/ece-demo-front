import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlEntPoint: string = 'http://localhost:8080/ece/pacientes';
  private httpHeaders = new HttpHeaders({'Content-tye': 'aplication/json'})

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.urlEntPoint);
  }

  createPatient(paciente: Patient): Observable<Patient>{
    return this.http.post<Patient>(this.urlEntPoint, paciente, {headers: this.httpHeaders});
  }

  getPatient(id: number): Observable<Patient>{
    return this.http.get<Patient>(`${this.urlEntPoint}/${id}`);
  }

  updatePatient(paciente: Patient): Observable<Patient>{
    return this.http.put<Patient>(`${this.urlEntPoint}/${paciente.id}`, paciente, {headers: this.httpHeaders});
  }

  deletePatient(id: number): Observable<Patient>{
    return this.http.delete<Patient>(`${this.urlEntPoint}/${id}`, {headers: this.httpHeaders});
  }
}
