const ComandosModel = require("./ComandosModel.js");
const googleTTS = require("google-tts-api");

class Spikador extends ComandosModel {
    run(channel, user, message, io) {
        //this.listaMsg = [];
        if (
            this.podeExecutar(user, [
                ComandosModel.titles.moderator,
                ComandosModel.titles.subscriber,
                ComandosModel.titles.vip,
                ComandosModel.titles.broadcaster,
            ]) // Caso o usuario do chat tenha as seguintes badge, ele pode utilizar o comando.
        ) {
            const arr = message.substr(9).split(" ");
            let idioma = arr[0];
            message = arr.slice(1).join(" ");

            if (!idioma) {
                idioma = "pt-BR";
            }
            googleTTS
                .getAudioBase64(`${user.username} Disse: ${message}`, {
                    lang: idioma,
                })
                .then((res) => {
                    io.to(channel.substr(1)).emit("spikador", `data:audio/ogg;base64,${res}`);
                });
        } else {
            this.client.say(channel, `${user.username} O comando !spikador é exclusivo p/ Subs, Mods ou Vips`); // Caso o usuario nao tenha permissão, nao executa o comando.
        }
    }
}

module.exports = Spikador;
