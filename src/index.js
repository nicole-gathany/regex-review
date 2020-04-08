//Classic first/last name switcharoo regex replace example
let name = "Nicole Gathany";
let getFirstAndLast = /(\w+) (\w+)/; //space matters
console.log(name.match(getFirstAndLast));
let lastCommaFirst = name.replace(getFirstAndLast, "$2, $1");

//Capturing parentheses
console.log(lastCommaFirst);
let message = "Nicole is the best";
let host = message.match(/(nicole) is the best/i); //.match creates an array
console.log(host);

//Capturing with alternation
let country = "Brazil";
let rightCountry = country.match(/sweden|brazil/i);
console.log(rightCountry);

//use case with capturing parentheses, lists the new hosts from file
const csv = `Date,Host
2018-04-20,Travis
2018-04-27,David
2018-05-25,David
2018-06-01,MPJ`;

let dateAndHost = /(^\d{4}-\d{2}-\d{2}),(david|mpj)$/i;
let newHostsWhen = csv
  .split("\n")
  .filter(line => {
    return line.match(dateAndHost);
  })
  .map(line => line.replace(dateAndHost, "$2 hosted DevTips on $1"))
  .join(". ");
console.log(newHostsWhen);

//Non-capturing parentheses
let input = "David hosts DevTips";
let incorrectInput = "Trump hosts White House";

let extractsChannelIfCorrectHost = /(?:david|mpj) hosts(.+)/i;
let channel = input.match(extractsChannelIfCorrectHost);
console.log(channel);
