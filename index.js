"use strict"
const fs = require('fs');
const { Telegraf } = require('telegraf');

function readTokenFromFile(filePath){
  try{
    return fs.readFileSync(filePath, 'utf8');
  } catch(err) {
    console.log('Error while reading token.txt');
    console.log(err);
    return null;
  }
}

let token = readTokenFromFile('./token.txt');
const bot = new Telegraf(token);

bot.command('start', ctx=>{
  console.log(ctx.from);
  bot.telegram.sendMessage(ctx.chat.id, 'I\'m straight up out here');
})

bot.launch();