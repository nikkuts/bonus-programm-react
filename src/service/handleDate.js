export const convertStartDate = (startDate) => {
  // Створюємо новий об'єкт дати з переданого значення
  const objDate = new Date(startDate);

  // Встановлюємо часовий пояс на "Europe/Kiev"
  const kyivObjDate = new Date(objDate.toLocaleString('en-US', { timeZone: 'Europe/Kiev' }));

  // Встановлюємо час на початок доби (00:00:00)
  kyivObjDate.setHours(0, 0, 0, 0);

  // Повертаємо час у мілісекундах
  return kyivObjDate.getTime();
};

export const convertEndDate = (endDate) => {
  // Створюємо новий об'єкт дати з переданого значення
  const objDate = new Date(endDate);

  // Встановлюємо часовий пояс на "Europe/Kiev"
  const kyivObjDate = new Date(objDate.toLocaleString('en-US', { timeZone: 'Europe/Kiev' }));

  // Встановлюємо час на кінець доби (23:59:59)
  kyivObjDate.setHours(23, 59, 59, 999);

  // Повертаємо час у мілісекундах
  return kyivObjDate.getTime();
};

export const formatDate = (date) => {
  const kyivStringDate = new Date(date).toLocaleDateString('en-US', { timeZone: 'Europe/Kiev' });
  const dateParts = kyivStringDate.split('/');
  
  const year = dateParts[2];
  const month = ('0' + dateParts[0]).slice(-2); 
  const day = ('0' + dateParts[1]).slice(-2);

  return `${year}-${month}-${day}`;
};

export const getNextPaymentDate = (lastPaymentDate) => {
  const objDate = new Date(lastPaymentDate);
  const kyivObjDate = new Date(objDate.toLocaleString('en-US', { timeZone: 'Europe/Kiev' }));
  const originalDay = kyivObjDate.getDate();

  kyivObjDate.setMonth(kyivObjDate.getMonth() + 1);
  kyivObjDate.setDate(originalDay);

  const year = kyivObjDate.getFullYear();
  const month = ('0' + (kyivObjDate.getMonth() + 1)).slice(-2); 
  const day = ('0' + kyivObjDate.getDate()).slice(-2);
  
  return `${year}-${month}-${day}`;
};