import React, { useContext, useState } from 'react';
import Pagination from '../pagination';
import { getLength, getUsers } from '../users';
import SelectLimit from '../selectLimit';
import { locales } from '../utils/locales';
import { Context } from '../Context/Contex';
//import en from '../utils/en.json';
//import az from '../utils/az.json';
function Table() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { lang } = React.useContext(Context);

  //const handleLanguageChange = (e) => {
  //  const lang = e.target.value;
  //  setLanguage(lang);
  //};

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

  console.log('lang', locales(lang));

  return (
    <div className='body'>
      <table class='table text-center'>
        <thead>
          <tr>
            <th scope='col'>{locales(lang)['id']}</th>
            <th scope='col'>{locales(lang)['fullname']}</th>
            <th scope='col'>{locales(lang)['email']}</th>
            <th scope='col'>{locales(lang)['location']}</th>
            <th scope='col'>{locales(lang)['phone']}</th>
            <th scope='col'>{locales(lang)['spend']}</th>
            <th scope='col'>{locales(lang)['orders']}</th>
          </tr>
        </thead>
        <tbody>
          {getUsers(page, limit)?.map(
            (user) =>
              user && (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.location}</td>
                  <td>{user.phone}</td>
                  <td>{user.total_spend}</td>
                  <td>{user.total_orders}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <div className='pagination-container m-5'>
        <SelectLimit onLimitChange={setLimit} />
        <Pagination
          totalPage={totalPage}
          page={page}
          limit={limit}
          siblings={1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Table;
