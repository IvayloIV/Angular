import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MemeRoutingModule } from './meme-routing.module';

import memeComponents from './index';
import { AllMemesResolver } from 'src/app/core/resolvers/all-memes.resolver';
import { MemeDetailsResolver } from 'src/app/core/resolvers/meme-details.resolver';

@NgModule({
  declarations: [
    ...memeComponents
  ],
  imports: [
    CommonModule,
    MemeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AllMemesResolver,
    MemeDetailsResolver
  ]
})
export class MemeModule { }
