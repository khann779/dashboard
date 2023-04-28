import { useState, useContext } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Router/Home';
import Service from './Components/Router/Service';
import Table from './Components/Router/Table';
import Products from './Components/Router/Products';
import Form from './Components/Router/Form';
import Employee from './Components/Router/Employee';
import { Route, Routes } from 'react-router-dom';
import { getLength } from './Components/users';
import { Context } from './Components/Context/Contex';
import './Components/Sass/app.scss';
import { locales } from './Components/utils/locales';

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { theme, setTheme, lang } = useContext(Context);

  let totalPage = Math.ceil(getLength() / limit);
  let pageNo;
  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }
  function handlePageChange(value) {
    if (value === '&laquo;' || value === '... ') {
      setPage(1);
    } else if (value === '&lsaquo;') {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === '&rsaquo;') {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === '&raquo;' || value === ' ...') {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  const Tabs = [
    {
      path: '/home',
      element: <Home />,
      name: locales(lang)['home'],
      icon: <i className='fs-4 bi bi-house'></i>,
    },
    {
      path: '/table',
      element: <Table />,
      name: locales(lang)['table'],
      icon: <i className='fs-4 bi bi-people'></i>,
    },
    {
      path: '/products',
      element: <Products />,
      name: locales(lang)['products'],
      icon: <i className='fs-4 bi bi-grid'></i>,
    },
    {
      path: '/service',
      element: <Service />,
      name: locales(lang)['service'],
      icon: <i class='fs-4 bi bi-gear'></i>,
    },
    {
      path: '/form',
      element: <Form />,
      name: locales(lang)['form'],
      icon: <i class='fs-4 bi bi-person-add'></i>,
    },
    {
      path: '/employee',
      element: <Employee />,
      name: locales(lang)['employee'],
      icon: <i class='fs-4 bi bi-person-square'></i>,
    },
  ];

  return (
    <div className={`App ${theme}`}>
      <Navbar Tabs={Tabs} />
      <Routes>
        {Tabs.map((item, key) => (
          <>
            <Route path={item.path} element={item.element} />
          </>
        ))}
      </Routes>
    </div>
  );
}

export default App;
