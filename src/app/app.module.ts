import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideValue } from './common/injection';
import { BREAKPOINT_QUERY_CONFIG } from './core/breakpoint-class-name-updater.service';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, HomeModule],
  providers: [
    provideValue(BREAKPOINT_QUERY_CONFIG, {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      xxl: '(min-width: 1536px)',
      xxxl: '(min-width: 1920px)',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
