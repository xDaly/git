import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
     path: '', 
     loadChildren: () => import('./first/first.module').then(m => m.FirstModule)
   },
   {
     path : 'app1',
     loadChildren : ()=> import('../../projects/app1/src/app/app.module').then(m=>m.AppModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
