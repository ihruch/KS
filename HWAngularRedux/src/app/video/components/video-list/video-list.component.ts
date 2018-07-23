import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { VideoStoreService } from './../../store/video-store.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  idChannel: string;
  movies$;

  constructor(private videoStoreService: VideoStoreService) {}

  ngOnInit() {
    this.videoStoreService.dispatchGetVideos();
    this.movies$ = this.videoStoreService.selectVideos();
  }
  // this.movies$.subscribe(data => console.log(data));
  openSingleFilm(movie) {
    console.log(movie);
  }
}
