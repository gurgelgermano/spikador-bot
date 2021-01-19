![logo spikador](https://user-images.githubusercontent.com/74389154/104830749-72bc9b80-5860-11eb-9ef7-03093d2dd120.png)

# !spikador

Bot para Twitch desenvolvido utilizando a biblioteca TMI.JS para reprodução de audios e conversão de texto-para-fala utilizando a api do google-tts.

# Configuração

No arquivo ConfigClient.js deve-se acrecentar os seguintes parâmetros:

canalDoBot = "NOME_CANAL";

> Nome de usuário do bot na twitch.

tokenTwitch = "oauth:";

> Token da conta do bot que pode ser adquirido no link a seguir -> https://twitchapps.com/tmi/

canalBotFica = [];

> Lista de canais que o bot ficará ou apenas o seu canal "entre aspas"

# Modo de Usar

> O bot conta com a reprodução de TODOS os idiomas desse planeta.
> !spikador aqui vai a mensagem normal digitado pelo usuário no chat da twitch.

Para utilizar mais idiomas, acrescentar o código do idioma de dois caracteres junto ao comando !spikador, exemplo:
!spikador*es* - Reproduz a mensagem em espanhol.
!spikador*it* - Reproduz a mensagem em italiano.
Para saber mais, a lista de códigos de idiomas fornecida pelo Google está em https://cloud.google.com/translate/docs/languages

> O idioma padrão é pt-BR, não ha necessidade de acrescentar código apos o comando !spikador para o idioma.

# Escutando o Spikador

Você pode escutar os comandos atraves do link http://localhost:3000/index.html?channel=**_SEU_CANAL_** e acrescentar como fonte de navegador no OBS ou seu programa de stream preferido.
