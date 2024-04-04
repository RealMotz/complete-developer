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

let object = { fruit: "apple", color: "green" };
let { fruit, color } = { ...object };
// console.log(` fruit: ${fruit}, color: ${color} `);
// color = "red";
// console.log(` object.color: ${object.color}, color: ${color} `);

let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
clonedArray[0] = "one";
clonedArray[1] = "two";
clonedArray[2] = "three";
console.log(` originalArray: ${originalArray}, clonedArray: ${clonedArray} `);
