class ConfigClient {
    constructor() {
        this._canalDoBot = "spikador"; // nome do bot
        this._tokenTwitch = "oauth:"; //token do bot -> https://twitchapps.com/tmi/
        this._canalBotFica = ["SEU_CANAL"]; // lista de canais que o bot ficará
    }

    get canalBot() {
        return this._canalBotFica;
    }

    get token() {
        return this._tokenTwitch;
    }

    get botFica() {
        return this._canalBotFica;
    }
}

module.exports = ConfigClient;
