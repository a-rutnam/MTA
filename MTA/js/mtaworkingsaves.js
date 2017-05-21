//
// //this is an object, which may come out on broweser out order
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


var planTrip = function (line, start, finish)
  {
  var startingPointIndex = function ()
    {
    for (var i = 0; i < allLinesArr.length; i++)
        {
        if (line === allLinesArr[i])
          {
          console.log("line");
          }//console log
        }//if
    }//for
  };
