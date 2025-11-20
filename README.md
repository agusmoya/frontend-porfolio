[![Netlify Status](https://api.netlify.com/api/v1/badges/06276d48-5582-477c-a6f9-4238025264b4/deploy-status)](https://app.netlify.com/projects/am-porfolio/deploys)

## 📸 Preview

![Portfolio Preview](public/mockup.gif)

---

# 🚀 Personal Portfolio

A modern, accessible, and visually appealing portfolio built with **React**, **TypeScript**, and **CSS Modules**. Designed to showcase your skills, experience, and projects following Material Design 3 principles.

---

## ✨ Features

- **Responsive Design** – Mobile-first, adapts to all devices
- **Material Design 3** – Button, spacing, and typography tokens
- **Animated Backgrounds** – Customizable blobs and SVG shapes
- **Accessible Components** – Keyboard navigation, ARIA labels, color contrast
- **Multi-language Support** – English & Spanish (i18n)
- **Project Carousel** – Scrollable, keyboard-accessible project cards
- **Contact Form** – EmailJS integration, copy-to-clipboard, animated tooltips
- **Dark/Light Theme Toggle** – User preference saved
- **Performance Optimized** – Lighthouse-ready, lazy loading images

---

## 🛠️ Tech Stack

- **React 19**
- **TypeScript 5**
- **Vite**
- **CSS Modules**
- **Material Design 3 tokens**
- **EmailJS** (contact form)
- **i18n** (custom context)

---

## 📦 Installation

```bash
# Install **dependencies**
pnpm install

# Start development server
pnpm dev
```

---

## 📁 Project Structure

```
src/
  components/      # Reusable UI components (Button, Card, Tooltip, etc.)
  pages/           # Main sections (Hero, About, Projects, Contact)
  layouts/         # Layout components
  styles/          # Global styles, tokens, resets
  i18n/            # Language context and translations
  assets/          # Images and static files
public/            # Static files (favicon, CV, etc.)
```

---

## 🖼️ Customization

- **Edit your info:** `src/i18n/translations/en.ts` and `es.ts`
- **Add projects:** Update the `projects.items` array in translation files
- **Change theme colors:** Edit CSS tokens in `src/styles/tokens/colors-*.css`
- **Replace avatar:** Update `src/assets/avatar.webp`
- **Upload your CV:** Place PDF in `/public` and update the link in `Hero.tsx`

---

## 🧑‍💻 Accessibility & Best Practices

- All interactive elements have ARIA labels
- Keyboard navigation for carousels and forms
- Color contrast meets WCAG AA
- Responsive spacing and typography via tokens

---

## 📬 Contact

Feel free to reach out via the contact form or copy the email address provided.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Credits

Created by [Agustín Moya](https://github.com/agusmoya).
