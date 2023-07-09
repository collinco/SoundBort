<!-- PROJECT LOGO -->
<h1>7/9/2023 UPDATE</h1>
<p>Tried running this again today but packages were very out of date and needed serious tinkering. Discord actually had the same idea as me and added <a target="_blank" href="https://support.discord.com/hc/en-us/articles/12612888127767-Soundboard-FAQ">their own soundboard<a></a>! I am no longer working on this project.</p>

<br />
<p align="center">
  <h3 align="center">SoundBort</h3>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li>
      <a href="#local-installation">Local Installation</a>
      <ul>
        <li><a href="#discord-bot-and-server">Discord bot and server</a></li>
      </ul>
      <ul>
        <li><a href="#web-interface">Web interface</a></li>
      </ul>    
    <li><a href="#todo">TODO</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This project lets Discord users play audio clips in their channels without having to type a command. Because of the instant feedback upon clicking a sound board button, users can quickly chain sound bytes and improve their comedic timing. Users also don't have to worry about command syntax or mistyping something because they only have to click a button. Currently, users will have to setup their bot with Discord and run both the server and website locally.

### Built With
* [discord.js](https://discord.js.org/) - JS Discord API wrapper
* [React](https://reactjs.org/) - Frontend
* [Node.js](https://nodejs.org/en/)/[Express](http://expressjs.com/) - Backend

<!-- Features -->
## Features
Once SoundBort has been invited to a Guild, a user can type !SoundBort to summontthe bot to their channel. Then, from the SoundBort web interface users can:
- Play a audio clip through SoundBort after clicking associated button
- Stop an audio clip prematurely
- Import an audio clip to server
- Disconnect the bot 

<!-- Local Installation -->
## Local Installation
Hopefully this project will be hosted on a server and have code adjusted so the bot can run correctly in multiple channels. For now you will have to setup your own discord bot and your own localhost website to run SoundBort. 

Before you do anything clone the repo. In the top level of the directory you can find the "api" folder and the "sound-bort" directory. The "api" directory is the node server that handles requests from the website. The "sound-bort" directory is the React front-end.
```
git clone git@github.com:collinco/SoundBort.git
cd SoundBort
```

### Discord bot and server
1. Create a Discord developer account here [Discord Developer Portal](https://discord.com/developers/applications).
2. On the same webpage create a new application named whatever you want.
3. Create a file named `.env` in the "api" directory and add one line with your app's client key (CLIENT_KEY=7f81x6750ebdfb6325yyy65acd1fa989120c44cbd4922774ec05f34f259c69b).
4. `cd` to the "api" folder and run `npm install` to get the needed packages.
5. Run the server with `node index.js`. You should see the server start on http://localhost:3000.
6. Invite the newly created bot to a Guild by following the "Inviting Your Bot" Instruction [here](https://discordpy.readthedocs.io/en/stable/discord.html). You will only need the 'Connect' and 'Speak voice scopes. 
7. Invite the bot to a channel by typing "!SoundBort" in a text channel from the desired voice channel

### Web interface
1. `cd` to the "sound-bort" folder and run `npm install` to get the needed packages.
2. Run the server with `npm start`. Agree to start on a different port if necessary. React will automatically build and open the webpage.

<!-- //TODO -->
## TODO

Possible improvements:
- Display animations when sound is in progress
- Store mp3s on CDN 
- Allow for multiple indepedent acting Soundbort bots with one server
- Customization of clip emojis

<!-- License -->
## License

This project is licensed under the Apache-2.0 License - see the [LICENSE.md](LICENSE.md) file for details
