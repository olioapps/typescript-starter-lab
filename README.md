# typescript-starter-lab puzzler: Event Stream
# ENV SETUP
### Testing
tsc and jest should be run in different terminal windows
```T1
yarn tsc --watch
```
```T2
yarn jest --coverage --watch
```
* While not set up in this repo, it is possible to run two child processes in the same terminal with a package like concurrently: https://github.com/open-cli-tools/concurrently#readme

* This will allow both tsc and jest to watch for file changes and run tests when changes are detected.

* It is not necessary to run nodemon while running tests with jest in this case, as we are not using a server. However, if you are making changes to your typescript file, it is necessary to run tsc to compile on file changes.
### Dev
```T1
yarn tsc --watch
```
```T2
yarn nodemon -w dist dist/ts_playground.js
```
* Running these two commands in terminals will let tsc watch for changes to any file, and then nodemon will restart and run any compiled code from ts_playground.js

# PUZZLER INSTRUCTIONS

## Requirements

Provide a function (or class) that takes an EventStream (see 'Shapes' section below)
And returns the region (subarray) of the original array
With the highest “score”

The region.length should be 5
the region represents the highest scoring 'consecutive' events in the given EventStream

## Scoring: (event: value)
 
'Messages': 1 </br>
'Views': 2 </br>
'Screenshots': 3 </br>

## Shapes:
__EventStream__: represented by an array of __Event__

__Event__:
	timestamp: a number </br>
	eventType: can be “screenshot”, or “new message”, or “view”

## Example input:

```
[
	{
		timestamp: 123123123,
		eventType: “new message”,
	},
	{
		timestamp: 123123124,
		eventType: “new message”,
	}
	{
		timestamp: 123123125,
		eventType: “new message”,
	}
	{
		timestamp: 123123125,
		eventType: “view”,
	}
	{
		timestamp: 123123125,
		eventType: “view”,
	}
	{
		timestamp: 123123125,
		eventType: “screenshot”,
	}
	{
		timestamp: 123123125,
		eventType: “screenshot”,
	}
	{
		timestamp: 123123125,
		eventType: “message”,
	}
	…
	…
	{
		timestamp: 123123125,
		eventType: “message”,
	}
]
```
