# Simplilearn Dallas Round Table - Event Landing Page

An invite-only executive roundtable event landing page built with Next.js 16, Tailwind CSS, and Server Actions for Airtable integration.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router and Server Components
- **Responsive Design**: Fully responsive across mobile and desktop
- **Tailwind CSS**: Styled with Tailwind CSS for pixel-perfect design
- **RSVP Form**: Functional email submission form with Server Actions
- **Airtable Integration**: RSVPs are stored directly in Airtable
- **Performance Optimized**: Image optimization, modern CSS, and efficient bundling

## 📁 Project Structure

```
simplilearn-dallas/
├── src/
│   ├── app/
│   │   ├── actions.ts       # Server Actions for Airtable
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page component
│   ├── components/
│   │   ├── AgendaCard.tsx   # Event agenda card
│   │   ├── RSVPForm.tsx     # RSVP form (Client Component)
│   │   ├── SkillCard.tsx    # Skills/capability card
│   │   └── SpeakerCard.tsx  # Speaker profile card
│   └── lib/
│       └── assets.ts        # Image asset URLs
├── public/
│   └── icons/               # SVG icons
├── .env.example             # Environment variables template
└── next.config.ts           # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository and navigate to the project:
   ```bash
   cd simplilearn-dallas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your Airtable credentials in `.env.local`:
   ```
   AIRTABLE_API_KEY=your_airtable_api_key
   AIRTABLE_BASE_ID=your_airtable_base_id
   AIRTABLE_TABLE_NAME=RSVPs
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Airtable Setup

1. Create a new Airtable base
2. Create a table called "RSVPs" with the following fields:
   - `Email` (Email type)
   - `RSVP Date` (Date type)
   - `Event` (Single line text)
   - `Status` (Single select: Pending, Confirmed, Declined)
3. Generate an API token from [Airtable's developer hub](https://airtable.com/create/tokens)
4. Copy the Base ID from the URL when viewing your base
5. Add credentials to `.env.local`

## 🎨 Design System

### Colors
- **Primary Blue**: `#1d4df4`
- **Dark Blue**: `#112d8e`
- **Accent Orange**: `#f5ab40`
- **Accent Cyan**: `#00ffff`
- **Dark Navy**: `#25286a`

### Typography
The design uses a clean sans-serif font stack for optimal readability.

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

```bash
npm run build
npm start
```

## 📄 License

This project is proprietary to Simplilearn Solutions.

---

Built with ❤️ for the Dallas Executive Round Table 2026

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
