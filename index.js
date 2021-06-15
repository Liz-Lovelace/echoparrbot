"use strict"
const { Telegraf } = require('telegraf');
const bot = new Telegraf('1762095434:AAEjeQLajwUbzZnAdC2geN2AlEvg8RF3Us8');
bot.command('start', ctx=>{
  console.log(ctx.from);
  bot.telegram.sendMessage(ctx.chat.id, 'I\'m straight up out here');
})

bot.launch();