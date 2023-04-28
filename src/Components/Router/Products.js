import React, { useEffect, useState } from 'react';
import Card from '../Card';
import Skelet from '../Skelet';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../Context/Contex';
import { locales } from '../utils/locales';
import { Skeleton } from 'antd';
import '../Sass/products.scss';
const Products = () => {
  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [search, setSearch] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectItem, setSelectItem] = React.useState(null);
  const [basket, setBasket] = React.useState([]);
  const { lang } = React.useContext(Context);

  const requestFakeApi = async () => {
    setIsLoading(true);
    const res = await fetch('https://fakestoreapi.com/products');
    if (res) {
      const cardData = await res.json();
      setProd(cardData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestFakeApi();
  }, []);

  //удаление
  const onDelete = (item) => {
    setProd(prod.filter((del) => del.id !== item.id));
  };

  const onBasketDelete = (index) => {
    setBasket(basket.filter((del, i) => i !== index));
  };

  const AddBasket = (item) => {
    setBasket([...basket, item]);
  };

  console.log(basket);
  return (
    <React.Fragment>
      <div className='conta'>
        {/*инфо*/}
        <Modal
          show={show}
          onHide={() => {
            setShow(false);
          }}
        >
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='prod'>
                <div className='infoblock d-flex flex-column align-items-center'>
                  <img
                    src={selectedItem?.image}
                    className='info-img'
                    alt='no'
                    style={{ height: '200px', width: '200px' }}
                  />
                  <div className='inf-title w-100'>
                    <label>{locales(lang)['title']}</label>
                    <input
                      className='form-control'
                      value={selectedItem?.title}
                      readonly='readonly'
                    />
                  </div>
                  <div className='inf-category w-100'>
                    <label>{locales(lang)['category']}</label>
                    <input
                      className='form-control'
                      value={selectedItem?.category}
                      readonly='readonly'
                    />
                  </div>
                  <div className='rate-count d-flex flex-row justify-content-between w-100'>
                    <div className='rate'>
                      <label>{locales(lang)['rate']}</label>
                      <input
                        className='form-control w-50'
                        value={selectedItem?.rating.rate}
                        readonly='readonly'
                      />
                    </div>
                    <div className='count'>
                      <label>{locales(lang)['count']}</label>
                      <input
                        className='form-control w-50'
                        value={selectedItem?.rating.count}
                        readonly='readonly'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className='w-100'
                variant='primary'
                onClick={() => {
                  setShow(false);
                }}
              >
                {locales(lang)['submit']}
              </Button>
            </Modal.Footer>
          </div>
        </Modal>

        {/*удаление*/}
        <div
          showDel={showDel}
          class='modal fade'
          id='staticBackdrop'
          data-bs-backdrop='static'
          data-bs-keyboard='false'
          tabindex='-1'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-5' id='staticBackdropLabel'>
                  {locales(lang)['delete']}
                </h1>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Закрыть'
                ></button>
              </div>
              <div class='modal-body'>{locales(lang)['are']}</div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  {locales(lang)['no']}
                </button>
                <button
                  type='button'
                  class='btn btn-primary'
                  data-bs-dismiss='modal'
                  onClick={() => {
                    onDelete(selectItem);
                  }}
                >
                  {locales(lang)['yes']}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*корзина*/}
        <div
          class='offcanvas offcanvas-start'
          data-bs-scroll='true'
          data-bs-backdrop='false'
          tabindex='-1'
          id='offcanvasScrolling'
          aria-labelledby='offcanvasScrollingLabel'
        >
          <div class='offcanvas-header'>
            <h5 class='offcanvas-title' id='offcanvasScrollingLabel'>
              {locales(lang)['basket']}
            </h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Закрыть'
            ></button>
          </div>
          <div class='offcanvas-body'>
            {basket.map((item, key) => (
              <div key={key}>
                <div
                  class='card m-3'
                  style={{ width: '260px', height: '450px' }}
                >
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
                        onClick={() => {
                          setShow(true);
                          setSelectedItem(item);
                        }}
                      >
                        <i className='bi bi-info-square-fill inf'></i>
                      </button>
                      <button
                        type='button'
                        className='btn'
                        onClick={() => onBasketDelete(key)}
                      >
                        <i className='bi bi-trash trash'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='market'>
          <h2>Products</h2>
          {/*поиск*/}
          <div className='poisk'>
            <input
              type='text'
              placeholder='search...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='basket'>
            {!!basket.length && (
              <div className='basket_count'>{basket.length}</div>
            )}

            <button
              className='btn btn-danger'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasScrolling'
              aria-controls='offcanvasScrolling'
            >
              <i class='bi bi-basket'></i>
            </button>
          </div>
        </div>

        <div className='cont'>
          {isLoading ? (
            <Skelet />
          ) : (
            prod
              .filter((x) =>
                x.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, key) => (
                <div key={key}>
                  <div
                    class='card m-3'
                    style={{ width: '260px', height: '450px' }}
                  >
                    <div className='imgcheck'>
                      <div class='form-check'>
                        <input
                          class='form-check-input'
                          type='checkbox'
                          checked={basket
                            .map((row) => row.id)
                            .includes(item.id)}
                          id='flexCheckDefault'
                        />
                      </div>
                      <img
                        src={item.image}
                        class='card-img-top'
                        alt='no'
                        className='m-4'
                        style={{ height: '200px', width: '200px' }}
                      />
                    </div>
                    <div class='card-body'>
                      <p class='card-text'>{item.title}</p>
                      <div className='but'>
                        <button
                          className='btn'
                          onClick={() => {
                            setShow(true);
                            setSelectedItem(item);
                          }}
                        >
                          <i className='bi bi-info-square-fill inf'></i>
                        </button>
                        <button className='btn' onClick={() => AddBasket(item)}>
                          <i class='bi bi-cart-plus korz'></i>
                        </button>
                        <button
                          type='button'
                          className='btn'
                          data-bs-toggle='modal'
                          data-bs-target='#staticBackdrop'
                          onClick={() => {
                            setShowDel(true);
                            setSelectItem(item);
                          }}
                        >
                          <i className='bi bi-trash trash'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
