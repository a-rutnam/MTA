//
// //this is an object, which may come out on broweser out order, key names must not be repeated
var allLines = {
  n:["n", "Times Square","34th","28th","23rd","Union Square", "8th"],
};

// //this is an array, will stay in order
// var arr = Object.keys(allLines).map(function (key) { return allLines[key]; });
// http://stackoverflow.com/questions/6857468/converting-a-js-object-to-an-array

var allLinesArr = Object.keys(allLines).map(function (key) { return allLines[key]; });


var planTrip = function (lineOn, start, finish)
  {
  // var startingPointIndex = function () this fucker fucks things up

    for (var i = 0; i < allLinesArr.length; i++)
        {
        if (lineOn === allLinesArr[i][0])
          {
            for (var j = 0; j<allLinesArr[i].length; j++)
            {
              if (start === allLinesArr[i][j])
                {
                for (var k = 0; k<allLinesArr[i].length; k++)
                {
                  if (finish === allLinesArr[i][k])
                  var startIndex = (allLinesArr[0].indexOf(start));
                  var finishIndex = (allLinesArr[0].indexOf(finish));
                  // var sliceArr = allLinesArr[i].slice[startIndex,finishIndex]
                  {
                    console.log("You must travel through the following stops on the " + lineOn + " line: " + allLinesArr[0].slice(startIndex,finishIndex)+ " and " + finish +". " + ((finishIndex-startIndex)+1) +" stops in total.");
                  // console.log((finishIndex-startIndex)+1 +" stops in total." + (sliceArr));
                   }//console for k
              }//if k
              } //for  k
              {
                // console.log("start matches");
              }//console for j
            }// if j
          }//for j

          {
          // console.log("line matches");
        }//console log for i
        }//if i
    //for
  };


planTrip("n", "34th", "8th");



// ////       // arr.indexOf(line)
//   iterate through arr and if line matches a value, this var will become the indext of that i.e timessquare equals 2  ]
// var endingpoint = [ditto] and 8th = 6
//
// var numberofstopsinc = startingPoint + endingpoint
//



//
// "You must travel through the following stops on the nLine [line i.e what they entered] Times Square[start], 34th, 28th, 23rd, Union Square, 8th [finish]."
// "6 stops in total."

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//



// var lLine = {
//   stop1: "8th",
//   stop2: "6th",
//   stop3: "Union Square",
//   stop4: "3rd",
//   stop5:"1st",
//
// }

// MTA Lab
//
// ##Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)