const productPrices = new Map();

productPrices.set("Laptop", 1000);
productPrices.set("Phone", 500);
productPrices.set("Tablet", 300);

function increasePriceBy10Percent(product) {
  if (productPrices.has(product)) {
    const currentPrice = productPrices.get(product);
    const increasedPrice = currentPrice * 1.10;
    productPrices.set(product, increasedPrice);
    console.log(`The new price for ${product} is ${increasedPrice}`);
  } else {
    console.log(`${product} is not found in the price list.`);
  }
}

increasePriceBy10Percent("Laptop");
increasePriceBy10Percent("Phone");
