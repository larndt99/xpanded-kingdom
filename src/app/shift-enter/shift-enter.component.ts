import { Component } from '@angular/core';
import { VideoSeries } from '../components/video-series/video-series';

@Component({
  selector: 'app-shift-enter',
  templateUrl: './shift-enter.component.html',
  styleUrls: ['./shift-enter.component.scss']
})
export class ShiftEnterComponent {

  public series: VideoSeries = {
    
    title: "Episode 1 - We are all being shaped and formed PT.1",
    description: "Through community and mentoring relationships, we will inspire young adults who are Shifting from high school to Entering their next phase. By equipping them to think intentionally and critically, we encourage them to take the initiative to stay connected to faith and church through this life change.",
    logo: "ShiftEnter_Logo.png",
    backgroundImage: "Shift-enter2.png",
    episodes: [
      {
        id: 0,
        title: 'Episode 1 - We are all being shaped and formed PT.1',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_1.png',
        link: ''
      },
      {
        id: 1,
        title: 'Episode 2 - We are all being shaped and formed PT.2',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_2.png',
        link: ''
      },
      {
        id: 2,
        title: 'Episode 3 - We are shaped by community',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_3.png',
        link: ''
      },
      {
        id: 3,
        title: 'Episode 4 - We are shaped by mentorship',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_4.png',
        link: ''
      },
      {
        id: 4,
        title: 'Episode 5 - We are all being formed by what we believe/core doctrine/developing apologetics',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_5.png',
        link: ''
      },
      {
        id: 5,
        title: 'Episode 6 - We talk about and share the good news',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_6.png',
        link: ''
      },
      {
        id: 6,
        title: 'Episode 7 - We live it out',
        description: 'Awareness (of values, worldview). We all have it. We are all being shaped and formed constantly by influences like: Culture, Media, Events (world, and personal), Education, Family, Friends, Church, etc affect us.',
        thumbnail: 'test_episode_7.png',
        link: ''
      }
    ]
  }

}