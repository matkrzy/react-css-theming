import { ThemeType } from '../types';

export const applyTheme = (theme: string) => {
  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
};
