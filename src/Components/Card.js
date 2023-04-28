import React, { useEffect, useState } from 'react';

const Card = () => {
  const [prod, setProd] = useState([]);

  const requestFakeApi = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const cardData = await res.json();
    setProd(cardData);
  };

  useEffect(() => {
    requestFakeApi();
  }, []);

  return (
    <div className='cont'>
      {prod.map((item, key) => (
        <div class='card m-3' style={{ width: '260px', height: '450px' }}>
          <img
            src={item.image}
            class='card-img-top'
            alt='no'
            className='m-4'
            style={{ height: '200px', width: '200px' }}
          />
          <div class='card-body'>
            <p class='card-text'>{item.title}</p>

            <div className='but'>
              <button
                className='btn'
                //onClick={() => {
                //  setShow(true);
                //}}
              >
                <i className='bi bi-info-square-fill inf'></i>
              </button>

              <button className='btn'>
                <i className='bi bi-trash trash'></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
