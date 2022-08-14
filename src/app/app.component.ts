import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { BreakpointClassNameUpdater } from './components/breakpoint-class-name-updater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private breakpointClassNameUpdater: BreakpointClassNameUpdater,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    this.breakpointClassNameUpdater.include(this.document.body);
    this.breakpointClassNameUpdater.bootstrap();
  }
}
