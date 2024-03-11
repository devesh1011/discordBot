import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
import { config } from "dotenv";
import getNews from "./getNews.js";

config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

  msg.reply({
    content: `Hi ${msg.author.username}`,
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    const articles = await getNews();

    await interaction.reply(articles);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
