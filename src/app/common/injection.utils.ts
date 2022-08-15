import { InjectionToken, ValueProvider } from '@angular/core';

export const provideValue = <Value>(
  token: InjectionToken<Value>,
  value: Value,
): ValueProvider => ({
  provide: token,
  useValue: value,
});
