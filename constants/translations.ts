
export type Language = "en" | "ru" | "uz";

export const translations = {
    en: {
        common: {
            globeUnavailable: "3D visualization unavailable",
        },
        nav: {
            home: "Home",
            about: "About",
            contact: "Contact",
            program: "Program",
            benefits: "Benefits",
            mentors: "Mentors",
            apply: "Apply Now",
        },
        hero: {
            titleLine1: "Turn Your Business Into a System.",
            titleLine2: "Scale With Confidence.",
            subtitle: "The BizCombinator Accelerator: A 12-day intensive offline program for young entrepreneurs ready to move from \"self-employed\" to \"professional CEO.\"",
            apply: "Apply Now",
            learnMore: "Learn More",
            urgency: "⏰ Next Cohort Starts Soon. Only 70 Spots Available."
        },
        gap: {
            title: "What Your Business Will Have After the Program",
            subtitle: "Systems built over 6 months and measurable results",
            benefits: [
                { id: 1, title: "Marketing System", desc: "New clients come consistently — not guesswork, a system" },
                { id: 2, title: "Sales System", desc: "Every salesperson knows exactly what to do — results grow steadily" },
                { id: 3, title: "Financial Control", desc: "Every week, clear numbers — where money is, where problems are" },
                { id: 4, title: "HR Management", desc: "Your team works independently, you focus on strategy" },
                { id: 5, title: "Management System", desc: "Business runs even when you're not there" }
            ],
            bonuses: [
                { id: 6, title: "Export Readiness", desc: "Roadmap for entering international markets" },
                { id: 7, title: "Weekly Mentorship", desc: "Guidance for strategic decisions" }
            ]
        },
        features: {
            title: "We Systematize Your Business",
            subtitle: "Clear systems for established businesses in Uzbekistan.",
            items: [
                { title: "Digitalization", desc: "Replace old processes with new software. CRM for clients, warehouse software, financial control. Built for your business." },
                { title: "Clear Processes", desc: "Organize sales, marketing, and operations. Everyone knows what to do. Results are visible. You focus on what matters." },
                { title: "Export Readiness", desc: "Prepare documents and pricing for foreign markets. Connect with international partners." }
            ]
        },
        mentors: {
            title: "Experienced Mentors",
            subtitle: "Professionals who built real businesses in Uzbekistan and abroad — their practical experience is your roadmap",
            items: [
                {
                    id: 1,
                    name: "Farkhod Kamilov",
                    role: "Marketing System",
                    credibility: "CEO inMarketing & Futurum Academy",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/farhodkamilov_uz",
                    instagram: "",
                    website: ""
                },
                {
                    id: 2,
                    name: "Nodirbek Kuzdekov",
                    role: "Sales System",
                    credibility: "Business trainer in sales, strategy & management",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/KuzdekovChannel",
                    instagram: "",
                    website: ""
                },
                {
                    id: 3,
                    name: "Otabek Umarov",
                    role: "Financial Control",
                    credibility: "CFO, finance & business automation expert",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/CFOOtabek",
                    instagram: "",
                    website: ""
                },
                {
                    id: 4,
                    name: "Doniyorjon Norsidiq",
                    role: "Operations Management",
                    credibility: "20+ years HR, worked at Uzbekneftegaz, Central Bank",
                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/Doniyorjon_Norsidiq",
                    instagram: "",
                    website: ""
                },
                {
                    id: 5,
                    name: "Jonibek Ortiq",
                    role: "HR & Team Systems",
                    credibility: "HR expert for Russia & Central Asia",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/HRJonibek",
                    instagram: "",
                    website: ""
                },
                {
                    id: 6,
                    name: "Gulnara Kholmatova",
                    role: "Management System",
                    credibility: "25+ years leadership, International coaching credentials",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "",
                    instagram: "",
                    website: "https://gulnarakholmatova.com"
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
                    title: "Diagnostika",
                    description: "We analyze your current business systems, identify gaps, and create a roadmap for growth."
                },
                {
                    title: "Implementation",
                    description: "Build working systems together: marketing, sales, finance, operations - step by step."
                },
                {
                    title: "Scaling",
                    description: "Once systems are in place, we help you scale efficiently with proven frameworks."
                }
            ]
        },
        widget: {
            title: "BizAI Assistant",
            hello: "Hello! I can help you refine your business idea or answer questions about the accelerator.",
            placeholder: "Type a message...",
            cannedResponse: "That sounds like an interesting idea! Please apply to the program so our mentors can review it in detail."
        },
        aboutProgram: {
            title: "What is BizCombinator?",
            subtitle: "We don't teach you how to start. We teach you how to scale.",
            details: [
                { id: 1, title: "Format", desc: "100% Offline in Tashkent" },
                { id: 2, title: "Duration", desc: "12 Intensive Days (Spread over 1 Month)" },
                { id: 3, title: "Methodology", desc: "20% Theory, 80% Practice" },
                { id: 4, title: "Target", desc: "Entrepreneurs aged 18–30 with active businesses (6+ months)" },
                { id: 5, title: "Mission", desc: "Shape a new generation of competitive, knowledgeable, and leading entrepreneurs in Uzbekistan" }
            ],
            footer: "We give you the tools to transform your business from a one-person show into a professional, scalable company — ready to dominate your market and expand globally."
        },
        painPoints: {
            title: "Does This Sound Like You?",
            subtitle: "If any of these feel familiar, you're in the right place",
            points: [
                { id: 1, title: "Chief Everything Officer", desc: "You're the CEO, accountant, marketer, and janitor — all at once. You can't take a day off without the business grinding to a halt." },
                { id: 2, title: "Unpredictable Sales", desc: "Some months are great. Some are terrible. You're always guessing, never confident about next month's revenue." },
                { id: 3, title: "Messy Finances", desc: "Money comes in, money goes out — but you're never entirely sure where it all went. Is the business profitable? You think so... maybe?" },
                { id: 4, title: "Stuck at the Same Level", desc: "You've been running this business for 2-3 years, but it feels like you're just spinning your wheels. Same revenue, same stress, no real growth." }
            ]
        },
        newTimeline: {
            title: "Your Journey to BizCombinator",
            badge: "We select only the most motivated entrepreneurs",
            subtitle: "We select only the most motivated entrepreneurs",
            steps: [
                { id: 1, title: "Online Application", desc: "Fill out the application form. We require that your business has been operating for at least 6 months." },
                { id: 2, title: "Interview", desc: "Our selection committee evaluates your motivation, business potential, and readiness for transformation." },
                { id: 3, title: "Selection", desc: "We accept only the top 70 entrepreneurs who demonstrate the strongest commitment and growth potential." },
                { id: 4, title: "The Intensive", desc: "12 days of immersive, offline training in Tashkent. Build your systems, refine your strategy, transform your business." },
                { id: 5, title: "Graduation", desc: "Present your 1-year roadmap, receive your certificate, and join the BizCombinator alumni network for ongoing support." }
            ]
        },
        results: {
            title: "Real Results",
            subtitle: "By the end of 30 days, you will have:",
            deliverables: [
                { id: 1, title: "A concrete 1-Year Business Plan", desc: "Clear roadmap with actionable milestones" },
                { id: 2, title: "A functioning Marketing & Sales System", desc: "Predictable lead generation and conversion process" },
                { id: 3, title: "Full control over Cash Flow & Profits", desc: "Real-time financial visibility and management" },
                { id: 4, title: "Systematized Management tools", desc: "Business runs on systems, not just your energy" }
            ],
            targetMetric: "+20%",
            targetLabel: "Target Revenue Increase"
        },
        curriculum: {
            title: "What You'll Learn",
            subtitle: "5 modules designed to transform your business into a system",
            modules: [
                { id: 1, number: "01", title: "Strategy & Financial Transformation", duration: "4 Days", learn: "Business Model Canvas, Cash Flow & P&L management, Break-even analysis, and 1-Year Growth Planning", result: "Clear financial roadmap and full control over your money" },
                { id: 2, number: "02", title: "Marketing System", duration: "2 Days", learn: "Positioning, Target Audience Research, Digital Marketing Channels, and Customer Acquisition Strategy", result: "A repeatable system for attracting new customers" },
                { id: 3, number: "03", title: "Sales System & Pricing", duration: "2 Days", learn: "Sales Funnels, CRM Systems, Deal Structuring, and Pricing Psychology", result: "Predictable sales results and optimized profit margins" },
                { id: 4, number: "04", title: "Team Building & HR", duration: "2 Days", learn: "Hiring, Onboarding, KPIs, Motivation Systems, and Delegation Frameworks", result: "A team that works independently without constant supervision" },
                { id: 5, number: "05", title: "Management & Scaling", duration: "2 Days", learn: "Process Documentation, Operational Efficiency, Scaling Strategies, and Leadership", result: "Business systems that run smoothly — even when you're not there" }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Everything you need to know about the program",
            items: [
                { id: 1, question: "I have a startup idea. Can I join?", answer: "No. BizCombinator is strictly for existing businesses that have been operating for at least 6 months. We work with real companies facing real challenges — not hypothetical ideas." },
                { id: 2, question: "Is the program online or offline?", answer: "100% offline in Tashkent. We believe transformation happens through immersive, in-person collaboration. You'll be working side-by-side with mentors and fellow entrepreneurs." },
                { id: 3, question: "How much does it cost?", answer: "Program fees vary by cohort. Once you're accepted, our team will provide full pricing details. We also offer flexible payment plans and potential subsidies for qualifying businesses." },
                { id: 4, question: "What if my business is too small?", answer: "Size doesn't matter — mindset does. As long as you've been operating for 6+ months and you're ready to commit to systematic growth, you're a fit. We've worked with solo founders and teams of 20+." },
                { id: 5, question: "What happens after the 12 days?", answer: "You'll have 30 days total to complete implementation with mentor support. After graduation, you join our alumni network for ongoing guidance, events, and potential investment opportunities." },
                { id: 6, question: "Can I apply if I'm not in Tashkent?", answer: "Yes! We accept entrepreneurs from all regions of Uzbekistan. However, you must be able to attend the 12-day intensive program in Tashkent." }
            ]
        },
        newMentors: {
            title: "Learn From the Leaders",
            subtitle: "Our mentors have built and managed the biggest companies in Uzbekistan",
            items: [
                { id: 1, name: "Otabek Umarov (FCCA)", role: "Financial Management & Investment", credibility: "Head of Business Transformation at Veolia Energy. 27 years in finance (UZBAT, Skolkovo, SIBUR)", telegram: "https://t.me/CFOOtabek" },
                { id: 2, name: "Lola Razzakova", role: "Leadership & Team Communication", credibility: "HR Expert & Business Trainer. 20+ years in HR (KPMG, Artel, UzCase)", telegram: "" },
                { id: 3, name: "Nodirbek Kuzdekov", role: "Trade Marketing & B2B Sales", credibility: "Sales Strategy Expert. 20+ years in commercial leadership (Ucell, Nestle, UzAuto)", telegram: "https://t.me/KuzdekovChannel" },
                { id: 4, name: "Habibullo Sadulloev", role: "Strategic Positioning", credibility: "Co-founder of Cubic. Marketing expert (Samsung, Chortoq, Ahmad Tea)", telegram: "" }
            ]
        },
        about: {
            hero: {
                title: "From Small Businesses to National Brands",
                subtitle: "We are the bridge between \"Self-Employment\" and \"Systematic Business.\" BizCombinator is Uzbekistan's premier accelerator for young entrepreneurs who are ready to grow."
            },
            story: {
                title: "Who We Are",
                intro: "BizCombinator is not a business school. We are an impact accelerator designed for action.",
                problem: "We were founded on a simple observation: Uzbekistan is full of ambitious young people with great products and high energy. But too often, these businesses hit a \"ceiling.\" They rely entirely on the founder's time, they lack financial clarity, and they struggle to grow beyond their local district.",
                mission: "We exist to break that ceiling.",
                solution: "We identify the most promising existing entrepreneurs (aged 18–30) and provide them with the missing piece of the puzzle: Systematization."
            },
            mission: {
                title: "Our Mission",
                text: "To equip existing young entrepreneurs with the branding and scaling capabilities necessary to transform small local ventures into strong national brands with regional export potential."
            },
            vision: {
                title: "Our Vision",
                text: "A new generation of Uzbek brands that are modern, competitive, and ready to grow beyond their regions and eventually abroad."
            },
            philosophy: {
                title: "How We Are Different",
                points: [
                    { id: 1, title: "No \"Idea-Stage\" Theories", desc: "Most courses teach you how to start. We teach you how to grow. We strictly accept only businesses that have been operating for at least 6 months. We don't discuss hypothetical theories; we fix real operational bottlenecks." },
                    { id: 2, title: "80% Practice, 20% Theory", desc: "We believe entrepreneurs learn by doing. Our 12-day intensive curriculum is designed so that you spend the majority of your time building your financial models, writing your sales scripts, and structuring your team—right in the classroom." },
                    { id: 3, title: "Mentorship from the Trenches", desc: "Our mentors are not academic professors. They are current executives and founders from companies like Veolia Energy, Artel, Ucell, and Samsung. They share knowledge gained from decades of managing millions of dollars in revenue." },
                    { id: 4, title: "Government & Ecosystem Backing", desc: "We position our participants for success by connecting them with government incentives, subsidized loans, and export facilitation programs that are often difficult for individuals to navigate alone." }
                ]
            },
            standards: {
                title: "The \"BizCombinator\" Standard",
                subtitle: "We are building a community of excellence. The \"BizCombinator Entrepreneur\" is defined by:",
                items: [
                    { id: 1, title: "Coachability", desc: "Open to feedback and willing to change old habits." },
                    { id: 2, title: "Transparency", desc: "Willing to look at their real numbers and share challenges openly." },
                    { id: 3, title: "Ambition", desc: "A genuine desire to scale locally and export globally." },
                    { id: 4, title: "Ethics", desc: "A commitment to fair business practices and high-quality standards." }
                ]
            },
            cta: {
                title: "Join the Movement",
                subtitle: "We are shaping the future of Uzbekistan's economy, one systemized business at a time. Are you ready to stop being an employee in your own business and start being a CEO?",
                apply: "Apply for the Next Cohort",
                download: "Download Program Deck"
            }
        },
        contact: {
            hero: {
                title: "Get in Touch",
                subtitle: "Have questions about the program? Want to visit our space? We'd love to hear from you."
            },
            info: [
                { id: 1, title: "Visit Us", line1: "Youth Creative Palace", line2: "Tashkent, Uzbekistan" },
                { id: 2, title: "Email Us", line1: "hello@bizcombinator.com", line2: "apply@bizcombinator.com" },
                { id: 3, title: "Call Us", line1: "+998 90 123 45 67", line2: "Mon-Fri, 9:00 AM - 6:00 PM" },
                { id: 4, title: "Office Hours", line1: "Monday - Friday: 9:00 AM - 6:00 PM", line2: "Saturday - Sunday: Closed" }
            ],
            form: {
                title: "Send Us a Message",
                subtitle: "Fill out the form below and we'll get back to you within 24 hours.",
                name: "Full Name",
                email: "Email Address",
                phone: "Phone Number",
                message: "Message",
                submit: "Send Message",
                sending: "Sending...",
                success: "✓ Message sent successfully! We'll get back to you soon.",
                error: "✗ Something went wrong. Please try again.",
                namePlaceholder: "Your name",
                emailPlaceholder: "your@email.com",
                phonePlaceholder: "+998 90 123 45 67",
                messagePlaceholder: "Tell us what you're looking for..."
            },
            cta: {
                title: "Ready to Transform Your Business?",
                subtitle: "Stop managing chaos. Start building systems. Apply to BizCombinator today.",
                button: "Apply Now"
            }
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
        },
        aboutPage: {
            hero: {
                title: "From Small Businesses to",
                highlight: "National Brands",
                description: "We are the bridge between \"Self-Employment\" and \"Systematic Business.\" BizCombinator is Uzbekistan's premier accelerator for young entrepreneurs who are ready to grow."
            },
            story: {
                title: "Who We Are",
                paragraphs: [
                    { text: "BizCombinator is not a business school. We are an impact accelerator designed for action.", highlight: false },
                    { text: "We were founded on a simple observation: Uzbekistan is full of ambitious young people with great products and high energy. But too often, these businesses hit a \"ceiling.\" They rely entirely on the founder's time, they lack financial clarity, and they struggle to grow beyond their local district.", highlight: false },
                    { text: "We exist to break that ceiling.", highlight: true },
                    { text: "We identify the most promising existing entrepreneurs (aged 18–30) and provide them with the missing piece of the puzzle: Systematization.", highlight: false }
                ]
            },
            mission: {
                title: "Our Mission",
                description: "To equip existing young entrepreneurs with the branding and scaling capabilities necessary to transform small local ventures into strong national brands with regional export potential."
            },
            vision: {
                title: "Our Vision",
                description: "A new generation of Uzbek brands that are modern, competitive, and ready to grow beyond their regions and eventually abroad."
            },
            philosophy: {
                title: "How We Are Different",
                points: [
                    { id: 1, title: "No \"Idea-Stage\" Theories", desc: "Most courses teach you how to start. We teach you how to grow. We strictly accept only businesses that have been operating for at least 6 months. We don't discuss hypothetical theories; we fix real operational bottlenecks." },
                    { id: 2, title: "80% Practice, 20% Theory", desc: "We believe entrepreneurs learn by doing. Our 12-day intensive curriculum is designed so that you spend the majority of your time building your financial models, writing your sales scripts, and structuring your team—right in the classroom." },
                    { id: 3, title: "Mentorship from the Trenches", desc: "Our mentors are not academic professors. They are current executives and founders from companies like Veolia Energy, Artel, Ucell, and Samsung. They share knowledge gained from decades of managing millions of dollars in revenue." },
                    { id: 4, title: "Government & Ecosystem Backing", desc: "We position our participants for success by connecting them with government incentives, subsidized loans, and export facilitation programs that are often difficult for individuals to navigate alone." }
                ]
            },
            standards: {
                title: "The \"BizCombinator\" Standard",
                subtitle: "We are building a community of excellence. The \"BizCombinator Entrepreneur\" is defined by:",
                items: [
                    { id: 1, title: "Coachability", desc: "Open to feedback and willing to change old habits." },
                    { id: 2, title: "Transparency", desc: "Willing to look at their real numbers and share challenges openly." },
                    { id: 3, title: "Ambition", desc: "A genuine desire to scale locally and export globally." },
                    { id: 4, title: "Ethics", desc: "A commitment to fair business practices and high-quality standards." }
                ]
            },
            cta: {
                title: "Join the Movement",
                description: "We are shaping the future of Uzbekistan's economy, one systemized business at a time. Are you ready to stop being an employee in your own business and start being a CEO?",
                primaryButton: "Apply for the Next Cohort",
                secondaryButton: "Download Program Deck"
            }
        },
        contactPage: {
            hero: {
                titlePart1: "Get in",
                titleHighlight: "Touch",
                description: "Have questions about the program? Want to visit our space? We'd love to hear from you."
            },
            contactInfo: [
                { id: 1, title: "Visit Us", line1: "Youth Creative Palace", line2: "Tashkent, Uzbekistan" },
                { id: 2, title: "Email Us", line1: "hello@bizcombinator.com", line2: "apply@bizcombinator.com" },
                { id: 3, title: "Call Us", line1: "+998 90 123 45 67", line2: "Mon-Fri, 9:00 AM - 6:00 PM" },
                { id: 4, title: "Office Hours", line1: "Monday - Friday: 9:00 AM - 6:00 PM", line2: "Saturday - Sunday: Closed" }
            ],
            form: {
                title: "Send Us a Message",
                subtitle: "Fill out the form below and we'll get back to you within 24 hours."
            },
            cta: {
                title: "Ready to Transform Your Business?",
                description: "Stop managing chaos. Start building systems. Apply to BizCombinator today.",
                buttonText: "Apply Now"
            }
        },
        privacy: {
            title: "Privacy Policy",
            lastUpdated: "Last Updated: February 2026",
            intro: { title: "1. Introduction", text: "Welcome to BizCombinator (\"we,\" \"our,\" or \"us\"). We are committed to protecting the privacy of our applicants and participants. This Privacy Policy explains how we collect, use, and share information when you apply for or participate in our accelerator program in Uzbekistan." },
            collection: { title: "2. Information We Collect", text: "We collect two types of data to administer the program effectively:", items: [{ title: "Personal Information", text: "Name, date of birth (to verify 18–30 age eligibility), contact details, and identification documents." }, { title: "Business Data", text: "As part of the program’s requirement for \"Transparency\", we collect sensitive business metrics including revenue figures, profit margins, operational costs, and tax status." }] },
            usage: { title: "3. How We Use Your Information", text: "We use your data for the following purposes:", items: [{ title: "Selection", text: "To verify your business has been active for at least 6 months." }, { title: "Program Delivery", text: "To provide personalized coaching and financial diagnosis." }, { title: "Government Support", text: "To facilitate your access to government incentives, tax simplified regimes, and \"One-Window\" services through our government partners (e.g., Ministry of Economy, Soliq)." }] },
            sharing: { title: "4. Data Sharing & Third Parties", text: "We do not sell your data. However, by participating, you consent to sharing specific data with:", items: [{ title: "Mentors", text: "To allow them to provide accurate business advice." }, { title: "Government Partners", text: "For the purpose of fast-tracking registrations, licenses, or export documentation as described in our Administrative Support module." }, { title: "Financial Partners", text: "If you opt-in for loan or investment facilitation." }] },
            security: { title: "5. Data Security", text: "We implement standard security measures to protect your business's financial data. Access to sensitive sales data is restricted to authorized program staff and assigned mentors." },
            contact: { title: "6. Contact Us", text: "For privacy concerns, please contact us at: ", email: "hello@bizcombinator.com" }
        },
        terms: {
            title: "Terms of Service",
            subtitle: "(Participation Agreement)",
            lastUpdated: "Last Updated: February 2026",
            acceptance: { title: "1. Acceptance of Terms", text: "By applying to BizCombinator, you agree to these Terms of Service. If you do not agree, you may not participate in the program." },
            eligibility: { title: "2. Eligibility Requirements", text: "To qualify for the program, you must:", items: ["Be between 18 and 30 years old.", "Have an active business operating for at least 6 months.", "Not be in an excluded sector (e.g., gambling, alcohol, tobacco)."] },
            obligations: { title: "3. Participant Obligations", text: "Selected participants agree to:", items: [{ title: "Mandatory Attendance", text: "You must attend the offline sessions (12 days). Repeated absence may result in expulsion." }, { title: "Transparency", text: "You agree to share accurate sales and financial data with mentors. Falsifying business data is grounds for immediate termination." }, { title: "Execution", text: "You commit to implementing the systems and tasks assigned during the program." }] },
            ip: { title: "4. Intellectual Property", items: [{ title: "Our Content", text: "All training materials, templates, frameworks, and curriculum provided by BizCombinator are our intellectual property and may not be resold or distributed." }, { title: "Your Data", text: "You retain full ownership of your business data and intellectual property." }] },
            guarantees: { title: "5. No Guarantees of Results", text: "While we aim for a 20% revenue growth target and provide support for obtaining loans/investments, BizCombinator does not guarantee specific financial results, funding, or business success. All business decisions remain your responsibility." },
            liability: { title: "6. Limitation of Liability", text: "BizCombinator and its mentors are educators and advisors. We are not liable for any business losses or legal issues arising from your business operations during or after the program." },
            governing: { title: "7. Governing Law", text: "These terms are governed by the laws of the Republic of Uzbekistan." }
        }
    },
    ru: {
        common: {
            globeUnavailable: "3D визуализация недоступна",
        },
        nav: {
            home: "Главная",
            about: "О нас",
            contact: "Контакты",
            program: "Программа",
            benefits: "Преимущества",
            mentors: "Менторы",
            apply: "Подать заявку",
        },
        hero: {
            titleLine1: "Превратите свой бизнес в систему.",
            titleLine2: "Масштабируйтесь с уверенностью.",
            subtitle: "Акселератор BizCombinator: 12-дневная интенсивная офлайн-программа для молодых предпринимателей, готовых перейти от «самозанятости» к «профессиональному CEO».",
            apply: "Подать Заявку",
            learnMore: "Подробнее",
            urgency: "⏰ Скоро старт следующего потока. Доступно всего 70 мест."
        },
        gap: {
            title: "Что будет в вашем бизнесе после программы",
            subtitle: "Системы, построенные за 6 месяцев, и измеримые результаты",
            benefits: [
                { id: 1, title: "Маркетинговая система", desc: "Новые клиенты приходят постоянно — не догадки, а система" },
                { id: 2, title: "Система продаж", desc: "Каждый продавец точно знает, что делать — результаты стабильно растут" },
                { id: 3, title: "Финансовый контроль", desc: "Каждую неделю точные цифры — где деньги, где проблемы" },
                { id: 4, title: "Управление персоналом", desc: "Ваша команда работает самостоятельно, вы фокусируетесь на стратегии" },
                { id: 5, title: "Система управления", desc: "Бизнес работает, даже когда вас нет" }
            ],
            bonuses: [
                { id: 6, title: "Готовность к экспорту", desc: "Дорожная карта для выхода на международные рынки" },
                { id: 7, title: "Еженедельное менторство", desc: "Руководство для стратегических решений" }
            ]
        },
        features: {
            title: "Бизнесингизни тизимга соламиз",
            subtitle: "Узбекистондаги мавжуд бизнеслар учун аник тизимлар.",
            items: [
                { title: "Рақамлаштириш", desc: "Эски жараёнларни янги дастурлар билан алмаштирамиз. CRM мижозлар учун, омбор учун дастур, молия назорати. Сизнинг бизнесингиз учун." },
                { title: "Аник жараёнлар", desc: "Савдо, маркетинг, операцияларни тартибга соламиз. Хар ким нимани килишини билади. Натижалар куринади. Керакли жойга вакт ажратасиз." },
                { title: "Экспорт тайёрлиги", desc: "Хорижий бозорга чикиш учун хужжатлар ва нархлар тайёрлаймиз. Дунё бозоридаги хамкорлар билан боғламиз." }
            ]
        },
        mentors: {
            title: "Опытные менторы",
            subtitle: "Специалисты, которые построили реальный бизнес в Узбекистане и за рубежом — их практический опыт — ваша дорожная карта",
            items: [
                {
                    id: 1,
                    name: "Фарход Камилов",
                    role: "Маркетинговая система",
                    credibility: "CEO inMarketing & Futurum Academy",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/farhodkamilov_uz",
                    instagram: "",
                    website: ""
                },
                {
                    id: 2,
                    name: "Нодирбек Куздеков",
                    role: "Система продаж",
                    credibility: "Бизнес-тренер по продажам и стратегии",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/KuzdekovChannel",
                    instagram: "",
                    website: ""
                },
                {
                    id: 3,
                    name: "Отабек Умаров",
                    role: "Финансовый контроль",
                    credibility: "CFO, финансы и автоматизация бизнеса",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/CFOOtabek",
                    instagram: "",
                    website: ""
                },
                {
                    id: 4,
                    name: "Дониёржон Норсидиқ",
                    role: "Операционное управление",
                    credibility: "20+ лет HR, Uzbekneftegaz, Центральный банк",
                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/Doniyorjon_Norsidiq",
                    instagram: "",
                    website: ""
                },
                {
                    id: 5,
                    name: "Джонибек Ортиқ",
                    role: "HR и командные системы",
                    credibility: "HR эксперт для России и Центральной Азии",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/HRJonibek",
                    instagram: "",
                    website: ""
                },
                {
                    id: 6,
                    name: "Гульнара Холматова",
                    role: "Система управления",
                    credibility: "25+ лет руководства, международный коучинг",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "",
                    instagram: "",
                    website: "https://gulnarakholmatova.com"
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
                    title: "Диагностика",
                    description: "Анализируем текущие системы бизнеса, выявляем пробелы и создаем дорожную карту роста."
                },
                {
                    title: "Внедрение",
                    description: "Строим рабочие системы вместе: маркетинг, продажи, финансы, операции - шаг за шагом."
                },
                {
                    title: "Масштабирование",
                    description: "Когда системы на месте, помогаем масштабироваться эффективно по проверенным фреймворкам."
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
            tagline: "Акселератор будущего. Превращаем амбициозные идеи в глобальные компании через финансирование, менторство и AI.",
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
        },
        aboutProgram: {
            title: "Что такое BizCombinator?",
            subtitle: "Мы не учим начинать. Мы учим масштабировать.",
            details: [
                { id: 1, title: "Формат", desc: "100% Офлайн в Ташкенте" },
                { id: 2, title: "Длительность", desc: "12 Интенсивных Дней (В течение 1 месяца)" },
                { id: 3, title: "Методология", desc: "20% Теория, 80% Практика" },
                { id: 4, title: "Целевая аудитория", desc: "Предприниматели в возрасте 18–30 лет с активным бизнесом (6+ месяцев)" },
                { id: 5, title: "Миссия", desc: "Формировать новое поколение конкурентоспособных, знающих и лидирующих предпринимателей в Узбекистане" }
            ],
            footer: "Мы даём вам инструменты для трансформации вашего бизнеса из одиночного шоу в профессиональную масштабируемую компанию — готовую доминировать на рынке и расширяться глобально."
        },
        painPoints: {
            title: "Это про вас?",
            subtitle: "Если что-то из этого знакомо, вы в правильном месте",
            points: [
                { id: 1, title: "Главный по всему", desc: "Вы одновременно CEO, бухгалтер, маркетолог и уборщик. Вы не можете взять выходной без остановки бизнеса." },
                { id: 2, title: "Непредсказуемые продажи", desc: "Одни месяцы отличные. Другие ужасные. Вы всегда гадаете, никогда не уверены в доходе следующего месяца." },
                { id: 3, title: "Беспорядок в финансах", desc: "Деньги приходят, деньги уходят — но вы никогда не уверены, куда всё делось. Прибылен ли бизнес? Вроде да... может быть?" },
                { id: 4, title: "Застряли на одном уровне", desc: "Вы ведёте этот бизнес 2-3 года, но кажется, что крутитесь на месте. Тот же доход, тот же стресс, никакого реального роста." }
            ]
        },
        newTimeline: {
            title: "Ваш путь в BizCombinator",
            badge: "Мы отбираем только самых мотивированных предпринимателей",
            subtitle: "Мы отбираем только самых мотивированных предпринимателей",
            steps: [
                { id: 1, title: "Онлайн заявка", desc: "Заполните форму заявки. Мы требуем, чтобы ваш бизнес работал не менее 6 месяцев." },
                { id: 2, title: "Собеседование", desc: "Наш отборочный комитет оценивает вашу мотивацию, потенциал бизнеса и готовность к трансформации." },
                { id: 3, title: "Отбор", desc: "Мы принимаем только 70 лучших предпринимателей, которые демонстрируют сильнейшую приверженность и потенциал роста." },
                { id: 4, title: "Интенсив", desc: "12 дней погружённого офлайн обучения в Ташкенте. Создайте системы, доработайте стратегию, трансформируйте бизнес." },
                { id: 5, title: "Выпуск", desc: "Представьте 1-годичный план, получите сертификат и присоединитесь к сети выпускников BizCombinator для постоянной поддержки." }
            ]
        },
        results: {
            title: "Реальные результаты",
            subtitle: "К концу 30 дней у вас будет:",
            deliverables: [
                { id: 1, title: "Конкретный 1-Годичный Бизнес-План", desc: "Чёткая дорожная карта с выполнимыми этапами" },
                { id: 2, title: "Работающая Система Маркетинга и Продаж", desc: "Предсказуемый процесс генерации лидов и конверсии" },
                { id: 3, title: "Полный контроль над Денежным Потоком и Прибылью", desc: "Финансовая видимость и управление в реальном времени" },
                { id: 4, title: "Систематизированные инструменты Управления", desc: "Бизнес работает на системах, а не только на вашей энергии" }
            ],
            targetMetric: "+20%",
            targetLabel: "Целевое Увеличение Дохода"
        },
        curriculum: {
            title: "Чему вы научитесь",
            subtitle: "5 модулей, разработанных для превращения вашего бизнеса в систему",
            modules: [
                { id: 1, number: "01", title: "Стратегия и Финансовая Трансформация", duration: "4 Дня", learn: "Business Model Canvas, управление денежным потоком и P&L, анализ безубыточности и планирование роста на 1 год", result: "Чёткая финансовая дорожная карта и полный контроль над деньгами" },
                { id: 2, number: "02", title: "Маркетинговая Система", duration: "2 Дня", learn: "Позиционирование, исследование целевой аудитории, каналы цифрового маркетинга и стратегия привлечения клиентов", result: "Повторяемая система привлечения новых клиентов" },
                { id: 3, number: "03", title: "Система Продаж и Ценообразование", duration: "2 Дня", learn: "Воронки продаж, CRM системы, структурирование сделок и психология ценообразования", result: "Предсказуемые результаты продаж и оптимизированная прибыльность" },
                { id: 4, number: "04", title: "Построение Команды и HR", duration: "2 Дня", learn: "Найм, онбординг, KPI, системы мотивации и фреймворки делегирования", result: "Команда, работающая самостоятельно без постоянного надзора" },
                { id: 5, number: "05", title: "Управление и Масштабирование", duration: "2 Дня", learn: "Документирование процессов, операционная эффективность, стратегии масштабирования и лидерство", result: "Бизнес-системы, работающие гладко — даже когда вас нет" }
            ]
        },
        faq: {
            title: "Часто Задаваемые Вопросы",
            subtitle: "Всё, что нужно знать о программе",
            items: [
                { id: 1, question: "У меня есть идея стартапа. Могу я присоединиться?", answer: "Нет. BizCombinator строго для существующих бизнесов, работающих не менее 6 месяцев. Мы работаем с реальными компаниями, сталкивающимися с реальными вызовами — не с гипотетическими идеями." },
                { id: 2, question: "Программа онлайн или офлайн?", answer: "100% офлайн в Ташкенте. Мы верим, что трансформация происходит через погружённое личное сотрудничество. Вы будете работать бок о бок с менторами и другими предпринимателями." },
                { id: 3, question: "Сколько это стоит?", answer: "Стоимость программы варьируется по когортам. Как только вас примут, наша команда предоставит полную информацию о ценах. Мы также предлагаем гибкие планы оплаты и потенциальные субсидии для подходящих бизнесов." },
                { id: 4, question: "Что если мой бизнес слишком маленький?", answer: "Размер не важен — важен настрой. Пока вы работаете 6+ месяцев и готовы к систематическому росту, вы подходите. Мы работали с соло-основателями и командами из 20+ человек." },
                { id: 5, question: "Что будет после 12 дней?", answer: "У вас будет 30 дней всего на завершение внедрения с поддержкой менторов. После выпуска вы присоединитесь к нашей сети выпускников для постоянного руководства, мероприятий и потенциальных инвестиционных возможностей." },
                { id: 6, question: "Могу ли я подать заявку, если не из Ташкента?", answer: "Да! Мы принимаем предпринимателей из всех регионов Узбекистана. Однако вы должны иметь возможность присутствовать на 12-дневной интенсивной программе в Ташкенте." }
            ]
        },
        newMentors: {
            title: "Учитесь у Лидеров",
            subtitle: "Наши менторы построили и управляли крупнейшими компаниями в Узбекистане",
            items: [
                { id: 1, name: "Отабек Умаров (FCCA)", role: "Финансовое Управление и Инвестиции", credibility: "Руководитель бизнес-трансформации в Veolia Energy. 27 лет в финансах (UZBAT, Skolkovo, SIBUR)", telegram: "https://t.me/CFOOtabek" },
                { id: 2, name: "Лола Раззакова", role: "Лидерство и Командная Коммуникация", credibility: "HR Эксперт и Бизнес-Тренер. 20+ лет в HR (KPMG, Artel, UzCase)", telegram: "" },
                { id: 3, name: "Нодирбек Куздеков", role: "Торговый Маркетинг и B2B Продажи", credibility: "Эксперт по стратегии продаж. 20+ лет в коммерческом руководстве (Ucell, Nestle, UzAuto)", telegram: "https://t.me/KuzdekovChannel" },
                { id: 4, name: "Хабибулло Садуллоев", role: "Стратегическое Позиционирование", credibility: "Со-основатель Cubic. Эксперт по маркетингу (Samsung, Chortoq, Ahmad Tea)", telegram: "" }
            ]
        },
        about: {
            hero: {
                title: "От Малого Бизнеса к Национальным Брендам",
                subtitle: "Мы мост между «Самозанятостью» и «Систематическим Бизнесом». BizCombinator — ведущий акселератор Узбекистана для молодых предпринимателей, готовых расти."
            },
            story: {
                title: "Кто мы",
                intro: "BizCombinator — это не бизнес-школа. Мы акселератор с фокусом на действие.",
                problem: "Мы основаны на простом наблюдении: в Узбекистане полно амбициозных молодых людей с отличными продуктами и высокой энергией. Но слишком часто эти бизнесы упираются в «потолок». Они полностью зависят от времени основателя, им не хватает финансовой ясности, и они с трудом растут за пределами своего района.",
                mission: "Мы существуем, чтобы разрушить этот потолок.",
                solution: "Мы находим самых перспективных существующих предпринимателей (в возрасте 18–30 лет) и даём им недостающий кусок головоломки: Систематизация."
            },
            mission: {
                title: "Наша Миссия",
                text: "Оснастить существующих молодых предпринимателей брендинговыми и масштабирующими возможностями, необходимыми для превращения малых локальных предприятий в сильные национальные бренды с региональным экспортным потенциалом."
            },
            vision: {
                title: "Наше Видение",
                text: "Новое поколение узбекских брендов, которые современны, конкурентоспособны и готовы расти за пределами своих регионов и в конечном итоге за рубеж."
            },
            philosophy: {
                title: "Чем мы отличаемся",
                points: [
                    { id: 1, title: "Никаких теорий «стадии идеи»", desc: "Большинство курсов учат, как начать. Мы учим, как расти. Мы строго принимаем только бизнесы, работающие не менее 6 месяцев. Мы не обсуждаем гипотетические теории; мы устраняем реальные операционные узкие места." },
                    { id: 2, title: "80% Практика, 20% Теория", desc: "Мы верим, что предприниматели учатся на практике. Наша 12-дневная интенсивная программа разработана так, чтобы вы проводили большую часть времени, строя финансовые модели, пишущих скрипты продаж и структурируя команду — прямо в классе." },
                    { id: 3, title: "Менторство из окопов", desc: "Наши менторы — не академические профессора. Это действующие руководители и основатели компаний вроде Veolia Energy, Artel, Ucell и Samsung. Они делятся знаниями, полученными за десятилетия управления миллионами долларов доходов." },
                    { id: 4, title: "Государственная и экосистемная поддержка", desc: "Мы позиционируем участников на успех, связывая их с государственными стимулами, субсидированными кредитами и программами содействия экспорту, которые часто сложны для индивидуальной навигации." }
                ]
            },
            standards: {
                title: "Стандарт «BizCombinator»",
                subtitle: "Мы строим сообщество превосходства. «Предприниматель BizCombinator» определяется:",
                items: [
                    { id: 1, title: "Обучаемость", desc: "Открыт к обратной связи и готов менять старые привычки." },
                    { id: 2, title: "Прозрачность", desc: "Готов смотреть на реальные цифры и открыто делиться проблемами." },
                    { id: 3, title: "Амбиции", desc: "Подлинное желание масштабироваться локально и экспортировать глобально." },
                    { id: 4, title: "Этика", desc: "Приверженность честным бизнес-практикам и высоким стандартам качества." }
                ]
            },
            cta: {
                title: "Присоединяйтесь к Движению",
                subtitle: "Мы формируем будущее экономики Узбекистана, по одному систематизированному бизнесу за раз. Готовы ли вы перестать быть наёмным работником в своём бизнесе и стать CEO?",
                apply: "Подать заявку на Следующую Когорту",
                download: "Скачать Презентацию Программы"
            }
        },
        contact: {
            hero: {
                title: "Свяжитесь с нами",
                subtitle: "Есть вопросы о программе? Хотите посетить наше пространство? Мы будем рады услышать вас."
            },
            info: [
                { id: 1, title: "Посетите нас", line1: "Дворец Творчества Молодёжи", line2: "Ташкент, Узбекистан" },
                { id: 2, title: "Напишите нам", line1: "hello@bizcombinator.com", line2: "apply@bizcombinator.com" },
                { id: 3, title: "Позвоните нам", line1: "+998 90 123 45 67", line2: "Пн-Пт, 9:00 - 18:00" },
                { id: 4, title: "Часы работы", line1: "Понедельник - Пятница: 9:00 - 18:00", line2: "Суббота - Воскресенье: Закрыто" }
            ],
            form: {
                title: "Отправьте нам сообщение",
                subtitle: "Заполните форму ниже, и мы свяжемся с вами в течение 24 часов.",
                name: "Полное имя",
                email: "Электронная почта",
                phone: "Номер телефона",
                message: "Сообщение",
                submit: "Отправить сообщение",
                sending: "Отправка...",
                success: "✓ Сообщение успешно отправлено! Мы скоро свяжемся с вами.",
                error: "✗ Что-то пошло не так. Пожалуйста, попробуйте снова.",
                namePlaceholder: "Ваше имя",
                emailPlaceholder: "your@email.com",
                phonePlaceholder: "+998 90 123 45 67",
                messagePlaceholder: "Расскажите, что вы ищете..."
            },
            cta: {
                title: "Готовы трансформировать свой бизнес?",
                subtitle: "Перестаньте управлять хаосом. Начните строить системы. Подайте заявку в BizCombinator сегодня.",
                button: "Подать заявку сейчас"
            }
        },
        aboutPage: {
            hero: {
                title: "От малого бизнеса к",
                highlight: "Национальным брендам",
                description: "Мы — мост между «самозанятостью» и «системным бизнесом». BizCombinator — ведущий акселератор Узбекистана для молодых предпринимателей, готовых к росту."
            },
            story: {
                title: "Кто мы",
                paragraphs: [
                    { text: "BizCombinator — это не бизнес-школа. Мы акселератор воздействия, созданный для действий.", highlight: false },
                    { text: "Мы были основаны на простом наблюдении: Узбекистан полон амбициозных молодых людей с отличными продуктами и высокой энергией. Но слишком часто эти предприятия натыкаются на «потолок». Они полностью зависят от времени основателя, им не хватает финансовой ясности, и они с трудом растут за пределами своего района.", highlight: false },
                    { text: "Мы существуем, чтобы разрушить этот потолок.", highlight: true },
                    { text: "Мы находим самых перспективных действующих предпринимателей (в возрасте 18–30 лет) и предоставляем им недостающую часть головоломки: Систематизацию.", highlight: false }
                ]
            },
            mission: {
                title: "Наша миссия",
                description: "Обеспечить существующих молодых предпринимателей возможностями брендинга и масштабирования, необходимыми для преобразования небольших местных предприятий в сильные национальные бренды с региональным экспортным потенциалом."
            },
            vision: {
                title: "Наше видение",
                description: "Новое поколение узбекских брендов, которые являются современными, конкурентоспособными и готовыми расти за пределами своих регионов и, в конечном итоге, за рубеж."
            },
            philosophy: {
                title: "Чем мы отличаемся",
                points: [
                    { id: 1, title: "Никаких теорий «идейной стадии»", desc: "Большинство курсов учат вас, как начать. Мы учим вас, как расти. Мы строго принимаем только предприятия, которые работают не менее 6 месяцев. Мы не обсуждаем гипотетические теории; мы устраняем реальные операционные узкие места." },
                    { id: 2, title: "80% практики, 20% теории", desc: "Мы верим, что предприниматели учатся на практике. Наша 12-дневная интенсивная программа разработана так, чтобы вы проводили большую часть времени, создавая свои финансовые модели, пишая сценарии продаж и структурируя свою команду — прямо в классе." },
                    { id: 3, title: "Наставничество из окопов", desc: "Наши наставники — не академические профессора. Это действующие руководители и основатели из таких компаний, как Veolia Energy, Artel, Ucell и Samsung. Они делятся знаниями, полученными за десятилетия управления миллионами долларов доходов." },
                    { id: 4, title: "Поддержка правительства и экосистемы", desc: "Мы позиционируем наших участников на успех, соединяя их с государственными стимулами, субсидированными кредитами и программами содействия экспорту, которые часто трудно освоить в одиночку." }
                ]
            },
            standards: {
                title: "Стандарт «BizCombinator»",
                subtitle: "Мы создаём сообщество совершенства. «Предприниматель BizCombinator» определяется:",
                items: [
                    { id: 1, title: "Обучаемость", desc: "Открытость к обратной связи и готовность изменить старые привычки." },
                    { id: 2, title: "Прозрачность", desc: "Готовность смотреть на свои реальные цифры и открыто делиться проблемами." },
                    { id: 3, title: "Амбиции", desc: "Искреннее желание масштабироваться локально и экспортировать глобально." },
                    { id: 4, title: "Этика", desc: "Приверженность честным деловым практикам и высоким стандартам качества." }
                ]
            },
            cta: {
                title: "Присоединяйтесь к движению",
                description: "Мы формируем будущее экономики Узбекистана, по одному систематизированному бизнесу за раз. Готовы ли вы перестать быть сотрудником в собственном бизнесе и стать CEO?",
                primaryButton: "Подать заявку на следующий поток",
                secondaryButton: "Скачать презентацию программы"
            }
        },
        contactPage: {
            hero: {
                titlePart1: "Свяжитесь",
                titleHighlight: "с нами",
                description: "Есть вопросы о программе? Хотите посетить наше пространство? Мы будем рады услышать вас."
            },
            contactInfo: [
                { id: 1, title: "Посетите нас", line1: "Дворец творчества молодёжи", line2: "Ташкент, Узбекистан" },
                { id: 2, title: "Напишите нам", line1: "hello@bizcombinator.com", line2: "apply@bizcombinator.com" },
                { id: 3, title: "Позвоните нам", line1: "+998 90 123 45 67", line2: "Пн-Пт, 9:00 - 18:00" },
                { id: 4, title: "Часы работы офиса", line1: "Понедельник - Пятница: 9:00 - 18:00", line2: "Суббота - Воскресенье: Закрыто" }
            ],
            form: {
                title: "Отправьте нам сообщение",
                subtitle: "Заполните форму ниже, и мы свяжемся с вами в течение 24 часов."
            },
            cta: {
                title: "Готовы трансформировать свой бизнес?",
                description: "Перестаньте управлять хаосом. Начните строить системы. Подайте заявку в BizCombinator сегодня.",
                buttonText: "Подать заявку сейчас"
            }
        },
        privacy: {
            title: "Политика конфиденциальности",
            lastUpdated: "Последнее обновление: Февраль 2026",
            intro: { title: "1. Введение", text: "Добро пожаловать в BizCombinator («мы», «наш» или «нас»). Мы обязуемся защищать конфиденциальность наших заявителей и участников. Эта Политика конфиденциальности объясняет, как мы собираем, используем и делимся информацией, когда вы подаете заявку или участвуете в нашей программе акселерации в Узбекистане." },
            collection: { title: "2. Информация, которую мы собираем", text: "Мы собираем два типа данных для эффективного управления программой:", items: [{ title: "Личная информация", text: "Имя, дата рождения (для проверки соответствия возрасту 18–30 лет), контактные данные и документы, удостоверяющие личность." }, { title: "Бизнес-данные", text: "В рамках требования программы о «Прозрачности», мы собираем чувствительные бизнес-метрики, включая данные о доходах, рентабельности, операционных расходах и налоговом статусе." }] },
            usage: { title: "3. Как мы используем вашу информацию", text: "Мы используем ваши данные для следующих целей:", items: [{ title: "Отбор", text: "Для подтверждения того, что ваш бизнес активно работает не менее 6 месяцев." }, { title: "Реализация программы", text: "Для предоставления персонального коучинга и финансовой диагностики." }, { title: "Государственная поддержка", text: "Для содействия вашему доступу к государственным стимулам, упрощенным налоговым режимам и услугам «Единого окна» через наших государственных партнеров (например, Министерство экономики, Soliq)." }] },
            sharing: { title: "4. Обмен данными и третьи стороны", text: "Мы не продаем ваши данные. Однако, участвуя, вы соглашаетесь делиться конкретными данными с:", items: [{ title: "Наставники", text: "Чтобы позволить им предоставлять точные бизнес-консультации." }, { title: "Государственные партнеры", text: "Для ускорения регистрации, получения лицензий или экспортной документации, как описано в нашем модуле Административной поддержки." }, { title: "Финансовые партнеры", text: "Если вы подписываетесь на содействие в получении кредита или инвестиций." }] },
            security: { title: "5. Безопасность данных", text: "Мы применяем стандартные меры безопасности для защиты финансовых данных вашего бизнеса. Доступ к чувствительным данным о продажах ограничен уполномоченным персоналом программы и назначенными наставниками." },
            contact: { title: "6. Свяжитесь с нами", text: "По вопросам конфиденциальности, пожалуйста, свяжитесь с нами по адресу: ", email: "hello@bizcombinator.com" }
        },
        terms: {
            title: "Условия использования",
            subtitle: "(Соглашение об участии)",
            lastUpdated: "Последнее обновление: Февраль 2026",
            acceptance: { title: "1. Принятие условий", text: "Подавая заявку в BizCombinator, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны, вы не можете участвовать в программе." },
            eligibility: { title: "2. Требования к участникам", text: "Чтобы пройти квалификацию в программу, вы должны:", items: ["Быть в возрасте от 18 до 30 лет.", "Иметь активный бизнес, работающий не менее 6 месяцев.", "Не находиться в исключенном секторе (например, азартные игры, алкоголь, табак)."] },
            obligations: { title: "3. Обязательства участника", text: "Отобранные участники соглашаются:", items: [{ title: "Обязательное посещение", text: "Вы должны посещать офлайн-сессии (12 дней). Неоднократное отсутствие может привести к исключению." }, { title: "Прозрачность", text: "Вы соглашаетесь делиться точными данными о продажах и финансах с наставниками. Фальсификация бизнес-данных является основанием для немедленного прекращения участия." }, { title: "Исполнение", text: "Вы обязуетесь внедрять системы и задачи, назначенные в ходе программы." }] },
            ip: { title: "4. Интеллектуальная собственность", items: [{ title: "Наш контент", text: "Все учебные материалы, шаблоны, фреймворки и учебные планы, предоставленные BizCombinator, являются нашей интеллектуальной собственностью и не подлежат перепродаже или распространению." }, { title: "Ваши данные", text: "Вы сохраняете полное право собственности на данные вашего бизнеса и интеллектуальную собственность." }] },
            guarantees: { title: "5. Никаких гарантий результатов", text: "Хотя мы стремимся к целевому показателю роста выручки на 20% и предоставляем поддержку в получении кредитов/инвестиций, BizCombinator не гарантирует конкретных финансовых результатов, финансирования или успеха бизнеса. Все бизнес-решения остаются вашей ответственностью." },
            liability: { title: "6. Ограничение ответственности", text: "BizCombinator и его наставники являются педагогами и консультантами. Мы не несем ответственности за любые бизнес-убытки или юридические проблемы, возникающие в результате вашей деятельности во время или после программы." },
            governing: { title: "7. Регулирующее законодательство", text: "Настоящие условия регулируются законодательством Республики Узбекистан." }
        }
    },
    uz: {
        common: {
            globeUnavailable: "3D vizualizatsiya mavjud emas",
        },
        nav: {
            home: "Bosh sahifa",
            about: "Biz haqimizda",
            contact: "Bog'lanish",
            program: "Dastur",
            benefits: "Afzalliklar",
            mentors: "Mentorlar",
            apply: "Ariza topshirish",
        },
        hero: {
            titleLine1: "Biznesingizni Tizimga Aylantiring.",
            titleLine2: "Ishonch Bilan Masshtablash.",
            subtitle: "BizCombinator Akseleratori: \"O'z-o'zini band qilish\"dan \"Professional CEO\"ga o'tishga tayyor yosh tadbirkorlar uchun 12 kunlik intensiv oflayn dastur.",
            apply: "Ariza Topshiring",
            learnMore: "Batafsil",
            urgency: "⏰ Keyingi guruh tez orada boshlanadi. Faqat 70 ta joy mavjud."
        },
        gap: {
            title: "Dastur tugagach, biznesingizda mavjud bo'ladi",
            subtitle: "6 oy davomida qurilgan tizimlar va o'lchanadigan natijalar",
            benefits: [
                { id: 1, title: "Marketing tizimi", desc: "Yangi mijozlar doimiy keladi — taxmin emas, tizim" },
                { id: 2, title: "Savdo tizimi", desc: "Har bir sotuvchi nima qilishini aniq biladi — natija barqaror o'sadi" },
                { id: 3, title: "Moliyaviy nazorat", desc: "Har hafta aniq raqamlar — qayerda pul, qayerda muammo" },
                { id: 4, title: "Kadrlar boshqaruvi", desc: "Jamoangiz mustaqil ishlaydi, siz strategiyaga e'tibor berasiz" },
                { id: 5, title: "Boshqaruv tizimi", desc: "Biznes siz yo'qligingizda ham ishlaydi" }
            ],
            bonuses: [
                { id: 6, title: "Eksport tayyorligi", desc: "Xalqaro bozorlarga kirish yo'lxaritasi" },
                { id: 7, title: "Haftalik murabbiylik", desc: "Strategik qarorlar uchun yo'l-yo'riq" }
            ]
        },
        features: {
            title: "Faqat startaplar uchun emas",
            subtitle: "Biz O'zbekistondagi barqaror KO'B larga tizimli, isbotlangan biznes tizimlari orqali operatsiyalarni o'zgartirishda yordam beramiz.",
            items: [
                { title: "Raqamli biznes tizimlari", desc: "Eski jarayonlarni zamonaviy avtomatlashtirish bilan almashtiramiz. CRM, ombor boshqaruvi, moliyaviy nazorat — nazariya emas, ishlaydigan tizimlar. Sizning sohangiz va jamoangiz uchun maxsus." },
                { title: "Jarayonlar orqali operatsion mukammallik", desc: "Savdo, marketing va operatsiyalarni tizimga solamiz. Har bir xodim o'z vazifasini biladi. Natijalar bashorat qilinadigan bo'ladi. Kundalik o't o'chirish o'rniga strategiyaga vaqt ajratasiz." },
                { title: "Xalqaro bozorlar uchun tayyorgarlik", desc: "Eksport uchun biznes strukturasini quram iz. Hujjatlashtirish, me'yorlarga muvofiqlik, global bozorlar uchun narxlash modellari. Bizning tarmog'imiz orqali xalqaro hamkorlar va tarqatish kanallari bilan bog'laymiz." }
            ]
        },
        mentors: {
            title: "Tajribali mentorlar",
            subtitle: "O'zbekistonda va xorijda real biznes qurgan mutaxassislar — ularning amaliy tajribasi sizning yo'lxaritangiz",
            items: [
                {
                    id: 1,
                    name: "Farxod Kamilov",
                    role: "Marketing tizimi",
                    credibility: "CEO inMarketing & Futurum Academy",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/farhodkamilov_uz",
                    instagram: "",
                    website: ""
                },
                {
                    id: 2,
                    name: "Nodirbek Quzdekov",
                    role: "Savdo tizimi",
                    credibility: "Savdo va strategiya bo'yicha biznes-trener",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/KuzdekovChannel",
                    instagram: "",
                    website: ""
                },
                {
                    id: 3,
                    name: "Otabek Umarov",
                    role: "Moliyaviy nazorat",
                    credibility: "CFO, moliya va biznes avtomatlashtiruvi",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/CFOOtabek",
                    instagram: "",
                    website: ""
                },
                {
                    id: 4,
                    name: "Doniyorjon Norsidiq",
                    role: "Operatsion boshqaruv",
                    credibility: "20+ yillik HR, O'zbekneftegaz, Markaziy bank",
                    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/Doniyorjon_Norsidiq",
                    instagram: "",
                    website: ""
                },
                {
                    id: 5,
                    name: "Jonibek Ortiq",
                    role: "HR va jamoa tizimi",
                    credibility: "Rossiya va Markaziy Osiyo uchun HR eksperti",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "https://t.me/HRJonibek",
                    instagram: "",
                    website: ""
                },
                {
                    id: 6,
                    name: "Gulnara Xolmatova",
                    role: "Boshqaruv tizimi",
                    credibility: "25+ yillik rahbarlik, xalqaro kouching",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=webp&fit=crop&q=85&w=400&h=500",
                    telegram: "",
                    instagram: "",
                    website: "https://gulnarakholmatova.com"
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
                    title: "Diagnostika",
                    description: "Hozirgi biznes tizimlarini tahlil qilamiz, kamchiliklarni aniqlaymiz va o'sish yo'lxaritasini yaratamiz."
                },
                {
                    title: "Joriy qilish",
                    description: "Ishlaydigan tizimlarni birgalikda quramiz: marketing, savdo, moliya, operatsiyalar - qadam-baqadam."
                },
                {
                    title: "Masshtablash",
                    description: "Tizimlar tayyor bo'lgach, isbotlangan freymvorklar yordamida samarali masshtablashda yordam beramiz."
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
        },
        aboutProgram: {
            title: "BizCombinator nima?",
            subtitle: "Biz boshlashni emas, kengayishni o'rgatamiz.",
            details: [
                { id: 1, title: "Format", desc: "100% Oflayn Toshjent shahrida" },
                { id: 2, title: "Davomiyligi", desc: "12 Kun Intensiv (1 oy davomida)" },
                { id: 3, title: "Metodologiya", desc: "20% Nazariya, 80% Amaliyot" },
                { id: 4, title: "Maqsadli auditoriya", desc: "18–30 yoshli faol biznesga ega tadbirkorlar (6+ oy)" },
                { id: 5, title: "Missiya", desc: "O'zbekistonda raqobatbardosh, bilimli va yetakchi tadbirkorlarning yangi avlodini shakllantirish" }
            ],
            footer: "Biz sizga biznesingizni yakkaxon shoudan professional, kengaytirilishi mumkin bo'lgan kompaniyaga aylantirish uchun vositalar beramiz — bozorda hukmronlik qilishga va global kengayishga tayyor."
        },
        painPoints: {
            title: "Bu siz haqingizmi?",
            subtitle: "Agar bulardan birortasi tanish bo'lsa, siz to'g'ri joydamisiz",
            points: [
                { id: 1, title: "Hamma narsaning boshlig'i", desc: "Siz bir vaqtning o'zida CEO, buxgalter, marketer va farroshsiz. Biznesni to'xtatmasdan dam ololmaysiz." },
                { id: 2, title: "Oldindan aytib bo'lmaydigan sotuvlar", desc: "Ba'zi oylar ajoyib. Boshqalari dahshatli. Siz doimo taxmin qilasiz, keyingi oyning daromadiga hech qachon ishonchingiz komil emas." },
                { id: 3, title: "Moliyaviy tartibsizlik", desc: "Pul kiradi, pul chiqadi — lekin hammasi qayerga ketganiga hech qachon ishonchingiz komil emas. Biznes foydali mi? Shekilli... balki?" },
                { id: 4, title: "Bir darajada qotib qolgan", desc: "Siz bu biznesni 2-3 yil davomida yuritasiz, lekin aylanib yurgandek tuyuladi. Bir xil daromad, bir xil stress, haqiqiy o'sish yo'q." }
            ]
        },
        newTimeline: {
            title: "BizCombinatorga yo'lingiz",
            badge: "Biz faqat eng motivatsiyali tadbirkorlarni tanlaymiz",
            subtitle: "Biz faqat eng motivatsiyali tadbirkorlarni tanlaymiz",
            steps: [
                { id: 1, title: "Onlayn ariza", desc: "Ariza shaklini to'ldiring. Biznesingiz kamida 6 oy ishlagan bo'lishi kerak." },
                { id: 2, title: "Suhbat", desc: "Tanlash qo'mitamiz sizning motivatsiyangiz, biznes potensialingiz va transformatsiyaga tayyorligingizni baholaydi." },
                { id: 3, title: "Tanlov", desc: "Biz eng kuchli sadoqat va o'sish potentsialini ko'rsatadigan faqat eng yaxshi 70 tadbirkorni qabul qilamiz." },
                { id: 4, title: "Intensiv", desc: "Toshkentda 12 kunlik chuqur oflayn ta'lim. Tizimlarni quring, strategiyani ishlang, biznesingizni transformatsiya qiling." },
                { id: 5, title: "Bitiruv", desc: "1 yillik yo'l xaritangizni taqdim eting, sertifikatingizni oling va doimiy qo'llab-quvvatlash uchun BizCombinator bitiruvchilar tarmog'iga qo'shiling." }
            ]
        },
        results: {
            title: "Haqiqiy natijalar",
            subtitle: "30 kun oxirida sizda bo'ladi:",
            deliverables: [
                { id: 1, title: "Aniq 1 Yillik Biznes-Reja", desc: "Amalga oshiriladigan bosqichlar bilan aniq yo'l xaritasi" },
                { id: 2, title: "Ishlaydigan Marketing va Sotuv Tizimi", desc: "Bashorat qilinadigan lid generatsiyasi va konversiya jarayoni" },
                { id: 3, title: "Pul oqimi va Foyda ustidan to'liq nazorat", desc: "Real vaqtda moliyaviy ko'rinish va boshqaruv" },
                { id: 4, title: "Tizimlashtiriliigan Boshqaruv vositalari", desc: "Biznes faqat sizning energiyangizga emas, tizimlarga asoslanadi" }
            ],
            targetMetric: "+20%",
            targetLabel: "Maqsadli Daromad O'sishi"
        },
        curriculum: {
            title: "Nima o'rganasiz",
            subtitle: "Biznesingizni tizimga aylantirish uchun ishlab chiqilgan 5 modul",
            modules: [
                { id: 1, number: "01", title: "Strategiya va Moliyaviy Transformatsiya", duration: "4 Kun", learn: "Business Model Canvas, pul oqimi va P&L boshqaruvi, zarardan qutilish tahlili va 1 yillik o'sish rejalashtirish", result: "Aniq moliyaviy yo'l xaritasi va pulingiz ustidan to'liq nazorat" },
                { id: 2, number: "02", title: "Marketing Tizimi", duration: "2 Kun", learn: "Pozitsiyalash, maqsadli auditoriya tadqiqoti, raqamli marketing kanallari va mijozlarni jalb qilish strategiyasi", result: "Yangi mijozlarni jalb qilish uchun takrorlanadigan tizim" },
                { id: 3, number: "03", title: "Sotuv Tizimi va Narxlash", duration: "2 Kun", learn: "Sotuv voronkalari, CRM tizimlari, shartnomalarni tuzish va narxlash psixologiyasi", result: "Bashorat qilinadigan sotuv natijalari va optimallashtirilgan foyda marjlari" },
                { id: 4, number: "04", title: "Jamoa Qurish va HR", duration: "2 Kun", learn: "Ishga olish, onboarding, KPI, motivatsiya tizimlar va delegatsiya freymworklari", result: "Doimiy nazorat siz mustaqil ishlaydigan jamoa" },
                { id: 5, number: "05", title: "Boshqaruv va Kengaytirish", duration: "2 Kun", learn: "Jarayonlarni hujjatlash, operatsion samaradorlik, kengaytirish strategiyalari va liderlik", result: "Siz yo'q bo'lsangiz ham ravon ishlaydigan biznes tizimlari" }
            ]
        },
        faq: {
            title: "Ko'p Beriladigan Savollar",
            subtitle: "Dastur haqida bilishingiz kerak bo'lgan hamma narsa",
            items: [
                { id: 1, question: "Menda startap g'oyasi bor. Qo'shilsam bo'ladimi?", answer: "Yo'q. BizCombinator faqat kamida 6 oy ishlagan mavjud bizneslar uchun. Biz gipotezaviy g'oyalar bilan emas, haqiqiy muammolar bilan yuzma-yuz bo'lgan haqiqiy kompaniyalar bilan ishlaymiz." },
                { id: 2, question: "Dastur onlayn yoki oflaynimi?", answer: "100% oflayn Toshkentda. Biz transformatsiya chuqur shaxsiy hamkorlik orqali sodir bo'lishiga ishonamiz. Siz mentorlar va boshqa tadbirkorlar bilan yonma-yon ishlaysiz." },
                { id: 3, question: "Bu qancha turadi?", answer: "Dastur narxi kohort bo'yicha o'zgaradi. Qabul qilinganingizdan so'ng, jamoamiz to'liq narx tafsilotlarini taqdim etadi. Shuningdek, biz moslashuvchan to'lov rejalari va mas'ul bizneslar uchun potentsial subsidiyalarni taklif qilamiz." },
                { id: 4, question: "Biznesim juda kichik bo'lsa-chi?", answer: "Hajm muhim emas — fikrlash muhim. 6+ oy ishlagan va tizimli o'sishga tayyor ekanligingiz ma'qul. Biz yolg'iz asoschilar va 20+ kishidan iborat jamoalar bilan ishladik." },
                { id: 5, question: "12 kundan keyin nima bo'ladi?", answer: "Jami 30 kun davomida mentor yordami bilan amalga oshirishni yakunlashingiz kerak. Bitiruvdan so'ng doimiy yo'l-yo'riq, tadbirlar va potentsial investitsiya imkoniyatlari uchun bitiruvchilar tarmog'imizga qo'shilasiz." },
                { id: 6, question: "Toshkentdan bo'lmasam ariza topshirsam bo'ladimi?", answer: "Ha! Biz O'zbekistonning barcha hududlaridan tadbirkorlarni qabul qilamiz. Biroq, Toshkentdagi 12 kunlik intensiv dasturda qatnashishingiz kerak." }
            ]
        },
        newMentors: {
            title: "Yetakchilardan o'rganing",
            subtitle: "Mentorlarimiz O'zbekistondagi eng yirik kompaniyalarni qurgan va boshqargan",
            items: [
                { id: 1, name: "Otabek Umarov (FCCA)", role: "Moliyaviy Boshqaruv va Investitsiya", credibility: "Veolia Energy'da Biznes Transformatsiya Rahbari. Moliyada 27 yil (UZBAT, Skolkovo, SIBUR)", telegram: "https://t.me/CFOOtabek" },
                { id: 2, name: "Lola Razzakova", role: "Liderlik va Jamoa Muloqoti", credibility: "HR Ekspert va Biznes Trener. HR'da 20+ yil (KPMG, Artel, UzCase)", telegram: "" },
                { id: 3, name: "Nodirbek Kuzdekov", role: "Savdo Marketingi va B2B Sotuvlar", credibility: "Sotuv Strategiyasi Eksperti. Tijorat rahbarligida 20+ yil (Ucell, Nestle, UzAuto)", telegram: "https://t.me/KuzdekovChannel" },
                { id: 4, name: "Habibullo Sadulloev", role: "Strategik Pozitsiyalash", credibility: "Cubic hammuassisi. Marketing eksperti (Samsung, Chortoq, Ahmad Tea)", telegram: "" }
            ]
        },
        about: {
            hero: {
                title: "Kichik Biznesdan Milliy Brendlargacha",
                subtitle: "Biz \"O'z-o'zini bandlik\" va \"Tizimli Biznes\" o'rtasidagi ko'prikamiz. BizCombinator — o'sishga tayyor yoshlar uchun O'zbekistonning etakchi akseleratori."
            },
            story: {
                title: "Biz kimmiz",
                intro: "BizCombinator biznes maktabi emas. Biz harakatga mo'ljallangan akseleratorimiz.",
                problem: "Biz oddiy kuzatish asosida tashkil topganmiz: O'zbekiston ajoyib mahsulotlar va yuqori energiyaga ega ambitsiyali yoshlar bilan to'la. Lekin juda ko'p bu bizneslar \"shift\"ga duch keladi. Ular butunlay asoschining vaqtiga bog'liq, moliyaviy aniqlik yetishmaydi va o'z tumanlaridan tashqarida o'sishda qiynaladi.",
                mission: "Biz bu shiftni buzish uchun mavjudmiz.",
                solution: "Biz eng istiqbolli mavjud tadbirkorlarni (18–30 yosh) topamiz va ularga yetishmayotgan jumboq qismini beramiz: Tizimlashtirish."
            },
            mission: {
                title: "Bizning Missiyamiz",
                text: "Mavjud yosh tadbirkorlarni kichik mahalliy korxonalarni kuchli milliy brendlarga aylantirish uchun zarur bo'lgan brending va kengaytirish qobiliyatlari bilan jihozlash, mintaqaviy eksport potentsiliga ega."
            },
            vision: {
                title: "Bizning Vizyonimiz",
                text: "Zamonaviy, raqobatbardosh va o'z mintaqalaridan va oxir-oqibat chet elga o'sishga tayyor o'zbek brendlarining yangi avlodi."
            },
            philosophy: {
                title: "Biz qanday farqlanamiz",
                points: [
                    { id: 1, title: "\"G'oya bosqichi\" nazariyalari yo'q", desc: "Ko'pchilik kurslar boshlashni o'rgatadi. Biz o'sishni o'rgatamiz. Biz faqat kamida 6 oy ishlagan bizneslarni qabul qilamiz. Biz gipotezaviy nazariyalarni muhokama qilmaymiz; biz haqiqiy operatsion to'siqlarni bartaraf etamiz." },
                    { id: 2, title: "80% Amaliyot, 20% Nazariya", desc: "Biz tadbirkorlar amaliyotda o'rganadi deb ishonamiz. Bizning 12 kunlik intensiv dasturimiz shundayroq tuzilganki, siz vaqtingizning ko'pini moliyaviy modellarni qurish, sotuv skriptlarini yozish va jamoani tuzish — to'g'ridan-to'g'ri sinfda o'tkazasiz." },
                    { id: 3, title: "Okoplardan mentorlik", desc: "Bizning mentorlarimiz akademik professorlar emas. Ular Veolia Energy, Artel, Ucell va Samsung kabi kompaniyalarning hozirgi rahbarlari va asoschilari. Ular million dollar daromadlarni boshqarishdan o'nlab yillar davomida olingan bilimlarni baham ko'radilar." },
                    { id: 4, title: "Davlat va ekotizim qo'llab-quvvatlashi", desc: "Biz ishtirokchilarni muvaffaqiyatga yo'naltiraramiz, ularni davlat rag'batlantirishlari, subsidiyalangan kreditlar va eksportni ko'maklash dasturlari bilan bog'laymiz, ular ko'pincha individual navigatsiya uchun qiyin." }
                ]
            },
            standards: {
                title: "\"BizCombinator\" Standarti",
                subtitle: "Biz mukammallik hamjamiyatini quryapmiz. \"BizCombinator Tadbirkor\" quyidagilar bilan belgilanadi:",
                items: [
                    { id: 1, title: "O'rganishga qodirllik", desc: "Fikr-mulohazalarga ochiq va eski odatlarni o'zgartirishga tayyor." },
                    { id: 2, title: "Shaffoflik", desc: "Haqiqiy raqamlarni ko'rishga va muammolarni ochiq baham ko'rishga tayyor." },
                    { id: 3, title: "Ambitsiya", desc: "Mahalliy miqyosda kengayish va global eksport uchun chinakam istak." },
                    { id: 4, title: "Etika", desc: "Adolatli biznes amaliyotlari va yuqori sifat standartlariga sodiqlik." }
                ]
            },
            cta: {
                title: "Harakatga Qo'shiling",
                subtitle: "Biz O'zbekiston iqtisodiyotining kelajagini bir tizimlashtiriirilgan biznes orqali shakllantiryapmiz. O'z biznesingizda xodim bo'lishni to'xtatib, CEO bo'lishga tayyormisiz?",
                apply: "Keyingi Kohort uchun Ariza Topshiring",
                download: "Dastur Taqdimotini Yuklab Oling"
            }
        },
        contact: {
            hero: {
                title: "Bog'laning",
                subtitle: "Dastur haqida savollaringiz bormi? Makonimizga tashrif buyurmoqchimisiz? Sizni eshitishdan mamnun bo'lamiz."
            },
            info: [
                { id: 1, title: "Bizga tashrif buyuring", line1: "Yoshlar Ijodiyot Saroyi", line2: "Toshkent, O'zbekiston" },
                { id: 2, title: "Bizga yozing", line1: "hello@bizcombinator.com", line2: "apply@bizcombinator.com" },
                { id: 3, title: "Bizga qo'ng'iroq qiling", line1: "+998 90 123 45 67", line2: "Du-Ju, 9:00 - 18:00" },
                { id: 4, title: "Ish vaqti", line1: "Dushanba - Juma: 9:00 - 18:00", line2: "Shanba - Yakshanba: Yopiq" }
            ],
            form: {
                title: "Bizga xabar yuboring",
                subtitle: "Quyidagi shaklni to'ldiring va biz siz bilan 24 soat ichida bog'lanamiz.",
                name: "To'liq ism",
                email: "Elektron pochta",
                phone: "Telefon raqami",
                message: "Xabar",
                submit: "Xabar yuborish",
                sending: "Yuborilmoqda...",
                success: "✓ Xabar muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
                error: "✗ Nimadir noto'g'ri ketdi. Iltimos, qaytadan urinib ko'ring.",
                namePlaceholder: "Ismingiz",
                emailPlaceholder: "your@email.com",
                phonePlaceholder: "+998 90 123 45 67",
                messagePlaceholder: "Nimani qidirayotganingizni ayting..."
            },
            cta: {
                title: "Biznesingizni transformatsiya qilishga tayyormisiz?",
                subtitle: "Tartibsizlikni boshqarishni to'xtating. Tizimlar qurishni boshlang. Bugun BizCombinatorga ariza topshiring.",
                button: "Hozir Ariza Topshiring"
            }
        },
        aboutPage: {
            hero: {
                title: "Kichik biznesdan",
                highlight: "Milliy brendlarga",
                description: "Biz \"o'z-o'zini band qilish\" va \"tizimli biznes\" o'rtasidagi ko'prikimiz. BizCombinator — o'sishga tayyor yosh tadbirkorlar uchun O'zbekistonning yetakchi akseleratori."
            },
            story: {
                title: "Biz kimmiz",
                paragraphs: [
                    { text: "BizCombinator biznes maktabi emas. Biz harakat uchun mo'ljallangan ta'sir akseleratorimiz.", highlight: false },
                    { text: "Biz oddiy kuzatishga asoslanib tashkil etildik: O'zbekiston ajoyib mahsulotlar va yuqori energiyaga ega ambitsiyali yoshlar bilan to'la. Ammo ko'pincha bu korxonalar \"shift\" ga duch keladi. Ular to'liq asoschining vaqtiga bog'liq, ularda moliyaviy aniqlik yo'q va ular o'z tumanlaridan tashqarida o'sishda qiynaladi.", highlight: false },
                    { text: "Biz bu shiftni buzish uchun mavjudmiz.", highlight: true },
                    { text: "Biz eng istiqbolli mavjud tadbirkorlarni (18-30 yoshdagilar) aniqlaymiz va ularga jumboqning etishmayotgan qismini taqdim etamiz: Tizimlashtirish.", highlight: false }
                ]
            },
            mission: {
                title: "Bizning missiyamiz",
                description: "Mavjud yosh tadbirkorlarni kichik mahalliy korxonalarni mintaqaviy eksport salohiyatiga ega kuchli milliy brendlarga aylantirish uchun zarur bo'lgan brending va masshtablash imkoniyatlari bilan ta'minlash."
            },
            vision: {
                title: "Bizning ko'rinishmiz",
                description: "Zamonaviy, raqobatbardosh va o'z mintaqalaridan tashqarida va oxir-oqibat xorijda o'sishga tayyor bo'lgan O'zbek brendlarining yangi avlodi."
            },
            philosophy: {
                title: "Biz qanday farq qilamiz",
                points: [
                    { id: 1, title: "\"G'oya bosqichi\" nazariyalari yo'q", desc: "Ko'pgina kurslar sizga qanday boshlashni o'rgatadi. Biz sizga qanday o'sishni o'rgatamiz. Biz faqat kamida 6 oy faoliyat yuritayotgan korxonalarni qabul qilamiz. Biz taxminiy nazariyalarni muhokama qilmaymiz; biz haqiqiy operatsion to'siqlarni bartaraf etamiz." },
                    { id: 2, title: "80% amaliyot, 20% nazariya", desc: "Biz tadbirkorlar amaliyot orqali o'rganishlariga ishonamiz. Bizning 12 kunlik intensiv dasturimiz shunday tuzilganki, siz vaqtingizning ko'p qismini moliyaviy modellaringizni qurishda, savdo skriptlaringizni yozishda va jamoangizni tuzishda o'tkazasiz — to'g'ridan-to'g'ri sinfda." },
                    { id: 3, title: "Xandaq ichidan murabbiylik", desc: "Bizning murabbiylarimiz akademik professorlar emas. Ular Veolia Energy, Artel, Ucell va Samsung kabi kompaniyalarning hozirgi rahbarlari va asoschilari. Ular millionlab dollar daromadni boshqarish orqali o'nlab yillar davomida olingan bilimlarni baham ko'rishadi." },
                    { id: 4, title: "Hukumat va ekotizim yordami", desc: "Biz ishtirokchilarimizni davlat rag'batlantirish choralari, subsidiyalangan kreditlar va eksportni osonlashtirish dasturlari bilan bog'lab, muvaffaqiyatga yo'naltiramiz, bu dasturlarga yakka tartibda kirish ko'pincha qiyin." }
                ]
            },
            standards: {
                title: "\"BizCombinator\" standarti",
                subtitle: "Biz mukammallik jamiyatini quryapmiz. \"BizCombinator tadbirkor\" quyidagilar bilan belgilanadi:",
                items: [
                    { id: 1, title: "O'rganishga ochiqlik", desc: "Fikr-mulohazalarga ochiqlik va eski odatlarni o'zgartirishga tayyorlik." },
                    { id: 2, title: "Shaffoflik", desc: "Haqiqiy raqamlarga qarash va muammolarni ochiq baham ko'rishga tayyorlik." },
                    { id: 3, title: "Ambitsiya", desc: "Mahalliy miqyosda o'sish va global miqyosda eksport qilishga chin istak." },
                    { id: 4, title: "Etika", desc: "Halol biznes amaliyotlari va yuqori sifat standartlariga sodiqlik." }
                ]
            },
            cta: {
                title: "Harakatga qo'shiling",
                description: "Biz O'zbekiston iqtisodiyotining kelajagini, bir vaqtning o'zida bitta tizimli biznes orqali shakllantiryapmiz. O'z biznesingizda xodim bo'lishni to'xtatib, CEO bo'lishga tayyormisiz?",
                primaryButton: "Keyingi oqimga ariza topshiring",
                secondaryButton: "Dastur taqdimotini yuklab oling"
            }
        },
        contactPage: {
            hero: {
                titlePart1: "Biz bilan",
                titleHighlight: "bog'laning",
                description: "Dastur haqida savollaringiz bormi? Bizning makonimizga tashrif buyurmoqchimisiz? Sizdan eshitishdan xursand bo'lamiz."
            },
            contactInfo: [
                { id: 1, title: "Bizni ziyorat qiling", line1: "Yoshlar ijodiyot saroyi", line2: "Toshkent, O'zbekiston" },
                { id: 2, title: "Bizga yozing", line1: "hello@bizcombinator.com", line2: "apply@bizcombinator.com" },
                { id: 3, title: "Bizga qo'ng'iroq qiling", line1: "+998 90 123 45 67", line2: "Dush-Jum, 9:00 - 18:00" },
                { id: 4, title: "Ofis ish vaqti", line1: "Dushanba - Juma: 9:00 - 18:00", line2: "Shanba - Yakshanba: Yopiq" }
            ],
            form: {
                title: "Bizga xabar yuboring",
                subtitle: "Quyidagi formani to'ldiring va biz 24 soat ichida siz bilan bog'lanamiz."
            },
            cta: {
                title: "Biznesingizni transformatsiya qilishga tayyormisiz?",
                description: "Tartibsizlikni boshqarishni to'xtating. Tizimlar qurishni boshlang. Bugun BizCombinatorga ariza topshiring.",
                buttonText: "Hozir Ariza Topshiring"
            }
        },
        privacy: {
            title: "Maxfiylik Siyosati",
            lastUpdated: "Oxirgi yangilanish: Fevral 2026",
            intro: { title: "1. Kirish", text: "BizCombinator (\"biz\" yoki \"bizning\") ga xush kelibsiz. Biz ariza beruvchilarimiz va ishtirokchilarimizning maxfiyligini himoya qilishga sodiqmiz. Ushbu Maxfiylik Siyosati O'zbekistondagi akselerator dasturimizga ariza topshirganingizda yoki ishtirok etganingizda ma'lumotlarni qanday to'plashimiz, ishlatishimiz va baham ko'rishimizni tushuntiradi." },
            collection: { title: "2. Biz to'playdigan ma'lumotlar", text: "Dasturni samarali boshqarish uchun ikki turdagi ma'lumotlarni to'playmiz:", items: [{ title: "Shaxsiy ma'lumotlar", text: "Ism, tug'ilgan sana (18–30 yosh talabini tekshirish uchun), aloqa ma'lumotlari va shaxsni tasdiqlovchi hujjatlar." }, { title: "Biznes ma'lumotlari", text: "Dasturning \"Shaffoflik\" talabi doirasida biz daromad raqamlari, foyda marjasi, operatsion xarajatlar va soliq maqomi kabi nozik biznes ko'rsatkichlarini to'playmiz." }] },
            usage: { title: "3. Ma'lumotlaringizdan qanday foydalanamiz", text: "Biz ma'lumotlaringizdan quyidagi maqsadlarda foydalanamiz:", items: [{ title: "Tanlash", text: "Biznesingiz kamida 6 oy davomida faol ekanligini tekshirish uchun." }, { title: "Dasturni amalga oshirish", text: "Shaxsiylashtirilgan kouching va moliyaviy diagnostika taqdim etish uchun." }, { title: "Davlat ko'magi", text: "Hukumat hamkorlarimiz (masalan, Iqtisodiyot vazirligi, Soliq) orqali davlat imtiyozlari, soddalashtirilgan soliq rejimlari va \"Yagona oyna\" xizmatlaridan foydalanishingizni osonlashtirish uchun." }] },
            sharing: { title: "4. Ma'lumotlarni almashish va uchinchi tomonlar", text: "Biz ma'lumotlaringizni sotmaymiz. Biroq, ishtirok etish orqali siz quyidagilar bilan ma'lum ma'lumotlarni almashishga rozilik bildirasiz:", items: [{ title: "Mentorlar", text: "Ularga aniq biznes maslahatlarini berish imkoniyatini taqdim etish uchun." }, { title: "Davlat hamkorlari", text: "Ma'muriy qo'llab-quvvatlash modulimizda tavsiflanganidek ro'yxatdan o'tish, litsenziyalar yoki eksport hujjatlarini tezlashtirish maqsadi uchun." }, { title: "Moliyaviy hamkorlar", text: "Agar siz kredit yoki investitsiya ko'magini olishga rozi bo'lsangiz." }] },
            security: { title: "5. Ma'lumotlar xavfsizligi", text: "Biz biznesingizning moliyaviy ma'lumotlarini himoya qilish uchun standart xavfsizlik choralarini qo'llaymiz. Nozik savdo ma'lumotlariga kirish faqat vakolatli dastur xodimlari va tayinlangan mentorlar uchun cheklangan." },
            contact: { title: "6. Biz bilan bog'lanish", text: "Maxfiylik masalalari bo'yicha quyidagi manzilga murojaat qiling: ", email: "hello@bizcombinator.com" }
        },
        terms: {
            title: "Foydalanish Shartlari",
            subtitle: "(Ishtirok etish shartnomasi)",
            lastUpdated: "Oxirgi yangilanish: Fevral 2026",
            acceptance: { title: "1. Shartlarni qabul qilish", text: "BizCombinator-ga ariza topshirish orqali siz ushbu Foydalanish Shartlariga rozilik bildirasiz. Agar rozi bo'lmasangiz, dasturda ishtirok eta olmaysiz." },
            eligibility: { title: "2. Ishtirok etish talablari", text: "Dasturda qatnashish uchun siz quyidagilarga mos kelishingiz kerak:", items: ["Yoshingiz 18 dan 30 gacha bo'lishi kerak.", "Kamida 6 oy davomida faoliyat yuritayotgan biznesga ega bo'lishingiz kerak.", "Taqiqlangan sohada bo'lmasligingiz kerak (masalan, qimor, alkogol, tamaki)."] },
            obligations: { title: "3. Ishtirokchi majburiyatlari", text: "Tanlangan ishtirokchilar quyidagilarga rozilik bildiradilar:", items: [{ title: "Majburiy davomat", text: "Siz oflayn sessiyalarda (12 kun) qatnashishingiz shart. Takroriy qatnashmaslik chetlatishga olib kelishi mumkin." }, { title: "Shaffoflik", text: "Siz aniq savdo va moliyaviy ma'lumotlarni mentorlar bilan baham ko'rishga rozilik bildirasiz. Biznes ma'lumotlarini soxtalashtirish ishtirokni darhol to'xtatish uchun asos bo'ladi." }, { title: "Ijro", text: "Siz dastur davomida berilgan tizimlar va vazifalarni amalga oshirish majburiyatini olasiz." }] },
            ip: { title: "4. Intellektual mulk", items: [{ title: "Bizning kontent", text: "BizCombinator tomonidan taqdim etilgan barcha o'quv materiallari, shablonlar, freymvorklar va o'quv dasturlari bizning intellektual mulkimiz hisoblanadi va ularni qayta sotish yoki tarqatish mumkin emas." }, { title: "Sizning ma'lumotlaringiz", text: "Siz biznes ma'lumotlaringiz va intellektual mulkingizga to'liq egalik huquqini saqlab qolasiz." }] },
            guarantees: { title: "5. Natijalar kafolati yo'q", text: "Biz daromadni 20% ga oshirishni maqsad qilgan bo'lsak-da va kreditlar/investitsiyalar olishda yordam bersak-da, BizCombinator aniq moliyaviy natijalar, moliyalashtirish yoki biznes muvaffaqiyatini kafolatlamaydi. Barcha biznes qarorlari sizning javobgarligingizda qoladi." },
            liability: { title: "6. Javobgarlikni cheklash", text: "BizCombinator va uning mentorlari ta'lim beruvchilar va maslahatchilardir. Dastur davomida yoki undan keyin biznes faoliyatingizdan kelib chiqadigan har qanday biznes yo'qotishlari yoki huquqiy muammolar uchun biz javobgar emasmiz." },
            governing: { title: "7. Boshqaruv qonunchiligi", text: "Ushbu shartlar O'zbekiston Respublikasi qonunlari bilan tartibga solinadi." }
        }
    },
};
