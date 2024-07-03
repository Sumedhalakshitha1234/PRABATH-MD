const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}




module.exports = {
    SESSION_ID: PRABATH-MD~hq8HGKia#zdXyqHDo0xiBC-Wk8lqfyBCLE3Uwnn6g9Xh1IwgG8yk ,    
    BOT_NUMBER: 9477165563,
    GITHUB_USERNAME: Sumedhalakshitha1234,
    GITHUB_AUTH_TOKEN: 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,
};
