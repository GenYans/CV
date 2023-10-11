

const Card = [
    {
        id: 1,
        png: 'img/marvel.png',
        title: 'Marvel',
        descr: 'Подключение API Marvel Server. Интерактивные элементы с возможностью выбора случайного персонажа по клику. При выборе случайного персонажа можно перейти на дополнительную информацию о нем. Добавлены 9 уникальных карточек персонажей комиксов, при клике в секции страницы появляется подробная информация о нем. При клике “Learn more” с API Marvel Server происходит загрузка еще 9 уникальных карточек.  ',
        png2: 'img/marvel2.png',
        png3: 'img/marvel3.png',
        data: 'Май, 2023',
        skills: "HTML, CSS, Javascript, React, React Hooks, Marvel Database",
        visit: 'GitHub',
        href: 'https://github.com/GenYans/marvel_starter_hooks'
    },
    {
        id: 2,
        png: 'img/coffeeshop.png',
        title: 'Coffee-Shop',
        descr: 'Создание сайта по макету из Figma. Подключение маршрутизатора страниц React Router. Создание интерактивных карточек с различными видами кофе. Добавлен интерактивный элемент с фильтрацией различных видов кофе по странам производства. Поисковая строка с возможностью сортировки по ключевому символу. Добавлена уникальная страница с информации о кофе.',
        png2: 'img/coffeeshop2.png',
        png3: 'img/coffeeshop3.png',
        data: 'Март, 2023',
        skills: "HTML, CSS, Javascript, React, React Router",
        stack: 'HTML/CSS',
        visit: 'GitHub',
        href: 'https://github.com/GenYans/Coffee-shop'
    },
    {
        id: 3,
        png: 'img/company employee accounting.png',
        title: 'CRUD-приложение',
        descr: 'Интерактивные элементы с фильтрацией информации (Все сотрудники, сотрудники с повышением ЗП, ЗП больше 1000$, Премированные сотрудники). Поисковая строка с возможностью сортировки сотрудников по ключевому символу. Возможность добавления новых сотрудников и удаление их из списка. Использование готовых классов через CDN сервер.',
        png2: 'img/company-employee-accounting2.png',
        png3: 'img/company-employee-accounting3.png',
        data: 'Сентябрь, 2023',
        skills: "HTML, CSS, Javascript",
        stack: 'JavaScript',
        visit: 'GitHub',
        href: 'https://github.com/GenYans/Company-employee-accounting'
    },
    {
        id: 4,
        png: 'img/uber777.png',
        title: 'Uber 777',
        descr: 'Создание верстки сайта по макету из Figma. Использование при создании верстки стороннюю библиотеку Bootstrap и препроцессора SASS. Построение интерактивных элементов с помощью cвойста CSS flex',
        png2: 'img/uber7772.png',
        png3: 'img/uber7773.png',
        data: 'Сентябрь, 2022',
        skills: "HTML, CSS",
        stack: 'HTML/CSS',
        visit: 'GitHub',
        href: 'https://github.com/GenYans/Uber777'
    },
    {
        id: 5,
        png: 'img/runsmarttest.png',
        title: 'Run Smart Test',
        descr: 'Интерактивные карточки товаров с модальными окнами с уникальной информацией о товаре. Использование таск-менеджера Gulp. Взаимодействие с пакетным менеджером npm для JS, работающий на Node.js. Подключение шрифтов через свойство font-face. Подключение пакета PHPMailer для отправки электронных писем на почту. Оптимизация написания CSS стилей с помощью препроцессора SASS.',
        png2: 'img/runsmarttest2.png',
        png3: 'img/runsmarttest3.png',
        data: 'Октябрь, 2022',
        skills: "HTML, CSS, SASS",
        visit: 'GitHub',
        href: 'https://github.com/GenYans/RunSmartTest'
    },
    {
        id: 6,
        png: 'img/delivery.png',
        title: 'Delivery',
        descr: 'Верстка сайта по шаблону из макета Figma. Подключение стороннего слайдера в проект (Slick Slider). Встраивание в проект карты с отметкой и адресом компании. Создание элементов с помощью Grid Layout',
        png2: 'img/global-opt2.png',
        png3: 'img/global-opt3.png',
        data: 'Ноябрь, 2022',
        skills: "HTML, CSS",
        visit: 'GitHub',
        href: 'https://github.com/GenYans/Delivery-Global-Opt'
    },
    {
        id: 7,
        png: 'img/irvas.png',
        title: 'Ирвас Окна',
        descr: 'Разработка проекта по техническому заданию заказчика.Сайт выполнен на нативном JavaScript, без использования библиотек, фреймворков или плагинов. В консоле отсутсвуют ошибки. Названия всех переменных/классов не содержат кириллицу или транслит. Итоговый вариант построен на модульной структуре. Работоспособность во всех современных браузерах (Chrome, Firefox, Opera, IE11, Edge, Safari).Создание анимации. Использование ES6+',
        png2: 'img/irvas2.png',
        png3: 'img/irvas3.png',
        data: 'Ноябрь, 2022',
        skills: "HTML, CSS, LESS, Javascript",
        visit: 'GitHub',
        href: 'https://github.com/GenYans/Irvas_window'
    },
    {
        id: 8,
        png: 'img/sz.png',
        title: 'ЮА «Северо-Запад»',
        descr: 'Создания дизайна сайта по пожеланиям заказчика. Формирования блоков сайта с помощью ZeroBlock. Интеграция счетчика с помощью JavaScript. Подключение сайта к системе SRM и привязка домена к сайту (рег.ру)',
        png2: 'img/sz2.png',
        png3: 'img/sz3.png',
        data: 'Март, 2023',
        skills: "Tilda, Javascript",
        visit: 'сайт',
        href: 'https://sever-zapad.ru/'
    },
    {
        id: 9,
        png: 'img/na.png',
        title: 'Non-agency',
        descr: 'Создания дизайна сайта по пожеланиям заказчика. Формирования блоков сайта с помощью ZeroBlock. Подключение сайта к системе SRM и привязка домена к сайту (рег.ру)',
        png2: 'img/non-agency2.png',
        png3: 'img/non-agency3.png',
        data: 'Апрель, 2023',
        skills: "Tilda",
        visit: 'сайт',
        href: 'https://non-agency.ru/'
    },
    {
        id: 10,
        png: 'img/vape.png',
        title: 'Vape',
        descr: 'Создания дизайна страниц в Figma и структуры сайта в Miro (пожелание заказчика).Создание стилей в Webflow с переносом их в Shopify с помощью сервиса Udesly. Формирование отдельных страниц для категорий товаров с привязкой к карточкам с главной страницы.Уникализированные страницы для каждых товаров (10 шт.).Интегрированные CSS стили и анимированные элементы JS.Подключение платежной системы',
        png2: 'img/vape2.png',
        png3: 'img/vape3.png',
        data: 'Август, 2023',
        skills: "Shopify, Webflow, Udesly, PageFly",
        visit: 'сайт',
        href: ''
    },
]
export default Card;