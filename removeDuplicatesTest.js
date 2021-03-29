/**
 * Removes duplicates from a given list.
 * @param {list} inputList A list
 * @return {list} A list containg only unique items from the given inputList
 */
const removeDuplicates = (inputList) => {
  const tempObject = {};
  const remainingItemsList = [];

  for (const email of inputList) {
    if (!tempObject[email]) {
      tempObject[email] = true;
      remainingItemsList.push(email);
    }
  }

  return remainingItemsList;
};

const randomEmailNumber = (minimum, maximum) => {
  let previousValue;
  return function random() {
    const number = Math.floor(
      Math.random() * (maximum - minimum + 1) + minimum
    );
    previousValue =
      number === previousValue && minimum !== maximum ? random() : number;
    return previousValue;
  };
};

const getInputList = (length) => {
  const random = randomEmailNumber(1, 2);
  return Array.from({ length }, (x, i) => `email${random()}@test.com`);
};

const runTest = () => {
  const inputList = getInputList(100000);
  const start = new Date().getTime();
  const resultList = removeDuplicates(inputList);
  const end = new Date().getTime();
  const duration = end - start;

  if (duration > 1000) {
    throw new Error(`Removing duplicates took ${duration}ms`);
  } else {
    console.log(`Removing duplicates took ${duration}ms`);
  }
};

runTest();
