//Immediately export a function that generates a string of random numbers and letters
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

//This was taken from 11-Express//21-Ins_Modular-Routing/02_Modularized/Helpers/uuid.js
