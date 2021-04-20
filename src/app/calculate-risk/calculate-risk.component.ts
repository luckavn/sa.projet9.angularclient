import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Risk } from '../model/risk';
import { RiskService } from '../service/risk-service.service';

@Component({
  selector: 'app-calculate-risk',
  templateUrl: './calculate-risk.component.html',
  styleUrls: ['./calculate-risk.component.css']
})

export class CalculateRiskComponent implements OnInit {
  risk: Risk;
  constructor(private riskService: RiskService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const patientId = this.route.snapshot.paramMap.get("id")
    console.log(patientId)
    this.riskService.calculateRiskFromPatientId(patientId).subscribe(risk => this.risk = risk)
    console.log(this.risk)
  }

}
