Here is the complete, unified master prompt, heavily emphasizing the critical 3D interactive section and including the instruction to generate all UI content in English.

You can copy the block below and paste it directly into your AI code generator alongside all your screenshots.

---

### 📋 Copy and Paste the Prompt Below:

**Role:** You are an expert Frontend Developer specializing in React, Tailwind CSS, and Framer Motion.

**Task:** I need you to build a comprehensive, multi-section landing page and an admin login screen for a restaurant SaaS platform. I am attaching screenshots of the design (currently in Turkish). **Please build the fully functional React components based on these visuals, but translate all UI text, headings, and descriptions into English.**

**Technical Stack:**

* React (Functional components & Hooks)
* Tailwind CSS (for all styling and responsive design)
* Framer Motion (for modern, fluid animations)
* Google's `<model-viewer>` web component (for rendering 3D `.glb` and `.usdz` files)
* Lucide React (for icons)

**Global Aesthetic Rules:**

* Replicate the sleek, modern aesthetic: soft rounded corners (`rounded-2xl` or `rounded-3xl`), subtle soft drop shadows, white/off-white backgrounds, and vibrant orange (`#FF6B00` or similar Tailwind orange) as the primary brand color.
* Make all layouts fully responsive (stacking elegantly on mobile).

Please build the following sections as distinct React components:

---

### 1. Hero Section (`<HeroSection/>`)

* **Layout:** Centered text.
* **Content (in English):** Eyebrow text ("TURKEY'S #1 3D QR MENU PLATFORM"), massive bold headline ("Transform Your Menu into a 3D Experience" with "3D Experience" highlighted in orange), subtitle text.
* **Buttons:** "Get a Free Demo" (Solid orange) and "See Live Demo" (Outline/White).
* **Stats Bar:** A row at the bottom showing "500+ Active Restaurants", "34% Avg. Revenue Increase", and "24h Setup Time".

---

### 2. Interactive 3D Menu Demo (`<MenuDemo/>`) - **🚨 CRITICAL: CORE REQUIREMENTS & ANIMATIONS 🚨**

This is the most important section of the page. You must perfectly replicate the 3D demo block shown in the screenshots, paying strict attention to these specific Framer Motion mechanics:

* **The Moving Menu Items (Left Sidebar):** When a user clicks a different dish from the list (e.g., 01 Truffle Pizza, 02 Wagyu Burger), the "active" state background and the left-border indicator must smoothly *glide* from the previous item to the newly selected item. **You MUST use Framer Motion's `layoutId` property to create this seamless shared layout animation.**
* **Dynamic Content Updates:** When a new menu item is clicked, the right side of the layout must instantly update to show the new dish's 3D model, title, description, and price using smooth fade transitions via **Framer Motion's `<AnimatePresence>**`.
* **State Management:** Create an `activeDish` state holding the currently selected dish. Default to the first item ("Truffle Pizza").
* **Scroll Animations:** Implement an `animate-on-scroll` effect for the header and the main stage (fade in and slight translate upwards) using Framer Motion's `whileInView`.
* **Data Structure:** I have extracted the dish data for you. Use this English array for the state:

```javascript
const menuData = [
  { id: 'pizza', number: '01', name: 'Truffle Pizza', desc: 'Hand-stretched dough, black winter truffle, mozzarella di bufala, San Marzano tomato.', price: '$40', model: 'models/pizza.glb', iosModel: 'models/pizza.usdz' },
  { id: 'burger', number: '02', name: 'Wagyu Burger', desc: 'Premium wagyu beef, caramelized onions, truffle mayo, brioche bun.', price: '$52', model: 'models/burger.glb', iosModel: 'models/burger.usdz' },
  { id: 'sashimi', number: '03', name: 'Salmon Sashimi', desc: 'Freshly sliced premium salmon, daikon radish, pickled ginger, soy sauce.', price: '$32', model: 'models/sashimi.glb', iosModel: 'models/sashimi.usdz' },
  { id: 'risotto', number: '04', name: 'Black Risotto', desc: 'Squid ink, arborio rice, fresh seafood mix, parmesan crisp.', price: '$42', model: 'models/risotto.glb', iosModel: 'models/risotto.usdz' },
  { id: 'cake', number: '05', name: 'Lava Cake', desc: 'Warm chocolate cake with a molten center, vanilla bean ice cream.', price: '$18', model: 'models/cake.glb', iosModel: 'models/cake.usdz' }
];

```

---

### 3. Pricing Section (`<PricingSection/>`)

* **Layout:** A 3-column grid for pricing tiers (Basic, Premium, Enterprise - translated).
* **Styling:** Highlight the middle "Premium" card with an orange border, a slight scale up, and a "MOST POPULAR" badge at the top. Use soft rounded corners and subtle shadows.
* **Interactivity:** Include a toggle switch at the top for "Monthly" vs "Yearly" billing. Map features with orange checkmark icons.

---

### 4. FAQ Section (`<FAQSection/>`)

* **Header:** Title "Frequently Asked Questions", subtitle, and a prominent search input with a soft shadow.
* **Filter Pills:** Clickable category pills (All, General, Pricing, Tech, etc.). Active pill gets an orange background.
* **Interactive Accordion (CRITICAL):** Use **Framer Motion's `<AnimatePresence>**` to animate the `height` and `opacity` of the answer text when a question is clicked (`initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}`). Rotate the chevron icon 180 degrees when open.

---

### 5. Blog Grid (`<BlogSection/>`)

* **Layout:** A 3-column CSS grid.
* **Card Design:** Top half is a solid vibrant color block (blue, purple, green, orange) containing a large, centered white icon. Bottom half is white with a category pill, read time, bold title, excerpt, and "Read Article ->" link.
* **Animation:** Wrap cards in `whileHover={{ y: -5 }}` for a slight lift effect.

---

### 6. Lead Generation Form (`<ContactSection/>`)

* **Layout:** A two-column card (`grid-cols-1 md:grid-cols-2`).
* **Left Side (Orange Background):** Title ("Ready to Take Your Restaurant to the Next Level?"), description, and benefits list with checkmarks.
* **Right Side (White Background):** Clean form fields (Name, Restaurant Name, Email, Phone, Textarea). Use highly rounded inputs with light gray backgrounds. Orange submit button with a hover effect (`hover:scale-105`).

---

### 7. Admin Login Screen (`<AdminLogin/>`)

* **Layout:** A clean, centered card on a very light gray/off-white background.
* **Header:** Orange logo block at the top, Title ("Menuverse Admin"), Subtitle ("Start managing your business now.").
* **Inputs:** `EMAIL` and `PASSWORD` fields with small icons.
* **Links & Buttons:** A right-aligned "Forgot Password?" link in small orange text. A full-width orange "Login" button with an icon. A footer text reading "Don't have an account? Sign Up".

**Final Polish:** Wrap sections 1-6 in a main container that uses Framer Motion's `whileInView` to fade in and slide up slightly (`y: 20` to `y: 0`) as the user scrolls, using `viewport={{ once: true, margin: "-100px" }}`. Ensure absolutely all text rendered by the components is in English.