const { Router } = require('express')
const router = Router()
var fs = require('fs');
const request = require('request')
const host = "http://127.0.0.1:3123/"

const locale = {};
locale.ru = JSON.parse(fs.readFileSync('./lang/ru.json'))
locale.en = JSON.parse(fs.readFileSync('./lang/en.json'))

const checkSpam = async (req, res, next) => {
    if (req.body.desc_2 && (req.body.desc_2.length>0)) {
        res.redirect('/');
    } else {
    	next();
    }
}

router.get(['/', '/index'], (req, res) => {
	res.status(200);
	let lang = 'en';
	if (req.query && req.query.lang && (req.query.lang === "ru"))
		lang = 'ru';
	res.render('index', {
		layout: 'layouts/basic',
		lang: locale[lang].lang,
		link: "?lang=" + lang,
		text_header: locale[lang].header,
		text: locale[lang].landing
	});
});

router.get('/contacts', (req, res) => {
	res.status(200);
	let lang = 'en';
	if (req.query && req.query.lang && (req.query.lang === "ru"))
		lang = 'ru';
	res.render('contacts', {
		layout: 'layouts/basic',
		lang: locale[lang].lang,
		link: "?lang=" + lang,
		text_header: locale[lang].header,
		text: locale[lang].contact
	});
});

router.get('/case-gold', (req, res) => {
	res.status(200);
	let lang = 'en';
	if (req.query && req.query.lang && (req.query.lang === "ru"))
		lang = 'ru';
	res.render('gold', {
		layout: 'layouts/basic',
		lang: locale[lang].lang,
		link: "?lang=" + lang,
		text_header: locale[lang].header,
		text: locale[lang].gold
	});
});

router.get('/case-agro', (req, res) => {
	res.status(200);
	let lang = 'en';
	if (req.query && req.query.lang && (req.query.lang === "ru"))
		lang = 'ru';
	res.render('agro', {
		layout: 'layouts/basic',
		lang: locale[lang].lang,
		link: "?lang=" + lang,
		text_header: locale[lang].header,
		text: locale[lang].agro
	});
});

router.get('/about', (req, res) => {
	res.status(200);
	let lang = 'en';
	if (req.query && req.query.lang && (req.query.lang === "ru"))
		lang = 'ru';
	res.render('about', {
		layout: 'layouts/basic',
		lang: locale[lang].lang,
		link: "?lang=" + lang,
		text_header: locale[lang].header,
		text: locale[lang].about
	});
});

router.get('/job', (req, res) => {
	res.status(200);
	let lang = 'en';
	if (req.query && req.query.lang && (req.query.lang === "ru"))
		lang = 'ru';
	res.render('job', {
		layout: 'layouts/basic',
		lang: locale[lang].lang,
		link: "?lang=" + lang,
		text_header: locale[lang].header,
		text: locale[lang].job
	});
});

router.get('/applyjob/:id', (req, res) => {
	res.status(200);
	let lang = 'en';
	if (req.query && req.query.lang && (req.query.lang === "ru"))
		lang = 'ru';
	res.render('applyjob', {
		id: req.params.id,
		layout: 'layouts/basic',
		lang: locale[lang].lang,
		link: "?lang=" + lang,
		text_header: locale[lang].header,
		text: locale[lang].applyjob
	});
});

router.post('/sendform', checkSpam,  async (req, res) => {
	try {
		const json = {
			contacts: [],
			file: []
		};
    	if (req.files){
    		if (req.files.length>1)
        		json.file = req.files.map(item => {return {name: item.name, data: item.data}});
    		else
				json.file.push({
					name: req.files.file.name,
					data: req.files.file.data
				});
    	}
    	if (req.body.service){
    		if ((req.body.service.length>1) && Array.isArray(req.body.service)){
       			for (let obj of req.body.service){
        			json.service = json.service + " " + obj;
        		}
    		} else 
    			json.service = req.body.service;
    	}

    	if (req.body.mail)
    		json.contacts.push({type: "Почта", info: req.body.mail});
		if (req.body.mail)
			json.contacts.push({type: "Телефон", info: req.body.phone});
		if (req.body.mail)
			json.contacts.push({type: "Telegram", info: req.body.tg});
		if (req.body.mail)
			json.contacts.push({type: "WhatsApp", info: req.body.whatsapp});
    	if (req.body.name)
			json.name = req.body.name
    	if (req.body.desc)
			json.info = req.body.desc

    	const url = host + 'request';
		let lang = 'en';
		if (req.body.lang && (req.body.lang == "en"))
			lang = 'ru';
        request.post(url, {json: json}, (error, result, body) => {
			if (error) {
        		console.log(error);
            	res.render('error', {
                   layout: 'layouts/basic',
                   lang: locale[lang].lang,
                   link: "?lang=" + lang,
                   text_header: locale[lang].header,
                   text: locale[lang].error
            	});
            	return;
           }
		   res.render('successform', {
				layout: 'layouts/basic',
				lang: locale[lang].lang,
				link: "?lang=" + lang,
				text_header: locale[lang].header,
				text: locale[lang].successform
			});
         });
	} catch (error) {
    	console.log(error);
		let lang = 'en';
		if (req.body.lang && (req.body.lang == "en"))
			lang = 'ru';
		res.render('error', {
			layout: 'layouts/basic',
			lang: locale[lang].lang,
			link: "?lang=" + lang,
			text_header: locale[lang].header,
			text: locale[lang].error
		});
	}
});

router.post('/sendcv', checkSpam,  async (req, res) => {
	try {
		const json = {
			contacts: [],
			file: [],
			service: "Отклик на вакансию " + req.body.vacancy_id,
		};
    	if (req.files){
    		if (req.files.length>1)
        		json.file = req.files.map(item => {return {name: item.name, data: item.data}});
    		else
				json.file.push({
					name: req.files.file.name,
					data: req.files.file.data
				});
    	}

    	if (req.body.mail)
    		json.contacts.push({type: "Почта", info: req.body.mail});
		if (req.body.mail)
			json.contacts.push({type: "Телефон", info: req.body.phone});
		if (req.body.mail)
			json.contacts.push({type: "Telegram", info: req.body.tg});
		if (req.body.mail)
			json.contacts.push({type: "WhatsApp", info: req.body.whatsapp});
    	if (req.body.name)
			json.name = req.body.name
    	if (req.body.city)
			json.info = req.body.city

    	const url = host + 'requestcv';
		let lang = 'en';
		if (req.body.lang && (req.body.lang == "en"))
			lang = 'ru';
        request.post(url, {json: json}, (error, result, body) => {
			if (error) {
        		console.log(error);
            	res.render('error', {
                   layout: 'layouts/basic',
                   lang: locale[lang].lang,
                   link: "?lang=" + lang,
                   text_header: locale[lang].header,
                   text: locale[lang].error
            	});
            	return;
           }
		   res.render('successcv', {
				layout: 'layouts/basic',
				lang: locale[lang].lang,
				link: "?lang=" + lang,
				text_header: locale[lang].header,
				text: locale[lang].successcv
			});
         });
	} catch (error) {
    	console.log(error);
		let lang = 'en';
		if (req.body.lang && (req.body.lang == "en"))
			lang = 'ru';
		res.render('error', {
			layout: 'layouts/basic',
			lang: locale[lang].lang,
			link: "?lang=" + lang,
			text_header: locale[lang].header,
			text: locale[lang].error
		});
	}
});

module.exports = router
