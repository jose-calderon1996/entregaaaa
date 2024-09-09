import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historico-asistencia',
  templateUrl: './historico-asistencia.page.html',
  styleUrls: ['./historico-asistencia.page.scss'],
})
export class HistoricoAsistenciaPage implements OnInit {
  // fechas lamacenadas localmente 
   fechasConsecutivas: string[] = [
    '08/09/2024',
    '09/09/2024',
    '10/09/2024',
    '11/09/2024',
    '12/09/2024',
    '13/09/2024',
    '14/09/2024'
  ];

  constructor(private navCtrl: NavController) { }
  navegarHome() {
    this.navCtrl.navigateForward('/home'); // Navegación a la página "perfil-estudiante"
  }
  ngOnInit() {


  }

}
