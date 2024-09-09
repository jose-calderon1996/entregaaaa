import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoAsistenciaPageRoutingModule } from './historico-asistencia-routing.module';

import { HistoricoAsistenciaPage } from './historico-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoAsistenciaPageRoutingModule
  ],
  declarations: [HistoricoAsistenciaPage]
})
export class HistoricoAsistenciaPageModule {}
