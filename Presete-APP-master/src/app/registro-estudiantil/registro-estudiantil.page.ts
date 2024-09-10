import { Component, inject } from '@angular/core';
import { usuario } from '../models/usuario.interface';
import { AlertController, LoadingController } from '@ionic/angular';




@Component({
  selector: 'app-registro-estudiantil',
  templateUrl: './registro-estudiantil.page.html',
  styleUrls: ['./registro-estudiantil.page.scss'],
})
export class RegistroEstudiantilPage {
  
  password1: string ="";
  usuario: usuario = {
    nombre: '',
    correo: '',
    carrera: '',
    contrasena: '',
    confirmarContrasena: ''
  };
  private loadingController = inject(LoadingController);
  private alertas = inject(AlertController);
  
  constructor() {}

  async carga() {
    // Crea el loading con un mensaje
    const loading = await this.loadingController.create({
      message: 'Registrado al estudiante...',
      duration: 3000 // Duración de la animación de carga: 3 segundos
    });
    await loading.present();

    await loading.onDidDismiss();

  }

  async alerta() {
    const alert = await this.alertas.create({
      header: 'error ',
      message: 'Rellena todos los campos',
      buttons: ['OK']
    });
    
    await alert.present();
  }
  async alertaPass() {
    const alert = await this.alertas.create({
      header: 'error ',
      message: 'Contraseñas ingresadas no son iguales',
      buttons: ['OK']
    });
    
    await alert.present();
  }

  async registroExitoso() {
    // campos llenos no vacios 
    if (!this.usuario.nombre || !this.usuario.correo || !this.usuario.carrera || !this.usuario.contrasena || !this.usuario.confirmarContrasena) {
      this.alerta();
      return;
    }

    // Verifica si la contraseña y la confirmación coinciden
    if (this.usuario.contrasena !== this.usuario.confirmarContrasena) {
      this.alertaPass();
      return;
    }

    
    await this.carga();

    const alert = await this.alertas.create({
      header: 'Exito',
      message: 'Registro completado' ,
      buttons: ['OK']
    });
    //Setea
    await alert.present();
    this.usuario.nombre = '';
    this.usuario.correo = '';
    this.usuario.carrera = '';
    this.usuario.contrasena = '';
    this.usuario.confirmarContrasena = '';
  }
  
    

  
  
    



}
