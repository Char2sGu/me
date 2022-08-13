import { BreakpointObserver } from '@angular/cdk/layout';
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBreakpoints]',
  standalone: true,
})
export class BreakpointsDirective {
  @HostBinding('class.xs') xs = false;
  @HostBinding('class.md') md = false;
  @HostBinding('class.lg') lg = false;
  @HostBinding('class.xl') xl = false;
  @HostBinding('class.xxl') xxl = false;

  readonly queries = {
    xs: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
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
