import { NgModule } from '@angular/core';
import { CryptoComponent } from './crypto.component';

@NgModule({
  declarations: [
    CryptoComponent
  ],
  exports: [
    CryptoComponent
  ],
})
export class CryptoModule { }
