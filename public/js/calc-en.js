const questions = []
questions['start'] = {
  text: "Let's begin. What should we create?",
  answers: [
    {
      text: 'Website',
      next: 'typeofsite',
    },
    {
      text: 'Mobile application',
      next: 'typeofapp',
    },
    {
      text: 'Chat bot',
      next: 'typeofbot',
    },
  ]
}

questions['typeofsite'] = {
  text: "Which kind of website is required?",
  answers: [
    {
      text: 'Landing page',
      next: 'site_budget',
      prop: 'type',
      value: 'landing'
    },
    {
      text: 'Online store',
      next: 'site_budget',
      prop: 'type',
      value: 'site_shop'
    },
    {
      text: 'Corporate website',
      next: 'site_budget',
      prop: 'type',
      value: 'site_corporate'
    },
    {
      text: 'Individual solution',
      next: 'site_budget',
      prop: 'type',
      value: 'site_custom'
    },
  ]
}

questions['typeofapp'] = {
  text: "Which kind of application is required?",
  answers: [
    {
      text: 'Online commerce',
      next: 'app_budget',
      prop: 'type',
      value: 'app_shop'
    },
    {
      text: 'Client app',
      next: 'app_budget',
      prop: 'type',
      value: 'app_client'
    },
    {
      text: 'Business app',
      next: 'app_budget',
      prop: 'type',
      value: 'app_corporate'
    },
    {
      text: 'Gaming',
      next: 'app_budget',
      prop: 'type',
      value: 'app_game'
    },
    {
      text: 'Other',
      next: 'app_budget',
      prop: 'type',
      value: 'app_custom'
    },
  ]
}

questions['typeofbot'] = {
  text: "What your chat bot should be able to do?",
  answers: [
    {
      text: 'Online store',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_shop'
    },
    {
      text: 'Customer service',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_client'
    },
    {
      text: 'Internal processes optimisation',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_corporate'
    },
    {
      text: 'Quiz',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_quiz'
    },
    {
      text: 'Other',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_custom'
    },
  ]
}
    questions['site_budget'] = {
      text: "How big is the project's budget?",
      answers: [
        {
          text: 'Below 1 500 €',
          next: 'time',
          prop: 'budget',
          value: '50000'
        },
        {
          text: '1 500 € - 2 000 €',
          next: 'time',
          prop: 'budget',
          value: '100000'
        },
        {
          text: '2 500 € - 5 000 €',
          next: 'time',
          prop: 'budget',
          value: '200000'
        },
        {
          text: '5 000 € - 10 000 €',
          next: 'time',
          prop: 'budget',
          value: '500000'
        },
        {
          text: '10 000 + €',
          next: 'time',
          prop: 'budget',
          value: '12345678'
        },
  ]
}
questions['app_budget'] = {
  text: "How big is the project's budget?",
  answers: [
    {
      text: '5 000 € - 10 000 €',
      next: 'app_time',
      prop: 'budget',
      value: '500000'
    },
    {
      text: '10 000 € - 20 000 €',
      next: 'app_time',
      prop: 'budget',
      value: '1000000'
    },
    {
      text: '20 000 + €',
      next: 'app_time',
      prop: 'budget',
      value: '12345678'
    },
]
}
questions['bot_budget'] = {
  text: "How big is the project's budget?",
  answers: [
    {
      text: 'Below 1 500 €',
      next: 'time',
      prop: 'budget',
      value: '50000'
    },
    {
      text: '1 500 € - 2 000 €',
      next: 'time',
      prop: 'budget',
      value: '100000'
    },
    {
      text: '2 500 € - 5 000 €',
      next: 'time',
      prop: 'budget',
      value: '200000'
    },
]
}
questions['time'] = {
  text: "When should the project be ready, what is the approximate time frame?",
  answers: [
    {
      text: 'Ideally, yesterday',
      next: 'end',
      prop: 'time',
      value: '1'
    },
    {
      text: 'Up to 2 weeks',
      next: 'end',
      prop: 'time',
      value: '2'
    },
    {
      text: '1 month',
      next: 'end',
      prop: 'time',
      value: '4'
    },
    {
      text: '1.5 - 2 months',
      next: 'end',
      prop: 'time',
      value: '6'
    },
    {
      text: '3 - 6 months',
      next: 'end',
      prop: 'time',
      value: '12'
    },
    {
      text: '6 + months',
      next: 'end',
      prop: 'time',
      value: '24'
    },
]
}

questions['app_time'] = {
  text: "When should the project be ready, what is the approximate time frame?",
  answers: [
    {
      text: '1.5 - 2 months',
      next: 'end',
      prop: 'time',
      value: '6'
    },
    {
      text: '3 - 6 months',
      next: 'end',
      prop: 'time',
      value: '12'
    },
    {
      text: '6 + months',
      next: 'end',
      prop: 'time',
      value: '24'
    },
]
}

const result = []

result['land_tilda'] = {
  name: 'Landing on Tilda',
  price: '1 000 €',
  time: '7',
  desc: 'Tilda is an excellent solution that allows you to create beautiful and user-friendly websites quickly and inexpensively, and it is perfect for developing landing pages. However, the platform has certain technical limitations, so you cannot implement excessively sophisticated design solutions or uncommon functionality using it.',
  min_price: '40000',
  max_price: '1234567890',
  min_deadline: '0',
}
result['land_custom'] = {
  name: 'Custom landing',
  price: '1800 €',
  time: '30',
  desc: 'If your project has to be really unique, if you need a completely new level of website content interactivity or extraordinary animations — we are ready to develop the required solution from scratch. In addition, self-made projects tend to be lighter and faster than their Tilda equivalents. The obvious disadvantage is the increase in cost and realization time.',
  min_price: '80000',
  max_price: '1234567890',
  min_deadline: '4',
}
result['shop_tilda'] = {
  name: 'Online store on Tilda',
  price: '1 000 €',
  time: '10',
  desc: 'Tilda allows you to quickly and inexpensively create a simple online store and conveniently manage its content. This solution is ideal for small stores that only need the core functionality of receiving / placing orders.',
  min_price: '40000',
  max_price: '201000',
  min_deadline: '0',
}
result['shop_cms'] = {
  name: 'Online store on CMS',
  price: '2 000 €',
  time: '30',
  desc: 'Content management systems for e-commerce, such as OpenCart or Bitrix, allow you to create advanced solutions with a wide range of functions. Reviews and ratings, recommendations, a different discount systems - and everything that is not part of the basic functionality of the system can be added using modules.',
  min_price: '99000',
  max_price: '1234567890',
  min_deadline: '4',
}
result['shop_custom'] = {
  name: 'Custom online store',
  price: '5 000 €',
  time: '',
  desc: 'If your business needs an online store with any special functionality beyond the capabilities of CMS, we are ready to develop your future store from scratch. We will make the process of working with it easy both for the customer and the owner by developing a convenient administration system.',
  min_price: '199000',
  time: '45',
  max_price: '1234567890',
  min_deadline: '6',
}
result['corp_tilda'] = {
  name: 'Corporate website on Tilda',
  price: '1 000 €',
  desc: 'Tilda allows us to quickly and inexpensively create a website that contains information about your business, and easily manage its content. However, the platform has certain technical limitations, so you cannot implement excessively sophisticated design solutions or uncommon functionality using it.',
  min_price: '40000',
  time: '10',
  max_price: '201000',
  min_deadline: '0',
}
result['corp_cms'] = {
  name: 'Corporate website on CMS',
  price: '1 500 €',
  desc: 'Website content management systems like Bitrix or WordPress allow you to create advanced solutions with a wide range of features and easily manage the content. Various modules make it easy to expand the functionality of the site.',
  min_price: '60000',
  time: '14',
  max_price: '1234567890',
  min_deadline: '2',
}
result['corp_custom'] = {
  name: 'Custom corporate website',
  price: '3 000 €',
  time: '30',
  desc: 'If your business needs a unique website with unlimited functionality or sophisticated design and animations, we are ready to develop it. Time and cost of the development of such a site can vary significantly depending on the complexity of the task.',
  min_price: '120000',
  max_price: '1234567890',
  min_deadline: '4',
}
result['custom_tilda'] = {
  name: 'Individual project on Tilda',
  price: '1 000 €',
  desc: 'If you cannot find a category in the list that describes your project, it does not mean that it cannot be created. Tilda allows you to implement a wide range of solutions quickly and at a reasonable cost. Describe us your project and we will definitely make it real.',
  min_price: '40000',
  time: '10',
  max_price: '201000',
  min_deadline: '0',
}
result['custom_cms'] = {
  name: 'Individual project on CMS',
  price: '1 800 €',
  desc: 'If you cannot find a category in the list that describes your project, it does not mean that it cannot be created. Website content management systems like Bitrix or WordPress allow you to create advanced solutions with a wide range of features and easily manage the content. Describe us your project and we will definitely make it real.',
  min_price: '80000',
  time: '30',
  max_price: '1234567890',
  min_deadline: '4',
}
result['custom_custom'] = {
  name: 'Individual project custom development',
  price: '3 000 €',
  time: '45',
  desc: 'If your need a unique website with unlimited functionality or sophisticated design and animations, we are ready to develop it. Time and cost of the development of such a site can vary significantly depending on the complexity of the task.',
  min_price: '120000',
  max_price: '1234567890',
  min_deadline: '6',
}
result['app_custom'] = {
  name: 'Mobile application development',
  price: '5 000 €',
  time: '45',
  desc: 'We are ready to create your future mobile application from scratch with all the required functionality. We implement it on any operating system, using both native and cross-platform development.',
  min_price: '0',
  max_price: '1234567890',
  min_deadline: '0',
}
result['bot_custom'] = {
  name: 'Chat bot development',
  price: '750 €',
  time: '10',
  desc: 'We are ready to create your chat bot for any kind if messenger that has public API (in most cases Telegram or Vkontakte). We love Telegram mostly, due to the extensive capabilities of the platform, that allow to create solutions with a wide range of functions. This solutions are conveniently implentable into the already exisiting IT-infrastructure.',
  min_price: '0',
  max_price: '1234567890',
  min_deadline: '0',
}

const labels = []

labels['cards'] = 'We have chosen the most appropriate options for you'
labels['contacts'] = 'Your contacts'

result_cats = []
result_cats['landing'] = ['land_tilda', 'land_custom']
result_cats['site_shop'] = ['shop_tilda', 'shop_cms', 'shop_custom']
result_cats['site_corporate'] = ['corp_tilda', 'corp_cms', 'corp_custom']
result_cats['site_custom'] = ['custom_tilda', 'custom_cms', 'custom_custom']
result_cats['app_shop'] = ['app_custom']
result_cats['app_client'] = ['app_custom']
result_cats['app_corporate'] = ['app_custom']
result_cats['app_game'] = ['app_custom']
result_cats['app_custom'] = ['app_custom']
result_cats['bot_shop'] = ['bot_custom']
result_cats['bot_client'] = ['bot_custom']
result_cats['bot_corporate'] = ['bot_custom']
result_cats['bot_quiz'] = ['bot_custom']
result_cats['bot_custom'] = ['bot_custom']
