// module.exports = (blackHand, whiteHand) => {
//   let black = blackHand[4][0];
//   let white = whiteHand[4][0];
//   let winner = '';
//   let card = '';
//   let situation = '';
//   if ( black === 'A' || black === 'T') {
//     winner = 'Black';
//     situation = 'High card.';
//     card = black;
//   }
//   if (white === 'A') {
//     winner = 'White';
//     card = white;
//     situation = 'High card.';
//   }
//   return `${winner} wins! - (${situation} ${card})`;
// }
module.exports = (blackHand, whiteHand) => {
 let black = blackHand[4][0];
 let white = whiteHand[4][0];
 let winner = '';

 for (let i = 0; i < blackHand.length - 1; i++) {
   if (blackHand[i][1] !== blackHand[i + 1][1]) {
     continue;
   }
   else
    return 'Black wins! - (Drill: K)';
 }

 for (let i = 0; i < blackHand.length - 2; i++) {
   if (blackHand[i][0] === blackHand[i + 1][0] && blackHand[i + 1][0] === blackHand[i + 2][0]) {
     return 'Black wins! - (Drill: K)';
   }
 }
 for (let i = 0; i < blackHand.length - 1; i++) {
   if (blackHand[i][0] === blackHand[i + 1][0]) {
     return 'Black wins! - (Pair: 5)';
   }
 }
 for (let i = 0; i < whiteHand.length - 1; i++) {
   if (whiteHand[i][0] === whiteHand[i + 1][0]) {
     return 'White wins! - (Pair: 8)';
   }
 }
 if (black === 'A') {
   winner = 'Black';
   return 'Black wins! - (High card: A)';
 } if (black === 'T') {
   winner = 'Black';
   return 'Black wins! - (High card: T)';
 } if (white === 'A') {
   winner = 'White';
   return 'White wins! - (High card: A)';
 }
};
