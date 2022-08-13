import { BreakpointObserver } from '@angular/cdk/layout';
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBreakpoints]',
  standalone: true,
})
export class BreakpointsDirective {
  @HostBinding('class.sm') sm = false;
  @HostBinding('class.md') md = false;
  @HostBinding('class.lg') lg = false;
  @HostBinding('class.xl') xl = false;
  @HostBinding('class.xxl') xxl = false;

  readonly queries = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    xxl: '(min-width: 1536px)',
  };

  constructor(private observer: BreakpointObserver) {
    this.observer
      .observe(Object.values(this.queries))
      .subscribe(({ breakpoints }) => {
        for (const k in this.queries) {
          const breakpoint = k as keyof typeof this.queries;
          const query = this.queries[breakpoint];
          this[breakpoint] = breakpoints[query];
        }
      });
  }
}
