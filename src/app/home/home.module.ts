import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeScreenIntroductionComponent } from './home-screen-introduction/home-screen-introduction.component';
import { HomeScreenProjectsComponent } from './home-screen-projects/home-screen-projects.component';
import { HomeProjectCardComponent } from './shared/home-project-card/home-project-card.component';
import { HomeScreenLayoutComponent } from './shared/home-screen-layout/home-screen-layout.component';
import { HomeThemeButtonComponent } from './shared/home-theme-button/home-theme-button.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeScreenLayoutComponent,
    HomeScreenIntroductionComponent,
    HomeScreenProjectsComponent,
    HomeProjectCardComponent,
    HomeThemeButtonComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HomeComponent],
})
export class HomeModule {}
