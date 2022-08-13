import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BreakpointsDirective } from './components/breakpoints.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, BreakpointsDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
