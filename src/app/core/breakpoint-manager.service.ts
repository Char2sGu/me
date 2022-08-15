import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreakpointManager {
  readonly breakpoints$: Observable<BreakpointMap>;

  constructor(
    @Inject(BREAKPOINT_QUERY_CONFIG)
    private queryConfig: BreakpointQueryConfig,
    private observer: BreakpointObserver,
  ) {
    this.breakpoints$ = this.observer
      .observe(Object.values(this.queryConfig))
      .pipe(
        map((state) => this.parseState(state)),
        shareReplay(1),
      );
  }

  private parseState(state: BreakpointState): BreakpointMap {
    const map: Partial<Record<BreakpointName, boolean>> = {};
    for (const k in this.queryConfig) {
      const className = k as BreakpointName;
      const query = this.queryConfig[className];
      map[className] = state.breakpoints[query];
    }
    return map as Required<typeof map>;
  }
}

export type BreakpointName = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type BreakpointQueryConfig = Record<BreakpointName, string>;
export type BreakpointMap = Record<BreakpointName, boolean>;

export const BREAKPOINT_QUERY_CONFIG =
  new InjectionToken<BreakpointQueryConfig>('BreakpointQueryConfig');
