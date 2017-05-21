var allLines = {
  //this ordering is a cheat. would not work if key had to be something else.
  N:["Times Square","34th","28th","23rd","Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var a = ['one', 'two', 'three'];
var reversed = allLines.N.reverse();
var sliceArr = reversed.slice(0,2)

console.log(sliceArr); // ['three', 'two', 'one']
