import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodeSliderModule } from '../episode-slider/episode-slider.module';
import { VideoSeriesComponent } from './video-series.component';


@NgModule({
  declarations: [
    VideoSeriesComponent
  ],
  exports: [
    VideoSeriesComponent
  ],
  imports: [
    CommonModule,
    EpisodeSliderModule
  ],
})
export class VideoSeriesModule { }
