import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cambio-pass',
    loadChildren: () => import('./cambio-pass/cambio-pass.module').then( m => m.CambioPassPageModule)
  },
  {
    path: 'registro-estudiantil',
    loadChildren: () => import('./registro-estudiantil/registro-estudiantil.module').then( m => m.RegistroEstudiantilPageModule)
  },
  {
    path: 'perfil-estudiante',
    loadChildren: () => import('./perfil-estudiante/perfil-estudiante.module').then( m => m.PerfilEstudiantePageModule)
  },
  {
    path: 'historico-asistencia',
    loadChildren: () => import('./historico-asistencia/historico-asistencia.module').then( m => m.HistoricoAsistenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
