import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoListComponent } from './video/components/video-list/video-list.component';
import { VideoItemComponent } from './video/components/video-list/video-item/video-item.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/youtube-list' },
  { path: 'youtube-list', component: VideoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// { enableTracing: true}
