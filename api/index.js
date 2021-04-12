require('dotenv').config();

const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const express = require('express')
const multer = require('multer')
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

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'audio')
},
filename: function (req, file, cb) {
  cb(null, file.originalname )
  // cb(null, Date.now() + '-' + file.originalname )
}
})

var upload = multer({ storage: storage }).array('file')


app.post('/upload', (req, res) => {
  console.log("upload")
  console.log(req.body)

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        console.log("MulterError" , err)
        return res.status(500).json(err)
    } else if (err) {
        console.log("upload error", err)
        return res.status(500).json(err)
    }

  return res.status(200).send(req.file)
})

})

// Play a clip
app.get('/play', (req, res) => {
    // if (!filename) {
    //   console.log("no filename provided as query param!")
    //   res.json({})
    // }

    // TODO : Check if filename exists

    console.log(req.query.filename)
    console.log(req.query)

    const dispatcher = connection.play("./audio/" +  req.query.filename + ".mp3");
  
    // dispatcher.on('start', () => {
    //     console.log('audio is now playing!');
    // });

    // dispatcher.on('finish', () => {
    //     console.log('audio has finished playing!');
    //   });
      res.json({})
})

// See all clips
app.get('/clips', (req, res) => {
  soundFileList = []
  fs.readdirSync("./audio/").forEach(file => {
    console.log(file);
    if (file.includes(".mp3")) {
      soundFileList.push(file.slice(0,-4))
    }
  });

  res.json(soundFileList);
});

// Leave channel
app.get('/disconnect', (req, res) => {
  connection.disconnect()

  res.json({});
});

// Not in use
// See all channels available to bot
app.get('/join', (req, res) => {
  let channel = client.channels.fetch(req.query.id)
    .then(channel => channel.join())
    .catch(console.error);
  
  res.json( { channel : ""} );
});


app.listen(port, () => {
  console.log(`SoundBort listening at http://localhost:${port}`)
})