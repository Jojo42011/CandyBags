# 🎃 CandyBags - Halloween Memecoin on Solana

![CandyBags Logo](https://via.placeholder.com/800x200/FF6B35/FFFFFF?text=CandyBags+🎃)

**Trick or Treat on the Blockchain!**

CandyBags is the spookiest memecoin on Solana, bringing Halloween spirit to the crypto world. Join our community-driven project and fill your bags with treats!

## 🌟 Features

- **Halloween-themed Design**: Spooky, festive, and fun UI/UX
- **Built on Solana**: Fast, low-cost transactions
- **Community Driven**: No presale, fair launch for everyone
- **Wallet Integration**: Seamless Phantom & Solflare wallet support
- **Animated Effects**: Floating Halloween particles and smooth animations
- **Responsive Design**: Perfect on mobile, tablet, and desktop

## 🚀 Live Demo

Visit: [Your deployed URL here]

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Blockchain**: Solana Web3.js
- **Wallet Adapter**: Solana Wallet Adapter
- **Icons**: React Icons, Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/candybags-memecoin.git
cd candybags-memecoin
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Configuration

### Update Contract Address

Edit the contract address in `components/Tokenomics.tsx`:

```typescript
<code className="text-sm text-gray-300 bg-gray-800 px-4 py-2 rounded">
  YOUR_SOLANA_TOKEN_ADDRESS_HERE
</code>
```

### Update Social Links

Edit social media links in:
- `components/Footer.tsx`
- `components/Community.tsx`

Update the `href` attributes with your actual social media URLs.

### Customize Colors

Modify the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    orange: '#FF6B35',
    purple: '#9B5DE5',
  },
  // ... other colors
}
```

## 📱 Deployment on Vercel

1. Push your code to GitHub

2. Import your repository in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. Configure your project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. Click "Deploy"

Your site will be live in minutes!

### Environment Variables (Optional)

If you need custom RPC endpoints or API keys:

```env
NEXT_PUBLIC_SOLANA_RPC_URL=your_rpc_url_here
```

## 📂 Project Structure

```
candybags-memecoin/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── About.tsx           # About section
│   ├── Community.tsx       # Community & socials
│   ├── Footer.tsx          # Footer component
│   ├── HalloweenBackground.tsx  # Animated background
│   ├── Hero.tsx            # Hero section
│   ├── HowToBuy.tsx        # Buy guide
│   ├── Navbar.tsx          # Navigation bar
│   ├── Roadmap.tsx         # Project roadmap
│   ├── Tokenomics.tsx      # Token distribution
│   └── WalletProvider.tsx  # Solana wallet setup
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── README.md              # This file
```

## 🎃 Features Checklist

- [x] Responsive design
- [x] Wallet connection (Phantom, Solflare)
- [x] Halloween-themed animations
- [x] Floating particle background
- [x] Hero section with stats
- [x] About section
- [x] Tokenomics with distribution chart
- [x] How to Buy guide
- [x] Roadmap timeline
- [x] Community & social links
- [ ] Jupiter swap widget integration (coming soon)
- [ ] Live price tracker API
- [ ] Meme gallery
- [ ] NFT integration

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

CandyBags is a memecoin created for entertainment purposes only. It has no intrinsic value or expectation of financial return. Always do your own research and invest responsibly.

## 📞 Support

- Twitter: [Your Twitter]
- Telegram: [Your Telegram]
- Discord: [Your Discord]
- Email: [Your Email]

## 🎉 Acknowledgments

- Built with love by the CandyBags community
- Special thanks to all contributors and holders
- Halloween spirit provided by 🎃

---

**Made with 👻 for the Solana community**

Trick or Treat! 🍬


