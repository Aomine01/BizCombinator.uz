
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
            titleLine1: "BUILD YOUR BRAND.",
            titleLine2: "SCALE YOUR BUSINESS.",
            subtitle: "6-month accelerator for small and growing businesses in Uzbekistan. We help you create a strong brand identity and build scalable systems for sustainable growth.",
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
            title: "Experienced Mentors",
            items: [
                {
                    id: 1,
                    name: "Sarah Chen",
                    role: "Marketing Systems Specialist",
                    expertise: "Branding & Digital Marketing",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 2,
                    name: "Marcus Rodriguez",
                    role: "Finance & Management",
                    expertise: "Cash Flow & Financial Planning",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 3,
                    name: "Elena Kim",
                    role: "Sales Systems Expert",
                    expertise: "B2B Sales & Customer Relations",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 4,
                    name: "David Park",
                    role: "Operational Systems",
                    expertise: "Processes & Scaling",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 5,
                    name: "Priya Patel",
                    role: "HR & Team Management",
                    expertise: "Talent Systems & Corporate Culture",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 6,
                    name: "James Wilson",
                    role: "Export & International Markets",
                    expertise: "Export Preparation & Certification",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
                }
            ]
        },
        timeline: {
            title: "6-Month Program Structure",
            subtitle: "Step-by-step development process",
            steps: [
                { title: "Application & Acceptance", desc: "Submit application, interview. Top 30 businesses selected." },
                { title: "Month 1: Expert Training", desc: "Intensive training in Marketing, Sales, Finance, HR, Management. 4 days per week." },
                { title: "Months 2-3: Business Analysis", desc: "Deep business analysis. Set performance metrics. Develop custom solutions." },
                { title: "Months 4-5: Implementation", desc: "Apply systems in practice. Weekly coaching. Adjust strategy." },
                { title: "Month 6: Results & Next Steps", desc: "Final performance review. Export plan. Strategy for next 12 months." },
                { title: "Post-Program Support", desc: "Alumni network. Consultation opportunities. Ongoing development resources." }
            ]
        },
        global: {
            title: "Proven Results with Business Owners",
            subtitle: "Real business owners achieving measurable growth through our program in Uzbekistan.",
            viewNetwork: "View Success Stories",
            stats: {
                businesses: "Businesses Participated",
                mentors: "Expert Mentors",
                growth: "Average Revenue Growth"
            }
        },
        quickContact: {
            title: "Get a Free Consultation",
            subtitle: "Leave your contact info and we'll reach out within 24 hours",
            namePlaceholder: "Your Name",
            phonePlaceholder: "+998 90 123 45 67",
            emailPlaceholder: "Email (optional)",
            submit: "Send",
            helperText: "By clicking Send, you agree to our privacy policy.",
            success: {
                title: "Request Sent!",
                body: "We'll contact you within 24 hours to schedule a consultation."
            }
        },
        form: {
            title: "Ready to Systematize Your Business?",
            subtitle: "Join the next cohort of SME owners building world-class systems.",
            name: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            startupName: "Business Name",
            stage: "Business Stage",
            country: "Country",
            description: "Business Description",
            pitch: "Business Materials",
            submit: "Submit Application",
            sending: "Sending...",
            selectStage: "Select Your Business Stage",
            stages: {
                idea: "Planning to Start",
                mvp: "Just Started (0-1 year)",
                revenue: "Operating (1-3 years)",
                scale: "Established (3+ years)"
            },
            dropText: "Click to upload or drag and drop",
            dropHint: "PDF, PPT, or DOC (Max 10MB)",
            pitchNote: "* You can attach business presentation or documents (optional).",
            placeholders: {
                name: "John Doe",
                email: "john@example.com",
                phone: "+998 90 123 45 67",
                startup: "My Business LLC"
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
            title: "Who Is This For?",
            subtitle: "Program designed specifically for Uzbekistan business owners",
            cards: [
                {
                    title: "Service Businesses",
                    desc: "Consulting, agencies, clinics, training centers, legal services"
                },
                {
                    title: "Manufacturing",
                    desc: "Small and medium enterprises, local manufacturers, industrial businesses"
                },
                {
                    title: "Trade Companies",
                    desc: "Wholesale, retail, distributors, import-export businesses"
                },
                {
                    title: "Education Centers",
                    desc: "Training centers, schools, courses, professional development programs"
                },
                {
                    title: "Cafes & Restaurants",
                    desc: "Hospitality businesses, kitchens, fast-food, catering services"
                },
                {
                    title: "Family Businesses",
                    desc: "Multi-generational businesses, preparing for new management"
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
            titleLine1: "СОЗДАЙТЕ БРЕНД.",
            titleLine2: "МАСШТАБИРУЙТЕ БИЗНЕС.",
            subtitle: "6-месячный акселератор для малого и растущего бизнеса в Узбекистане. Мы помогаем создать сильный бренд и построить масштабируемые системы для устойчивого роста.",
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
            title: "Опытные менторы",
            items: [
                {
                    id: 1,
                    name: "Sarah Chen",
                    role: "Специалист по маркетинговым системам",
                    expertise: "Брендинг и цифровой маркетинг",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 2,
                    name: "Marcus Rodriguez",
                    role: "Финансы и управление",
                    expertise: "Cash flow и финансовое планирование",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 3,
                    name: "Elena Kim",
                    role: "Эксперт по системам продаж",
                    expertise: "B2B продажи и работа с клиентами",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 4,
                    name: "David Park",
                    role: "Операционные системы",
                    expertise: "Процессы и масштабирование",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 5,
                    name: "Priya Patel",
                    role: "HR и управление командой",
                    expertise: "Системы управления талантами и корпоративная культура",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
                },
                {
                    id: 6,
                    name: "James Wilson",
                    role: "Экспорт и международные рынки",
                    expertise: "Подготовка к экспорту и сертификация",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
                }
            ]
        },
        timeline: {
            title: "Структура программы на 6 месяцев",
            subtitle: "Пошаговый процесс развития",
            steps: [
                { title: "Заявка и прием", desc: "Подайте заявку, пройдите интервью. Отбираются 30 лучших бизнесов." },
                { title: "Месяц 1: Экспертное обучение", desc: "Интенсивное обучение по маркетингу, продажам, финансам, HR, управлению. 4 дня в неделю." },
                { title: "Месяцы 2-3: Анализ бизнеса", desc: "Глубокий анализ бизнеса. Установка показателей эффективности. Разработка индивидуальных решений." },
                { title: "Месяцы 4-5: Внедрение", desc: "Применение систем на практике. Еженедельный коучинг. Корректировка стратегии." },
                { title: "Месяц 6: Результаты и следующие шаги", desc: "Финальное ревью результатов. План экспорта. Стратегия на следующие 12 месяцев." },
                { title: "Поддержка после программы", desc: "Сеть выпускников. Консультации. Ресурсы для постоянного развития." }
            ]
        },
        global: {
            title: "Доказанные результаты с владельцами бизнеса",
            subtitle: "Реальные владельцы бизнеса достигают измеримого роста через нашу программу в Узбекистане.",
            viewNetwork: "Истории успеха",
            stats: {
                businesses: "Бизнесов участвовало",
                mentors: "Экспертных менторов",
                growth: "Средний рост выручки"
            }
        },
        quickContact: {
            title: "Получите бесплатную консультацию",
            subtitle: "Оставьте свои контакты, и мы свяжемся с вами в течение 24 часов",
            namePlaceholder: "Ваше имя",
            phonePlaceholder: "+998 90 123 45 67",
            emailPlaceholder: "Email (необязательно)",
            submit: "Отправить",
            helperText: "Нажимая Отправить, вы соглашаетесь с политикой конфиденциальности.",
            success: {
                title: "Запрос отправлен!",
                body: "Мы свяжемся с вами в течение 24 часов для назначения консультации."
            }
        },
        form: {
            title: "Готовы систематизировать свой бизнес?",
            subtitle: "Присоединяйтесь к следующему потоку владельцев СМБ, строящих системы мирового уровня.",
            name: "Полное имя",
            email: "Email адрес",
            phone: "Номер телефона",
            startupName: "Название бизнеса",
            stage: "Стадия бизнеса",
            country: "Страна",
            description: "Описание бизнеса",
            pitch: "Документы о бизнесе",
            submit: "Отправить заявку",
            sending: "Отправка...",
            selectStage: "Выберите стадию бизнеса",
            stages: {
                idea: "Планирую начать",
                mvp: "Только начал (0-1 год)",
                revenue: "Работаю (1-3 года)",
                scale: "Устоявшийся (3+ года)"
            },
            dropText: "Нажмите для загрузки или перетащите файл",
            dropHint: "PDF, PPT или DOC (Макс. 10МБ)",
            pitchNote: "* Можно прикрепить презентацию или документы о бизнесе (необязательно).",
            placeholders: {
                name: "Иван Иванов",
                email: "ivan@example.com",
                phone: "+998 90 123 45 67",
                startup: "Мой Бизнес OOO"
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
            title: "Для кого эта программа?",
            subtitle: "Программа разработана специально для владельцев бизнеса в Узбекистане",
            cards: [
                {
                    title: "Сервисный бизнес",
                    desc: "Консалтинг, агентства, клиники, учебные центры, юридические услуги"
                },
                {
                    title: "Производство",
                    desc: "Малые и средние предприятия, местные производители, промышленные предприятия"
                },
                {
                    title: "Торговые компании",
                    desc: "Оптовая, розничная торговля, дистрибуторы, импортно-экспортный бизнес"
                },
                {
                    title: "Образовательные центры",
                    desc: "Учебные центры, школы, курсы, программы профессионального развития"
                },
                {
                    title: "Кафе и рестораны",
                    desc: "Гостиничный бизнес, кухни, фаст-фуд, кейтеринг"
                },
                {
                    title: "Семейный бизнес",
                    desc: "Многопоколенный бизнес, подготовка к смене управления"
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
            titleLine1: "BRENDINGIZNI YARATING.",
            titleLine2: "BIZNESINGIZNI RIVOJLANTIRING.",
            subtitle: "O'zbekistondagi kichik va o'sayotgan bizneslar uchun 6 oylik akselerator. Biz kuchli brend identifikatsiyasi va barqaror o'sish uchun masshtablanadigan tizimlar qurishda yordam beramiz.",
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
                { title: "2-3-oylar: Biznes tahlili", desc: "Biznesingizni chuqur tahlil qilish. Samaradorlik ko'rsatkichlarini belgilash. Maxsus yechimlar ishlab chiqish." },
                { title: "4-5-oylar: Joriy etish", desc: "Tizimlarni amalda qo'llash. Haftalik murabbiylik. Strategiyani sozlash." },
                { title: "6-oy: Natijalar va keyingi qadamlar", desc: "Yakuniy natijalarni ko'rib chiqish. Eksport rejasi. Keyingi 12 oy uchun strategiya." },
                { title: "Dasturdan keyingi qo'llab-quvvatlash", desc: "Alumni tarmog'i. Konsultatsiya imkoniyati. Davomiy rivojlanish resurslari." }
            ]
        },
        global: {
            title: "Biznes egalari bilan isbotlangan natijalar",
            subtitle: "Haqiqiy biznes egalari O'zbekistondagi dasturimiz orqali o'lchanadigan o'sishga erishmoqda.",
            viewNetwork: "Muvaffaqiyat hikoyalari",
            stats: {
                businesses: "Bizneslar ishtirok etdi",
                mentors: "Ekspert mentorlar",
                growth: "O'rtacha daromad o'sishi"
            }
        },
        quickContact: {
            title: "Bepul konsultatsiya oling",
            subtitle: "Kontakt ma'lumotlaringizni qoldiring, 24 soat ichida aloqaga chiqamiz",
            namePlaceholder: "Ismingiz",
            phonePlaceholder: "+998 90 123 45 67",
            emailPlaceholder: "Email (ixtiyoriy)",
            submit: "Yuborish",
            helperText: "Yuborish tugmasini bosish orqali maxfiylik siyosatiga rozilik bildirasiz.",
            success: {
                title: "So'rov yuborildi!",
                body: "Konsultatsiya belgilash uchun 24 soat ichida siz bilan bog'lanamiz."
            }
        },
        form: {
            title: "Biznesingizni tizimlashtirmoqchimisiz?",
            subtitle: "Jahon darajasida tizimlar quruvchi KMB egalari qatoriga qo'shiling.",
            name: "To'liq ism",
            email: "Email manzili",
            phone: "Telefon raqami",
            startupName: "Biznes nomi",
            stage: "Biznes bosqichi",
            country: "Mamlakat",
            description: "Biznes tavsifi",
            pitch: "Biznes hujjatlari",
            submit: "Ariza yuborish",
            sending: "Yuborilmoqda...",
            selectStage: "Biznes bosqichini tanlang",
            stages: {
                idea: "Boshlashni rejalashtirmoqdaman",
                mvp: "Endigina boshladim (0-1 yil)",
                revenue: "Ishlab turibman (1-3 yil)",
                scale: "Barqaror biznes (3+ yil)"
            },
            dropText: "Yuklash uchun bosing yoki faylni tashlang",
            dropHint: "PDF, PPT yoki DOC (Maks. 10MB)",
            pitchNote: "* Biznes taqdimoti yoki hujjatlar ilova qilish mumkin (ixtiyoriy).",
            placeholders: {
                name: "Ali Valiyev",
                email: "ali@example.com",
                phone: "+998 90 123 45 67",
                startup: "Mening Biznesim MChJ"
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
