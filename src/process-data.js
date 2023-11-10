const js2xmlparser = require("js2xmlparser");

module.exports = (contents) => {
    console.info(`contents length - ${contents.length}`);
    return contents.map((content) => {  
        return js2xmlparser.parse('user', content)
      });
}