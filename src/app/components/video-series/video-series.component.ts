import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { VideoSeries } from 'src/app/shift-enter/video-series';

@Component({
  selector: 'app-video-series',
  templateUrl: './video-series.component.html',
  styleUrls: ['./video-series.component.scss']
})
export class VideoSeriesComponent implements AfterViewInit {

  @Input()
  public series = {} as VideoSeries;

  public contentHeight: number | undefined;

  constructor() {

  }

  ngAfterViewInit() {
      this.contentHeight = window.innerHeight * .6;
  }



}