import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LOCAL_STORAGE } from './common/dom.tokens';
import { provideValue } from './common/injection.utils';
import { BREAKPOINT_QUERY_CONFIG } from './core/breakpoint-manager.service';
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
    provideValue(LOCAL_STORAGE, localStorage),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
