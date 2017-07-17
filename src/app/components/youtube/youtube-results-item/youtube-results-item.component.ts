import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { YoutubeAction } from 'app/common/actions/youtube.actions';

import { Store } from '@ngrx/store';
// npm install yt-player
import * as YTPlayer from 'yt-player';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'youtube-results-item',
  templateUrl: './youtube-results-item.component.html',
  styleUrls: ['./youtube-results-item.component.scss']
})

export class YoutubeResultsItemComponent implements OnInit {
  @Input() videoId;
  youtubePlayer: YTPlayer;
  element: ElementRef;
  id: any;
  show = true;
  
  constructor(private youtubeAction: YoutubeAction, private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    console.log('videoid', this.videoId)
    const options = { autoplay: false, width: 500, height: 270 };
    this.youtubePlayer = new YTPlayer(this.element, options);
    this.youtubePlayer.load(this.videoId);
    this.youtubePlayer.setVolume(100);
    // this.youtubePlayer.on('playing', () => {
    //   console.log(this.youtubePlayer.getDuration());
    // });

  }

}