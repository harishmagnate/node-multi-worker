# node-multi-worker
node multi worker 

Code to demo chunking and parallel processing using node worker threads. This uses piscina to create/manage a thread pool.

The sample code breaks a json which has 1000 records into 2 chunks and converts each json into XML. It uses js2xmlparser to convert to xml.

Steps to run \
npm install \
npm start \

Sample Logs \
contents length - 500 \
contents length - 500 \
Parallel processing Execution time: 275ms \
