import { Component,inject } from '@angular/core';
import {  AlertController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular'; // para animar las cosas 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  private loadingController = inject(LoadingController);
  private alertas = inject(AlertController);

  // variables locales para capturar con ngmodel
  email : string ="";
  password : string ="";

  async presentAlert() {
    const alert = await this.alertas.create({
      header: 'Error de inicio de sesion',
      message: 'Correo o contraseña incorrectos. Inténtalo nuevamente.',
      buttons: ['OK']
    });
    
    await alert.present();
  }

  async animacionLogin() {
    // Crea el loading con un mensaje
    const loading = await this.loadingController.create({
      message: 'Iniciando sesion...',
      duration: 3000 // Duración de la animación de carga: 3 segundos
    });

    
    await loading.present();

    
    await loading.onDidDismiss();

    
    this.navCtrl.navigateForward('/perfil-estudiante');
  }
  

  validadInnicio(){
    if (this.email=="ji.calderon@duocuc.cl" && this.password=="cosito"){
      this.animacionLogin();

    }else{
      this.presentAlert();
    }


  }

  constructor(private navCtrl: NavController) {}
  
  color: string = 'success'; // color inicial de mi toggle
  toggleColor() {
    this.color = this.color === 'success' ? 'warning' : 'success';
  }

  navegarRegistro() {
    this.navCtrl.navigateForward('/registro-estudiantil'); 
  }
  navegarPerfil() {
    this.navCtrl.navigateForward('/perfil-estudiante'); 
  }
  vistaPass() {
    this.navCtrl.navigateForward('/cambio-pass'); 
  }

}
