# 🚀 CandyBags Deployment Guide

This guide will help you deploy your CandyBags website to Vercel in minutes.

## Prerequisites

- A GitHub account
- A Vercel account (free tier is perfect)
- Your Solana token contract address

## Step 1: Prepare Your Repository

1. **Update Contract Address**
   
   Edit `components/Tokenomics.tsx` and replace the placeholder:
   ```typescript
   [Your Solana Token Address Here]
   ```
   with your actual token address.

2. **Add Social Media Links**
   
   Update links in:
   - `components/Footer.tsx`
   - `components/Community.tsx`
   - `components/Navbar.tsx` (if needed)

3. **Commit Your Changes**
   ```bash
   git init
   git add .
   git commit -m "Initial CandyBags website"
   ```

4. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/candybags.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings:
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **"Deploy"**
6. Wait 2-3 minutes for the build to complete
7. Your site is live! 🎉

### Option B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Step 3: Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `candybags.xyz`)
4. Follow the instructions to update your DNS records
5. Vercel automatically provisions SSL certificates

## Step 4: Environment Variables (Optional)

If you need custom configurations:

1. In Vercel Dashboard, go to **"Settings"** → **"Environment Variables"**
2. Add variables:
   ```
   NEXT_PUBLIC_SOLANA_RPC_URL=your_custom_rpc_url
   ```
3. Redeploy your site

## Step 5: Post-Deployment Checklist

- [ ] Test wallet connection on live site
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check loading speed (should be fast!)
- [ ] Update social media with your new URL
- [ ] Share with the community! 🎃

## Common Issues & Solutions

### Issue: Wallet adapter not working
**Solution**: Make sure you're using HTTPS (Vercel provides this automatically)

### Issue: Build fails
**Solution**: Run `npm run build` locally first to catch errors

### Issue: Slow loading
**Solution**: 
- Optimize images (use WebP format)
- Enable Vercel's Analytics to monitor performance

### Issue: Environment variables not working
**Solution**: 
- Prefix public variables with `NEXT_PUBLIC_`
- Redeploy after adding variables

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Edge caching
- ✅ Image optimization
- ✅ Automatic code splitting

## Monitoring

1. **Vercel Analytics** (recommended)
   - Go to your project → Analytics
   - See real-time visitor data

2. **Add Google Analytics** (optional)
   - Get GA tracking ID
   - Add to environment variables
   - Update `app/layout.tsx` with GA script

## Continuous Deployment

Vercel automatically:
- Deploys on every push to `main` branch
- Creates preview deployments for pull requests
- Runs build checks before merging

## Cost

- **Free tier includes**:
  - Unlimited websites
  - 100GB bandwidth/month
  - Custom domains
  - SSL certificates
  - This is more than enough for most memecoin sites!

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Our Telegram: [Your Telegram Link]

---

**Ready to launch? Let's go! 🚀🎃**

The CandyBags community is waiting!


