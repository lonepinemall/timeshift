/*
Uses the data from the data.json file to find the optimal timezone to switch to
The data.json file should have an object `tzData` that contains bindings of
discord's name for a specific timezone and the moment at which they are most active
*/

// Local
const { tzData, reference } = require("../bin/data.json");
// External
const moment = require('moment-timezone');

parser = {};

// Shorthand for calling parser.findCurrentTime and parser.findClosest
parser.getOptimalTimezone = function () {
    const now = this.findCurrentTime();
    let tz = this.findClosest(now, Object.entries(tzData));
    return tz;
}

parser.findCurrentTime = function () {
    // Returns a number of the current hour in the reference time
    return parseInt(moment().tz(reference).format('HH')); 
}

parser.findClosest = function (search, numberList) {
    var min = Math.min();
    var result = "us-west"; // Default variable
    for (i = 0; i < numberList.length; i++) {
        for (z = 0; z < numberList[i][1].length; z++) {
            let absVal = Math.abs(search - numberList[i][1][z])
            if (min > absVal) {
                min = absVal;
                result = numberList[i][0];
            }
        }
    }
    return result;
} 

module.exports = parser;