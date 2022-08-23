import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodeSliderComponent } from './episode-slider.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    EpisodeSliderComponent
  ],
  exports: [
    EpisodeSliderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
})
export class EpisodeSliderModule { }
