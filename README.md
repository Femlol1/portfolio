# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing web development services and projects.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Services Showcase**: Dedicated services page with detailed offerings
- **Project Portfolio**: Interactive project gallery with live demos
- **Contact Form**: Product and service enquiries with package selection
- **Product Catalogue**: 13 core products plus 2 practical add-ons with GBP starting prices
- **SEO Offering**: Technical SEO, SEO-conscious migrations, and search foundations across public website builds
- **3D Animations**: Engaging visual effects using Three.js and GSAP
- **Email Integration**: Nodemailer integration for contact form submissions

## Pages

- **Home (`/`)**: Main landing page with hero section, services preview, projects, and contact
- **Services (`/services`)**: Product catalogue, transparent starting prices, booking, SEO, migration, accessibility, automation, and custom capabilities
- **Contact Me (`/contact-me`)**: Dedicated contact page

## Services Offered

1. **Websites & Web Apps**: Landing pages, business websites, redesigns, and custom application MVPs
2. **Bookings & Payments**: Appointment flows, calendar integrations, deposits, confirmations, and reminders
3. **E-commerce & Events**: Online stores, event sites, registrations, and guest-management workflows
4. **SEO & Migrations**: Technical audits, on-page fixes, redirects, structured data, and indexing support
5. **Accessibility**: WCAG-informed audits and high-impact usability fixes
6. **AI & Workflow Automation**: Chatbots, CRM connections, lead routing, and customer follow-up
7. **Backend Development**: Databases, APIs, authentication, and administration tools
8. **Care & Resilience**: Maintenance, analytics and cookie setup, security baselines, backups, and recovery checks

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

- **Framework**: Next.js 16.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP, Three.js
- **Email**: Nodemailer
- **Forms**: Accessible React forms with client- and server-side validation
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

Check out my [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
