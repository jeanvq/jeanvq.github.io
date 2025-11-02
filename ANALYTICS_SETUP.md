# 📊 Google Analytics Setup Guide

## 🚀 Quick Setup Steps

### 1. Create Google Analytics Account
1. Go to: https://analytics.google.com
2. Click "Get started" 
3. Sign in with your Google account

### 2. Create Property
1. Click "Create Account"
2. Fill in:
   - **Account name**: "Jeancarlo Portfolio"
   - **Property name**: "Jeancarlo Ricardo Portfolio" 
   - **Website URL**: `https://jeanvq.github.io`
   - **Industry**: "Computers and Electronics"
   - **Country**: Colombia

### 3. Get Your Tracking ID
After creating the property, Google will show you a **Measurement ID** like:
- `G-XXXXXXXXXX` (GA4 format - recommended)
- `UA-XXXXXXXXX-X` (Universal Analytics - older)

### 4. Update Your Website
1. Open `index.html`
2. Find this line (around line 11):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID_HERE"></script>
   ```
3. Replace `YOUR_GA_ID_HERE` with your real ID
4. Also replace it in line 17:
   ```javascript
   gtag('config', 'YOUR_GA_ID_HERE', {
   ```

### 5. Example of Final Code
```html
<!-- If your ID is G-ABC123DEF456 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF456"></script>
<script>
  gtag('config', 'G-ABC123DEF456', {
```

### 6. Deploy and Test
1. Commit and push changes to GitHub
2. Wait 24-48 hours for data to appear
3. Check your Google Analytics dashboard

## 📈 What You'll See
- **Visitors**: How many people visit your portfolio
- **Countries**: Where your visitors are from  
- **Devices**: Mobile vs Desktop usage
- **Popular Projects**: Which projects get most clicks
- **Theme Usage**: Dark vs Light mode preference

## 🎯 Events Being Tracked
Your portfolio automatically tracks:
- ✅ Page views
- ✅ Theme toggles (dark/light mode)
- ✅ Contact link clicks  
- ✅ Project interactions
- ✅ Gallery navigation

## 🔒 Privacy
- Analytics is completely invisible to visitors
- No personal data is collected
- Only aggregated statistics
- GDPR compliant

## ❓ Need Help?
If you get stuck, the most common issues are:
1. **Wrong ID format** - Make sure you copied the full ID
2. **Caching** - Clear browser cache after updating
3. **Wait time** - Data takes 24-48 hours to appear

---
**Your portfolio is ready for analytics! 🚀**