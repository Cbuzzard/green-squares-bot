const Discord = require('discord.js');
const { Octokit } = require("@octokit/rest");
const key = require("./key")

const client = new Discord.Client();
const octokit = new Octokit({})

let userMap = new Map()
userMap.set("brenden",  "brendenmoore")
userMap.set("corwin",  "cbuzzard")
userMap.set("eric",  "cireneirbo")
userMap.set("ted",  "t-mev")
userMap.set("devin",  "codeSkulki")
userMap.set("bilal",  "abstrkt10nLair")

client.on('message', message => {
    const prefix = '!sc'
	if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.split(' ');

    const t = new Date()

    const q = `author:${userMap.get(args[1])}+author-date:${t.getFullYear()}-${pad(t.getMonth()+1)}-${t.getDate()}`

    octokit.rest.search.commits({
        q,
    }).then(res => {
        console.log(q)
        console.log(res)
        if (res.data.total_count > 0) {
            message.channel.send(numSquares(res.data.total_count, ":green_square: "));
        } else {
            message.channel.send(":red_square: ");
        }
    });

});

function numSquares(num, text) {
    let res = ''
    for (let i = 0; i < num; i++) {
        res = res + text
    }
    return res
}

function pad(n){return n<10 ? '0'+n : n}

client.login(key);
