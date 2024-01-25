const temperatureC1 = 36;
const temperatureC2 = 38;
const temperatureC3 = 20;
const temperatureC4 = 28;

const temperatureConversionCF = (temperature) => {
  return (9 / 5) * temperature + 32;
};

console.log(temperatureConversionCF(temperatureC1));
console.log(temperatureConversionCF(temperatureC2));
console.log(temperatureConversionCF(temperatureC3));
console.log(temperatureConversionCF(temperatureC4));

const name = "Alexey";

const admim = name;

console.log(admim);
