import { Component,inject } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-pass',
  templateUrl: './cambio-pass.page.html',
  styleUrls: ['./cambio-pass.page.scss'],
})
export class CambioPassPage {
  currentPassword: string = 'jose'; 
  enteredCurrentPassword: string = ''; 
  newPassword: string = ''; 
  confirmPassword: string = ''; 

  private loadingController = inject(LoadingController);
  private alertas = inject(AlertController);
  

  constructor() {}

  async alerta() {
    const alert = await this.alertas.create({
      header: 'Error al cambiar contraseña',
      message: 'Inténtalo nuevamente.',
      buttons: ['OK']
    });
    
    await alert.present();
  }
  async cambioPass() {
    // Crea el loading con un mensaje
    const loading = await this.loadingController.create({
      message: 'Cambiando tu contraseña...',
      duration: 3000 // Duración de la animación de carga: 3 segundos
    });

    
    await loading.present();

    
    await loading.onDidDismiss();

    
    
  }

  




  async onSubmit() {
    // contraseña correcta por la que ya defini
    if (this.enteredCurrentPassword !== this.currentPassword) {
      await this.alerta(); // Muestra una alerta si la contraseña actual es incorrecta
      return;
    }
  
    // contraseñas iguales 
    if (this.newPassword !== this.confirmPassword) {
      await this.alerta(); // Muestra una alerta si las nuevas contraseñas no coinciden
      return;
    }
  
    // contraseña diferente a la actual
    if (this.newPassword === this.currentPassword) {
      await this.alerta(); 
      return;
    }
  
    // promesa que se carga cuadno la pass es cambiada y espera para que despues se ejecute lo que esta mas abajo
     await this.cambioPass();
  
    // actualiza mi contraseña nueva
    this.currentPassword = this.newPassword;
    
    
    const alert = await this.alertas.create({
      header: 'Éxito',
      message: 'Contraseña restablecida correctamente a: ' + this.currentPassword,
      buttons: ['OK']
    });
    
    await alert.present();
    
  
    // Limpia los campos después de actualizar la contraseña
    this.enteredCurrentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }
  
}
