import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, paramMap } from '@angular/router';
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

  private selectedId: string;

  constructor(
    private router: Router,
    private videoStoreService: VideoStoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movieID$ = this.route.paramMap.pipe(
      switchMap((params: paramMap) => {
        return this.videoStoreService.getItemMovie(params.get('id'));
      })
    );
    this.movieID$.subscribe(data => {
      console.log(data);
      this.film = data;
    });
  }

  btnBack() {
    this.router.navigate(['/youtube-list']);
  }
}
