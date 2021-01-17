const ComandosModel = require("./ComandosModel.js");

class AudiosMP3 extends ComandosModel {
    careca(channel, user, message, io) {
        if (
            this.podeExecutar(user, [
                ComandosModel.titles.moderator,
                ComandosModel.titles.subscriber,
                ComandosModel.titles.vip,
            ])
        ) {
            io.to(channel.substr(1)).emit("spikador", "/mp3/careca.mp3");
        } else {
            this.client.say(channel, `${user.username} Os comandos de audios são exclusivos p/ Subs, Mods ou Vips`);
        }
    }

    catuxa(channel, user, message, io) {
        if (
            this.podeExecutar(user, [
                ComandosModel.titles.moderator,
                ComandosModel.titles.subscriber,
                ComandosModel.titles.vip,
            ])
        ) {
            io.to(channel.substr(1)).emit("spikador", "/mp3/catuxa.mp3");
        } else {
            this.client.say(channel, `${user.username} Os comandos de audios são exclusivo p/ Subs, Mods ou Vips`);
        }
    }

    fds(channel, user, message, io) {
        if (
            this.podeExecutar(user, [
                ComandosModel.titles.moderator,
                ComandosModel.titles.subscriber,
                ComandosModel.titles.vip,
            ])
        ) {
            io.to(channel.substr(1)).emit("spikador", "/mp3/fds.mp3");
        } else {
            this.client.say(channel, `${user.username} Os comandos de audios são exclusivo p/ Subs, Mods ou Vips`);
        }
    }
    alemao(channel, user, message, io) {
        if (
            this.podeExecutar(user, [
                ComandosModel.titles.moderator,
                ComandosModel.titles.subscriber,
                ComandosModel.titles.vip,
            ])
        ) {
            io.to(channel.substr(1)).emit("spikador", "/mp3/alemao.mp3");
        } else {
            this.client.say(channel, `${user.username} Os comandos de audios são exclusivo p/ Subs, Mods ou Vips`);
        }
    }
    aplausos(channel, user, message, io) {
        if (
            this.podeExecutar(user, [
                ComandosModel.titles.moderator,
                ComandosModel.titles.subscriber,
                ComandosModel.titles.vip,
            ])
        ) {
            io.to(channel.substr(1)).emit("spikador", "/mp3/aplausos.mp3");
        } else {
            this.client.say(channel, `${user.username} Os comandos de audios são exclusivo p/ Subs, Mods ou Vips`);
        }
    }
    rojao(channel, user, message, io) {
        if (
            this.podeExecutar(user, [
                ComandosModel.titles.moderator,
                ComandosModel.titles.subscriber,
                ComandosModel.titles.vip,
            ])
        ) {
            io.to(channel.substr(1)).emit("spikador", "/mp3/rojao.mp3");
        } else {
            this.client.say(channel, `${user.username} Os comandos de audios são exclusivo p/ Subs, Mods ou Vips`);
        }
    }
}

module.exports = AudiosMP3;
