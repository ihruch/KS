import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListComponent } from './video-list.component';
import { ApiService } from '../../services/api.service';
import { VideoStoreModule } from './../../store/video-store.module';
import { SingleMovieComponent } from './single-movie/single-movie.component';

@NgModule({
  imports: [CommonModule, VideoStoreModule],
  declarations: [VideoListComponent, SingleMovieComponent],
  exports: [VideoListComponent, SingleMovieComponent],
  providers: [ApiService]
})
export class VideoListModule {}
