import { priceList, productList } from "../constants";

const getATKProducts = () => {
  return productList[0].ATK.map((product) => ({
    ...product,
    price: priceList[0].ATK.find((p) => p.key === product.key).value,
  }));
};

const getFurnitureProducts = () => {
  return productList[0].FURNITURE.map((product) => ({
    ...product,
    price: priceList[0].FURNITURE.find((p) => p.key === product.key).value,
  }));
};

export const getProductList = (type) => {
  if (type === "Office Equipment") {
    return getATKProducts();
  }

  if (type === "Furniture") {
    return getFurnitureProducts();
  }

  if (type === "All") {
    return [...getATKProducts(), ...getFurnitureProducts()];
  }

  return [];
};

export const currencyFormat = (price) => {
  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(parseInt(price || "0"));

  return formatted;
};
