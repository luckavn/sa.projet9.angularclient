import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../service/patient-service.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[];
  currentPatientId: string;
  patientId: string;
  title = '';

  constructor(private patientService: PatientService, private route: ActivatedRoute,
    private router: Router) {
      this.currentPatientId = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit() {
    this.patientService.findAll().subscribe(data => {
      console.log(data);
      this.patients = data;
    });
  }

  removePatient(): void {
    console.log(this.currentPatientId)
    this.patientService.delete(this.currentPatientId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/patients']);
        },
        error => {
          console.log(error);
        });
  }
}