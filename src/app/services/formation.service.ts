import {Injectable} from '@angular/core';
import {Formation} from '../models/Formation.model';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FormationService {

  formations: Formation[];
  formationSubject = new Subject<any[]>();

  constructor(private http: Http) {
  }


  listerFormations() {
    return this.http.get('http://localhost:8080/formations')
      .map(response => response.json());
  }

  creerFormation(formation: Formation) {
    this.formations.push(formation);
    this.emitFormations();
    /* this.httpClient
      .post('https://httpclient-demo.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );*/
  }

  modifierFormation(formation: Formation) {

  }

  emitFormations() {
    this.formationSubject.next(this.formations.slice());
  }

}
