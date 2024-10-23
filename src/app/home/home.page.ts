import { Component, inject } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { AlertController } from '@ionic/angular';
import { AlertsService } from '../service/alerts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  firebase = inject(FirebaseService);
  alertsService = inject(AlertsService)

  constructor() {}

  cerrarSesion(){
    this.alertsService.generarAlertCerrarSesion().then((confirmado) => {
      if (confirmado) {
        this.firebase.singOut();
        this.firebase.routerLink('/login');
      } else {
        console.log('Sesión no cerrada');
      }
    })
  }

}
