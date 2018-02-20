
'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

//With replace
// quote = quote.replace(/you expect, even when/, 'always takes longer than');

//With slice
quote = quote.slice(0, 21) + 'always takes longer than' + quote.slice(46)


console.log(quote);
