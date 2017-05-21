//
//
// var dunno = function ( x,  y ) {
//   var arrayOfYFactors = [ ];
//   for ( i=1; i<x; i++ ) {
//     if  ( i % y === 0 )
//       arrayOfYFactors.push(i);
//     }
//     return arrayOfYFactors;
//     //moved this inside the function (now a local var) but make sure to return so it's accessible below
// };

// var planTrip = function (line, start, finish) {
//   var linevar = line;
//   console.log(linevar);
//   };
//
//
// var planTrip2 = function (line, start, finish) {
//     if ("x" === line)
//         {
//           console.log(line);
//           }
//   };
//
//   planTrip2("x", "Times Square", "8th");


var allLines = {
  line: "x",
  nLine: "Times Square",
  nLine: "34th",
  nLine: "28th",
  nLine: "23rd",
  nLine:"Union Square",
  nLine: "8th",
};

// //this is an array, will stay in order
// var arr = Object.keys(allLines).map(function (key) { return allLines[key]; });
// http://stackoverflow.com/questions/6857468/converting-a-js-object-to-an-array

var allLinesArr = Object.keys(allLines).map(function (key) { return allLines[key]; });


var planTrip = function (lineOn, start, finish)
  {
  var startingPointIndex = function ()
    {
    for (var i = 0; i < allLinesArr.length; i++)
        {
        if (lineOn === allLinesArr[i])
          {
          console.log("test");
          }//console log
        }//if
    }//for
  };
