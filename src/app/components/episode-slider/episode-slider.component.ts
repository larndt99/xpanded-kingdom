import { JsonPipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { VideoEpisode } from '../video-series/video-series';

@Component({
  selector: 'app-episode-slider',
  templateUrl: './episode-slider.component.html',
  styleUrls: ['./episode-slider.component.scss']
})
export class EpisodeSliderComponent implements AfterViewInit {
  public sliderItemPadding = 30;

  @ViewChild('slider') slider = {} as ElementRef;

  /** window resize event listener */
  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    this.initDisplayItems();
  }

  /** The list of episodes to display in the slider. */
  @Input()
  public episodes: VideoEpisode[] = [];

  /** The width of each individual slider item in px. */
  @Input()
  public sliderItemWidth = 350;

  /** Outputs the selected episode */
  @Output()
  public selectedEpisode = new EventEmitter<VideoEpisode>();

  /** The number of items that are visible to the user in the component */
  public numItemsDisplayed = 0;

  /** The height of the slider component. */
  public sliderHeight = 0;

  /** The width of the slider component. */
  public sliderWidth = 0;

  /** Whether the slider can navigate to previous items. */
  public canPrevious = false;

  /** Whether the slider can navigate to the next items. */
  public canNext = false;

  /** The ordered list of episodes */
  public orderedEpisodes: VideoEpisode[] = [];

  constructor(private _cd: ChangeDetectorRef) {  }

  public ngAfterViewInit(): void {
    this.initDisplayItems();
  }

  /** Move to the next episodes */
  public next(): void {
    const index = this.episodes.findIndex((x) => JSON.stringify(x) === JSON.stringify(this.orderedEpisodes[0])) + this.numItemsDisplayed;
    this.orderedEpisodes = this.episodes.slice(index);
    this.setButtonVisibility();
  }

  /** Move to the previous episodes */
  public previous(): void {
    const index = this.episodes.findIndex((x) => JSON.stringify(x) === JSON.stringify(this.orderedEpisodes[0])) - this.numItemsDisplayed;
    this.orderedEpisodes = this.episodes.slice(index);
    this.setButtonVisibility();
  }

  public initDisplayItems(): void {
    this.sliderWidth = this.slider.nativeElement.clientWidth;
    const items = this.sliderWidth / (this.sliderItemWidth + this.sliderItemPadding);
    this.numItemsDisplayed = Math.floor(items);
    this.orderedEpisodes = this.episodes.slice(0);
    if (this.numItemsDisplayed < this.episodes.length) {
      this.canNext = true;
    }
    this._cd.detectChanges();
    setTimeout(() => {
      this.sliderHeight = this.slider.nativeElement.clientHeight;
      this._cd.detectChanges();
    }, 1000);
  }

  public setButtonVisibility(): void {
    const index = this.episodes.findIndex((x) => JSON.stringify(x) === JSON.stringify(this.orderedEpisodes[0]));
    if (index + this.numItemsDisplayed > this.episodes.length) {
      this.canNext = false;
    } else {
      this.canNext = true;
    }
    if (index <=0) {
      this.canPrevious = false;
    } else {
      this.canPrevious = true;
    }
  }


}