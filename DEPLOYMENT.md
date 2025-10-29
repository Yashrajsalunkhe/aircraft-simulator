# 🚀 Deployment Guide - Vercel

This application is ready to deploy on Vercel. Follow these simple steps:

## Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy from project directory**:
```bash
cd /home/yashraj/YASHRAJ/airplane
vercel
```

4. **Follow the prompts**:
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N** (for first deployment)
   - What's your project's name? **aircraft-simulator** (or your preferred name)
   - In which directory is your code located? **./** 
   - Want to override settings? **N**

5. **Deploy to production**:
```bash
vercel --prod
```

## Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit - Aircraft Simulator"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Go to [vercel.com](https://vercel.com)**

3. **Import your repository**:
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it as a Create React App

4. **Configure (if needed)**:
   - Framework Preset: **Create React App**
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

5. **Click "Deploy"**

## Environment Variables (if needed in future)

If you need to add environment variables:
- In Vercel Dashboard: Settings → Environment Variables
- Or in CLI: Use `.env` files (already in `.gitignore`)

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Build Configuration

The project is configured with:
- ✅ `vercel.json` - Routing configuration
- ✅ `.vercelignore` - Files to ignore during deployment
- ✅ `vercel-build` script in package.json
- ✅ React app optimized for production build

## Post-Deployment

After deployment, your app will be available at:
- **Production**: `https://your-project-name.vercel.app`
- **Preview**: Automatic preview URLs for each git push

## Automatic Deployments

Once connected to GitHub:
- 🔄 Every push to `main` branch → Production deployment
- 🔄 Every push to other branches → Preview deployment
- 🔄 Every pull request → Preview deployment

## Performance Tips

The app is already optimized with:
- ✅ Code splitting
- ✅ Minified production build
- ✅ Optimized images
- ✅ Fast CDN delivery via Vercel Edge Network

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

---

**Your app is now ready to deploy! 🎉**
