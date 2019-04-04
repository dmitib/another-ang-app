import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  PathNotFoundComponent,
  AboutComponent
} from './components';

@NgModule({
  declarations: [
    PathNotFoundComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
