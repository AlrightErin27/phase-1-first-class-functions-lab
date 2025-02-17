// /////////////////////----------------🔥🔥🔥🔥🔥🔥🔥 returnFirstTwoDrivers 🔥🔥🔥🔥🔥🔥🔥-----------------/////////////////////
// // 1) should return a new array containing the first two drivers from the passed-in array
// // returnLastTwoDrivers()
// // 2) should return an array of the last two drivers
const returnFirstTwoDrivers = function (arr) {
  let resultArr = [];
  resultArr.push(arr[0]);
  resultArr.push(arr[1]);
  return resultArr;
};
// // let driversArr = ["Donald", "Kelly", "Cheri"];
// // console.log(returnFirstTwoDrivers(driversArr));

// /////////////////////----------------🔥🔥🔥🔥🔥🔥🔥 returnLastTwoDrivers 🔥🔥🔥🔥🔥🔥🔥-----------------/////////////////////
const returnLastTwoDrivers = function (arr) {
  return [arr[arr.length - 2], arr[arr.length - 1]];
};
// // let driversArr = ["Donald", "Kelly", "Cheri", "Donna"];
// // console.log(returnLastTwoDrivers(driversArr));

// /////////////////////----------------🔥🔥🔥🔥🔥🔥🔥 selectingDrivers 🔥🔥🔥🔥🔥🔥🔥-----------------/////////////////////
// // 3) has the `returnFirstTwoDrivers` function to as its first element
// // 4) has the `returnLastTwoDrivers` function to as its last element
// // 5) allows us to invoke either function from the array
let driversArr = ["Donald", "Kelly", "Cheri", "Donna"];
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// console.log(selectingDrivers[0](driversArr));
// const example = selectingDrivers[0];
// console.log(example(driversArr));

// /////////////////////----------------🔥🔥🔥🔥🔥🔥🔥 createFareMultiplier 🔥🔥🔥🔥🔥🔥🔥-----------------/////////////////////
// // 6) returns a function
// // 7) should multiply a given value using the created multiplier
const createFareMultiplier = (multiplierNum) => {
  return function (fare) {
    return fare * multiplierNum;
  };
};

// /////////////////////----------------🔥🔥🔥🔥🔥🔥🔥 fareDoubler 🔥🔥🔥🔥🔥🔥🔥-----------------/////////////////////
// // 8) is a function
// // 9) doubles fares
function fareDoubler(fare) {
  const doubler = createFareMultiplier(2);
  return doubler(fare);
}

console.log(fareDoubler(8));
// /////////////////////----------------🔥🔥🔥🔥🔥🔥🔥 fareTripler 🔥🔥🔥🔥🔥🔥🔥-----------------/////////////////////
// // 10) is a function
// // 11) triples fares
function fareTripler(fare) {
  const tripler = createFareMultiplier(3);
  return tripler(fare);
}

// /////////////////////----------------🔥🔥🔥🔥🔥🔥🔥 selectDifferentDrivers 🔥🔥🔥🔥🔥🔥🔥-----------------/////////////////////
// // 12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// // 13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument

function selectDifferentDrivers(arrDrivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(arrDrivers);
}
