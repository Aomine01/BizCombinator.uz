# 🚀 BizCombinator - Transform Ideas into Global Ventures

A premium startup accelerator platform built with Next.js 16, featuring stunning 3D animations, multilingual support, and Awwwards-level design.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://biz-combinator-uz.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

### 🎨 Premium UI/UX
- **3D Globe Animations**: Interactive particle-based globe using Three.js
- **Scroll-Triggered Animations**: Smooth Framer Motion animations throughout
- **Glassmorphism Design**: Modern glass effects with backdrop blur
- **Dark Mode**: Sleek dark theme with vibrant accent colors
- **Responsive**: Mobile-first design with optimized layouts for all devices

### 🌍 Multilingual Support
- **3 Languages**: English, Russian, Uzbek (O'zbek)
- **Dynamic Translation**: Context-based language switching
- **SEO Optimized**: Proper meta tags for all languages

### ⚡ Performance Optimized
- **60 FPS Animations**: GPU-accelerated transforms
- **Lazy Loading**: Components load on-demand
- **Image Optimization**: Next.js Image component with WebP
- **Lighthouse Score**: 90+ Performance, 77% SEO (working toward 100%)

### 🎯 Key Sections
- **Hero**: Animated background with particle effects
- **Journey**: Scroll-based 3D globe showcase
- **Business Types**: Interactive carousel with drag/swipe
- **Mentors**: Auto-scrolling grid with manual control
- **Global Impact**: Animated statistics with globe visualization
- **Application Form**: Multi-step form with validation

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### 3D Graphics
- **Three.js**: 3D globe rendering
- **Custom Shaders**: Particle effects and animations

### Forms & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation

### Deployment
- **Platform**: [Vercel](https://vercel.com/)
- **CI/CD**: GitHub Actions with Lighthouse CI
- **Analytics**: Vercel Analytics

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Aomine01/BizCombinator.uz.git
cd BizCombinator.uz/biz-combinator

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://bizcombinator.uz

# Email Configuration (for contact form)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
CONTACT_EMAIL=contact@bizcombinator.uz

# Google Site Verification (optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## 📦 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Lint & Type Check
```bash
npm run lint
npm run type-check
```

### Lighthouse CI
```bash
npm run build
npx lhci autorun
```

## 🎨 Project Structure

```
biz-combinator/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO meta tags
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── api/               # API routes
│       └── apply/         # Application form endpoint
├── components/            # React components
│   ├── Globe3D.tsx       # 3D globe component
│   ├── Navbar.tsx        # Navigation with language switcher
│   ├── Hero.tsx          # Hero section
│   ├── ScrollShowcase.tsx # Journey section
│   ├── BusinessTypes.tsx  # Business types carousel
│   ├── MentorsGrid.tsx   # Mentors section
│   ├── GlobalReach.tsx   # Global impact stats
│   └── ...
├── context/              # React Context providers
│   └── LanguageContext.tsx # Multilingual support
├── constants/            # Constants and translations
│   └── translations.ts   # Translation strings
├── public/               # Static assets
│   ├── images/          # Images and icons
│   └── og-image.png     # OpenGraph image
└── lighthouserc.json    # Lighthouse CI configuration
```

## 🌟 Key Features Implementation

### 3D Globe Animation
- Custom Three.js implementation
- Particle-based rendering (180-600 particles)
- Scroll-based rotation and scaling
- Performance optimized with IntersectionObserver

### Multilingual System
- Context-based language management
- Dynamic content switching
- Persistent language preference
- SEO-friendly language tags

### Form Handling
- Multi-step application form
- Real-time validation with Zod
- Email notifications via SMTP
- Success/error state management

### Performance Optimizations
- GPU-accelerated animations
- Direct DOM manipulation for counters
- Lazy loading of heavy components
- Image optimization with Next.js Image
- Code splitting and tree shaking

## 📊 Performance Metrics

| Metric | Score | Status |
|--------|-------|--------|
| Performance | 90+ | ✅ Excellent |
| SEO | 77% | ⚠️ Good (working toward 100%) |
| Accessibility | 95+ | ✅ Excellent |
| Best Practices | 95+ | ✅ Excellent |

## 🐛 Known Issues

### React Hydration Error (Mobile)
- **Issue**: React error #310 during Lighthouse mobile emulation
- **Impact**: SEO score limited to 77%
- **Status**: Under investigation
- **Workaround**: SEO threshold set to 0.75 in CI

## 🔧 Development

### Adding a New Language
1. Add translations to `constants/translations.ts`
2. Update language switcher in `components/Navbar.tsx`
3. Test all pages with new language

### Modifying Globe Animation
- Edit `components/Globe3D.tsx`
- Adjust particle count in quality settings
- Test performance on mobile devices

### Adding New Sections
1. Create component in `components/`
2. Import in `app/page.tsx`
3. Add translations if needed
4. Test responsive design

## 📝 SEO Configuration

### Meta Tags
- Comprehensive OpenGraph tags
- Twitter Card support
- Viewport meta tag for mobile
- Language attribute on HTML tag

### Sitemap & Robots
- Automatic sitemap generation
- Robots.txt configuration
- Canonical URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 🙏 Acknowledgments

- **Design Inspiration**: Awwwards-winning sites
- **3D Graphics**: Three.js community
- **Animations**: Framer Motion team
- **Framework**: Next.js team at Vercel

## 📞 Contact

- **Website**: [bizcombinator.uz](https://bizcombinator.uz)
- **Email**: contact@bizcombinator.uz
- **GitHub**: [@Aomine01](https://github.com/Aomine01)

---

**Built with ❤️ by the BizCombinator Team**
