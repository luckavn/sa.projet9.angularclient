import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Risk } from '../model/risk';
import { Observable } from 'rxjs';

@Injectable()
export class RiskService {

  private riskUrl: string;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
    this.riskUrl = 'http://localhost:8080/risk';
  }

  public calculateRiskFromPatientId(id:string): Observable<Risk> {
    return this.http.get<Risk>(`${this.riskUrl}/patientId?id=${id}`);
  }

  public calculateRiskFromPatientFamilyName(id:string): Observable<Risk> {
    return this.http.get<Risk>(`${this.riskUrl}/patientFamilyName?familyName=${id}`);
  }

}
