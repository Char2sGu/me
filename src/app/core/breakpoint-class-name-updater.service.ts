import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, Subscription, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreakpointClassNameUpdater {
  readonly queries: BreakpointClassNameQueries;
  readonly breakpoints$: Observable<BreakpointClassNameMap>;

  private readonly elements = new Set<HTMLElement>();
  private subscription?: Subscription;

  constructor(private observer: BreakpointObserver) {
    this.queries = {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      xxl: '(min-width: 1536px)',
      xxxl: '(min-width: 1920px)',
    };
    this.breakpoints$ = this.observer.observe(Object.values(this.queries)).pipe(
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
    for (const k in this.queries) {
      const className = k as BreakpointClassName;
      const query = this.queries[className];
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
export type BreakpointClassNameQueries = Record<BreakpointClassName, string>;
export type BreakpointClassNameMap = Record<BreakpointClassName, boolean>;
