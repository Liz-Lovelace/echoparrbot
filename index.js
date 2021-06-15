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

function printable(str){
  let ascii = /^[ -~]+$/;
  if (ascii.test(str))
    return true;
  else
    return false;
}

let token = readTokenFromFile('./token.txt');
const bot = new Telegraf(token);

bot.command('start', ctx=>{
  console.log(ctx.from.username + ' just /start\'ed me');
  bot.telegram.sendMessage(ctx.chat.id, 'Hello, ' + ctx.from.first_name + '! You can send me a message and (if everything works correctly) I\'ll echo your message to you!');
});

bot.on('message', ctx =>{
  let consoleStr = ctx.from.username +' - '+ ctx.message.text;
  if (printable(consoleStr))
    console.log(consoleStr);
  else
    console.log('someone sent you something unholy...');
  ctx.reply(ctx.message.text);
});

bot.launch();