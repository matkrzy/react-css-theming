import { ThemesType } from '../types';

export const getTheme = (theme: string, themes: ThemesType) => {
  if (!themes.hasOwnProperty('default')) {
    throw new Error('Default Theme is required');
  }

  if (themes.hasOwnProperty(theme)) {
    return themes[theme];
  } else {
    console.warn(`Cannot find theme "${theme}". Theme is set to default`);

    return themes.default;
  }
};
