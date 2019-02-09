const express = require('express')
const line - require('@line/bot-sdk')
require('dotenv').config()

const config = {
	channelAccessToken:process.env.LINE_ACCESS_TOKEN
	channelSecret:process.env.LINE_SECRET
}

const app = express()

app.post('/webhook', line.middleware(config), (req, res) => {
	Promise
		.all(req.body.events.map(handleEvent))
		.then((result) => res.json(result))
})

const client = new line.Client(confg)
var handleEvent = (event) => {
	if(event.type !== 'message' || event.message.type !== 'text'){
		return Promise.resolve(null)
	}

	return client.replyMessage(event.replyToken, {
		type:'text',
		text: event.message.text
	})
}

app.listen(3000,()=>{console.log('listening 3000'})

