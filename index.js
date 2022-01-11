const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);

const ms = require('ms');
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const db = require('quick.db');
const fs = require('fs');
const client = new Discord.Client({
        intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.GUILD_BANS,
                Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
                Intents.FLAGS.GUILD_INTEGRATIONS,
                Intents.FLAGS.GUILD_WEBHOOKS,
                Intents.FLAGS.GUILD_INVITES,
                Intents.FLAGS.GUILD_VOICE_STATES,
                Intents.FLAGS.GUILD_PRESENCES,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Intents.FLAGS.GUILD_MESSAGE_TYPING,
                Intents.FLAGS.DIRECT_MESSAGES,
                Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
                Intents.FLAGS.DIRECT_MESSAGE_TYPING
        ]
});
const { version } = require('./package.json');
const pms = require('pretty-ms');
const pretty = require('pretty-ms');
const axios = require('axios');
const fetch = require('isomorphic-fetch');
const { createCanvas, loadImage } = require('canvas');
const { MessageEmbed, Permissions, MessageAttachment, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const moment = require('moment');
const weather = require('weather-js');

const prefix="!"//the bot prefix

client.on('ready', () => {
  client.user.setActivity(`${prefix}help`, { type: "PLAYING"});
  console.log(`${client.user.tag} is Ready!`);
});

client.on('messageCreate', async (message) => {
  if (message.content === prefix + 'ping') {
    await message.channel.send(`Pong! \`${client.ws.ping}\` ms`);
  }
});

client.login('token');//the bot is 'token' or process.env.token
