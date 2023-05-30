import React, { useState, useContext } from 'react';
import { Context } from './components/Context/Context';
import { locales } from './components/locales';
import Charta from './components/Chart';
import notification from './components/notification.json';
import status from './components/status-card-data.json';
import user from './components/user_menus.json';
import './assest/app.scss';

function App() {
  const [show, setShow] = useState(false);
  const { theme, setTheme, color, setColor, setLang, lang } =
    useContext(Context);

  const changeThemeL = () => {
    setTheme('light');
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme_mode', 'light');
    }
  };

  const changeThemeD = () => {
    setTheme('dark');
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme_mode', 'dark');
    }
  };

  const changeColorB = () => {
    setColor('blue');
    if (color === 'blue') {
      document.body.classList.add('blue');
      document.body.classList.remove('red');
      document.body.classList.remove('green');
      localStorage.setItem('color_mode', 'blue');
    }
  };
  const changeColorR = () => {
    setColor('red');
    if (color === 'red') {
      document.body.classList.add('red');
      document.body.classList.remove('blue');
      document.body.classList.remove('green');
      localStorage.setItem('color_mode', 'red');
    }
  };
  const changeColorG = () => {
    setColor('green');
    if (color === 'green') {
      document.body.classList.add('green');
      document.body.classList.remove('blue');
      document.body.classList.remove('red');
      localStorage.setItem('color_mode', 'green');
    }
  };

  const onSwitchLang = (value) => {
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
    {
      title: 'Russia',
      value: 'ru',
    },
  ];

  return (
    <div className={`App ${theme} ${color}`}>
      <main className={show ? 'space-toggle' : null}>
        <div className={`sidebar ${show ? 'show' : null}`}>
          <nav className='nav'>
            <div>
              <div className='nav-logo'>
                <img src='https://senior.az/master%20academy_files/seniorlogohr.svg'></img>
              </div>

              <div className='nav-list'>
                <div className='nav-link'>
                  <i class='bi bi-columns-gap nav-link-icon'></i>
                  <span className='nav-link-name'>
                    {locales(lang)['dashboard']}
                  </span>
                </div>
                <div className='nav-link'>
                  <i class='bi bi-person-workspace nav-link-icon'></i>
                  <span className='nav-link-name'>
                    {locales(lang)['customers']}
                  </span>
                </div>
                <div className='nav-link'>
                  <i class='bi bi-box-seam nav-link-icon'></i>
                  <span className='nav-link-name'>
                    {locales(lang)['products']}
                  </span>
                </div>
                <div className='nav-link'>
                  <i class='bi bi-bar-chart-line nav-link-icon'></i>
                  <span className='nav-link-name'>
                    {locales(lang)['statistics']}
                  </span>
                </div>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                  <i
                    className={`fas fa-bars ${
                      show ? 'fa-solid fa-xmark' : null
                    }`}
                  ></i>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className='container'>
          <div className='header'>
            <div className='user'>
              <div className='user_avatar'>
                <img src='https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/mercedes-amg-e-class-exclusive-edition-front.jpg' />
              </div>
              <div className='user_name'>
                <div class='dropdown'>
                  <button
                    class='dropdown'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Niyazi Bagirov
                  </button>
                  <ul class='dropdown-menu'>
                    {user.users.map((item) => (
                      <li>
                        <a class='dropdown-item' href='#'>
                          <i class={item.icon}></i>
                          <p>{item.content}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className='panel'>
              <div className='language'>
                <div class='dropdown'>
                  <button
                    class='dropdown'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i class='bi bi-translate'></i>
                  </button>
                  <ul class='dropdown-menu'>
                    {LANGS.map((item, key) => (
                      <li key={key}>
                        <a
                          class='dropdown-item'
                          href='#'
                          onClick={() => onSwitchLang(item.value)}
                        >
                          <i class='bi bi-flag-fill'></i>
                          <p>{item.title}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='push'>
                <div class='dropdown'>
                  <button
                    class='dropdown'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i class='bi bi-bell'></i>
                  </button>
                  <ul class='dropdown-menu'>
                    {notification.notify.map((item) => (
                      <li>
                        <a class='dropdown-item' href='#'>
                          <i class={item.icon}></i>
                          <p>{item.content}</p>
                        </a>
                      </li>
                    ))}

                    <li>
                      <a class='dropdown-item view' href='#'>
                        View all
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='theme'>
                <button
                  class='button'
                  type='button'
                  data-bs-toggle='offcanvas'
                  data-bs-target='#offcanvasScrolling'
                  aria-controls='offcanvasScrolling'
                >
                  <i class='bi bi-palette-fill'></i>
                </button>
                <div
                  class='offcanvas offcanvas-end'
                  data-bs-scroll='true'
                  data-bs-backdrop='false'
                  tabindex='-1'
                  id='offcanvasScrolling'
                  aria-labelledby='offcanvasScrollingLabel'
                >
                  <div class='offcanvas-header'>
                    <h5 class='offcanvas-title' id='offcanvasScrollingLabel'>
                      Theme settings
                    </h5>
                    <button
                      type='button'
                      class='btn-close'
                      data-bs-dismiss='offcanvas'
                      aria-label='Закрыть'
                    ></button>
                  </div>
                  <div class='offcanvas-body'>
                    <p>Choose mod</p>
                    <div className='mod'>
                      <div
                        className='light_btn'
                        onClick={() => {
                          changeThemeL();
                        }}
                      >
                        <i class='bi bi-circle-fill clr'></i>
                        <p>Light</p>
                      </div>
                      <div
                        className='dark_btn'
                        onClick={() => {
                          changeThemeD();
                        }}
                      >
                        <i class='bi bi-circle-fill clr'></i>
                        <p>Dark</p>
                      </div>
                    </div>
                    <p>Choose color</p>
                    <div className='color'>
                      <div
                        className='blue'
                        onClick={() => {
                          changeColorB();
                        }}
                      >
                        <i class='bi bi-paint-bucket'></i>
                        <p>Blue</p>
                      </div>
                      <div
                        className='red'
                        onClick={() => {
                          changeColorR();
                        }}
                      >
                        <i class='bi bi-paint-bucket'></i>
                        <p>Red</p>
                      </div>
                      <div
                        className='green'
                        onClick={() => {
                          changeColorG();
                        }}
                      >
                        <i class='bi bi-paint-bucket'></i>
                        <p>Green</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dashboard'>
            <h2>{locales(lang)['dashboard']}</h2>
            <div className='info'>
              <div className='blocks'>
                {status.card.map((item) => (
                  <div className='block'>
                    <i class={item.icon}></i>
                    <div>
                      <h3>{item.count}</h3>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='graphic'>
                <Charta />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
