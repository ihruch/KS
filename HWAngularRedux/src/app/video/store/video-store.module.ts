import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VideoStoreService } from './video-store.service';

import { Reducer } from './video.reducer';
import { VideoEffects } from './video.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('video', Reducer),
    EffectsModule.forFeature([VideoEffects])
  ],
  declarations: [],
  exports: [StoreModule, EffectsModule],
  providers: [VideoStoreService]
})
export class VideoStoreModule {}
