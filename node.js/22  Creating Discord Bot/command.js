const { REST, Routes } = require("discord.js");

const commands = [
    {
        name: "create",
        description: "Create a New Short URL!"
    }
]

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands("1548746141737156690"), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();