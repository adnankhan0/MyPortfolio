# Push to GitHub & Deploy on Vercel

Your code is committed locally. The remote is set to `https://github.com/adnankhan0/MyPortfolio.git`. Create the repo on GitHub first, then push.

## 1. Push to GitHub

### Step 1: Create the repository on GitHub (do this first)

1. Open: **https://github.com/new?name=MyPortfolio**
2. **Repository name:** `MyPortfolio` (or change it; if you do, see “Different repo name” below)
3. **Visibility:** Public
4. **Do not** check “Add a README”, “Add .gitignore”, or “Choose a license”
5. Click **Create repository**

### Step 2: Push your code

In a terminal (PowerShell or Command Prompt):

```bash
cd d:\Development\MyPortfolio
git push -u origin main
```

Sign in with GitHub when prompted (or use a Personal Access Token if you use 2FA).

**Different repo name?** If you didn’t use `MyPortfolio`, update the remote then push:

```bash
git remote set-url origin https://github.com/adnankhan0/YOUR-REPO-NAME.git
git push -u origin main
```

When prompted, sign in with your GitHub account (or use a Personal Access Token if you use 2FA).

---

## 2. Deploy on Vercel

### Option A: Deploy from Vercel website (recommended)

1. Go to **https://vercel.com** and sign in (use **Continue with GitHub**).
2. Click **Add New…** → **Project**.
3. **Import** your `MyPortfolio` (or your repo name) from the list.
4. Vercel will detect **Vite** and use:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Your site will be live in about a minute.
6. You’ll get a URL like `my-portfolio-xxx.vercel.app`. You can add a custom domain in **Project → Settings → Domains**.

### Option B: Deploy with Vercel CLI

```bash
npm i -g vercel
cd d:\Development\MyPortfolio
vercel
```

Follow the prompts (login, link to existing project or create new one). Then:

```bash
vercel --prod
```

to deploy to production.

---

## After deployment

- Every **push to the default branch** (e.g. `master`) will trigger a new Vercel deployment.
- Your portfolio is served from the root (`base: '/'` in `vite.config.js`), so links and assets work correctly on Vercel.
