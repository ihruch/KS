import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,

    MatListModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,

    MatListModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule {}
