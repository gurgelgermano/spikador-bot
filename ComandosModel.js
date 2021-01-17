const { Socket } = require("dgram");
const shell = require("shelljs");

class ComandosModel {
    //Variavel para acessar o tmi de dentro da instancia desse objeto
    client = null;

    specials = ["mercuriogurgel"];

    static titles = {
        moderator: "mod",
        subscriber: "sub",
        vip: "vip",
        broadcaster: "streamer",
    };

    constructor(_client) {
        this.client = _client;
    }

    static podeExecutar(user, titulos) {
        let userTitles = [];
        //console.log(user.badges);
        if (user.badges?.moderator) {
            userTitles.push(ComandosModel.titles.moderator);
        }
        if (user.badges?.broadcaster) {
            userTitles.push(ComandosModel.titles.broadcaster);
        }
        if (user.badges?.subscriber) {
            userTitles.push(ComandosModel.titles.subscriber);
        }
        if (user.badges?.vip) {
            userTitles.push(ComandosModel.titles.vip);
        }

        let interseccao = userTitles.some((element) => titulos.includes(element));
        return interseccao;
    }

    static executeAudio(audio) {
        shell.exec(
            `"C:/Program Files/VideoLAN/VLC/vlc.exe" --qt-start-minimized --play-and-exit --qt-notification=0 "mp3/${audio}"`,
            { silent: true }
        );
    }
}
module.exports = ComandosModel;
