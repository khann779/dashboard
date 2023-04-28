import React from 'react';
import { Context } from '../Context/Contex';
import { locales } from '../utils/locales';

const Form = () => {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [list, setList] = React.useState([]);
  const { lang } = React.useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = list;
    newList.push({
      title: title,
      desc: desc,
    });
    setList(newList);
    setTitle('');
    setDesc('');
  };

  return (
    <div className='body d-flex justify-content-center align-items-center flex-column'>
      <form
        className='form-control m-2 w-50 bg-dark'
        style={{ borderRadius: '10px' }}
        onSubmit={handleSubmit}
      >
        <label className='mt-2 text-white'>{locales(lang)['title']}</label>
        <input
          className='form-control'
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className='mt-2 text-white'>
          {locales(lang)['description']}
        </label>
        <textarea
          className='form-control'
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className='btn btn-info mt-3  w-100' type='submit'>
          {locales(lang)['add']}
        </button>
      </form>
      <div>
        {list.map((item) => (
          <ul>
            <li>
              {item.title} {item.desc}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Form;
