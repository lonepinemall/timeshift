const Discord = require('discord.js')
const fs = require('fs')
const { token, guildId } = require('./config.json')
const moment = require('moment-timezone');
const cron = require('node-cron')

const client = new Discord.Client()

client.login(token)

client.on('ready', () => {
  console.log(`${client.user.tag} is ready!`)
  const time = [
    {
      region: 'europe',
      timezone: 'Europe/Paris'
    },
    {
      region: 'russia',
      timezone: 'Asia/Yekaterinburg'
    },
    {
      region: 'us-east',
      timezone: 'America/New_York'
    },
    {
      region: 'us-west',
      timezone: 'America/Los_Angeles'
    }
  ]
  cron.schedule('0 * * * *', () => {
    time.map(r => {
      const timeNow = moment().tz(r.timezone).format('HH:mm')
      if(timeNow === '20:00') {
        console.log(`Region changed to ${r.region}`)
        client.guilds.cache.get(guildId).setRegion(r.region)
      }
    })
  })
})