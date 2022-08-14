import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { map, Observable, shareReplay, Subscription, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreakpointClassNameUpdater {
  readonly breakpoints$: Observable<BreakpointClassNameMap>;

  private readonly elements = new Set<HTMLElement>();
  private subscription?: Subscription;

  constructor(
    @Inject(BREAKPOINT_QUERY_CONFIG)
    private queryConfig: BreakpointQueryConfig,
    private observer: BreakpointObserver,
  ) {
    this.breakpoints$ = this.observer
      .observe(Object.values(this.queryConfig))
      .pipe(
        map((state) => this.parseState(state)),
        tap((map) => this.elements.forEach((e) => this.updateElement(e, map))),
        shareReplay(1),
      );
  }

  bootstrap(): void {
    if (!this.subscription) this.subscription = this.breakpoints$.subscribe();
  }

  include(element: HTMLElement): void {
    this.elements.add(element);
  }

  exclude(element: HTMLElement): void {
    this.elements.delete(element);
  }

  private parseState(state: BreakpointState): BreakpointClassNameMap {
    const map: Partial<Record<BreakpointClassName, boolean>> = {};
    for (const k in this.queryConfig) {
      const className = k as BreakpointClassName;
      const query = this.queryConfig[className];
      map[className] = state.breakpoints[query];
    }
    return map as Required<typeof map>;
  }

  private updateElement(
    element: HTMLElement,
    map: BreakpointClassNameMap,
  ): void {
    for (const k in map) {
      const className = k as BreakpointClassName;
      const active = map[className];
      if (active) element.classList.add(className);
      else element.classList.remove(className);
    }
  }
}

export type BreakpointClassName = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export type BreakpointQueryConfig = Record<BreakpointClassName, string>;
export type BreakpointClassNameMap = Record<BreakpointClassName, boolean>;

export const BREAKPOINT_QUERY_CONFIG =
  new InjectionToken<BreakpointQueryConfig>('BreakpointQueryConfig');
