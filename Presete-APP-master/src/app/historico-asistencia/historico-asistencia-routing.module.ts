import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoAsistenciaPage } from './historico-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoAsistenciaPageRoutingModule {}
