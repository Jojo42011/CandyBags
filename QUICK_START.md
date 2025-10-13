# 🎃 CandyBags - Quick Start Guide

Get your CandyBags website running in 5 minutes!

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## Before You Deploy

### 1. Update Token Contract Address

📁 `components/Tokenomics.tsx` (line ~96)
```typescript
<code className="text-sm text-gray-300 bg-gray-800 px-4 py-2 rounded">
  YOUR_ACTUAL_SOLANA_TOKEN_ADDRESS
</code>
```

### 2. Add Your Social Links

📁 `components/Footer.tsx` (line ~8-12)
```typescript
const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: FaTelegram, href: 'https://t.me/yourchannel', label: 'Telegram' },
  { icon: FaDiscord, href: 'https://discord.gg/yourserver', label: 'Discord' },
];
```

📁 `components/Community.tsx` (line ~11-39)
```typescript
const socials = [
  { name: 'Twitter', icon: FaTwitter, link: 'https://twitter.com/yourhandle', ... },
  // ... update all links
];
```

### 3. Update Stats (Optional)

📁 `components/Hero.tsx` (line ~73-78)
```typescript
{ label: 'Market Cap', value: '$123K', icon: '💰' },
{ label: 'Holders', value: '1.2K', icon: '👻' },
// ... update with real data
```

## Deploy to Vercel

```bash
# Option 1: Push to GitHub and import in Vercel Dashboard
git init
git add .
git commit -m "Initial commit"
git push

# Option 2: Use Vercel CLI
npm install -g vercel
vercel
```

## Customization

### Change Colors
📁 `tailwind.config.ts`
```typescript
colors: {
  primary: {
    orange: '#FF6B35',  // Change this
    purple: '#9B5DE5',  // And this
  },
}
```

### Add Custom Sections
Create new components in `components/` folder and import in `app/page.tsx`

### Update Fonts
📁 `app/globals.css` (line ~3)
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

## Useful Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Main layout with wallet provider
│   ├── page.tsx        # Home page (imports all sections)
│   └── globals.css     # Global styles & animations
├── components/
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About CandyBags
│   ├── Tokenomics.tsx  # Token distribution
│   ├── HowToBuy.tsx    # Purchase guide
│   ├── Roadmap.tsx     # Project milestones
│   ├── Community.tsx   # Social links
│   ├── Navbar.tsx      # Navigation + wallet button
│   ├── Footer.tsx      # Footer section
│   └── ...
└── package.json
```

## Key Features

✅ Solana wallet integration (Phantom, Solflare)  
✅ Animated Halloween background  
✅ Responsive design (mobile-first)  
✅ Smooth scroll animations  
✅ Modern UI with Tailwind CSS  
✅ TypeScript for type safety  
✅ SEO optimized  
✅ Vercel-ready deployment  

## Need Help?

1. Check `README.md` for detailed documentation
2. See `DEPLOYMENT.md` for deployment instructions
3. Join our Telegram for community support

---

**Let's make this the spookiest memecoin site! 🎃👻**

