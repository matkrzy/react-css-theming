import { createContext } from 'react';

import { noop } from '../utils';

import { ThemeContextType } from '../types';

export const ThemeContext = createContext<ThemeContextType>({
  change: noop,
  current: 'default',
  themes: ['default'],
});
