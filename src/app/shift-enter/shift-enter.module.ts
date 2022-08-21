import { NgModule } from '@angular/core';
import { VideoSeriesModule } from '../components/video-series/video-series.module';
import { ShiftEnterComponent } from './shift-enter.component';

@NgModule({
  declarations: [
    ShiftEnterComponent
  ],
  exports: [
    ShiftEnterComponent
  ],
  imports: [
    VideoSeriesModule
  ]
})
export class ShiftEnterModule { }
