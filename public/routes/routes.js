const { Router } = require('express')
const router = Router()
var fs = require('fs');
const request = require('request')
const http = require('http')
const host = "http://127.0.0.1:3123/"

const ru = JSON.parse(fs.readFileSync('./lang/ru.json'))
const en = JSON.parse(fs.readFileSync('./lang/en.json'))

const checkSpam = async (req, res, next) => {
    if (req.body.desc_2 && (req.body.desc_2.length>0)) {
        res.redirect('/')

    } else {
    next()
    }
}

router.get(['/', '/index'], (req, res) => {
res.status(200)
console.log(req.body.params)
if (req.query && req.query.lang && (req.query.lang == "en")) {
  res.render('index', {
      layout: 'layouts/basic',
      lang: en.lang,
      link: "?lang=en",
      text_header: en.header,
      text: en.landing
  })
} else {
  res.render('index', {
      layout: 'layouts/basic',
      lang: ru.lang,
      link: "",
      text_header: ru.header,
      text: ru.landing
  })
}

})


router.get('/contacts', (req, res) => {
  res.status(200)
  if (req.query && req.query.lang && (req.query.lang == "en")) {
    res.render('contacts', {
        layout: 'layouts/basic',
        lang: en.lang,
        link: "?lang=en",
        text_header: en.header,
        text: en.contact
    })
  } else {
    res.render('contacts', {
        layout: 'layouts/basic',
        lang: ru.lang,
        link: "",
        text_header: ru.header,
        text: ru.contact
    })
  }
})

router.get('/about', (req, res) => {
  res.status(200)
  if (req.query && req.query.lang && (req.query.lang == "en")) {
    res.render('about', {
        layout: 'layouts/basic',
        lang: en.lang,
        link: "?lang=en",
        text_header: en.header,
        text: en.about
    })
  } else {
    res.render('about', {
        layout: 'layouts/basic',
        lang: ru.lang,
        link: "",
        text_header: ru.header,
        text: ru.about
    })
  }
})

router.get('/job', (req, res) => {
  res.status(200)
  if (req.query && req.query.lang && (req.query.lang == "en")) {
    res.render('job', {
        layout: 'layouts/basic',
        lang: en.lang,
        link: "?lang=en",
        text_header: en.header,
        text: en.job
    })
  } else {
    res.render('job', {
        layout: 'layouts/basic',
        lang: ru.lang,
        link: "",
        text_header: ru.header,
        text: ru.job
    })
  }
})

router.get('/applyjob/:id', (req, res) => {
  res.status(200)
  if (req.query && req.query.lang && (req.query.lang == "en")) {
    res.render('applyjob', {
        layout: 'layouts/basic',
        id: req.params.id,
        lang: en.lang,
        link: "?lang=en",
        text_header: en.header,
        text: en.applyjob
    })
  } else {
    res.render('applyjob', {
        layout: 'layouts/basic',
        id: req.params.id,
        lang: ru.lang,
        link: "",
        text_header: ru.header,
        text: ru.applyjob
    })
  }
})

router.post('/sendform', checkSpam,  async (req, res) => {
console.log(req.body.service)
  try {

    let contacts = []
    let name=""
    let desc=""
    let service=""
    let files = []
    if (req.files){
      if (req.files.length>1){
        for (file of req.files){
          files.push({
            name: file.name,
            data: file.data
          })
        }
      } else {
      files.push({
        name: req.files.file.name,
        data: req.files.file.data
      })
    }
    console.log(files)
    }
    if (req.body.service){
      if ((req.body.service.length>1) && Array.isArray(req.body.service)){
        for (obj of req.body.service){
         service= service + " " + obj
        }
      } else {
    service = req.body.service
    }
    }
    if (req.body.mail){
      contacts.push({
        type: "Почта",
        info: req.body.mail
      })
    }
    if (req.body.phone){
      contacts.push({
        type: "Телефон",
        info: req.body.phone
      })
    }
    if (req.body.tg){
      contacts.push({
        type: "Telegram",
        info: req.body.tg
      })
    }
    if (req.body.whatsapp){
      contacts.push({
        type: "WhatsApp",
        info: req.body.whatsapp
      })
    }
    if (req.body.name){
      name = req.body.name
    }
    if (req.body.desc){
      desc = req.body.desc
    }
    const url = host + 'request'
           request.post(
         url,
         {
           json: {
             name: name,
             info: desc,
             service: service,
             contacts: contacts,
             file: files,
           },
         },
         (error, result, body) => {
           if (error) {
             console.error(error)
             if (req.body.lang && (req.body.lang == "en")) {
               res.render('error', {
                   layout: 'layouts/basic',
                   lang: en.lang,
                   link: "?lang=en",
                   text_header: en.header,
                   text: en.error
               })
             } else {
               res.render('error', {
                   layout: 'layouts/basic',
                   lang: ru.lang,
                   link: "",
                   text_header: ru.header,
                   text: ru.error
               })
             }
             return
           }
           console.log(`statusCode: ${result.statusCode}`)
           console.log(body)
           if (req.body.lang && (req.body.lang == "en")) {
             res.render('successform', {
                 layout: 'layouts/basic',
                 lang: en.lang,
                 link: "?lang=en",
                 text_header: en.header,
                 text: en.successform
             })
           } else {
             res.render('successform', {
                 layout: 'layouts/basic',
                 lang: ru.lang,
                 link: "",
                 text_header: ru.header,
                 text: ru.successform
             })
           }
         }
       )

  } catch (error) {
    console.log(error)
    if (req.body.lang && (req.body.lang == "en")) {
      res.render('error', {
          layout: 'layouts/basic',
          lang: en.lang,
          link: "?lang=en",
          text_header: en.header,
          text: en.error
      })
    } else {
      res.render('error', {
          layout: 'layouts/basic',
          lang: ru.lang,
          link: "",
          text_header: ru.header,
          text: ru.error
      })
    }
  }
})

router.post('/sendcv', checkSpam,  async (req, res) => {
  try {
let contacts = []
let name=""
let desc=""
let files = []
if (req.files){
  files.push({
    name: req.files.file.name,
    data: req.files.file.data
  })
}
if (req.body.mail){
  contacts.push({
    type: "Почта",
    info: req.body.mail
  })
}
if (req.body.phone){
  contacts.push({
    type: "Телефон",
    info: req.body.phone
  })
}
if (req.body.tg){
  contacts.push({
    type: "Telegram",
    info: req.body.tg
  })
}
if (req.body.whatsapp){
  contacts.push({
    type: "WhatsApp",
    info: req.body.whatsapp
  })
}
if (req.body.name){
  name = req.body.name
}
if (req.body.city){
  desc = req.body.city
}
    const url = host + 'requestcv'
    request.post(
  url,
  {
    json: {
      name: name,
      info: desc,
      service: "Отклик на вакансию " + req.body.vacancy_id,
      contacts: contacts,
      file: files,
    },
  },
  (error, result, body) => {
    if (error) {
      console.error(error)
      if (req.body.lang && (req.body.lang == "en")) {
        res.render('error', {
            layout: 'layouts/basic',
            lang: en.lang,
            link: "?lang=en",
            text_header: en.header,
            text: en.error
        })
      } else {
        res.render('error', {
            layout: 'layouts/basic',
            lang: ru.lang,
            link: "",
            text_header: ru.header,
            text: ru.error
        })
      }
      return
    }
    console.log(`statusCode: ${result.statusCode}`)
    console.log(body)
    if (req.body.lang && (req.body.lang == "en")) {
      res.render('successcv', {
          layout: 'layouts/basic',
          lang: en.lang,
          link: "?lang=en",
          text_header: en.header,
          text: en.successcv
      })
    } else {
      res.render('successcv', {
          layout: 'layouts/basic',
          lang: ru.lang,
          link: "",
          text_header: ru.header,
          text: ru.successcv
      })
    }
  }
)

  } catch (error) {
    console.log(error)
    if (req.body.lang && (req.body.lang == "en")) {
      res.render('error', {
          layout: 'layouts/basic',
          lang: en.lang,
          link: "?lang=en",
          text_header: en.header,
          text: en.error
      })
    } else {
      res.render('error', {
          layout: 'layouts/basic',
          lang: ru.lang,
          link: "",
          text_header: ru.header,
          text: ru.error
      })
    }
  }
})

module.exports = router
