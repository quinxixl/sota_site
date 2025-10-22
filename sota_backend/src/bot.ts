import {Bot} from "grammy";
import {BOT_TOKEN} from "./config";

const bot = new Bot(BOT_TOKEN);

bot.command("start", async (ctx) => {
    await ctx.reply(`Your admin_id: ${ctx.chat.id}`);
});

bot.start()