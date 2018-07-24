import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { VideoStoreService } from '../../store/video-store.service';
import { VideoItemComponent } from './video-item/video-item.component';
import { tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  movies$;
  moviesNEW$;

  constructor(private videoStoreService: VideoStoreService) {}

  ngOnInit() {
    this.videoStoreService.dispatchGetData();
    this.movies$ = this.videoStoreService.selectVideos();

    // this.moviesNEW$ = this.videoStoreService.getItemMovie();

    // this.moviesNEW$.subscribe(data => console.log(data));
  }
}
