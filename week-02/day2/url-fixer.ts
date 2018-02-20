'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

//Simple replace
/*
let url: string = 'https//www.reddit.com/r/nevertellmethebots';
url = url.replace(/bots/, 'ods');
url = url.replace(/s/, 's:');
console.log(url);
*/

//USING slice, concat, replace

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
console.log(url.indexOf('bots'));

let slicedUrl:string = (url.slice(0, 38));
let newWord: string = 'odds';
slicedUrl = slicedUrl.concat(newWord);

slicedUrl = slicedUrl.replace(/s/, 's:');

console.log(slicedUrl);
