const options = { cors: { origin: "*" } };
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, options);

const tmi = require("tmi.js");
const { username, channel } = require("tmi.js/lib/utils");
const ConfigClient = require("./ConfigClient.js");
const config = new ConfigClient();

const optss = {
    options: {
        debug: true,
    },
    connection: {
        cluster: "aws",
        reconnect: true,
    },
    identity: {
        username: config.canalBot,
        password: config.token,
    },
    //channels: [config.botFica],
    channels: config._canalBotFica,
};

// Cria um cliente tmi com  nossas opções
const client = new tmi.client(optss);

const Spikador = require("./Spikador.js");
const fala = new Spikador(client);

const AudiosMP3 = require("./AudiosMP3.js");
const audio = new AudiosMP3(client);

client.connect();

client.on("connected", entrouNoChatDaTwitch);
client.on("message", mensagemChegou);

app.use(express.static("public"));
server.listen(3000);
io.on("connection", (socket) => {
    socket.on("joinRoom", (channel) => {
        socket.join(channel);
    });
});

function entrouNoChatDaTwitch(endereco, porta) {
    console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
}

function mensagemChegou(channel, user, message, self) {
    if (self) return;

    if (message.toLowerCase() === "!spikadorbot") {
        client.say(channel, `Spikador é um bot de reprodução de falas e audios`);
    }
    if (message.toLowerCase() === "!careca") {
        audio.careca(channel, user, message, io);
    }
    if (message.toLowerCase() === "!alemao") {
        audio.alemao(channel, user, message, io);
    }
    if (message.toLowerCase() === "!aplausos") {
        audio.aplausos(channel, user, message, io);
    }
    if (message.toLowerCase() === "!catuxa") {
        audio.catuxa(channel, user, message, io);
    }
    if (message.toLowerCase() === "!fds") {
        audio.fds(channel, user, message, io);
    }
    if (message.toLowerCase() === "!rojao") {
        audio.rojao(channel, user, message, io);
    }
    if (message.indexOf("!spikador") === 0) {
        fala.run(channel, user, message, io);
    }
}
