import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../service/patient-service.service';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit {
  patient: Patient;
  patientId: string;

  constructor(private repository: PatientService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.patientId)
  }

  deletePatient() {
    this.patientId = this.route.snapshot.paramMap.get("id")
    this.repository.delete(this.patientId)
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
