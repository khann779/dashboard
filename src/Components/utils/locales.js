//import React from 'react';

export const locales = (lang) => {
  switch (lang) {
    case 'az':
      return {
        id: 'ID',
        fullname: 'Tam adi',
        email: 'E-mail',
        location: 'Yer',
        phone: 'Telefon nom.',
        spend: 'Umumi xercler',
        orders: 'Umumi sifarisler',
        home: 'Ev',
        table: 'Cedvel',
        products: 'Mehsullar',
        service: 'Servis',
        form: 'Forma',
        employee: 'Ishchiler',
        title: 'Bashliq',
        description: 'Izah',
        add: 'Elave et',
        category: 'Kateqoriya',
        rate: 'Reyting',
        count: 'Sayi',
        submit: 'Teqdim',
        delete: 'Sil',
        are: 'Karti silmeyinize eminsiniz?',
        no: 'Xeyir',
        yes: 'Beli',
        basket: 'Sebet',
      };
    case 'en':
      return {
        id: 'ID',
        fullname: 'Full Name',
        email: 'E-mail',
        location: 'Location',
        phone: 'Phone',
        spend: 'Total spend',
        orders: 'Total orders',
        home: 'Home',
        table: 'Table',
        products: 'Products',
        service: 'Service',
        form: 'Form',
        employee: 'Employee',
        title: 'Title',
        description: 'Description',
        add: 'Add',
        category: 'Category',
        rate: 'Rate',
        count: 'Count',
        submit: 'Submit',
        delete: 'Delete',
        are: 'Are you sure you want to delete?',
        no: 'No',
        yes: 'Yes',
        basket: 'Basket',
      };
  }
};
