import { Component, Input } from '@angular/core';
import { VideoEpisode, VideoSeries } from './video-series';

@Component({
  selector: 'app-video-series',
  templateUrl: './video-series.component.html',
  styleUrls: ['./video-series.component.scss']
})
export class VideoSeriesComponent {
  @Input()
  public series = {} as VideoSeries;

  @Input()
  public backgroundPosition = 'right';

  public selectedEpisode = {} as VideoEpisode;

}