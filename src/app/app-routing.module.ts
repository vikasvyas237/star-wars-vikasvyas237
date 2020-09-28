import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pmpl', 
  // loadChildren: 'app/pmpl/pmpl.module#PmplModule'
  loadChildren: () => import('./pmpl/pmpl.module').then(m => m.PmplModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
