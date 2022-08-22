import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoSeriesComponent } from './video-series.component';


@NgModule({
  declarations: [
    VideoSeriesComponent
  ],
  exports: [
    VideoSeriesComponent
  ],
  imports: [
    CommonModule
  ],
})
export class VideoSeriesModule { }
