// Express + EJS + Path
const express = require('express');
const ejs = require('ejs');
const path = require('path')
const expressLayouts = require("express-ejs-layouts")
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')

const Routes = require('./routes/routes')

const app = express();
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set('views', 'views');
app.use(fileUpload({ limits: { fileSize: 1000*1000*10} }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Routes)
;(async()=> {

	const { PORT } = 3000

	app.listen(3000, () => {
		console.log(`Порт: 3000`)
	})
})();
