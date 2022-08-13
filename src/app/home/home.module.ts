import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeScreenIntroductionComponent } from './home-screen-introduction/home-screen-introduction.component';
import { HomeScreenLayoutComponent } from './shared/home-screen-layout/home-screen-layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeScreenLayoutComponent,
    HomeScreenIntroductionComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
