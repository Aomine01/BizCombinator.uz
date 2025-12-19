
export type Language = "en" | "ru" | "uz";

export const translations = {
    en: {
        nav: {
            program: "Program",
            benefits: "Benefits",
            mentors: "Mentors",
            apply: "Apply Now",
        },
        hero: {
            title: "THE ACCELERATOR OF THE FUTURE",
            subtitle: "An international innovation program combining AI, mentorship, and global opportunities to transform ideas into empires.",
            apply: "Apply Now",
            learnMore: "Learn More",
            badge: "APPLICATIONS NOW OPEN FOR BATCH 2026",
        },
        gap: {
            problemTitle: "The Gap Between Idea & Execution",
            solutionTitle: "BizCombinator Solution",
            problems: [
                "Lack of industry knowledge",
                "No access to top-tier investors",
                "Inefficient scaling strategies"
            ],
            solutions: [
                "World-class mentorship",
                "AI-driven market analysis",
                "Investor-readiness program"
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
            selectStage: "Select Stage",
            stages: {
                idea: "Idea Phase",
                mvp: "MVP Built",
                revenue: "Generating Revenue",
                scale: "Scaling"
            },
            dropText: "Click to upload or drag and drop",
            dropHint: "PDF or PPT (Max 10MB)"
        }
    },
    ru: {
        nav: {
            program: "Программа",
            benefits: "Преимущества",
            mentors: "Менторы",
            apply: "Подать заявку",
        },
        hero: {
            title: "АКСЕЛЕРАТОР БУДУЩЕГО",
            subtitle: "Международная инновационная программа, объединяющая ИИ, менторство и глобальные возможности для превращения идей в империи.",
            apply: "Подать заявку",
            learnMore: "Узнать больше",
            badge: "ОТКРЫТ ПРИЕМ ЗАЯВОК НА 2026 ГОД",
        },
        gap: {
            problemTitle: "Пропасть между идеей и реализацией",
            solutionTitle: "Решение BizCombinator",
            problems: [
                "Недостаток знаний об индустрии",
                "Нет доступа к топовым инвесторам",
                "Неэффективные стратегии масштабирования"
            ],
            solutions: [
                "Менторство мирового класса",
                "Анализ рынка с помощью ИИ",
                "Программа подготовки к инвестициям"
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
            selectStage: "Выберите стадию",
            stages: {
                idea: "Идея",
                mvp: "Есть MVP",
                revenue: "Есть выручка",
                scale: "Масштабирование"
            },
            dropText: "Нажмите для загрузки или перетащите файл",
            dropHint: "PDF или PPT (Макс. 10МБ)"
        }
    },
    uz: {
        nav: {
            program: "Dastur",
            benefits: "Afzalliklar",
            mentors: "Mentorlar",
            apply: "Ariza topshirish",
        },
        hero: {
            title: "KELAJAK AKSELERATORI",
            subtitle: "G'oyalarni imperiyalarga aylantirish uchun sun'iy intellekt, mentorlik va global imkoniyatlarni birlashtirgan xalqaro innovatsion dastur.",
            apply: "Ariza topshirish",
            learnMore: "Batafsil",
            badge: "2026 YIL UCHUN QABUL OCHIK",
        },
        gap: {
            problemTitle: "G'oya va Ijro o'rtasidagi bo'shliq",
            solutionTitle: "BizCombinator yechimi",
            problems: [
                "Sanoat bilimlarining yetishmasligi",
                "Top investorlarga chiqish imkoniyati yo'qligi",
                "Samarasiz masshtablash strategiyalari"
            ],
            solutions: [
                "Jahon darajasidagi mentorlik",
                "AI yordamida bozor tahlili",
                "Investorlarga tayyorlash dasturi"
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
            title: "Jahon darajasidagi mentorlar",
        },
        timeline: {
            title: "Muvaffaqiyat yo'li",
            subtitle: "Jarayon",
            steps: [
                { title: "Ariza", desc: "Pinchingizni yuboring va kutish ro'yxatiga qo'shiling." },
                { title: "Tanlov", desc: "Startaplarning eng yaxshi 5 foizi tanlab olinadi." },
                { title: "Intensiv ta'lim", desc: "Biznes asoslarini chuqur o'rganish uchun 6 hafta." },
                { title: "Mentorlik va AI", desc: "Mentorlar bilan ishlash va AI vositalaridan foydalanish." },
                { title: "Pitch kuni", desc: "Startapingizni global investorlarga taqdim eting." },
                { title: "Masshtablash", desc: "Ishga tushirish va yangi bozorlarga chiqish." }
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
            selectStage: "Bosqichni tanlang",
            stages: {
                idea: "G'oya",
                mvp: "MVP mavjud",
                revenue: "Daromad mavjud",
                scale: "Masshtablash"
            },
            dropText: "Yuklash uchun bosing yoki faylni tashlang",
            dropHint: "PDF yoki PPT (Maks. 10MB)"
        }
    },
};
