/*
Provides the cron task encapsulated in an object
with a shorthand schedTask meth that only takes the guild arg
*/

// Local
var parser = require('./parser')
// External
var cron = require('node-cron');


var scheduler = {};

scheduler.schedTask = function(guild) {
    cron.schedule('0 * * * *', () => {
        console.log("Executing task now")
        let region = parser.getOptimalTimezone();
        // Sets the region and logs it to the console catches any error
        guild.setRegion(region)
            .then(updated => console.log(`Updated guild region to ${updated.region}`))
            .catch(console.error);
    })
}

module.exports = scheduler;