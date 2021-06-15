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
  console.log(ctx.from.username + ' just /start\'ed me');
  bot.telegram.sendMessage(ctx.chat.id, 'Hello, ' + ctx.from.first_name + '! You can send me a message and (if everything works correctly) I\'ll echo your message to you!');
});

bot.on('message', ctx =>{
  console.log(ctx.from.username +' - '+ ctx.message.text);
  ctx.reply(ctx.message.text);
});

bot.launch();