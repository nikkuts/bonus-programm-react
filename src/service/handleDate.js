export const handleObjDate = (objDate) => {
    const date = objDate.toString().split('T')[0];
    return date;
};

export const formatMsDate = (msDate) => {
  const originalDate = new Date(msDate);
  const year = originalDate.getFullYear();
  const month = ('0' + (originalDate.getMonth() + 1)).slice(-2); 
  const day = ('0' + originalDate.getDate()).slice(-2);

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const convertStartDate = (startDate) => {
  const convertedStartDate = new Date(startDate);
  convertedStartDate.setUTCHours(0, 0, 0, 0);
  return convertedStartDate.getTime();
};

export const convertEndDate = (endDate) => {
  const convertedEndDate = new Date(endDate);
  convertedEndDate.setUTCHours(23, 59, 59, 999);
  return convertedEndDate.getTime();
};

export const getNextPymentDate = (lastPaymentDate) => {
  const originalDate = new Date(lastPaymentDate);
  const originalDay = originalDate.getDate();

  originalDate.setMonth(originalDate.getMonth() + 1);
  originalDate.setDate(originalDay);

  const year = originalDate.getFullYear();
  const month = ('0' + (originalDate.getMonth() + 1)).slice(-2); 
  const day = ('0' + originalDate.getDate()).slice(-2);
  
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};