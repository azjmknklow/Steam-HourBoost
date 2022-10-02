var SteamUser = require("./hourboosting/node_modules/steam-user");
const games = require('./games.json');
const keepAlive = require("./server")

var client = new SteamUser();

client.logOn({
  accountName: process.env.login,
  password: process.env.password,
  //twoFactorCode: SteamTotp.generateAuthCode("if_you_have_twoFactorCode")
});

client.on("loggedOn", function() {
  console.log("Bot logged on!");
  client.setPersona(SteamUser.EPersonaState.Online);
  client.gamesPlayed(games['app-id']);
});

keepAlive()