"use strict"

const discord = require("discord.js");
const momentTz = require("moment-timezone");

const Command = require("../command");

const times = new Command({

    name: "Timezones",
    description: "Get the current time in different timezones",
    thumbnail: "https://c.tadst.com/gfx/tzmap/map.1534046400.png?1159",
    marketplace_enabled: true,

    type: "js",
    match_type: "command",
    match: "times",

    featured: false,

    cb: function(client, message, guildDoc) {

        message.channel.send(new discord.RichEmbed()
            .setColor(0xff594f)
            .setAuthor("AWESOM-O // Times, https://cdn.discordapp.com/attachments/437671103536824340/462653108636483585/a979694bf250f2293d929278328b707c.png")
            .addField("PDT", momentTz().tz("America/Los_Angeles").format("Do MMMM YYYY, h:mm:ss a"))
            .addField("EDT", momentTz().tz("America/New_York").format("Do MMMM YYYY, h:mm:ss a"))
            .addField("BST", momentTz().tz("Europe/Dublin").format("Do MMMM YYYY, h:mm:ss a"))
            .addField("CDT", momentTz().tz("Asia/Hong_Kong").format("Do MMMM YYYY, h:mm:ss a"))
            .addField("MDT", momentTz().tz("America/Creston").format("Do MMMM YYYY, h:mm:ss a"))
            .setThumbnail("https://cdn.discordapp.com/attachments/379432139856412682/401485874040143872/hmmwhatsthetime.png"));
    }
});

module.exports = times;
