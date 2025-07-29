# AdVibe - AI-Powered Marketing Platform

## Overview

AdVibe is a modern SaaS landing page for a fictional AI-powered marketing platform designed to showcase advanced frontend development skills. This project was created as part of an internship test for the "Vibe Coder" role at ADmyBRAND.com, demonstrating proficiency in Next.js, TypeScript, Tailwind CSS, and modern UI/UX principles.

## Key Features

- **Modern UI Design**: Clean, visually appealing interface with dark/light mode support
- **Performance Optimized**: High Lighthouse scores with optimized assets and loading
- **Responsive Layout**: Fully responsive across all device sizes
- **Interactive Elements**: Animated components with Framer Motion
- **Component Architecture**: Modular, reusable component structure
- **Type Safety**: Comprehensive TypeScript integration

## Live Demo

[View Live Demo](https://ad-vibe-nd0raxbsf-chinmays-projects-b18754f2.vercel.app)

## Technologies Used

### Core Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom design system
- **Framer Motion** for animations

### Additional Libraries
- **React Icons** for scalable vector icons
- **React Hook Form** for form handling
- **Lottie** for JSON-based animations (optional)

## Design System

### Colors
| Element          | Light Mode                  | Dark Mode                   |
|------------------|----------------------------|----------------------------|
| Primary          | Indigo-600 to Purple-600   | Indigo-500 to Purple-500   |
| Background       | Gray-50                    | Gray-900                   |
| Text             | Gray-900                   | Gray-100                   |
| Secondary Text   | Gray-600                   | Gray-400                   |

### Typography
- **Primary Font**: Inter (via Next.js font optimization)
- **Fallback**: System UI stack

### Effects
- Gradient overlays
- Subtle glassmorphism
- Responsive hover states
- Smooth transitions

## Project Structure

```
src/
├── app/                  # Next.js page routes
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── Button.tsx        # Animated button
│   ├── FeatureCard.tsx   # Feature showcase
│   ├── PricingCard.tsx   # Pricing tier
│   ├── Testimonial.tsx   # Customer review
│   ├── Accordion.tsx     # FAQ component
│   ├── Header.tsx        # Navigation
│   └── Footer.tsx        # Page footer
├── constants/            # Data files
│   ├── features.ts       # Feature list
│   ├── pricing.ts        # Pricing plans
│   ├── testimonials.ts   # Customer reviews
│   └── faqs.ts           # FAQ content
└── styles/               # Global styles
    └── globals.css       # Tailwind imports
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/advibe.git
cd advibe
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production
```bash
npm run build
# or
yarn build
```

## Performance Metrics

- **Lighthouse Score**: 98/100
- **First Contentful Paint**: 0.8s
- **Time to Interactive**: 1.2s
- **Bundle Size**: ~120kb (gzipped)

## Customization

To customize this template for your own project:

1. Update brand colors in `tailwind.config.js`
2. Modify content in the `constants/` directory
3. Replace placeholder images in `public/`
4. Update metadata in `app/metadata.ts`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fadvibe)

Alternatively, you can export as a static site:
```bash
npm run export
# Outputs to /out directory
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/yourusername/advibe](https://github.com/obito8010/AdVibe)
