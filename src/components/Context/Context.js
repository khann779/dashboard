import React, { createContext } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  //тема
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme_mode') || 'light'
  );

  React.useEffect(() => {
    document.body.classList.add(theme);
  }, []);

  //цвет
  const [color, setColor] = React.useState(
    localStorage.getItem('color_mode') || 'blue'
  );

  React.useEffect(() => {
    document.body.classList.add(color);
  });

  //язык
  const [lang, setlang] = React.useState(localStorage.getItem('lang') || 'en');

  const setLang = (value) => {
    setlang(value);
    localStorage.setItem('lang', value);
  };

  return (
    <Context.Provider
      value={{ theme, setTheme, color, setColor, lang, setLang }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
