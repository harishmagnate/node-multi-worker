const contents = require("./data.json");
const parallelProcess = require("./parallel.js");

const main = async () => {
  /* Execution time start */
  let start = process.hrtime.bigint();
  let result = await parallelProcess(contents);
  /* Execution time end */
  let end = process.hrtime.bigint();
  console.info(
    `Parallel processing Execution time: ${(end - start) / BigInt(10 ** 6)}ms`
  );
};

main();
