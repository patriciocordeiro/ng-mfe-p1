import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../assets/home-app-mfe-lib.umd' as any).then(m => m.HomeModule)

  },
  {
    path: 'user',
    loadChildren: () => import('../assets/user-app-mfe-lib.umd' as any).then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
