# react-css-theming

A library that allows you to make your application themeable based on css variables in an easy way without additional components and wrappers

#Usage
Use `ThemeProvider` to provide defined css variables into the application like below

```jsx harmony
import { ThemeProvider } from 'react-css-theming';

import styles from './styles.scss';

//defined themes and variables
const themes = {
  default: {
    primary: 'red',
  },
  second: {
    primary: 'yellow',
  },
};

export const App = () => {
  return <ThemeProvider themes={themes}>....</ThemeProvider>;
};
```

Use defined variables in your styles files

```scss
.app {
  color: var(--primay);
}
```

#Props list
List of `ThemeProvider` props

| name         | type   | default value | required | desc                                           |
| ------------ | ------ | ------------- | -------- | ---------------------------------------------- |
| themes       | Object | -             | yes      | object with defined themes and variables       |
| defaultTheme | string | default       | no       | default theme which will be applied as default |

# useTheme hook

If you want to have access to update theme in any place of the application you can use `useTheme` hook

```jsx harmony
import { useTheme } from 'react-css-theming';

const MyComponent = () => {
  const { theme, change, themes } = useTheme();

  //....
};
```
Hook values

| name   | type           | desc                                                                   |
| ------ | -------------- | ---------------------------------------------------------------------- |
| theme  | string         | selected theme                                                         |
| change | (string)=>void | function to update selected theme where arg is a string with new theme |
| themes | string[]       | array of available themes                                              |
