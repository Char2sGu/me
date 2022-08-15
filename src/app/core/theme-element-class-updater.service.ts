import { Injectable } from '@angular/core';

import { ThemeManager } from './theme-manager.service';

@Injectable({ providedIn: 'root' })
export class ThemeElementClassUpdater {
  constructor(private themeManager: ThemeManager) {}

  register(element: HTMLElement): void {
    this.themeManager.theme$.subscribe((theme) => {
      element.classList.toggle('light', theme === 'light');
      element.classList.toggle('dark', theme === 'dark');
    });
  }
}
