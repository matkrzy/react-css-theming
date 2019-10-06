//@ts-ignore
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ThemeProvider, useTheme } from '../src';

const TestComponent = () => {
  const { current, themes, change } = useTheme();

  return (
    <>
      <div className="context-value">
        <div className="current">{current}</div>
        <div className="themes">{themes.toString()}</div>
      </div>
      <button onClick={() => change('second')}>change theme</button>
    </>
  );
};

describe('useTheme hook', () => {
  const themes = {
    default: {
      primary: 'red',
    },
    second: {
      primary: 'blue',
    },
  };

  it('gets all data from context', () => {
    const { container } = render(
      <ThemeProvider themes={themes}>
        <TestComponent />
      </ThemeProvider>,
    );

    const currentTheme = container.querySelector('.current').textContent;
    expect(currentTheme).toBe('default');

    const availableThemes = container.querySelector('.themes').textContent;
    expect(availableThemes).toBe('default,second');
  });

  it('change theme', () => {
    const { container } = render(
      <ThemeProvider themes={themes}>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(container.querySelector('.current').textContent).toBe('default');

    const changeThemeButton = container.querySelector('button');
    fireEvent.click(changeThemeButton);

    expect(container.querySelector('.current').textContent).toBe('second');
  });
});
