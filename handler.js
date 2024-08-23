const Caesar = require('caesar-salad').Caesar;
'use strict'
var naam = "stevenvancleemputceasarcypher";

console.log(encrypted);
module.exports = async (event, context) => {
  try{
    const encrypted = Caesar.Cipher('c').crypt(naam);
    return context
    .status(200)
    .succeed(encrypted)
  }
  catch(error){
    return error
    .status(500)
    .console.log("Error: er is iets fout gegaan")
  }
  /*
  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"]
  }
    */

  
}
