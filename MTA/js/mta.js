


//this is an object, which may come out on browser out of order. Also, key names must not be repeated
var allLines = {
  //this ordering is a cheat. would not work if key had to be something else.
  N:["Times Square","34th","28th","23rd","Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// var firstStop = allLines.indexOf("Times");
//
// // //this is an array, will stay in order. nb. this didn't work i.e 6 allLinesArr[0]
// // http://stackoverflow.com/questions/6857468/converting-a-js-object-to-an-array
// // var allLinesArr = Object.keys(allLines).map(function (key) { return allLines[key]; });
//
// //in console allLines.N[0] would access 8th
//
//allLines.N.indexOf("34th"); this works


var planTrip = function (lineOn, start, lineOff, finish)
  {
  var startIndex = (allLines[lineOn].indexOf(start));
  var finishIndex = (allLines[lineOn].indexOf(finish));
  var sliceArr = allLines[lineOn].slice(startIndex,finishIndex)
  var numberOfStops1Line = (finishIndex-startIndex)

    if (finishIndex<startIndex) {{numberOfStops1Line = (numberOfStops1Line*-1)}
    var reversed = allLines[lineOn].reverse();
    sliceArr = reversed.slice(finishIndex-1,startIndex-1)}

  {console.log(
    "You must travel through the following stops on the " +  "line: "+  sliceArr + " and get off at the " + finish + " station on the " + lineOff+ " line. "+numberOfStops1Line +" stops in total."
  );
}
};

planTrip("N", "8th", "N", "34th");
 //allLines[i].slice(startIndex,finishIndex)
//               sliceArr + " and get out at " + finish +" on the " +lineOff+" line. "+ numberOfStops1Line +" stops in total.");




// {for (var i = 0; i < allLines.lineOn; i++}
//   {if (lineOn===allLines.lineOn[i])}
//
// {
//   for (var i = 0; i < allLines.length; i++)
//     {
//     if (lineOn === allLines[i][0])
//       {
//       for (var j = 0; j<allLines[i].length; j++)
//         {
//         if (start === allLines[i][j])
//           {
//           for (var k = 0; k<allLines[i].length; k++)
//             {
//             var startIndex = (allLines[i].indexOf(start));
//             var finishIndex = (allLines[i].indexOf(finish));
//             var sliceArr = allLines[i].slice(startIndex,finishIndex)
//             var numberOfStops1Line = (finishIndex-startIndex)
//             if (finishIndex<startIndex) {numberOfStops1Line = (numberOfStops1Line*-1)}
//               //((finishIndex-startIndex)+1)* -1)}
//             if (lineOn === allLines[i][0] && start === allLines[i][j] && finish === allLines[i][k])
// if (lineOn === lineOff)
//  {
//               console.log("You must travel through the following stops on the " + lineOn + " line: " + //allLines[i].slice(startIndex,finishIndex)
//               sliceArr + " and get out at " + finish +" on the " +lineOff+" line. "+ numberOfStops1Line +" stops in total.");
//
//               }//console.log for all three matching
//
//             }//if line AND Start AND finish matches.
//           } //for every stop in matching line array (again)
//         }// if start matches
//       }//for every stop in matching line array.
//     }//if line matches
// // else if {
// // if (lineOn !== lineOff)
// //         var unionSquareIndex = allLines[l].indexOf("Union Square");
// //       var finishIndex2 = allLines[l].indexOf(finish);
// //       var twoLineslice = allLines[l].slice(unionSquareIndex,finishIndex2)
// //       var numberOfStopsLine1 = ((startIndex-unionSquareIndex)+1);
// // //
// //     if (lineOff === allLines[l][0] && finish === allLines[l][m])
// //   console.log("You must travel through the following stops on the " + lineOn + " line and get off and change to the " + lineOff  + " line at Union Square. From here travel the following stops " + twoLineslice + " and get out at " + finish +". " + numberOfStops + " stops in total."
// // // )
// // }
// // }
//
//
//   };//for every key in allLines






//for changing lines e.g. n, times square, 1st (on L line)
// k will go through Key L and not find 1st. so (else) we need to find 1st in another line

// we need to go from 34th to indexOf.union square then go through entire allLines keys from top and do the same as if within one line, but always from indexofUnionSquare (in line that matches finish)
// else if lineOff !== lineOn
// for (var i = 0; i < allLines.length; i++)
//   {
//   if (lineOff === allLines[i][0])
//   and do the same??


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
