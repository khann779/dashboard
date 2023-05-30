export const locales = (lang) => {
  switch (lang) {
    case 'az':
      return {
        dashboard: 'Tablo',
        customers: 'Müştərilər',
        products: 'Məhsullar',
        statistics: 'Statistika',
        sales: 'Ümumi satiş',
      };
    case 'en':
      return {
        dashboard: 'Dashboard',
        customers: 'Customers',
        products: 'Products',
        statistics: 'Statistics',
        sales: 'Total sales',
      };
    case 'ru':
      return {
        dashboard: 'Панель',
        customers: 'Клиенты',
        products: 'Продукты',
        statistics: 'Статистика',
        sales: 'Общий объем продаж',
      };
  }
};
//locales(lang)['employee'];
