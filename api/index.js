require('dotenv').config();

const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const express = require('express')
var cors = require('cors')

const app = express()
const port = 3000
app.use(cors())

client.login(process.env.CLIENT_KEY);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// If I want to make endpoint independent I will need to base it off something in the browser like a cookie. 
// Maybe when SoundBort joins a channel it can return a GUID that user then uses to control?

// Initialize connection. Needed to get Server information
client.on('message', async message => {
  console.log("message in channel")
  if (message.content === '!SoundBort') {
    if (message.member.voice.channel) {
      connection = await message.member.voice.channel.join();
    }
  }
});

app.get('/', (req, res) => {
  console.log("home page")
})

// Play a clip
app.get('/play', (req, res) => {
    console.log("/play")
    filename = req.query.filename
    
    if (!filename) {
      console.log("no filename provided as query param!")
      res.json({})
    }

    // TODO : Check if filename exists

    const dispatcher = connection.play(filename);
  
    dispatcher.on('start', () => {
        console.log('audio is now playing!');
    });

    dispatcher.on('finish', () => {
        console.log('audio has finished playing!');
    });
})

// See all clips
app.get('/clips', (req, res) => {
  console.log("/clips")
  
  soundFileList = []
  fs.readdirSync("./").forEach(file => {
    console.log(file);
    if (file.includes(".mp3")) {
      soundFileList.push(file)
    }
  });

  res.json(soundFileList);
});

// Not in use
// See all channels available to bot
app.get('/join', (req, res) => {
  console.log( client.channels )
  
  let channel = client.channels.fetch(req.query.id)
    .then(channel => channel.join())
    .catch(console.error);
  
  res.json( { channel : ""} );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})