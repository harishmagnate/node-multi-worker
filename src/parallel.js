const js2xmlparser = require("js2xmlparser");
const path = require('path');
const Piscina = require("piscina");

const splitToChunks = (data, chunkSize) => {
  const chunks = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
};

module.exports = async (contents) => {
  const chunks = splitToChunks(contents.data, 500);

  // Create a new thread pool  
  const pool = new Piscina();
  const options = { filename: path.resolve(__dirname, "worker-pool") };

  // Run operation on the chunks parallely
  result = await Promise.all([
    pool.run(chunks[0], options),
    pool.run(chunks[1], options),
  ]);
};


