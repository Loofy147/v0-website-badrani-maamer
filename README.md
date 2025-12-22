# Promotion Badrani Maamar - Real Estate Platform

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/loofy147s-projects/v0-website-development-blueprint)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/ltjmLNA9SZC)

## Overview

A comprehensive real estate platform for Promotion Badrani Maamar in Ain Defla, Algeria. Features bilingual support (French/Arabic), property management, financing calculators, lead generation, and admin dashboard.

## Features

### Public Website
- **Bilingual Interface**: Full support for French and Arabic languages
- **Property Listings**: F3/F4 apartments and commercial spaces with detailed information
- **Financing Calculator**: Real-time calculations for conventional and Islamic financing
- **Photo Gallery**: Project showcase with tabbed categories
- **Lead Generation**: Contact forms and property inquiry system
- **Services Page**: Residential, commercial, BAB AL-EMAAR conference hall

### User Features
- **User Authentication**: Email/password sign-up with Supabase Auth
- **Personal Dashboard**: View favorites, scheduled viewings, and lead requests
- **Property Favorites**: Save and manage favorite properties
- **Viewing Scheduler**: Book property viewings directly

### Admin Panel
- **Property Management**: CRUD operations for all property types
- **Lead Tracking**: Manage inquiries and viewing requests
- **Document Management**: Upload and organize property documents
- **Real-time Notifications**: Stay updated on new leads and activities
- **Analytics Dashboard**: Key metrics and statistics

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── admin/            # Admin dashboard
│   ├── dashboard/        # User dashboard
│   ├── properties/       # Property listings and details
│   ├── financing/        # Financing calculator
│   ├── gallery/          # Photo gallery
│   ├── services/         # Services page
│   ├── about/            # About page
│   └── contact/          # Contact page
├── components/           # Reusable components
├── lib/                  # Utilities and configurations
│   ├── supabase/        # Supabase clients
│   ├── i18n.ts          # Translations
│   └── types.ts         # TypeScript types
└── scripts/             # Database migration scripts
```

## Database Schema

### Main Tables
- **properties**: Property listings (apartments, commercial, etc.)
- **user_profiles**: Extended user information
- **leads**: Contact form submissions and inquiries
- **viewings**: Scheduled property viewings
- **financing_options**: Available financing plans
- **documents**: Property-related documents
- **notifications**: User notifications
- **user_favorites**: Saved properties per user

## Real Estate Projects

### Rouina Project
- 21 residential units in Rouina, Ain Defla
- F3 apartments (85m²) and F4 apartments (110m²)
- Modern finishes, parking included
- Flexible financing: bank loans or 40-month direct payment

### Commercial Spaces
- Strategic locations on National Road 4 (RN4)
- Sizes: 45m², 80m², 150m²
- High visibility with constant customer flow
- Suitable for retail, offices, showrooms

### BAB AL-EMAAR
- Modern conference and meeting hall
- Audiovisual equipment included
- Flexible capacity for events, training, corporate meetings

## Contact Information

- **Phone**: +213 770 62 18 24 / +213 550 03 27 41
- **Fax**: +213 27 50 30 30
- **Email**: [email protected]
- **Address**: Cité 234 logts Hotel Doui, Aïn Defla
- **Sales Office**: On-site at Rouina project
- **Facebook**: 8,000+ followers

## Environment Variables

Required environment variables (automatically configured with Supabase integration):

```
SUPABASE_URL
SUPABASE_ANON_KEY
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL
```

## Getting Started

1. **Clone the repository**
2. **Install dependencies**: The project uses Next.js with automatic dependency resolution
3. **Set up Supabase**: Connection is pre-configured through v0 integration
4. **Run database scripts**: Execute SQL scripts in `/scripts` folder in order
5. **Start development**: The app runs automatically in v0's preview environment

## Key Features by Page

### Homepage (`/`)
- Hero section with project highlights
- Featured properties grid
- Why choose us section
- Quick access to financing options

### Properties (`/properties`)
- Filterable property listings
- Search by type, location, price
- Detailed property cards
- Direct inquiry forms

### Gallery (`/gallery`)
- Tabbed interface for different project types
- High-quality property images
- Hover effects and zoom functionality

### Financing (`/financing`)
- Interactive calculator
- Multiple financing options
- Conventional and Islamic financing
- Real-time monthly payment calculations

### Admin Dashboard (`/admin`)
- Property CRUD operations
- Lead management with status tracking
- Viewing scheduler
- Document uploads
- System settings

## Deployment

Your project is live at:

**[https://vercel.com/loofy147s-projects/v0-website-development-blueprint](https://vercel.com/loofy147s-projects/v0-website-development-blueprint)**

## Continue Development

Build and modify on:

**[https://v0.app/chat/ltjmLNA9SZC](https://v0.app/chat/ltjmLNA9SZC)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## License

© 2025 Promotion Badrani Maamar. All rights reserved.
