import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoComponent } from './crypto/crypto.component';
import { GamingComponent } from './gaming/gaming.component';
import { HomeComponent } from './home/home.component';
import { ShiftEnterComponent } from './shift-enter/shift-enter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gaming',
    component: GamingComponent
  },
  {
    path: 'crypto',
    component: CryptoComponent
  },
  {
    path: 'shift-enter',
    component: ShiftEnterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
