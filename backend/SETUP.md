# Netlify Forms Setup Guide

## Step 1: Connect GitHub to Netlify (5 min)

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign up** → **GitHub**
3. Authorize Netlify
4. Click **Add new site** → **Import an existing project**
5. Select **GitHub** → Find `Portfolio-website`
6. Click **Deploy**

---

## Step 2: Enable Form Notifications

1. In Netlify dashboard, go to **Site settings**
2. Click **Forms** → **Form notifications**
3. Add **Email notification**
4. Enter: `SamuelDevdas01@gmail.com`
5. Save

---

## Step 3: Update DNS (if using custom domain)

1. Go to **Domain settings** in Netlify
2. Add `truevineinsights.ch`
3. Update your DNS to point to Netlify

---

## Done!

Your form will now:
- ✅ Send emails to your inbox
- ✅ Work on mobile
- ✅ Block spam (honeypot enabled)
- ✅ Store submissions in Netlify dashboard
