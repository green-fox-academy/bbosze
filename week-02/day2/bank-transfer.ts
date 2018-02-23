'use strict';

let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 5000 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 4000 },
  { client_name: 'Sergei', account_number: 23456311, balance: 3000 }
];


//FULLY WORKING TRANSFER FUNCTION

function transfer(database:any[], accountFrom:string, accountTo:string, amount:number) {
  let checkArray: string[] = [];
  for (let i:number = 0; i < database.length; i++) {
    if (database[i].client_name === accountFrom) {
      checkArray.push('a')} }
  for (let i:number = 0; i < database.length; i++) {
    if (database[i].client_name === accountTo){
      checkArray.push('b')
      }}
  if (checkArray.length === 2){
    for (let i:number = 0; i < database.length; i++) {
      if (database[i].client_name === accountFrom) {
        database[i].balance -= amount;
        console.log(database[i].client_name, database[i].account_number, database[i].balance)
      } }
    for (let i:number = 0; i < database.length; i++) {
        if (database[i].client_name === accountTo) {
        database[i].balance += amount;
        console.log(database[i].client_name, database[i].account_number, database[i].balance)
    }}}
  else {
      console.log('404 - account not found')
    }
  }

transfer(accounts, 'Sergei', 'Igor', 1000);
