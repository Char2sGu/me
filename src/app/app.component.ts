import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { LOCAL_STORAGE } from './common/dom.tokens';
import { BreakpointElementClassUpdater } from './core/breakpoint-element-class-updater.service';
import { ThemeElementClassUpdater } from './core/theme-element-class-updater.service';
import { ThemeManager } from './core/theme-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private breakpointElementClassUpdater: BreakpointElementClassUpdater,
    private themeManager: ThemeManager,
    private themeElementClassUpdater: ThemeElementClassUpdater,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCAL_STORAGE) private localStorage: Storage,
  ) {}

  ngOnInit(): void {
    this.setupBreakpoints();
    this.setupTheme();
  }

  private setupBreakpoints(): void {
    this.breakpointElementClassUpdater.register(this.document.body);
  }

  private setupTheme(): void {
    const key = 'theme';

    const themePreference = this.localStorage[key];
    if (themePreference === 'light' || themePreference === 'dark')
      this.themeManager.themePreference$$.next(themePreference);

    this.themeManager.themePreference$$.subscribe((theme) => {
      if (theme) this.localStorage[key] = theme;
      else delete this.localStorage[key];
    });

    this.themeElementClassUpdater.register(this.document.body);
  }
}
