import { Component } from '@angular/core';
import { VideoSeries } from '../components/video-series/video-series';

@Component({
  selector: 'app-shift-enter',
  templateUrl: './shift-enter.component.html',
  styleUrls: ['./shift-enter.component.scss']
})
export class ShiftEnterComponent {

  public series: VideoSeries = {
    title: "Title",
    description: "Through community and mentoring relationships, we will inspire young adults who are Shifting from high school to Entering their next phase. By equipping them to think intentionally and critically, we encourage them to take the initiative to stay connected to faith and church through this life change.",
    logo: "ShiftEnter_Logo.png",
    backgroundImage: "Shift-enter2.png",
    episodes: [
      {
        title: 'We are all being shaped and formed PT.1',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_1.png',
        link: ''
      },
      {
        title: 'We are all being shaped and formed PT.2',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_2.png',
        link: ''
      },
      {
        title: 'We are all being shaped and formed PT.3',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_3.png',
        link: ''
      },
      {
        title: 'We are all being shaped and formed PT.4',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_4.png',
        link: ''
      },
      {
        title: 'We are all being shaped and formed PT.5',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_5.png',
        link: ''
      },
      {
        title: 'We are all being shaped and formed PT.6',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_6.png',
        link: ''
      },
      {
        title: 'We are all being shaped and formed PT.7',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_7.png',
        link: ''
      }
    ]
  }

}