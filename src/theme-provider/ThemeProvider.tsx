import React, { useState, useEffect, useMemo } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { applyTheme, getTheme } from '../utils';

import { ThemeProviderType, ThemeContextType } from '../types';

export const ThemeProvider = (props: ThemeProviderType) => {
  const { themes, children, theme: defaultTheme = 'default' } = props;

  const [theme, setTheme] = useState<string>(defaultTheme);

  useEffect(() => {
    applyTheme(getTheme(theme, themes));
  }, [theme, themes]);

  const availableThemes = useMemo(() => Object.keys(themes), [themes]);

  const contextValue: ThemeContextType = useMemo<ThemeContextType>(
    () => ({
      current: theme,
      change: setTheme,
      themes: availableThemes,
    }),
    [theme, themes],
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
