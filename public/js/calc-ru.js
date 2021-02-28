const questions = []
questions['start'] = {
  text: "Для начала, что требуется разработать?",
  answers: [
    {
      text: 'Сайт',
      next: 'typeofsite',
    },
    {
      text: 'Приложение',
      next: 'typeofapp',
    },
    {
      text: 'Чат-бот',
      next: 'typeofbot',
    },
  ]
}

questions['typeofsite'] = {
  text: "Подробнее, какой именно тип сайта нужен?",
  answers: [
    {
      text: 'Лендинг-страница',
      next: 'site_budget',
      prop: 'type',
      value: 'landing'
    },
    {
      text: 'Интернет-магазин',
      next: 'site_budget',
      prop: 'type',
      value: 'site_shop'
    },
    {
      text: 'Корпоративный сайт',
      next: 'site_budget',
      prop: 'type',
      value: 'site_corporate'
    },
    {
      text: 'Индивидуальное решение',
      next: 'site_budget',
      prop: 'type',
      value: 'site_custom'
    },
  ]
}

questions['typeofapp'] = {
  text: "Подробнее, какой именно тип приложения нужен?",
  answers: [
    {
      text: 'Интернет-магазин',
      next: 'app_budget',
      prop: 'type',
      value: 'app_shop'
    },
    {
      text: 'Клиентское приложение',
      next: 'app_budget',
      prop: 'type',
      value: 'app_client'
    },
    {
      text: 'Корпоративное приложение',
      next: 'app_budget',
      prop: 'type',
      value: 'app_corporate'
    },
    {
      text: 'Игры',
      next: 'app_budget',
      prop: 'type',
      value: 'app_game'
    },
    {
      text: 'Другое',
      next: 'app_budget',
      prop: 'type',
      value: 'app_custom'
    },
  ]
}

questions['typeofbot'] = {
  text: "Подробнее, что должен будет делать чат-бот?",
  answers: [
    {
      text: 'Интернет-магазин',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_shop'
    },
    {
      text: 'Клиентский сервис',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_client'
    },
    {
      text: 'Оптимизация внутренних процессов',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_corporate'
    },
    {
      text: 'Тесты',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_quiz'
    },
    {
      text: 'Другое',
      next: 'bot_budget',
      prop: 'type',
      value: 'bot_custom'
    },
  ]
}
    questions['site_budget'] = {
      text: "А бюджет примерный имеется?",
      answers: [
        {
          text: 'До 50 000 ₽',
          next: 'time',
          prop: 'budget',
          value: '50000'
        },
        {
          text: '50 000 - 100 000 ₽',
          next: 'time',
          prop: 'budget',
          value: '100000'
        },
        {
          text: '100 000 - 200 000 ₽',
          next: 'time',
          prop: 'budget',
          value: '200000'
        },
        {
          text: '200 000 - 500 000 ₽',
          next: 'time',
          prop: 'budget',
          value: '500000'
        },
        {
          text: '500 000 ₽ +',
          next: 'time',
          prop: 'budget',
          value: '12345678'
        },
  ]
}
questions['app_budget'] = {
  text: "А бюджет примерный имеется?",
  answers: [
    {
      text: '200 000 - 500 000 ₽',
      next: 'app_time',
      prop: 'budget',
      value: '500000'
    },
    {
      text: '500 000 - 1 000 000 ₽',
      next: 'app_time',
      prop: 'budget',
      value: '1000000'
    },
    {
      text: '1 000 000 ₽ +',
      next: 'app_time',
      prop: 'budget',
      value: '12345678'
    },
]
}
questions['bot_budget'] = {
  text: "А бюджет примерный имеется?",
  answers: [
    {
      text: 'До 50 000 ₽',
      next: 'time',
      prop: 'budget',
      value: '50000'
    },
    {
      text: '50 000 - 100 000 ₽',
      next: 'time',
      prop: 'budget',
      value: '100000'
    },
    {
      text: '100 000 - 200 000 ₽',
      next: 'time',
      prop: 'budget',
      value: '200000'
    },
]
}
questions['time'] = {
  text: "Когда должен быть готов проект, какие примерные сроки?",
  answers: [
    {
      text: 'В идеале — вчера',
      next: 'end',
      prop: 'time',
      value: '1'
    },
    {
      text: 'До 2-х недель',
      next: 'end',
      prop: 'time',
      value: '2'
    },
    {
      text: 'Месяц',
      next: 'end',
      prop: 'time',
      value: '4'
    },
    {
      text: 'Полтора — два месяца',
      next: 'end',
      prop: 'time',
      value: '6'
    },
    {
      text: 'От трех месяцев до полугода',
      next: 'end',
      prop: 'time',
      value: '12'
    },
    {
      text: 'Более полугода',
      next: 'end',
      prop: 'time',
      value: '24'
    },
]
}

questions['app_time'] = {
  text: "Когда должен быть готов проект, какие примерные сроки?",
  answers: [
    {
      text: 'Полтора — два месяца',
      next: 'end',
      prop: 'time',
      value: '6'
    },
    {
      text: 'От трех месяцев до полугода',
      next: 'end',
      prop: 'time',
      value: '12'
    },
    {
      text: 'Более полугода',
      next: 'end',
      prop: 'time',
      value: '24'
    },
]
}

const result = []

result['land_tilda'] = {
  name: 'Лендинг на Tilda',
  price: '40 000 ₽',
  time: '7',
  desc: 'Tilda — отличное решение, позволяющее создавать красивые и удобные сайты быстро и недорого, прекрасно подойдёт для разработки продающих "посадочных страниц". Однако платформа имеет определённые технические ограничения, реализовать чрезмерно изысканные дизайнерские решения или необычный функционал на ней не получится.',
  min_price: '40000',
  max_price: '1234567890',
  min_deadline: '0',
}
result['land_custom'] = {
  name: 'Уникальная разработка лендинга',
  price: '80 000 ₽',
  time: '30',
  desc: 'Если Ваш проект должен быть по-настоящему уникальным, Вам требуется принципиально новый уровень интерактивности содержимого сайта или фантастические анимации — мы готовы разработать требуемое решение с нуля. Кроме того, самописные проекты имеют обыкновение быть легче и быстрее аналогов на Tilda. Очевидный недостаток — рост стоимости и сроков реализации.',
  min_price: '80000',
  max_price: '1234567890',
  min_deadline: '4',
}
result['shop_tilda'] = {
  name: 'Интернет-магазин на Tilda',
  price: '40 000 ₽',
  time: '10',
  desc: 'Tilda позволяет быстро и недорого создать простой интернет-магазин и удобно управлять его содержимым. Это решение идеально подойдёт для небольших магазинов, которым достаточно базового функционала приёма/оформления заказов.',
  min_price: '40000',
  max_price: '201000',
  min_deadline: '0',
}
result['shop_cms'] = {
  name: 'Интернет-магазин на CMS',
  price: '100 000 ₽',
  time: '30',
  desc: 'Системы управления контентом для онлайн-торговли, вроде OpenCart или Битрикс, позволяют создавать продвинутые решения с широким функционалом. Отзывы и рейтинги, рекомендации, разнообразные системы скидок — а всё, что не входит в основной функционал системы, можно добавить в виде модулей.',
  min_price: '99000',
  max_price: '1234567890',
  min_deadline: '4',
}
result['shop_custom'] = {
  name: 'Уникальная разработка интернет-магазина',
  price: '200 000 ₽',
  time: '',
  desc: 'Если Вашему бизнесу требуется онлайн-магазин с каким-либо необычным функционалом, выходящим за рамки возможностей CMS, мы готовы разработать ваш будущий магазин с нуля. Мы сделаем работу с ним простой как для покупателя, так и для владельца, разработав удобную систему администрирования.',
  min_price: '199000',
  time: '45',
  max_price: '1234567890',
  min_deadline: '6',
}
result['corp_tilda'] = {
  name: 'Корпоративный сайт на Tilda',
  price: '40 000 ₽',
  desc: 'Tilda позволяет быстро и недорого создать сайт, содержащий информацию о Вашем бизнесе, и удобно управлять его содержимым. Однако платформа имеет определённые технические ограничения, реализовать чрезмерно изысканные дизайнерские решения или необычный функционал на ней не получится.',
  min_price: '40000',
  time: '10',
  max_price: '201000',
  min_deadline: '0',
}
result['corp_cms'] = {
  name: 'Корпоративный сайт на CMS',
  price: '60 000 ₽',
  desc: 'Системы управления контентом сайта, вроде Битрикс или WordPress, позволяют создавать продвинутые решения с широким функционалом и легко управлять их содержимым. Разлчиные модули позволяют легко расширять возможности сайта.',
  min_price: '60000',
  time: '14',
  max_price: '1234567890',
  min_deadline: '2',
}
result['corp_custom'] = {
  name: 'Уникальная разработка корпоративного сайта',
  price: '120 000 ₽',
  time: '30',
  desc: 'Если вашему бизнесу требуется уникальный сайт с неограниченным функционалом или изысканным дизайном и анимациями, мы готовы взять на себя его разработку. Время и стоимость разработки подобного сайта могут значительно варьироваться в зависимости от сложности поставленной задачи.',
  min_price: '120000',
  max_price: '1234567890',
  min_deadline: '4',
}
result['custom_tilda'] = {
  name: 'Индивидуальная разработка на Tilda',
  price: '40 000 ₽',
  desc: 'Если вы не нашли в списке категорию, которая описывает Ваш проект — это не значит, что его невозможно реализовать. Tilda позволяет быстро и за разумные деньги реализовать достаточно широкий спектр различных решений. Опишите нам Ваш проект и мы обязательно его реализуем.',
  min_price: '40000',
  time: '10',
  max_price: '201000',
  min_deadline: '0',
}
result['custom_cms'] = {
  name: 'Индивидуальная разработка на CMS',
  price: '80 000 ₽',
  desc: 'Если вы не нашли в списке категорию, которая описывает Ваш проект — это не значит, что его невозможно реализовать. Системы управления контентом сайта, вроде Битрикс или WordPress, позволяют создавать продвинутые решения с широким функционалом и легко управлять их содержимым. Опишите нам Ваш проект и мы обязательно его реализуем.',
  min_price: '80000',
  time: '30',
  max_price: '1234567890',
  min_deadline: '4',
}
result['custom_custom'] = {
  name: 'Индивидуальная разработка "с нуля"',
  price: '120 000 ₽',
  time: '45',
  desc: 'Если Вам требуется уникальный сайт с неограниченным функционалом или изысканным дизайном и анимациями, мы готовы взять на себя его разработку. Время и стоимость разработки подобного сайта могут значительно варьироваться в зависимости от сложности поставленной задачи.',
  min_price: '120000',
  max_price: '1234567890',
  min_deadline: '6',
}
result['app_custom'] = {
  name: 'Уникальная разработка приложения',
  price: '200 000 ₽',
  time: '45',
  desc: 'Мы готовы создать с нуля Ваше будущее мобильное приложение, обладающее всем требуемым функционалом. Реализуем его на любых операционных системах, используя методы как нативной, так и кросплафторменной разработки.',
  min_price: '0',
  max_price: '1234567890',
  min_deadline: '0',
}
result['bot_custom'] = {
  name: 'Уникальная разработка чат-бота',
  price: '30 000 ₽',
  time: '10',
  desc: 'Мы готовы создать с нуля чат-бота для любого мессенджера, имеющего открытое API (чаще всего это Telegram или Vkontakte). Больше всего мы любим работать с Telegram, возможности платформы позволяют создавать решения с широчайшим спектром возможностей, удобно интегируемые в уже существующую IT-инфраструктуру.',
  min_price: '0',
  max_price: '1234567890',
  min_deadline: '0',
}

const labels = []

labels['cards'] = 'Мы подобрали наиболее подходящие варианты'
labels['contacts'] = 'Ваши контакты'

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
