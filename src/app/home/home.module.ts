import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
