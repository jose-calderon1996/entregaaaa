import { Component, inject, OnInit } from '@angular/core';
import { PerfilEstudiante } from '../models/usuario.interface'; 
import {  AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage implements OnInit {

  perfilEstudiante: PerfilEstudiante | undefined; // 
  private loadingController = inject(LoadingController);
  private alertas = inject(AlertController);

  async carga() {
    
    const loading = await this.loadingController.create({
      message: 'Escaneando tu codigo QR...',
      duration: 3000 // Duración de la animación de carga: 3 segundos
    });
    await loading.present();

    await loading.onDidDismiss();

  }
  async cerrar() {
    
    const loading = await this.loadingController.create({
      message: 'Cerrando sesion...',
      duration: 3000 // Duración de la animación de carga: 3 segundos
    });
    await loading.present();

    await loading.onDidDismiss();

  }
  async alerta() {
    const alert = await this.alertas.create({
      header: 'Exito',
      message: 'Codigo escaneado correctamente.',
      buttons: ['OK']
    });
    
    await alert.present();
  }

  async cargarAnimaciones(){
    await this.carga();
    await this.alerta();

  }

  async cerrarSesion() {
    const alert = await this.alertas.create({
      header: 'Confirmación',
      message: 'Estas  seguro de que deseas cerrar sesion?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', 
        },
        {
          text: 'Aceptar',
          handler: async () => {
            await this.cerrar();
            this.navCtrl.navigateRoot('/home');
          },
        },
      ],
    });

    await alert.present();
    
  }

  constructor(private navCtrl: NavController) { }

  navegarHistorico() {
    this.navCtrl.navigateForward('/historico-asistencia'); 
  }
  ngOnInit() {
    
    this.perfilEstudiante = {
      nombre: 'Jose calderon',
      comuna: 'Estacion central',
      direccion: 'Cordoba y figueroa 1236',
      fechaNacimiento: '30-06-1996',
      carrera: 'Analista programador',
      fechaIngreso: '03-03-2022'
    };

   
  }
}
