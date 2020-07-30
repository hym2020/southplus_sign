import pwlogin from '../phpwindlogin/dist/core/phpwindlogin'
import pushMessage from './pushMessage.js'
import { loadCookieB64 } from '../phpwindlogin/dist/core/makeb64Cookie.js'


const wait = sec => new Promise(resolve => setTimeout(resolve, sec*1000))

async function main(){
	loadCookieB64('south_plus', process.env.COOKIE)
	try{
		const mylogger = new pwlogin('south_plus', '', '', 'https://www.south-plus.net')
		console.log('取得真實位址...')
		await mylogger.getRealSiteURL()
		const realSite = mylogger.siteURL
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
		
		
		
		console.log('還未登錄，正在執行登錄手續...')
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
				
		console.log('確認是否為登陸狀態...')
		let r = await mylogger.isLogin()
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
		if(!r){
			console.log('錯誤，未登錄，請重試')
			console.log('/------------------------------------/')
			console.log('/------------------------------------/')
			pushMessage()
			return
		}
		console.log('成功登錄')
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
		
		
		console.log('準備簽到...')
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
		
		
		
		console.log('準備接周常任務...')
		const session = mylogger.getSession()
		await session.get(`${realSite}/plugin.php?H_name=tasks&action=ajax&actions=job&cid=14`)
		console.log('周常任務接受成功...')
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
		
		
		
		console.log('準備接日常任務...')
		await session.get(`${realSite}/plugin.php?H_name=tasks&action=ajax&actions=job&cid=15`)
		console.log('日常任務接受成功...')
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
		
		
		
		console.log('準備做周常任務...')
		await session.get(`${realSite}/plugin.php?H_name=tasks&action=ajax&actions=job2&cid=14`)
		console.log('周常任務簽到成功...')
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
		
		
		
		console.log('準備做日常任務...')
		await session.get(`${realSite}/plugin.php?H_name=tasks&action=ajax&actions=job2&cid=15`)
		console.log('日常任務簽到成功...')
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
			
		return
	}
	catch(e){
		console.log('登錄/簽到失敗')
		console.log(e.message)
		console.log('/------------------------------------/')
		console.log('/------------------------------------/')
		return
	}
}

main()