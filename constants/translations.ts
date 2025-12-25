
export type Language = "en" | "ru" | "uz";

export const translations = {
    en: {
        common: {
            globeUnavailable: "3D visualization unavailable",
        },
        nav: {
            program: "Program",
            benefits: "Benefits",
            mentors: "Mentors",
            apply: "Apply Now",
        },
        hero: {
            titleLine1: "ELEVATE UZBEKISTAN BUSINESS",
            titleLine2: "TO WORLD STANDARDS",
            subtitle: "Systemize your business in 6 months: marketing, sales, finance, HR, and management. Practical program for Uzbek entrepreneurs — get ready for export and growth.",
            apply: "Submit Application",
            learnMore: "Learn More About Program",
            badge: "APPLICATIONS NOW OPEN FOR 2026",
        },
        gap: {
            problemTitle: "Key Business Challenges",
            solutionTitle: "BizCombinator Solution",
            problems: [
                "No systems — marketing, sales, finance are disorganized",
                "No clear growth strategy — where to go next?",
                "Can't find quality mentorship and practical advice",
                "No methodology for export",
                "No KPIs to measure and manage business"
            ],
            solutions: [
                "5 core systems: Marketing, Sales, Finance, HR, Management",
                "Individual diagnostics and custom solutions",
                "Practice-based methodology",
                "Export-oriented preparation",
                "Weekly KPI monitoring and coaching"
            ],
            problemDetails: [
                "Most businesses are busy with daily tasks — no strategy, processes, or systems. Everything depends on the owner.",
                "You want to grow, but don't know where to start. Training and courses are expensive and not practical.",
                "Internet and books have theory, but no concrete guidance for YOUR specific business.",
                "You want to export, but certifications, standards, logistics — everything is unknown.",
                "Is your business profitable? Which direction is working? Which employee is effective? No numbers, no data."
            ],
            solutionDetails: [
                "Month 1: Expert trainings in 5 core areas. Months 2-3: Individual business diagnostics. Develop custom solutions for each business.",
                "Experienced mentors who built businesses in Uzbekistan and abroad. Their success is your roadmap.",
                "Not theory, only practical results. Every lesson is a concrete tool you apply in your business.",
                "Adapt to international standards, explain certification process, introduction to export markets.",
                "Weekly KPI monitoring. If there's no result — we adjust strategy quickly. Result-oriented coaching."
            ]
        },
        features: {
            title: "Not Just For Startups",
            subtitle: "We empower established businesses to innovate like unicorns.",
            items: [
                { title: "Digital Transformation", desc: "Transform legacy systems into modern, scalable digital solutions." },
                { title: "Operational AI", desc: "Streamline workflows and increase efficiency with AI integration." },
                { title: "Market Expansion", desc: "Unlock global markets and scale your business internationally." }
            ]
        },
        mentors: {
            title: "World-Class Mentors",
            items: [
                {
                    id: 1,
                    name: "Sarah Chen",
                    role: "Tech Executive",
                    expertise: "Expert in AI & Growth",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 2,
                    name: "Marcus Rodriguez",
                    role: "Venture Capitalist",
                    expertise: "HealthTech & FinTech",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 3,
                    name: "Elena Kim",
                    role: "Product Director",
                    expertise: "SaaS & B2B Strategy",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 4,
                    name: "David Park",
                    role: "Startup Founder",
                    expertise: "Scaling & Operations",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 5,
                    name: "Priya Patel",
                    role: "Marketing Leader",
                    expertise: "Brand Building & PR",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 6,
                    name: "James Wilson",
                    role: "AI Researcher",
                    expertise: "Deep Tech & Innovation",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
                }
            ]
        },
        timeline: {
            title: "The Journey",
            subtitle: "The Process",
            steps: [
                { title: "Application", desc: "Submit your pitch and join the waitlist." },
                { title: "Selection", desc: "Top 5% of startups are selected for the cohort." },
                { title: "Intensive Learning", desc: "6 weeks of deep dive into business fundamentals." },
                { title: "Mentorship & AI", desc: "Work with mentors and leverage AI tools." },
                { title: "Pitch Day", desc: "Present your startup to global investors." },
                { title: "Scale", desc: "Launch and expand into new markets." }
            ]
        },
        global: {
            title: "Global Impact, Local Roots",
            subtitle: "A worldwide network of partners, mentors, and investors dedicated to your success.",
            viewNetwork: "View Network",
            stats: {
                projects: "Projects Supported",
                partners: "Global Partners",
                investment: "Investment Raised"
            }
        },
        form: {
            title: "Ready to Transform?",
            subtitle: "Join the next cohort of world-changing startups.",
            name: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            startupName: "Startup Name",
            stage: "Startup Stage",
            country: "Country",
            description: "Project Description",
            pitch: "Pitch Deck",
            submit: "Submit Application",
            sending: "Sending...",
            selectStage: "Select Stage",
            stages: {
                idea: "Idea Phase",
                mvp: "MVP Built",
                revenue: "Generating Revenue",
                scale: "Scaling"
            },
            dropText: "Click to upload or drag and drop",
            dropHint: "PDF, PPT, or DOC (Max 10MB)",
            pitchNote: "* You can attach a pitch deck (optional).",
            placeholders: {
                name: "John Doe",
                email: "john@example.com",
                phone: "+998 90 123 45 67",
                startup: "My Unicorn"
            },
            success: {
                title: "Application Sent!",
                body: "We have received your application. Our team will review it and get back to you shortly.",
                sendAnother: "Send another application"
            },
            errors: {
                invalidFileType: "Invalid file type. Please upload PDF, PPT, or DOC files only.",
                fileTooLarge: "File too large. Maximum size is 10MB.",
                rateLimited: "Too many requests. Please try again in a minute.",
                badRequest: "Please check your inputs and try again.",
                submitFailed: "Failed to send application. Please try again or submit without a file."
            }
        },
        business: {
            title: "Who We Work With",
            subtitle: "Empowering innovators across every stage of growth.",
            cards: [
                {
                    title: "Early-Stage Startups",
                    desc: "From napkin sketch to MVP. We help structure your chaotic vision into a fundable business."
                },
                {
                    title: "Technical Founders",
                    desc: "Turning brilliant code into a viable product. We bridge the gap between engineering and sales."
                },
                {
                    title: "Traditional Businesses",
                    desc: "Digital transformation for brick-and-mortar champions ready to scale online."
                },
                {
                    title: "E-Commerce & Retail",
                    desc: "Optimizing supply chains and customer scaling for the next generation of retail giants."
                },
                {
                    title: "Service Providers",
                    desc: "Agencies and consultancies looking to productize their services and break linear growth ceilings."
                },
                {
                    title: "Enterprise Innovation",
                    desc: "Intrapreneurship programs for large organizations seeking startup agility."
                }
            ]
        },
        showcase: {
            slides: [
                {
                    title: "From Zero to One",
                    description: "It starts with a spark. We help you ignite the initial idea, structuring your vision into a viable business model."
                },
                {
                    title: "Rapid Scaling",
                    description: "Once product-market fit is found, we fuel the fire. Our network and resources help you scale exponentially."
                },
                {
                    title: "Global Domination",
                    description: "The sky is not the limit. We connect you with global markets, partners, and exit opportunities."
                }
            ]
        },
        widget: {
            title: "BizAI Assistant",
            hello: "Hello! I can help you refine your business idea or answer questions about the accelerator.",
            placeholder: "Type a message...",
            cannedResponse: "That sounds like an interesting idea! Please apply to the program so our mentors can review it in detail."
        },
        footer: {
            tagline: "The accelerator of the future. Transforming ambitious ideas into global empires through funding, mentorship, and AI-driven growth.",
            columns: {
                program: "Program",
                company: "Company",
                hq: "Uzbekistan HQ"
            },
            links: {
                journey: "The Journey",
                apply: "Apply Now",
                mentors: "Mentors",
                global: "Global Network",
                about: "About Us",
                stories: "Success Stories",
                investors: "For Investors",
                contact: "Contact",
                privacy: "Privacy Policy",
                terms: "Terms of Service"
            },
            hq: {
                line1: "Tashkent, Mirabad District",
                line2: "Oybek Street 12, Block B"
            },
            copyright: "© 2025 BizCombinator. All rights reserved."
        }
    },
    ru: {
        common: {
            globeUnavailable: "3D визуализация недоступна",
        },
        nav: {
            program: "Программа",
            benefits: "Преимущества",
            mentors: "Менторы",
            apply: "Подать заявку",
        },
        hero: {
            titleLine1: "ПРОГРАММА, КОТОРАЯ ПОДНИМАЕТ",
            titleLine2: "УЗБЕКСКИЙ БИЗНЕС НА МИРОВОЙ УРОВЕНЬ",
            subtitle: "Систематизируйте бизнес за 6 месяцев: маркетинг, продажи, финансы, кадры и управление. Практическая программа для узбекских предпринимателей — готовность к экспорту и росту.",
            apply: "Подать заявку",
            learnMore: "Подробнее о программе",
            badge: "ПРИЕМ ЗАЯВОК НА 2026 ГОД",
        },
        gap: {
            problemTitle: "Ключевые проблемы бизнеса",
            solutionTitle: "Решение BizCombinator",
            problems: [
                "Нет систем — маркетинг, продажи, финансы не организованы",
                "Нет четкой стратегии роста — куда двигаться дальше?",
                "Не найти качественное менторство и практические советы",
                "Нет методологии для экспорта",
                "Нет KPI для измерения и управления бизнесом"
            ],
            solutions: [
                "5 основных систем: Маркетинг, Продажи, Финансы, HR, Управление",
                "Индивидуальная диагностика и кастомные решения",
                "Методология, основанная на практике",
                "Подготовка с ориентацией на экспорт",
                "Еженедельный KPI-мониторинг и коучинг"
            ],
            problemDetails: [
                "Большинство бизнесов заняты текущими задачами — нет стратегии, процессов, систем. Всё держится на владельце.",
                "Хотите расти, но не знаете с чего начать. Обучение и курсы дорогие и непрактичные.",
                "В интернете и книгах много теории, но нет конкретных указаний для ВАШЕГО бизнеса.",
                "Хотите экспортировать, но сертификаты, стандарты, логистика — всё неизвестно.",
                "Прибылен ли ваш бизнес? Какое направление работает? Какой сотрудник эффективен? Никаких цифр, никаких данных."
            ],
            solutionDetails: [
                "Месяц 1: Экспертные тренинги в 5 ключевых областях. Месяцы 2-3: Индивидуальная диагностика бизнеса. Разработка кастомных решений для каждого бизнеса.",
                "Опытные менторы, которые строили бизнес в Узбекистане и за рубежом. Их успех — ваша дорожная карта.",
                "Не теория, только практические результаты. Каждый урок — конкретный инструмент, который вы применяете в бизнесе.",
                "Адаптация к международным стандартам, объяснение процесса сертификации, знакомство с экспортными рынками.",
                "Еженедельный KPI-мониторинг. Если нет результата — быстро корректируем стратегию. Коучинг, ориентированный на результат."
            ]
        },
        features: {
            title: "Не только для стартапов",
            subtitle: "Мы помогаем устоявшимся бизнесам внедрять инновации как единороги.",
            items: [
                { title: "Цифровая трансформация", desc: "Превратите устаревшие системы в современные масштабируемые цифровые решения." },
                { title: "Операционный ИИ", desc: "Оптимизируйте рабочие процессы и повысьте эффективность с помощью интеграции ИИ." },
                { title: "Расширение рынка", desc: "Откройте глобальные рынки и масштабируйте свой бизнес на международном уровне." }
            ]
        },
        mentors: {
            title: "Менторы мирового класса",
            items: [
                {
                    id: 1,
                    name: "Sarah Chen",
                    role: "Тех-руководитель",
                    expertise: "ИИ и рост",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 2,
                    name: "Marcus Rodriguez",
                    role: "Венчурный инвестор",
                    expertise: "HealthTech и FinTech",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 3,
                    name: "Elena Kim",
                    role: "Директор по продукту",
                    expertise: "SaaS и B2B стратегия",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 4,
                    name: "David Park",
                    role: "Основатель стартапа",
                    expertise: "Масштабирование и операции",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 5,
                    name: "Priya Patel",
                    role: "Маркетинг-лидер",
                    expertise: "Бренд и PR",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 6,
                    name: "James Wilson",
                    role: "Исследователь ИИ",
                    expertise: "DeepTech и инновации",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
                }
            ]
        },
        timeline: {
            title: "Путь к успеху",
            subtitle: "Процесс",
            steps: [
                { title: "Заявка", desc: "Отправьте свой питч и присоединяйтесь к списку ожидания." },
                { title: "Отбор", desc: "Топ 5% стартапов отбираются для участия в потоке." },
                { title: "Интенсивное обучение", desc: "6 недель глубокого погружения в бизнес-фундаментал." },
                { title: "Менторство и ИИ", desc: "Работа с менторами и использование инструментов ИИ." },
                { title: "День Питча", desc: "Презентуйте свой стартап глобальным инвесторам." },
                { title: "Масштабирование", desc: "Запуск и выход на новые рынки." }
            ]
        },
        global: {
            title: "Глобальное влияние, Местные корни",
            subtitle: "Всемирная сеть партнеров, менторов и инвесторов, призванная обеспечить ваш успех.",
            viewNetwork: "Смотреть сеть",
            stats: {
                projects: "Поддержанных проектов",
                partners: "Глобальных партнеров",
                investment: "Привлеченных инвестиций"
            }
        },
        form: {
            title: "Готовы к трансформации?",
            subtitle: "Присоединяйтесь к следующему потоку стартапов, меняющих мир.",
            name: "Полное имя",
            email: "Email адрес",
            phone: "Номер телефона",
            startupName: "Название стартапа",
            stage: "Стадия стартапа",
            country: "Страна",
            description: "Описание проекта",
            pitch: "Питч-дек",
            submit: "Отправить заявку",
            sending: "Отправка...",
            selectStage: "Выберите стадию",
            stages: {
                idea: "Идея",
                mvp: "Есть MVP",
                revenue: "Есть выручка",
                scale: "Масштабирование"
            },
            dropText: "Нажмите для загрузки или перетащите файл",
            dropHint: "PDF, PPT или DOC (Макс. 10МБ)",
            pitchNote: "* Можно прикрепить питч-дек (необязательно).",
            placeholders: {
                name: "Иван Иванов",
                email: "ivan@example.com",
                phone: "+998 90 123 45 67",
                startup: "My Unicorn"
            },
            success: {
                title: "Заявка отправлена!",
                body: "Мы получили вашу заявку. Команда рассмотрит её и свяжется с вами в ближайшее время.",
                sendAnother: "Отправить ещё одну заявку"
            },
            errors: {
                invalidFileType: "Неверный тип файла. Загрузите PDF, PPT или DOC.",
                fileTooLarge: "Файл слишком большой. Максимальный размер — 10МБ.",
                rateLimited: "Слишком много запросов. Попробуйте снова через минуту.",
                badRequest: "Проверьте данные и попробуйте снова.",
                submitFailed: "Не удалось отправить заявку. Попробуйте ещё раз или отправьте без файла."
            }
        },
        business: {
            title: "С кем мы работаем",
            subtitle: "Помогаем инноваторам на каждом этапе роста.",
            cards: [
                {
                    title: "Стартапы на ранней стадии",
                    desc: "От идеи на салфетке до MVP. Помогаем упаковать видение в понятную и инвестиционную модель."
                },
                {
                    title: "Технические основатели",
                    desc: "Превращаем сильный код в продукт. Помогаем связать разработку с продажами и рынком."
                },
                {
                    title: "Традиционный бизнес",
                    desc: "Цифровая трансформация для компаний офлайн, готовых масштабироваться онлайн."
                },
                {
                    title: "E-commerce и ритейл",
                    desc: "Оптимизация цепочек поставок и рост клиентов для следующего поколения лидеров рынка."
                },
                {
                    title: "Сервисные компании",
                    desc: "Агентства и консалтинг, которые хотят продуктировать услуги и уйти от линейного роста."
                },
                {
                    title: "Корпоративные инновации",
                    desc: "Программы интрапренёрства для крупных компаний, которым нужна скорость стартапа."
                }
            ]
        },
        showcase: {
            slides: [
                {
                    title: "От нуля к единице",
                    description: "Всё начинается с искры. Помогаем превратить идею в понятную бизнес-модель и план действий."
                },
                {
                    title: "Быстрое масштабирование",
                    description: "Когда найден product-market fit, мы ускоряем рост. Сеть и ресурсы помогают масштабироваться."
                },
                {
                    title: "Глобальная экспансия",
                    description: "Предела нет. Мы подключаем к рынкам, партнёрам и возможностям выхода по всему миру."
                }
            ]
        },
        widget: {
            title: "BizAI Ассистент",
            hello: "Привет! Я помогу уточнить бизнес-идею и отвечу на вопросы об акселераторе.",
            placeholder: "Напишите сообщение...",
            cannedResponse: "Звучит интересно! Подайте заявку, чтобы наши менторы могли детально рассмотреть вашу идею."
        },
        footer: {
            tagline: "Акселератор будущего. Превращаем амбициозные идеи в глобальные компании через финансирование, менторство и рост с помощью ИИ.",
            columns: {
                program: "Программа",
                company: "Компания",
                hq: "Офис в Узбекистане"
            },
            links: {
                journey: "Путь",
                apply: "Подать заявку",
                mentors: "Менторы",
                global: "Глобальная сеть",
                about: "О нас",
                stories: "Истории успеха",
                investors: "Для инвесторов",
                contact: "Контакты",
                privacy: "Политика конфиденциальности",
                terms: "Условия использования"
            },
            hq: {
                line1: "Ташкент, Мирободский район",
                line2: "ул. Ойбек 12, блок B"
            },
            copyright: "© 2025 BizCombinator. Все права защищены."
        }
    },
    uz: {
        common: {
            globeUnavailable: "3D vizualizatsiya mavjud emas",
        },
        nav: {
            program: "Dastur",
            benefits: "Afzalliklar",
            mentors: "Mentorlar",
            apply: "Ariza topshirish",
        },
        hero: {
            titleLine1: "O'ZBEKISTON BIZNESINI",
            titleLine2: "JAHON DARAJASIGA KO'TARUVCHI DASTUR",
            subtitle: "6 oyda biznesingizni tizimlashtiring: marketing, savdo, moliya, kadrlar va boshqaruv. O'zbek tadbirkorlari uchun amaliy dastur — eksport va o'sishga tayyor bo'ling.",
            apply: "Ariza topshirish",
            learnMore: "Dastur haqida ko'proq",
            badge: "2026-YIL UCHUN ARIZALAR QABUL QILINMOQDA",
        },
        gap: {
            problemTitle: "Biznesning Asosiy Muammolari",
            solutionTitle: "BizCombinator Yechimi",
            problems: [
                "Tizimlar yo'q — marketing, savdo, moliya tartibsiz",
                "O'sish strategiyasi aniq emas — qayerga borish kerak?",
                "Sifatli murabbiylik va amaliy maslahat topib bo'lmaydi",
                "Eksport qilish uchun metodologiya yo'q",
                "Biznesni o'lchash uchun KPI yo'q"
            ],
            solutions: [
                "5 ta asosiy tizim: Marketing, Savdo, Moliya, Kadrlar, Boshqaruv",
                "Shaxsiy diagnostika va maxsus yechimlar",
                "Amaliyotga asoslangan metodologiya",
                "Eksportga yo'naltirilgan tayyorlov",
                "Haftalik KPI monitoring va murabbiylik"
            ],
            problemDetails: [
                "Ko'pchilik bizneslar kundalik ishlar bilan band — strategiya, jarayon va tizimlar yo'q. Hammasi eganing boshida.",
                "O'sishni xohlaysiz, lekin qayerdan boshlashni bilmaysiz. Har gal o'rgatish yoki kurslar qimmat va amaliy emas.",
                "Internet va kitoblarda nazariya ko'p, lekin sizning biznesingiz uchun konkret yo'l-yo'riq yo'q.",
                "Eksport qilish istaysiz, lekin sertifikatlar, standartlar, logistika — hammasi noma'lum.",
                "Biznesingiz daromad keltiryaptimi? Qaysi yo'nalish ishlayapti? Qaysi xodim samarali? Hech qanday raqamlar yo'q."
            ],
            solutionDetails: [
                "1-oyda 5 ta asosiy sohada ekspert treninglar. 2-3-oylarda shaxsiy biznes diagnostikasi. Har bir biznes uchun maxsus yechimlar ishlab chiqish.",
                "O'zbekistonda va xorijda biznes qurgan tajribali mentorlar. Ularning muvaffaqiyatlari — sizning yo'lxaritangiz.",
                "Nazariya emas, faqat amaliy natijalar. Har bir dars — biznesingizda qo'llanadigan konkret vosita.",
                "Xalqaro standartlarga moslashish, sertifikatsiya jarayonini tushuntirish, eksport bozorlari bilan tanishish.",
                "Haftalik KPI monitoring. Agar natija yo'q bo'lsa — strategiyani tezda o'zgartiramiz. Natijaga yo'naltirilgan murabbiylik."
            ]
        },
        features: {
            title: "Faqat startaplar uchun emas",
            subtitle: "Biz mavjud bizneslarga yakkashoxlar kabi innovatsiya qilishga yordam beramiz.",
            items: [
                { title: "Raqamli transformatsiya", desc: "Eski tizimlarni zamonaviy, masshtablashtiriladigan raqamli yechimlarga aylantirish." },
                { title: "Operatsion AI", desc: "AI integratsiyasi orqali ish jarayonlarini optimallashtirish va samaradorlikni oshirish." },
                { title: "Bozorni kengaytirish", desc: "Global bozorlarni ochish va biznesingizni xalqaro miqyosda kengaytirish." }
            ]
        },
        mentors: {
            title: "Tajribali mentorlar",
            items: [
                {
                    id: 1,
                    name: "Sarah Chen",
                    role: "Marketing tizimi mutaxassisi",
                    expertise: "Brendlash va raqamli marketing",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 2,
                    name: "Marcus Rodriguez",
                    role: "Moliya va boshqaruv",
                    expertise: "Cash flow va moliyaviy rejalashtirish",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 3,
                    name: "Elena Kim",
                    role: "Savdo tizimi bo'yicha ekspert",
                    expertise: "B2B savdo va mijozlar bilan ishlash",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 4,
                    name: "David Park",
                    role: "Operatsion tizimlar",
                    expertise: "Jarayonlar va masshtablash",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 5,
                    name: "Priya Patel",
                    role: "HR va jamoani boshqarish",
                    expertise: "Kadrlar tizimi va korporativ madaniyat",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 6,
                    name: "James Wilson",
                    role: "Eksport va xalqaro bozorlar",
                    expertise: "Eksport tayyorlash va sertifikatsiya",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
                }
            ]
        },
        timeline: {
            title: "6 Oylik Dastur Tuzilishi",
            subtitle: "Qadamma-qadam rivojlanish jarayoni",
            steps: [
                { title: "Ariza va qabul", desc: "Ariza topshiring, intervyu o'tkazing. Eng mos 30 biznes tanlanadi." },
                { title: "1-oy: Ekspert treninglar", desc: "Marketing, savdo, moliya, kadrlar va boshqaruv bo'yicha intensiv ta'lim. Haftada 4 kun." },
                { title: "2-3-oylar: Diagnostika", desc: "Biznesingizni chuqur tahlil qilish. KPI'larni belgilash. Maxsus yechimlar ishlab chiqish." },
                { title: "4-5-oylar: Joriy etish", desc: "Tizimlarni amalda qo'llash. Haftalik murabbiylik. Strategiyani sozlash." },
                { title: "6-oy: Natijalar va davom etish", desc: "Yakuniy KPI tahlili. Eksport rejasi. Keyingi 12 oy uchun strategiya." },
                { title: "Dasturdan keyingi qo'llab-quvvatlash", desc: "Alumni tarmog'i. Konsultatsiya imkoniyati. Davomiy rivojlanish resurslari." }
            ]
        },
        global: {
            title: "Global ta'sir, Mahalliy ildizlar",
            subtitle: "Sizning muvaffaqiyatingizga bag'ishlangan hamkorlar, mentorlar va investorlarning butun dunyo bo'ylab tarmog'i.",
            viewNetwork: "Tarmoqni ko'rish",
            stats: {
                projects: "Qo'llab-quvvatlangan loyihalar",
                partners: "Global hamkorlar",
                investment: "Jalb qilingan investitsiyalar"
            }
        },
        form: {
            title: "O'zgarishga tayyormisiz?",
            subtitle: "Dunyoniy o'zgartiruvchi startaplar qatoriga qo'shiling.",
            name: "To'liq ism",
            email: "Email manzili",
            phone: "Telefon raqami",
            startupName: "Startap nomi",
            stage: "Startap bosqichi",
            country: "Mamlakat",
            description: "Loyiha tavsifi",
            pitch: "Pitch taqdimoti",
            submit: "Ariza yuborish",
            sending: "Yuborilmoqda...",
            selectStage: "Bosqichni tanlang",
            stages: {
                idea: "G'oya",
                mvp: "MVP mavjud",
                revenue: "Daromad mavjud",
                scale: "Masshtablash"
            },
            dropText: "Yuklash uchun bosing yoki faylni tashlang",
            dropHint: "PDF, PPT yoki DOC (Maks. 10MB)",
            pitchNote: "* Pitch faylni biriktirish mumkin (ixtiyoriy).",
            placeholders: {
                name: "Ali Valiyev",
                email: "ali@example.com",
                phone: "+998 90 123 45 67",
                startup: "My Unicorn"
            },
            success: {
                title: "Ariza yuborildi!",
                body: "Arizangiz qabul qilindi. Jamoamiz ko'rib chiqib, tez orada siz bilan bog'lanadi.",
                sendAnother: "Yana ariza yuborish"
            },
            errors: {
                invalidFileType: "Fayl turi noto'g'ri. PDF, PPT yoki DOC yuklang.",
                fileTooLarge: "Fayl juda katta. Maksimal hajm — 10MB.",
                rateLimited: "Juda ko'p so'rov yuborildi. 1 daqiqadan so'ng qayta urinib ko'ring.",
                badRequest: "Ma'lumotlarni tekshirib, qayta urinib ko'ring.",
                submitFailed: "Arizani yuborib bo'lmadi. Qayta urinib ko'ring yoki faylsiz yuboring."
            }
        },
        business: {
            title: "Kimlar uchun?",
            subtitle: "O'zbekiston biznes egalari uchun maxsus tuzilgan dastur",
            cards: [
                {
                    title: "Xizmat ko'rsatish bizneslari",
                    desc: "Konsalting, agentliklar, klinikalar, o'quv markazlari, huquqiy xizmatlar"
                },
                {
                    title: "Ishlab chiqarish",
                    desc: "Kichik va o'rta korxonalar, mahalliy ishlab chiqaruvchilar, sanoat bizneslari"
                },
                {
                    title: "Savdo kompaniyalar",
                    desc: "Optom, chakana savdo, distribyutorlar, import-eksport bizneslari"
                },
                {
                    title: "Ta'lim muassasalari",
                    desc: "O'quv markazlari, maktablar, kurslar, professional tayyorlov dasturlari"
                },
                {
                    title: "Cafe va restoranlar",
                    desc: "Mehmondo'stlik bizneslari, oshxona, fast-food, katering xizmatlari"
                },
                {
                    title: "Oilaviy bizneslar",
                    desc: "Avloddan-avlodga o'tayotgan bizneslar, yangi boshqaruvga tayyorlanish"
                }
            ]
        },
        showcase: {
            slides: [
                {
                    title: "Noldan birgacha",
                    description: "Hammasi uchqundan boshlanadi. G'oyani aniq biznes-modelga va reja-ga aylantiramiz."
                },
                {
                    title: "Tez masshtablash",
                    description: "Product-market fit topilgach, o'sishni tezlatamiz. Tarmoq va resurslar yordam beradi."
                },
                {
                    title: "Global kengayish",
                    description: "Chegara yo'q. Global bozorlar, hamkorlar va exit imkoniyatlariga ulaymiz."
                }
            ]
        },
        widget: {
            title: "BizAI Yordamchi",
            hello: "Salom! Biznes g'oyangizni aniqlashtirishga va akselerator bo'yicha savollarga yordam beraman.",
            placeholder: "Xabar yozing...",
            cannedResponse: "Qiziqarli! Mentorlarimiz batafsil ko'rib chiqishi uchun dasturga ariza topshiring."
        },
        footer: {
            tagline: "Kelajak akseleratori. Ambitsiyali g'oyalarni moliyalashtirish, mentorlik va AI yordamida global kompaniyaga aylantiramiz.",
            columns: {
                program: "Dastur",
                company: "Kompaniya",
                hq: "O'zbekiston ofisi"
            },
            links: {
                journey: "Jarayon",
                apply: "Ariza topshirish",
                mentors: "Mentorlar",
                global: "Global tarmoq",
                about: "Biz haqimizda",
                stories: "Muvaffaqiyat hikoyalari",
                investors: "Investorlar uchun",
                contact: "Aloqa",
                privacy: "Maxfiylik siyosati",
                terms: "Foydalanish shartlari"
            },
            hq: {
                line1: "Toshkent, Mirobod tumani",
                line2: "Oybek ko'chasi 12, B blok"
            },
            copyright: "© 2025 BizCombinator. Barcha huquqlar himoyalangan."
        }
    },
};
