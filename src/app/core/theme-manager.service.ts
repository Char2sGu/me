import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  shareReplay,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeManager {
  readonly theme$: Observable<ThemeName>;
  readonly themeDetected$: Observable<ThemeName>;
  readonly themePreference$$ = new BehaviorSubject<ThemeName | null>(null);

  constructor(private mediaObserver: BreakpointObserver) {
    this.themeDetected$ = this.mediaObserver
      .observe('(prefers-color-scheme: light)')
      .pipe(map(({ matches }) => (matches ? 'light' : 'dark')));
    this.theme$ = combineLatest([
      this.themeDetected$,
      this.themePreference$$,
    ]).pipe(
      map(([detected, preference]) => preference ?? detected),
      shareReplay(1),
    );
    this.themePreference$$.next(null);
  }
}

export type ThemeName = 'light' | 'dark';
