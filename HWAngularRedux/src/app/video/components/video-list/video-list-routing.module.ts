import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { VideoListComponent } from './video/components/video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';

const routes: Routes = [{ path: 'movie/:id', component: VideoItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoListRoutingModule {}
