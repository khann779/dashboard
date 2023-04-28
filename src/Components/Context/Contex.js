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

  //язык
  const [lang, setlang] = React.useState(localStorage.getItem('lang') || 'en');

  const setLang = (value) => {
    setlang(value);
    localStorage.setItem('lang', value);
  };

  return (
    <Context.Provider value={{ theme, setTheme, setLang, lang }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
