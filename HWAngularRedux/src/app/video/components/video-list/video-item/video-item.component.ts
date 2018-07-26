import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoStoreService } from '../../../store/video-store.service';
import { IVideo } from '../../../model/video.interface';

import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  film = {};
  isHideBlock = false;
  movieID$;
  urlScreen = 'https://www.youtube.com/embed/';

  panelOpenState = false;
  private selectedId: string;
  isTrue = true;

  constructor(
    private router: Router,
    private videoStoreService: VideoStoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.videoStoreService.dispatchGetSingleMovie();

    this.movieID$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.videoStoreService.getItemMovie(params.get('id'));
      })
    );
    this.movieID$.subscribe(data => {
      console.log(data);
    });
  }

  btnBack() {
    this.router.navigate(['/youtube-list']);
  }
}
