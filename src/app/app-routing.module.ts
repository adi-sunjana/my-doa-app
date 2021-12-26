import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : '' , redirectTo : 'home' , pathMatch : 'full' },
  { path : 'home' , loadChildren : ()=> import('./pages/home/home.module').then(m=>m.HomeModule) },
  { path : 'doa' , loadChildren : ()=> import('./pages/doa/doa.module').then(m=>m.DoaModule) },
  { path : 'read-quran' , loadChildren : ()=> import('./pages/read-quran/read-quran.module').then(m=>m.ReadQuranModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
