/**
 *
 * @param {*} baseState
 * @param {Array} queue
 * @returns {*}
 */
export function getFinalState(baseState, queue) {
  // TODO: do something with the queue...
  return queue.reduce((previousstate, currentState) => {
    if (typeof currentState === "function") {
      return currentState(previousstate);
    } else {
      return currentState;
    }
  }, baseState);
}

const testCase = [
  {
    testCase: "1",
    input: [0, [1, 1, 1]],
    expected: 1,
  },
  {
    testCase: "2",
    input: [0, [(n) => n + 1, (n) => n + 1, (n) => n + 1]],
    expected: 3,
  },
  {
    testCase: "3",
    input: [0, [5, (n) => n + 1]],
    expected: 6,
  },
  {
    testCase: "4",
    input: [0, [5, (n) => n + 1, 42]],
    expected: 42,
  },
];

console.log("> Test Start.");

const total = testCase.length;
let passed = 0;
const passedCases = [];
const wrongCases = [];

testCase.forEach(({ testCase, input, expected }) => {
  const result = getFinalState(input[0], input[1]);

  if (result === expected) {
    passed++;
    passedCases.push(
      `> case : ${testCase}\n> status : 🟢 PASSED\n> base : ${input[0]}\n> queue : [${input[1]}]\n> expected : ${expected}\n> Output : ${result}`
    );
  } else {
    wrongCases.push(
      `> case : ${testCase}\n> status : 🛑 Failed\n> base : ${input[0]}\n> queue : [${input[1]}]\n> expected : ${expected}\n> Output : ${result}`
    );
  }
});

console.log(`> Total Case : ${total}`);
console.log(`> Passed : ${passed}`);
console.log("\n\n");
// printing wrong cases

if (wrongCases.length) {
  console.log("> Failed Cases : ");
  wrongCases.forEach((data) => {
    console.log(data);
    console.log("----------------");
  });
}

if (passedCases.length) {
  console.log("> Passed Cases : ");
  passedCases.forEach((data) => {
    console.log(data);
    console.log("----------------");
  });
}
