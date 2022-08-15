import { Injectable } from '@angular/core';

import {
  BreakpointManager,
  BreakpointName,
} from './breakpoint-manager.service';

@Injectable({ providedIn: 'root' })
export class BreakpointElementClassUpdater {
  constructor(private manager: BreakpointManager) {}

  register(element: HTMLElement): void {
    this.manager.breakpoints$.subscribe((breakpoints) => {
      for (const k in breakpoints) {
        const className = k as BreakpointName;
        element.classList.toggle(className, breakpoints[className]);
      }
    });
  }
}
