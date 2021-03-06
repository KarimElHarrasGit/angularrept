import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormationService} from '../services/formation.service';
import {Router} from '@angular/router';
import {Formation} from '../models/Formation.model';

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent implements OnInit {

  formationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private formationService: FormationService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formationForm = this.formBuilder.group({
      nom: ['', Validators.required],
      domaine: ['', Validators.required],
      objectif: ['', Validators.required],
      budget: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.formationForm.value;
    const newFormation = new Formation(
      null,
      formValue['nom'],
      formValue['domaine'],
      formValue['objectif'],
      formValue['budget']
    );
    this.formationService.creerFormation(newFormation);
    this.router.navigate(['/formations']);
  }
}
