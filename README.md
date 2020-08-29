# timeshift

## Overview
Nodejs discord bot that update a specified server's voice timezone every hour to match where people are the most active currently.


## Version 2.0.0
This version is a revamp of [timeshift 1.0.0](https://github.com/lonepinemall/timeshift) by [Alex Levenshtein](https://github.com/lonepinemall)

## More info
The package uses src/bin/data.json as data and parses it in the following way:

reference => the reference timezone used by the moment-timezone package;
tzData => discord name of the timezone with a list of the most active times (all times are 24 hours and based on the reference timezone)