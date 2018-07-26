import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { VideoStoreService } from '../../store/video-store.service';
import { VideoItemComponent } from './video-item/video-item.component';
import { tap, filter, timeout, timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  movies$;
  dataMovies = [];

  dataSource = this.dataMovies;
  displayedColumns: string[] = ['nameVideos'];

  constructor(private videoStoreService: VideoStoreService) {}

  ngOnInit() {
    this.movies$ = this.videoStoreService.selectVideos();
    this.movies$.subscribe(data => (this.dataMovies = data));

    if (this.dataMovies.length) {
      console.log('переменная TRUE');
      this.videoStoreService.dispatchReturnToPlayList();
      this.movies$ = this.videoStoreService.selectVideos();
    } else {
      console.log('переменная FALSE');
      this.videoStoreService.dispatchGetData();
    }
  }
}
