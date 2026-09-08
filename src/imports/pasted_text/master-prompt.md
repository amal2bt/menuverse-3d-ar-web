Here is the complete, unified master prompt. You can copy this entire block and paste it directly into your AI code generator (like v0, Claude, or a Figma-to-React AI plugin) along with all of your screenshots.

I have combined all sections and placed special emphasis on the critical animations you requested.

---

### 📋 Copy and Paste the Prompt Below:

**Role:** You are an expert Frontend Developer specializing in React, Tailwind CSS, and Framer Motion.

**Task:** I need you to build a comprehensive, multi-section landing page and an admin login screen for a restaurant SaaS platform. I am attaching screenshots of the design. Please create fully functional, highly polished React components based on these visuals.

**Technical Stack:**

* React (Functional components & Hooks)
* Tailwind CSS (for all styling and responsive design)
* Framer Motion (for modern, fluid animations)
* Google's `<model-viewer>` web component (for rendering the 3D `.glb` and `.usdz` files)
* Lucide React (for icons)

**Global Aesthetic Rules:**

* Replicate the sleek, modern aesthetic seen in the screenshots: soft rounded corners (`rounded-2xl` or `rounded-3xl`), subtle soft drop shadows, white/off-white backgrounds, and vibrant orange (`#FF6B00` or similar Tailwind orange) as the primary brand color.
* Make all layouts fully responsive (stacking elegantly on mobile).

Please build the following sections as distinct React components:

---

### 1. Interactive 3D Menu Demo (`<MenuDemo/>`) - **CRITICAL ANIMATIONS REQUIRED**

This is the most important section. Replicate the 3D demo block shown in the screenshots.

* **The Moving Menu Items (Left Sidebar):** Look closely at the screenshots showing the dish list (01 Trüf Pizzası, 02 Wagyu Burger, etc.). When a user clicks a different dish, the "active" state background and the left-border indicator must smoothly *glide* from the previous item to the newly selected item. **You must use Framer Motion's `layoutId` property to create this seamless shared layout animation.**
* **Dynamic Content Updates:** When a new menu item is clicked, the right side of the layout must instantly update to show the new dish's 3D model, title, description, and price using smooth fade transitions (`AnimatePresence`).
* **State Management:** Create an `activeDish` state holding the currently selected dish. Default to the first item.
* **Scroll Animations:** Implement an `animate-on-scroll` effect for the header and the main stage (fade in and slight translate upwards) using Framer Motion's `whileInView`.
* **Data Structure:** Extract the dish data (name, description, price, model URLs) from this exact HTML snippet and convert it into a reusable React array of objects:

```html
<div class="container">
    <header class="demo-menu__header animate-on-scroll">
        <span class="demo-menu__eyebrow" data-i18n="demo_eyebrow">İNTERAKTİF 3D MENÜ DEMOSU</span>
        <h2 id="demo-menu-title" data-i18n="demo_title">Misafirlerinizin Göreceği 3D Menüyü Hemen Deneyin</h2>
        <p data-i18n="demo_desc">Bir ürüne dokunun, 360° döndürün, AR ile masanızda gerçek boyutta görüntüleyin. Bu demo, restoranınıza 24 saat içinde kurduğumuz QR menü deneyiminin birebir aynısıdır.</p>
    </header>
    <div class="demo-menu__stage animate-on-scroll">
        <aside class="demo-menu__list" role="tablist" aria-label="Tasting menu">
            <button class="demo-dish" role="tab" aria-selected="false" data-dish="pizza" data-model="models/pizza.glb" data-ios-model="models/pizza.usdz" data-name-tr="Trüf Pizzası" data-name-en="Truffle Pizza" data-name-ar="بيتزا الكمأ" data-desc-tr="El açma hamur, kara kış trüfü, mozzarella di bufala, San Marzano domates." data-desc-en="Hand-stretched dough, black winter truffle, mozzarella di bufala, San Marzano tomato." data-desc-ar="عجين يدوي، كمأ شتوي أسود، موزاريلا دي بوفالا، طماطم سان مارزانو." data-price="₺680 · AED 90">

```

---

### 2. Pricing Section (`<PricingSection/>`)

* **Layout:** A 3-column grid for pricing tiers (Basic, Premium, Kurumsal).
* **Styling:** Highlight the middle "Premium" card with an orange border, a slight scale up, and an "EN ÇOK TERCİH EDİLEN" badge at the top. Use soft rounded corners and subtle shadows.
* **Interactivity:** Include a toggle switch at the top for "Aylık Ödeme" (Monthly) vs "Yıllık Ödeme" (Yearly). Map features with orange checkmark icons.

---

### 3. FAQ Section (`<FAQSection/>`)

* **Header:** Title "Sıkça Sorulan Sorular", subtitle, and a prominent search input with a soft shadow.
* **Filter Pills:** Clickable category pills (Tümü, Genel, vs.). Active pill gets an orange background.
* **Interactive Accordion (CRITICAL):** Use **Framer Motion's `<AnimatePresence>**` to animate the `height` and `opacity` of the answer text when a question is clicked (`initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}`). Rotate the chevron icon 180 degrees when open.

---

### 4. Lead Generation Form (`<ContactSection/>`)

* **Layout:** A two-column card (`grid-cols-1 md:grid-cols-2`).
* **Left Side:** Title ("Restoranınızı Bir Üst Seviyeye Taşımaya Hazır mısınız?"), description, and benefits list with orange checkmarks.
* **Right Side:** Clean form fields (Name, Restaurant Name, Email, Phone, Textarea). Use highly rounded inputs with light gray backgrounds. Orange submit button with a hover effect (`hover:scale-105`).

---

### 5. Blog Grid (`<BlogSection/>`)

* **Layout:** A 3-column CSS grid.
* **Card Design:** Top half is a solid vibrant color block (blue, purple, green, orange) containing a large, centered white icon. Bottom half is white with a category pill, read time, bold title, excerpt, and "Yazıyı Oku ->" link.
* **Animation:** Wrap cards in `whileHover={{ y: -5 }}` for a slight lift effect.

---

### 6. Admin Login Screen (`<AdminLogin/>`)

* **Layout:** A clean, centered card on a very light gray/off-white background.
* **Header:** Orange logo block at the top, Title ("Menuverse Admin"), Subtitle ("İşletmenizi yönetmeye hemen başlayın.").
* **Inputs:** `E-POSTA` and `ŞİFRE` fields with small icons inside or just above the borders.
* **Links & Buttons:** A right-aligned "Şifremi Unuttum" link in small orange text. A full-width orange "Giriş Yap" button with an icon. A footer text reading "Henüz hesabınız yok mu? Kayıt Ol" (with Kayıt Ol in orange).

**Final Polish:** Wrap all landing page sections (1-5) in a container that uses Framer Motion's `whileInView` to fade in and slide up slightly (`y: 20` to `y: 0`) as the user scrolls, using `viewport={{ once: true, margin: "-100px" }}`.