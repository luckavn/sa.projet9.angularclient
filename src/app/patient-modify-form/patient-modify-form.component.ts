import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../service/patient-service.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-patient-modify-form',
  templateUrl: './patient-modify-form.component.html',
  styleUrls: ['./patient-modify-form.component.css']
})

export class PatientModifyFormComponent implements OnInit {
  patient: Patient;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private patientService: PatientService) { 
        
      }

  ngOnInit() {
    const idPatient = this.route.snapshot.paramMap.get("id")
    this.patientService.find(idPatient).subscribe(patient => this.patient = patient)
    console.log(this.patient)

  }

  onSubmit() {
    this.patientService.modify(this.patient, this.patient.id).subscribe(result => this.gotoPatientList());
  }

  gotoPatientList() {
    this.router.navigate(['/patients']);
  }

}




 

