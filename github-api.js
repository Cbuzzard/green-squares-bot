const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({})

const username = "cbuzzard"

// const q = `author:abstrkt10nLair+author-date:2021-03-27`

// octokit.rest.search.commits({
//     q,
// }).then(res => {
//     console.log(res.data.total_count)
// });

const t = new Date()

const q = `author:T-Mev+author-date:${t.getFullYear()}-${pad(t.getMonth()+1)}-${t.getDate()}`

console.log(q)

octokit.rest.search.commits({
    q,
}).then(res => {
    console.log(res)
    // if (res.data.total_count > 0) {
    //     message.channel.send(":green_square::green_square::green_square:");
    // } else {
    //     message.channel.send(":red_square::red_square::red_square:");
    // }
});

function pad(n){return n<10 ? '0'+n : n}

// octokit.rest.users.getByUsername({
//     username,
//   }).then(res => {
//       console.log(res)
//   });