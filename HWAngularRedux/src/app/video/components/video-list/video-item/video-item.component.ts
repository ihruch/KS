import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from '@angular/platform-browser';

import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
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
  isTrue = true;
  movieID$;
  srcIframe; //vDMJVrVY3ME
  panelOpenState = false;
  singleMovie: IVideo[];

  @ViewChild('mainblock') private block: ElementRef;

  constructor(
    private router: Router,
    private videoStoreService: VideoStoreService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
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
      this.singleMovie = data;
    });
    this.srcIframe = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${
        this.singleMovie['0'].snippet.resourceId.videoId
      }`
    );
    console.log(this.srcIframe);
  }

  btnBack() {
    this.router.navigate(['/youtube-list']);
  }
}
