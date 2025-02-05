# Delta Home Solutions — Consumer-Facing Website

This document provides a **detailed and structured explanation** of the website's flow and features, guiding app developers in understanding site organization and user interactions.

## 1. Overview

**Delta Home Solutions** is a consumer-facing website showcasing home maintenance and repair services, providing:
- Clear view of offered services
- Easy way to obtain a free quote
- Quick access to contact information

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Data Storage**: Google Sheets API
- **Deployment**: Vercel

### Core Pages
1. Home Page
2. Services Page
3. Get a Free Quote Page

A consistent **Navbar** and **Footer** facilitate navigation across all pages.

## 2. Page Structure

### Home Page

#### Layout Components
- **Hero Section (Left)**
  - Headline: "Home is everything"
  - Tagline: "Let's maintain your safe heaven"
  - Faded background image
  - CTA: "Get a Free Quote" button

- **Navbar**
  - Left: Company logo
  - Middle: Home and Services links (current page underlined)
  - Right: Clickable phone number (`tel:` link)

- **Services Preview**
  - Clickable headline linking to Services Page
  - Grid/list of service images with overlaid names

- **Coverage Area**
  - Vancouver map with service area outline
  - Text: "We serve all over the mainland"

- **Footer**
  - Company name
  - Clickable phone number
  - "Get a Free Quote" button

### Services Page

#### Layout Components
- **Service List**
  - Title-above-image format
  - Grid/list layout
- **CTA Button**
  - "Get a Free Quote" button
- Standard Navbar/Footer

### Quote Page

#### Form Components
- Name (text input)
- Phone Number (tel input)
- Address (text input)
- Additional Notes (textarea)
- Submit button

#### Integration
- Form submissions stored in Google Sheets
- Automatic email notifications on new entries

## 3. Technical Implementation

### Build Steps

1. **Project Setup**
   - Initialize Next.js 14 project with TypeScript
   - Configure Tailwind CSS
   - Set up project structure and folders
   - Add base fonts and colors

2. **Layout Components**
   - Create reusable Navbar component
   - Create reusable Footer component
   - Implement layout wrapper for consistent page structure

3. **Home Page**
   - Build Hero section with background image
   - Create Services Preview grid/list
   - Add Coverage Area section with map
   - Integrate layout components

4. **Services Page**
   - Implement service grid/list layout
   - Create service card components
   - Add CTA section

5. **Quote Form Page**
   - Build form using React Hook Form
   - Add form validation
   - Style form components
   - Set up Google Sheets API integration
   - Implement form submission handler

6. **Final Steps**
   - Add responsive design adjustments
   - Implement SEO optimizations
   - Test across devices
   - Deploy to Vercel

### Navigation
