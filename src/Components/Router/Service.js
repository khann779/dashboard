import React from 'react';

const Service = () => {
  const [title, setTitle] = React.useState('');

  const add = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'post',

      body: JSON.stringify({
        title: title,
      }),
    });
  };
  return (
    <div className='body'>
      <form className='form-group w-25' onSubmit={add}>
        <label>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className='form-control'
        />
        <button className='btn btn-primary w-100 mt-2' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default Service;
