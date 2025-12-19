# BizCombinator - Premier Innovation Accelerator 🚀

A high-performance, cinematic landing page for **BizCombinator**, an international innovation program. Built with Next.js 15, Tailwind CSS, and Framer Motion, featuring a "Void Black" & "Neon Red" aesthetic.

![BizCombinator Preview](/public/images/logo-full-red.png)

## ✨ Key Features

*   **Cinematic Design**:
    *   **Premium Dark Theme**: `#050505` background with `#ff2200` accents.
    *   **Neural Network Background**: Interactive HTML5 Canvas particle system.
    *   **3D Visuals**: Interactive Globe visualization and "Explosion" effects using custom Canvas rendering.
    *   **Glassmorphism**: Modern UI components with frosted glass effects.
*   **Advanced Animations**:
    *   **ScrollShowcase**: Scrollytelling experience blending 3D elements with text content.
    *   **Framer Motion**: Smooth entry, exit, and scroll-triggered animations throughout.
    *   **Drag Carousel**: Custom draggable slider for "Who We Work With" section.
*   **Functionality**:
    *   **Telegram Integration**: Custom API route (`/api/apply`) to send formatted applications + pitch decks directly to a Telegram channel.
    *   **Internationalization (i18n)**: Full support for **English (EN)**, **Russian (RU)**, and **Uzbek (UZ)** via `LanguageContext`.
    *   **Responsive**: Mobile-first design ensuring a seamless experience on all devices.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **3D/Canvas**: Native HTML5 Canvas + Physics logic

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-repo/biz-combinator.git
cd biz-combinator
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory and add your Telegram Bot credentials:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📂 Project Structure

*   `app/`: Next.js App Router pages and API routes.
    *   `api/apply/`: Backend logic for form handling and Telegram API communication.
    *   `globals.css`: Global styles, themes, and CSS variable definitions.
*   `components/`: Reusable UI components.
    *   `Hero.tsx` & `HeroBackground.tsx`: Main landing section with particle animation.
    *   `Globe3D.tsx`: Custom 3D globe visualization.
    *   `GapSection.tsx`: Interactive Problem/Solution comparison.
    *   `ScrollShowcase.tsx`: High-impact scroll animation section.
*   `context/`: React Contexts (e.g., `LanguageContext`).
*   `constants/`: Static data and translation strings.

## 🎨 Theme Configuration

The project uses a CSS-variable based theme defined in `globals.css`:

*   `--background`: `#050505` (Void Black)
*   `--primary`: `#ff2200` (Logo Red)
*   `--foreground`: `#ffffff`

---

**BizCombinator** — Transforming Ideas into Empires.
