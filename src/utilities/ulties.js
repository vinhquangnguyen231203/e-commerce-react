import diacritics from "diacritic";

export const displayPrice = (price) =>{
    const formattedPrice = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
    return formattedPrice
  }

export const formatProductName = (name) => {
  return diacritics
    .clean(name) 
    .toLowerCase()
    .trim() 
    .replace(/\s+/g, "-") 
    .replace(/[^\w-]/g, ""); 
};
