import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs';

@Injectable()
export class PatientService {

  private patientsUrl: string;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
    this.patientsUrl = 'http://localhost:8080/patient';
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl);
  }

  public find(id:string): Observable<Patient> {
    return this.http.get<Patient>(`${this.patientsUrl}/id?id=${id}`);
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.patientsUrl, patient);
  }

  public modify(patient: Patient, id:string) {
    return this.http.put<Patient>(`${this.patientsUrl}?id=${id}`, patient);
  }

  public delete(id:string)  {
    return this.http.delete(`${this.patientsUrl}?id=${id}`);
  }

}
