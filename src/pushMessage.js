import linebot from 'linebot'

const botTokens = {
	channelId: process.env.LINECHANNEL,
	channelSecret: process.env.LINESECRET,
	channelAccessToken: process.env.LINECHANNELTOKEN
}

export default function(){
	const bot = linebot({...botTokens})
	bot.push(process.env.LINE_USERID, 'SITE: southplus cookies is about to expired')
}