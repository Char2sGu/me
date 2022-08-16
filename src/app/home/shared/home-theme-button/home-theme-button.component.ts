import { Component, OnInit } from '@angular/core';
import {
  matDarkMode,
  matLightMode,
} from 'src/app/common/font-awesome.extension';
import { ThemeManager, ThemeName } from 'src/app/core/theme-manager.service';

@Component({
  selector: 'app-home-theme-button',
  templateUrl: './home-theme-button.component.html',
  styleUrls: ['./home-theme-button.component.scss'],
})
export class HomeThemeButtonComponent implements OnInit {
  icons = { matDarkMode, matLightMode };
  theme$ = this.themeManager.theme$;

  constructor(private themeManager: ThemeManager) {}

  ngOnInit(): void {}

  setTheme(theme: ThemeName): void {
    this.themeManager.themePreference$$.next(theme);
  }
}
