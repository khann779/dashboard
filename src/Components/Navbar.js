import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { Context } from '../Components/Context/Contex';

function Navbar({ Tabs }) {
  const { theme, setTheme, setLang, lang } = React.useContext(Context);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'light') {
      document.body.classList.add("dark");
      document.body.classList.remove('light');
      localStorage.setItem("theme_mode", "dark")
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add("light");
      localStorage.setItem("theme_mode", "light" )
    }
  };

  const onSwitchLang = (value) => {
    console.log(value);
    setLang(value);
  };

  const LANGS = [
    {
      title: 'English',
      value: 'en',
    },
    {
      title: 'Azerbaijan',
      value: 'az',
    },
  ];

  //React.useEffect(() => {
  //  localStorage.setItem('theme_mode', theme);
  //}, [theme]);

  return (
    <nav className='navbar p-1'>
      <button
        className='btn mod'
        onClick={() => {
          changeTheme()
        }}
      >
        {theme === 'light' ? (
          <i class='bi bi-sun'></i>
        ) : (
          <i class='bi bi-moon-stars'></i>
        )}
      </button>

      <a href='#' className='navbar-brand nav-title'>
        Senior
      </a>
      <div class='dropdown'>
        <button
          class='btn dropdown-toggle langu'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {lang === 'en' ? 'English' : 'Azerbaijan'}
        </button>
        <ul class='dropdown-menu'>
          {LANGS.map((item, key) => (
            <li key={key}>
              <a class='dropdown-item' onClick={() => onSwitchLang(item.value)}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className='nav nav-pills '>
        {Tabs.map((item, key) => {
          return (
            <li class='nav-item' key={key}>
              <Link class='nav-link' to={item.path}>
                {item.icon}
                <span className='ms-2'>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
