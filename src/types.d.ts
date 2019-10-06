import React from 'react';

export type ThemeContextType = {
  current: string;
  change: Function;
  themes: string[];
};

export type ThemesType = { [key: string]: any };
export type ThemeType = { [key: string]: string };

export type ThemeProviderType = {
  themes: ThemesType;
  theme?: string;
  children: React.ReactNode;
  onChange?: Function;
};
