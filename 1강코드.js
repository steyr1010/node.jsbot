const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzA2MTMxNjcwODcyMzU4OTQ0.XuxSEw.bPRgDjh2ZRkzGp5nTcwPlfOcu00';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);