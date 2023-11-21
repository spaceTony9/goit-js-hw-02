function getShippingCost(country) {
  const countryAndPrice = [
    ['China', 'Chile', 'Australia', 'Jamaica'],
    [100, 250, 170, 120],
  ];
  switch (country) {
    case countryAndPrice[0][0]:
      return `Shipping to ${countryAndPrice[0][0]} will cost ${countryAndPrice[1][0]} credits`;
      break;
    case countryAndPrice[0][1]:
      return `Shipping to ${countryAndPrice[0][1]} will cost ${countryAndPrice[1][1]} credits`;
      break;
    case countryAndPrice[0][2]:
      return `Shipping to ${countryAndPrice[0][2]} will cost ${countryAndPrice[1][2]} credits`;
      break;
    case countryAndPrice[0][3]:
      return `Shipping to ${countryAndPrice[0][3]} will cost ${countryAndPrice[1][3]} credits`;
      break;
    default:
      return 'Sorry, there is no delivery to your country';
  }
}

// alternative with less repetitive code

function getShippingCost(country) {
  const countryAndPrice = [
    ['China', 'Chile', 'Australia', 'Jamaica'],
    [100, 250, 170, 120],
  ];
    for (let i = 0; i < 4; i++) {
        if (countryAndPrice[0][i] === country) {
            return `Shipping to ${countryAndPrice[0][i]} will cost ${countryAndPrice[1][i]} credits`;
        }
    }
    return 'Sorry, there is no delivery to your country';
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"