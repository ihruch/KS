import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListComponent } from './video-list.component';
import { ApiService } from '../../services/api.service';
import { VideoStoreModule } from '../../store/video-store.module';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoListRoutingModule } from './video-list-routing.module';

@NgModule({
  imports: [CommonModule, VideoStoreModule, VideoListRoutingModule],
  declarations: [VideoListComponent, VideoItemComponent],
  exports: [VideoListComponent, VideoItemComponent],
  providers: [ApiService]
})
export class VideoListModule {}
