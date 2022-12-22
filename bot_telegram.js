var TelegramBot = require('node-telegram-bot-api');

var token = 'YOUR_TELEGRAM_BOT_TOKEN';
var bot = new TelegramBot(token, {polling: true});

bot.onText(//start/, function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hi! I am a Telegram bot. How can I help you today?");
});

bot.onText(//help/, function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "I can do the following things:\n- /start: Start the bot\n- /help: Display this help message\n- /echo [text]: Echo the text back to you\n- /weather [city]: Get the current weather for the specified city");
});

bot.onText(//echo (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var text = match[1];
  bot.sendMessage(chatId, text);
});

bot.onText(//weather (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var city = match[1];
  // code to get current weather for the specified city
  // and send it back to the user via the bot
});
