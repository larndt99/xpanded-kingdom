import { Component } from '@angular/core';
import { VideoSeries } from './video-series';

@Component({
  selector: 'app-shift-enter',
  templateUrl: './shift-enter.component.html',
  styleUrls: ['./shift-enter.component.scss']
})
export class ShiftEnterComponent {

  public series: VideoSeries = {
    title: "Title",
    description: "Description",
    logo: "ShiftEnter_Logo.png",
    backgroundImage: "Shift-enter2.png",
    episodes: []
  }

}