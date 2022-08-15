import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { LOCAL_STORAGE } from './common/dom.tokens';
import { BreakpointClassNameUpdater } from './core/breakpoint-class-name-updater.service';
import { ThemeManager } from './core/theme-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private breakpointClassNameUpdater: BreakpointClassNameUpdater,
    private themeManager: ThemeManager,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCAL_STORAGE) private localStorage: Storage,
  ) {}

  ngOnInit(): void {
    this.setupBreakpoints();
    this.setupTheme();
  }

  private setupBreakpoints(): void {
    this.breakpointClassNameUpdater.include(this.document.body);
    this.breakpointClassNameUpdater.bootstrap();
  }

  private setupTheme(): void {
    const key = 'theme';
    const theme = this.localStorage[key];
    if (theme === 'light' || theme === 'dark')
      this.themeManager.themePreference$$.next(theme);
    this.themeManager.themePreference$$.subscribe((theme) => {
      if (theme) this.localStorage[key] = theme;
      else delete this.localStorage[key];
    });
  }
}
