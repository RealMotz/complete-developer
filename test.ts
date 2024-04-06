// Test 1
// =======================================
function tag(literal, ...values) {
  console.log(" literal", literal);
  console.log(" values", values);
  let result;
  switch (literal[1]) {
    case " plus ":
      result = values[0] + values[1];
      break;
    case " minus ":
      result = values[0] - values[1];
      break;
  }
  return ` ${values[0]} ${literal[1]} ${values[1]} is ${result} `;
}
// let a = 1;
// let b = 2;
// let output = tag` What is ${a} plus ${b}? `;
// console.log(output);

// Test 2
// =======================================

let object = { fruit: "apple", color: "green" };
let { fruit, color } = { ...object };
// console.log(` fruit: ${fruit}, color: ${color} `);
// color = "red";
// console.log(` object.color: ${object.color}, color: ${color} `);

let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
// clonedArray[0] = "one";
// clonedArray[1] = "two";
// clonedArray[2] = "three";
// console.log(` originalArray: ${originalArray}, clonedArray: ${clonedArray} `);

// Test 3
// =======================================

// let string = "1";
// let number = 1;
// let result;
// result = number + number;
// console.log(" value: ", result, " type of ", typeof result);

// result = number + string;
// console.log(" value: ", result, " type of ", typeof result);

let string: string = "1";
let number: number = 1;
let result;

const calculate = (a: number, b: number) => a + b;

result = calculate(number, number);
// console.log(" value: ", result, " type of ", typeof( result));

// result = calculate(number, string);
// console.log(" value: ", result, " type of ", typeof( result));

// Test 4
// =======================================
let stringOrNumberUnionType: string | number;
stringOrNumberUnionType = "bar";
stringOrNumberUnionType = 1;
// not part of the union variable
// stringOrNumberUnionType = true;

let genericArray: [] = [];
// Generates an error
// genericArray.push(1);
let numberArray: number[] = [];
numberArray.push(1);

// let weatherDetail: { weather: string; zipcode: string; temp: number } = {
//   weather: "sunny",
//   zipcode: "00000",
//   temp: 1,
// };
// weatherDetail.weather = 2;

type WeatherDetailType = {
  weather: string;
  zipcode: string;
  temp?: number
};

let weatherDetail: WeatherDetailType = {
  weather: "sunny",
  zipcode: "00000",
  temp: 30,
};
const getWeatherDetail = (data: WeatherDetailType): WeatherDetailType => data;
