// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("", () => {
  it("", () => {
  expect().toEqual()
})
})

describe("arrayShuffler", () => {
  it("removes the first item from the array and shuffles the remaining content.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
  
  expect(arrayShuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
  expect(arrayShuffler2(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  
})
})

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.


const arrayShuffler = (array) => {
  array.shift()
  return array.sort(() => Math.random() - .5)
}



const arrayShuffler2 = (array) => {
  array.shift()
  for (let i = 0; i <= Math.random()*10; i++) { 
      array = arrayShufflerExtender(array)
  }
  return array
}

const arrayShufflerExtender = (array) => {
  array.unshift(array.pop())
  return  array.reduce((acc, value, index)=> { 
    index % 2 == 1?acc.push(value):acc.unshift(value)
    return acc 
   }, [])   
}

// It was easier to just randomize with the sort method     
// Create a function named arrayShuffler has only one parameter
// remove the first element with shift
// use sort combined with math.random to assign random weights to each element, randomizing their order
// Math.random gives a number between 0 and approaching 1, so we subtract .5 from it
// giving us a random assortment of positive and negative values 


// Pseudo code: 
// Create a function named arrayShuffler has only one parameter
// remove the first element with shift
// create a second function that shuffles the elements in the remaining array
// remove the last element and put in front
// utilize the reduce method to further reorder the elements into a new array
// to even further randomize the elements we call the shuffler2 a random number of times.


//im actually pretty proud of how that one turned out


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.


describe("voteCounter", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
  expect(voteCounter(votes1)).toEqual(11)
  expect(voteCounter2(votes2)).toEqual(-31)
})
})

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

const voteCounter = (object) =>  object.upVotes - object.downVotes

// b) Create the function that makes the test pass.

// Pseudo code: 
// create a function called voteCounter that has an object as its only parameter
// access the values by using dot notation and subtract them
// the above method relies on us knowing the names of he keys beforehand.
// the below method relies on us knowing the order of the keys beforehand.


const voteCounter2 = (object) => Object.values(object)[0] - Object.values(object)[1]

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

describe("newArrayBuilder", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    expect(newArrayBuilder(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    expect(newArrayBuilder2(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
})
})

// a) Create a test with an expect statement using the variables provided.

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

const newArrayBuilder = (arr1, arr2) => {
  return arr1.concat(arr2).filter((value, index, arr) => arr.indexOf(value) == index)

}
const newArrayBuilder2 = (...arr) => {
  return [].concat(...arr).filter((value, index, arr) => arr.indexOf(value) == index)

}



// b) Create the function that makes the test pass.

// Pseudo code: 
// create a function called newArrayBuilder that receives arrays as arguments
// join the argumentArrays together using concat
// loop through removing duplicate elements with the filter method
// use indexOf to ensure the active element's index matches the first occurence of the value.
