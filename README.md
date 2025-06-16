# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing web development services and projects.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Services Showcase**: Dedicated services page with detailed offerings
- **Project Portfolio**: Interactive project gallery with live demos
- **Contact Form**: Enhanced contact form with service inquiry options
- **Pricing Plans**: Transparent pricing for different service tiers
- **3D Animations**: Engaging visual effects using Three.js and GSAP
- **Email Integration**: Nodemailer integration for contact form submissions

## Pages

- **Home (`/`)**: Main landing page with hero section, services preview, projects, and contact
- **Services (`/services`)**: Comprehensive services page with pricing plans
- **Contact Me (`/contact-me`)**: Dedicated contact page

## Services Offered

1. **Full-Stack Web Development**: End-to-end web applications using Next.js, React, TypeScript
2. **E-commerce Solutions**: Complete shopping platforms with payment integration
3. **Events Management Systems**: Custom event platforms with RSVP functionality
4. **UI/UX Design & Animation**: Modern interfaces with 3D animations
5. **Database & Backend Solutions**: Robust backend systems with API development
6. **Maintenance & Support**: Ongoing support and optimization services

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP, Three.js
- **Email**: Nodemailer
- **Forms**: React Hook Form with Zod validation
- **Icons**: React Icons, Lucide React

## Project Structure

```
├── app/                    # Next.js app directory
├── components/
│   ├── shared/            # Reusable components
│   └── ui/                # UI components
├── data/                  # Static data and configurations
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Contact

For inquiries about services or collaboration, please visit the contact page or reach out directly.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
