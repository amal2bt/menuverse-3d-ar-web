export type Language = "tr" | "en" | "ar";

export type TranslationKey =
  // Header / nav
  | "nav.demo"
  | "nav.industries"
  | "nav.features"
  | "nav.pricing"
  | "nav.faq"
  | "nav.contact"
  | "nav.getStarted"
  | "nav.about"
  | "nav.testimonials"
  // Hero
  | "hero.pill"
  | "hero.title.line1"
  | "hero.title.highlight"
  | "hero.title.line2"
  | "hero.subtitle"
  | "hero.cta.primary"
  | "hero.cta.secondary"
  | "hero.stat.commission.value"
  | "hero.stat.commission.label"
  | "hero.stat.interactive.value"
  | "hero.stat.interactive.label"
  | "hero.stat.compliance.value"
  | "hero.stat.compliance.label"
  // Industries
  | "industries.title"
  | "industries.subtitle"
  | "ind.restaurant"
  | "ind.cafe"
  | "ind.hotel"
  | "ind.bar"
  | "ind.fastfood"
  | "ind.vegan"
  // Features
  | "features.title"
  | "features.subtitle"
  | "feat.1.title"
  | "feat.1.desc"
  | "feat.2.title"
  | "feat.2.desc"
  | "feat.3.title"
  | "feat.3.desc"
  | "feat.4.title"
  | "feat.4.desc"
  | "feat.5.title"
  | "feat.5.desc"
  | "feat.6.title"
  | "feat.6.desc"
  | "feat.7.title"
  | "feat.7.desc"
  | "feat.8.title"
  | "feat.8.desc"
  | "features.compliance"
  // Demo
  | "demo.title"
  | "demo.subtitle"
  | "demo.drag"
  | "demo.showOnTable"
  | "demo.viewInAR"
  | "demo.addToOrder"
  | "demo.qrTitle"
  | "demo.qrDesc"
  // Demo Categories
  | "category.mainDishes"
  | "category.desserts"
  | "category.drinks"
  // Demo Dishes (Names & Descriptions)
  | "dish.pizza.name"
  | "dish.pizza.desc"
  | "dish.iceCream.name"
  | "dish.iceCream.desc"
  | "dish.sushi.name"
  | "dish.sushi.desc"
  | "dish.coffee.name"
  | "dish.coffee.desc"
  | "dish.burger.name"
  | "dish.burger.desc"
  | "dish.hotdog.name"
  | "dish.hotdog.desc"
  | "dish.donut.name"
  | "dish.donut.desc"
  | "dish.cupcake.name"
  | "dish.cupcake.desc"
  | "dish.strawberryCake.name"
  | "dish.strawberryCake.desc"
  | "dish.orangeJuice.name"
  | "dish.orangeJuice.desc"
  | "dish.mintTea.name"
  | "dish.mintTea.desc"
  | "dish.strawberryJuice.name"
  | "dish.strawberryJuice.desc"
  // How it works
  | "how.title"
  | "how.subtitle"
  | "how.1.title"
  | "how.1.desc"
  | "how.2.title"
  | "how.2.desc"
  | "how.3.title"
  | "how.3.desc"
  // Testimonials
  | "testi.title"
  | "testi.subtitle"
  | "testi.1.name"
  | "testi.1.role"
  | "testi.1.quote"
  | "testi.2.name"
  | "testi.2.role"
  | "testi.2.quote"
  | "testi.3.name"
  | "testi.3.role"
  | "testi.3.quote"
  // Pricing
  | "pricing.title"
  | "pricing.subtitle"
  | "pricing.monthly"
  | "pricing.yearly"
  | "pricing.save"
  | "pricing.basic.name"
  | "pricing.basic.desc"
  | "pricing.premium.name"
  | "pricing.premium.desc"
  | "pricing.enterprise.name"
  | "pricing.enterprise.desc"
  | "pricing.basic.f1"
  | "pricing.basic.f2"
  | "pricing.basic.f3"
  | "pricing.basic.f4"
  | "pricing.basic.f5"
  | "pricing.premium.f1"
  | "pricing.premium.f2"
  | "pricing.premium.f3"
  | "pricing.premium.f4"
  | "pricing.premium.f5"
  | "pricing.enterprise.f1"
  | "pricing.enterprise.f2"
  | "pricing.enterprise.f3"
  | "pricing.enterprise.f4"
  | "pricing.enterprise.f5"
  | "pricing.popular"
  | "pricing.cta.basic"
  | "pricing.cta.premium"
  | "pricing.cta.enterprise"
  // FAQ
  | "faq.title"
  | "faq.subtitle"
  | "faq.q1"
  | "faq.a1"
  | "faq.q2"
  | "faq.a2"
  | "faq.q3"
  | "faq.a3"
  | "faq.q4"
  | "faq.a4"
  | "faq.q5"
  | "faq.a5"
  // Contact
  | "contact.title"
  | "contact.subtitle"
  | "contact.name"
  | "contact.restaurant"
  | "contact.email"
  | "contact.phone"
  | "contact.message"
  | "contact.submit"
  | "contact.submitting"
  | "contact.success"
  | "contact.error.required"
  | "contact.error.email"
  // Footer / misc
  | "footer.tagline"
  | "footer.rights"
  | "footer.brand"
  | "common.learnMore";

type Dict = Record<TranslationKey, string>;

export const translations: Record<Language, Dict> = {
  tr: {
    "nav.demo": "Menü Demo",
    "nav.industries": "Sektörler",
    "nav.features": "Özellikler",
    "nav.pricing": "Fiyatlandırma",
    "nav.faq": "SSS",
    "nav.contact": "İletişim",
    "nav.getStarted": "Hemen Başla",
    "nav.about": "Hakkında",
    "nav.testimonials": "Referanslar",
    "hero.pill": "Sipariş Komisyonu %0 · 3D & AR Menü · AI ile 5 Dakikada Kur",
    "hero.title.line1": "Menünüzü",
    "hero.title.highlight": "3D Deneyime",
    "hero.title.line2": "Dönüştürün",
    "hero.subtitle": "QR kodu taratın, yemekleri 360° keşfedin ve AR ile masanızda birebir görün. 24 saat içinde kurulum.",
    "hero.cta.primary": "Hemen Başla",
    "hero.cta.secondary": "Canlı Demoyu Gör",
    "hero.stat.commission.value": "%0",
    "hero.stat.commission.label": "Sipariş Komisyonu",
    "hero.stat.interactive.value": "3D & AR",
    "hero.stat.interactive.label": "İnteraktif Menü",
    "hero.stat.compliance.value": "2026",
    "hero.stat.compliance.label": "Tarım Bakanlığı Uyumlu",
    "industries.title": "Her Mekâna Uygun",
    "industries.subtitle": "Altı farklı sektöre özel olarak tasarlanan dijital menü çözümümüzü keşfedin.",
    "ind.restaurant": "Restoran & Fine Dining",
    "ind.cafe": "Kafe & Pastane",
    "ind.hotel": "Otel & Resort Restoranları",
    "ind.bar": "Bar & Cocktail Mekânları",
    "ind.fastfood": "Fast Food & Şube Zincirleri",
    "ind.vegan": "Sağlıklı & Vegan Konseptler",
    "features.title": "Güçlü Özellikler",
    "features.subtitle": "İşletmenizi geleceğe taşıyan, uçtan uca dijital menü platformu.",
    "feat.1.title": "3D & AR İnteraktif Menü",
    "feat.1.desc": "Yemekleri 360° döndürün ve AR ile masada birebir görün.",
    "feat.2.title": "Hızlı QR Masa Siparişi",
    "feat.2.desc": "Masa QR kodu ile bir dokunuşla sipariş.",
    "feat.3.title": "Görsel Satış Artırma",
    "feat.3.desc": "Sepet optimizasyonu ile ortalama sepet tutarını yükseltin.",
    "feat.4.title": "White-Label Markalama",
    "feat.4.desc": "Kendi marka renkleriniz ve logonuzla tam kişiselleştirme.",
    "feat.5.title": "Merkezi Fiyat & Stok Yönetimi",
    "feat.5.desc": "Fiyat ve stoğu tek panelden anında güncelleyin.",
    "feat.6.title": "Çoklu Dil Desteği",
    "feat.6.desc": "TR, EN ve AR dillerinde otomatik çeviri ve RTL desteği.",
    "feat.7.title": "AI Menü Aktarımı",
    "feat.7.desc": "PDF/Excel menülerinizi AI ile saniyeler içinde dijitalleştirin.",
    "feat.8.title": "Özel Online Sipariş (%0)",
    "feat.8.desc": "Komisyon olmadan kendi entegre sipariş sisteminiz.",
    "features.compliance": "Tarım Bakanlığı 2026 Menü Yönetmeliği uyumlu: kalori, alerjen ve gramaj bilgileri otomatik dahildir.",
    "demo.title": "İnteraktif 3D Tadım Tezgâhı",
    "demo.subtitle": "Misafirinizin göreceği gerçek kart. Yemeği seçin, döndürün, masada gösterin.",
    "demo.drag": "SÜRÜKLE • YAKINLAŞTIR",
    "demo.showOnTable": "Masamda Göster",
    "demo.viewInAR": "AR ile Göster",
    "demo.addToOrder": "Siparişe Ekle",
    "demo.qrTitle": "Mobil Cihazınızla Taratın",
    "demo.qrDesc": "WebAR deneyimini başlatmak için QR kodu telefonunuzla tarayın.",
    "category.mainDishes": "ANA YEMEKLER",
    "category.desserts": "TATLILAR",
    "category.drinks": "İÇECEKLER",
    "dish.pizza.name": "Trüf Pizzası",
    "dish.pizza.desc": "El açma hamur, kara kış trüfü, mozzarella di bufala, San Marzano domates.",
    "dish.iceCream.name": "Fruits Icecream",
    "dish.iceCream.desc": "A5 Japon wagyu, kavurma kömüründe pişirilmiş, brioche ekmek, eski kaşar.",
    "dish.sushi.name": "Omakase Sushi",
    "dish.sushi.desc": "Şefin seçtiği 8 parça nigiri, mavi yüzgeçli ton, uni, hokkaido tarağı.",
    "dish.coffee.name": "Signature Coffee",
    "dish.coffee.desc": "El yapımı seramik fincanda servis edilen taze demlenmiş nitelikli kahve.",
    "dish.burger.name": "Classic Cheeseburger",
    "dish.burger.desc": "Sulu ızgara köfte, erimiş cheddar, taze marul, domates, susamlı ekmek ve patates kızartması.",
    "dish.hotdog.name": "Grilled Hot Dog",
    "dish.hotdog.desc": "Hardal, relish, taze soğan ve ketçap ile kızarmış yumuşak ekmekte ızgara sosis.",
    "dish.donut.name": "Pink Sprinkle Donut",
    "dish.donut.desc": "Taze pişmiş donut, pembe krema ve renkli çıtır şekerlemeler, modern seramik tabakta.",
    "dish.cupcake.name": "Lavender Vanilla Cupcake",
    "dish.cupcake.desc": "Yumuşak lavanta kreması ve inci taneleriyle süslenmiş vanilyalı cupcake.",
    "dish.strawberryCake.name": "Strawberry Cake",
    "dish.strawberryCake.desc": "Taze çileklerle süslenmiş ve beyaz seramik stantta sunulan yumuşak pembe çilekli pasta.",
    "dish.orangeJuice.name": "Fresh Orange Juice",
    "dish.orangeJuice.desc": "Dilim portakal ve beyaz pipet ile uzun bardakta servis edilen taze sıkılmış portakal suyu.",
    "dish.mintTea.name": "Fresh Mint Tea",
    "dish.mintTea.desc": "Modern tabaklı mat seramik fincanda ve taze nane yapraklarıyla servis edilen sıcak kehribar çay.",
    "dish.strawberryJuice.name": "Fresh Strawberry Juice",
    "dish.strawberryJuice.desc": "Pembe çizgili pipet ve taze çilek garnitürü ile yuvarlak bardakta servis edilen çilek suyu.",
    "how.title": "Nasıl Çalışır?",
    "how.subtitle": "Beş dakikada yayında olun. Üç basit adım.",
    "how.1.title": "Menü İçeriğini Hazırlayın",
    "how.1.desc": "Mevcut PDF/Excel menünüzü yükleyin, AI içeriği dijitalleştirsin.",
    "how.2.title": "QR ve 3D Aktifleştirin",
    "how.2.desc": "3D modelleri, fiyatları ve dilleri yapılandırın.",
    "how.3.title": "Canlıya Alın",
    "how.3.desc": "QR kodlarınızı masalara yerleştirin, misafirleriniz keşfetsin.",
    "testi.title": "Müşterilerimiz Ne Diyor?",
    "testi.subtitle": "Türkiye'nin dört bir yanındaki mekânlardan geri bildirimler.",
    "testi.1.name": "Emre Kaya",
    "testi.1.role": "İstanbul · Fine Dining Restoran",
    "testi.1.quote": "3D menü sayesinde satışlarımız üç ayda %34 arttı. Misafirler çok etkileniyor.",
    "testi.2.name": "Ayşe Demir",
    "testi.2.role": "Ankara · Kafe & Pastane",
    "testi.2.quote": "Kurulum tek gün sürdü. %0 komisyon gerçekten büyük fark yarattı.",
    "testi.3.name": "Mehmet Yılmaz",
    "testi.3.role": "Antalya · Otel Restoran",
    "testi.3.quote": "Çok dilli ve RTL desteği uluslararası misafirlerimiz için mükemmel.",
    "pricing.title": "Esnek Fiyatlandırma",
    "pricing.subtitle": "İşletmenizin boyutuna uygun planı seçin. İstediğiniz zaman iptal edin.",
    "pricing.monthly": "Aylık",
    "pricing.yearly": "Yıllık",
    "pricing.save": "2 Ay Ücretsiz",
    "pricing.basic.name": "Basic",
    "pricing.basic.desc": "Yeni başlayan işletmeler için temel dijital menü.",
    "pricing.premium.name": "Premium",
    "pricing.premium.desc": "3D/AR, %0 komisyonlu sipariş ve POS bağlantıları.",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.desc": "Çok şubeli işletmeler için beyaz etiket çözüm.",
    "pricing.basic.f1": "Dijital QR Menü",
    "pricing.basic.f2": "Fiyat & Stok Yönetimi",
    "pricing.basic.f3": "Tek Dil",
    "pricing.basic.f4": "E-posta Desteği",
    "pricing.basic.f5": "Kendi Alan Adınız",
    "pricing.premium.f1": "3D & AR İnteraktif Menü",
    "pricing.premium.f2": "%0 Komisyonlu Online Sipariş",
    "pricing.premium.f3": "POS/KDS Entegrasyonları",
    "pricing.premium.f4": "TR/EN/AR Çoklu Dil + RTL",
    "pricing.premium.f5": "AI Menü Aktarımı (Aylık 20 Menü)",
    "pricing.enterprise.f1": "Sınırsız Şube",
    "pricing.enterprise.f2": "White-Label Markalama",
    "pricing.enterprise.f3": "Özel AI Kurulumu",
    "pricing.enterprise.f4": "Öncelikli Destek 7/24",
    "pricing.enterprise.f5": "API Erişimi",
    "pricing.popular": "En Popüler",
    "pricing.cta.basic": "Başlayın",
    "pricing.cta.premium": "Premium'a Geçin",
    "pricing.cta.enterprise": "Satış Ekibiyle Görüşün",
    "faq.title": "Sık Sorulan Sorular",
    "faq.subtitle": "Aklınıza takılan her şeyi burada yanıtlıyoruz.",
    "faq.q1": "Kurulum ne kadar sürer?",
    "faq.a1": "Temel kurulum 24 saat, 3D/AR dahil tam kurulum 5 güne kadar tamamlanır. AI menü aktarımı saniyeler sürer.",
    "faq.q2": "Gerçekten %0 komisyon mu?",
    "faq.a2": "Evet. Online siparişlerinizden hiçbir komisyon kesilmez. Yalnızca sabit abonelik ücreti ödersiniz.",
    "faq.q3": "Tarım Bakanlığı 2026 yönetmeliğine uyumlu mu?",
    "faq.a3": "Evet. Kalori, alerjen, gramaj ve fiyat bilgileri otomatik olarak eklenir ve güncel tutulur.",
    "faq.q4": "Kendi modellerimi 3D menüde kullanabilir miyim?",
    "faq.a4": "Evet. Kendi .glb/.usdz dosyalarınızı yükleyebilir veya size özel 3D model üretimini talep edebilirsiniz.",
    "faq.q5": "Sözleşme zorunlu mu?",
    "faq.a5": "Hayır. Aylık veya yıllık ödeme seçenekleriyle istediğiniz zaman iptal edebilirsiniz.",
    "contact.title": "Demo Talep Edin",
    "contact.subtitle": "Size özel bir demo için formu doldurun, 24 saat içinde ulaşalım.",
    "contact.name": "Ad Soyad",
    "contact.restaurant": "İşletme Adı",
    "contact.email": "E-posta",
    "contact.phone": "Telefon (Opsiyonel)",
    "contact.message": "Mesaj (Opsiyonel)",
    "contact.submit": "Demo Talep Et",
    "contact.submitting": "Gönderiliyor...",
    "contact.success": "Talebiniz alındı! En kısa sürede size ulaşacağız.",
    "contact.error.required": "Bu alan zorunludur.",
    "contact.error.email": "Geçerli bir e-posta girin.",
    "footer.tagline": "Türkiye'nin 3D & AR QR menü platformu.",
    "footer.rights": "© 2026 Menuverse. Tüm hakları saklıdır.",
    "footer.brand": "Menuverse",
    "common.learnMore": "Daha Fazla",
  },
  en: {
    "nav.demo": "Menu Demo",
    "nav.industries": "Industries",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    "nav.about": "About",
    "nav.testimonials": "Testimonials",
    "hero.pill": "0% Order Commission · 3D & AR Menu · AI Setup in 5 Minutes",
    "hero.title.line1": "Transform Your Menu",
    "hero.title.highlight": "into a 3D",
    "hero.title.line2": "Experience",
    "hero.subtitle": "Scan a QR code, explore dishes in 360°, and see them life-size on your table with AR. Setup in 24 hours.",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "See Live Demo",
    "hero.stat.commission.value": "0%",
    "hero.stat.commission.label": "Order Commission",
    "hero.stat.interactive.value": "3D & AR",
    "hero.stat.interactive.label": "Interactive Menu",
    "hero.stat.compliance.value": "2026",
    "hero.stat.compliance.label": "Ministry Compliant",
    "industries.title": "Built for Every Venue",
    "industries.subtitle": "A digital menu solution tailored for six different sectors.",
    "ind.restaurant": "Restaurant & Fine Dining",
    "ind.cafe": "Cafe & Pastry",
    "ind.hotel": "Hotel & Resort Restaurants",
    "ind.bar": "Bar & Cocktail Venues",
    "ind.fastfood": "Fast Food & Chain Stores",
    "ind.vegan": "Healthy & Vegan Concepts",
    "features.title": "Powerful Features",
    "features.subtitle": "An end-to-end digital menu platform that takes your business to the future.",
    "feat.1.title": "3D & AR Interactive Menu",
    "feat.1.desc": "Rotate dishes 360° and see them life-size on your table with AR.",
    "feat.2.title": "Fast QR Table Ordering",
    "feat.2.desc": "Order with one tap from the table QR code.",
    "feat.3.title": "Visual Upselling",
    "feat.3.desc": "Raise average basket value with basket optimization.",
    "feat.4.title": "White-Label Branding",
    "feat.4.desc": "Full customization with your own brand colors and logo.",
    "feat.5.title": "Centralized Price & Stock",
    "feat.5.desc": "Update prices and stock instantly from one panel.",
    "feat.6.title": "Multi-language Support",
    "feat.6.desc": "Automatic translation in TR, EN, AR with full RTL support.",
    "feat.7.title": "AI Menu Import",
    "feat.7.desc": "Digitize your PDF/Excel menus with AI in seconds.",
    "feat.8.title": "Custom Online Ordering (0%)",
    "feat.8.desc": "Your own integrated ordering system with zero commission.",
    "features.compliance": "Compliant with the Ministry of Agriculture 2026 Menu Regulation: calories, allergens and grams included automatically.",
    "demo.title": "Interactive 3D Tasting Counter",
    "demo.subtitle": "The exact card your guests will see. Pick a dish, rotate it, show it on the table.",
    "demo.drag": "DRAG • ZOOM",
    "demo.showOnTable": "Show on Table",
    "demo.viewInAR": "View in AR",
    "demo.addToOrder": "Add to Order",
    "demo.qrTitle": "Scan with Your Mobile",
    "demo.qrDesc": "Scan the QR code with your phone to launch the WebAR experience.",
    "category.mainDishes": "MAIN DISHES",
    "category.desserts": "DESSERTS",
    "category.drinks": "DRINKS",
    "dish.pizza.name": "Truffle Pizza",
    "dish.pizza.desc": "Hand-stretched dough, winter truffle, mozzarella di bufala, San Marzano tomatoes.",
    "dish.iceCream.name": "Fruits Ice Cream",
    "dish.iceCream.desc": "Craft sundae served with fresh seasonal fruit and crispy wafers.",
    "dish.sushi.name": "Omakase Sushi",
    "dish.sushi.desc": "Chef's selection of 8 nigiri pieces, bluefin tuna, uni, hokkaido scallop.",
    "dish.coffee.name": "Signature Coffee",
    "dish.coffee.desc": "Freshly brewed specialty coffee, served in a handcrafted ceramic cup.",
    "dish.burger.name": "Classic Cheeseburger",
    "dish.burger.desc": "Juicy grilled beef patty, melted cheddar, fresh lettuce, tomato, and sesame brioche bun, served with golden fries.",
    "dish.hotdog.name": "Grilled Hot Dog",
    "dish.hotdog.desc": "Grilled sausage served in a toasted soft bun with mustard, relish, fresh onions, and ketchup.",
    "dish.donut.name": "Pink Sprinkle Donut",
    "dish.donut.desc": "Freshly baked donut with pink glaze and colorful sprinkles, served on a modern ceramic plate.",
    "dish.cupcake.name": "Lavender Vanilla Cupcake",
    "dish.cupcake.desc": "Vanilla cupcake with soft lavender buttercream, delicate sugar pearls, and a modern ceramic plate.",
    "dish.strawberryCake.name": "Strawberry Cake",
    "dish.strawberryCake.desc": "Soft pink strawberry cake decorated with fresh red strawberries and served on a white ceramic cake stand.",
    "dish.orangeJuice.name": "Fresh Orange Juice",
    "dish.orangeJuice.desc": "Freshly squeezed orange juice served in a tall glass with an orange slice and a white straw.",
    "dish.mintTea.name": "Fresh Mint Tea",
    "dish.mintTea.desc": "Warm amber tea served in an opaque ceramic cup with a modern saucer and fresh mint leaves.",
    "dish.strawberryJuice.name": "Fresh Strawberry Juice",
    "dish.strawberryJuice.desc": "Refreshing strawberry juice served in a rounded glass with a pink-striped straw and fresh strawberry garnish.",
    "how.title": "How It Works",
    "how.subtitle": "Go live in five minutes. In three simple steps.",
    "how.1.title": "Prepare Your Menu Content",
    "how.1.desc": "Upload your existing PDF/Excel menu and let AI digitize it.",
    "how.2.title": "Activate QR & 3D",
    "how.2.desc": "Configure 3D models, prices and languages.",
    "how.3.title": "Go Live",
    "how.3.desc": "Place your QR codes on tables and let guests explore.",
    "testi.title": "What Our Clients Say",
    "testi.subtitle": "Feedback from venues across Turkey.",
    "testi.1.name": "Emre Kaya",
    "testi.1.role": "Istanbul · Fine Dining Restaurant",
    "testi.1.quote": "Our sales grew 34% in three months thanks to the 3D menu. Guests are impressed.",
    "testi.2.name": "Ayse Demir",
    "testi.2.role": "Ankara · Cafe & Pastry",
    "testi.2.quote": "Setup took a single day. The 0% commission really made a difference.",
    "testi.3.name": "Mehmet Yilmaz",
    "testi.3.role": "Antalya · Hotel Restaurant",
    "testi.3.quote": "Multilingual and RTL support is perfect for our international guests.",
    "pricing.title": "Flexible Pricing",
    "pricing.subtitle": "Choose the plan that fits your business. Cancel anytime.",
    "pricing.monthly": "Monthly",
    "pricing.yearly": "Yearly",
    "pricing.save": "2 Months Free",
    "pricing.basic.name": "Basic",
    "pricing.basic.desc": "Core digital menu for growing businesses.",
    "pricing.premium.name": "Premium",
    "pricing.premium.desc": "3D/AR, 0% commission ordering and POS connections.",
    "pricing.enterprise.name": "Enterprise",
    "pricing.enterprise.desc": "White-label solution for multi-branch venues.",
    "pricing.basic.f1": "Digital QR Menu",
    "pricing.basic.f2": "Price & Stock Management",
    "pricing.basic.f3": "Single Language",
    "pricing.basic.f4": "Email Support",
    "pricing.basic.f5": "Your Own Domain",
    "pricing.premium.f1": "3D & AR Interactive Menu",
    "pricing.premium.f2": "0% Commission Online Ordering",
    "pricing.premium.f3": "POS/KDS Integrations",
    "pricing.premium.f4": "TR/EN/AR Multilingual + RTL",
    "pricing.premium.f5": "AI Menu Import (20/mo)",
    "pricing.enterprise.f1": "Unlimited Branches",
    "pricing.enterprise.f2": "White-Label Branding",
    "pricing.enterprise.f3": "Dedicated AI Setup",
    "pricing.enterprise.f4": "Priority 24/7 Support",
    "pricing.enterprise.f5": "API Access",
    "pricing.popular": "Most Popular",
    "pricing.cta.basic": "Get Started",
    "pricing.cta.premium": "Go Premium",
    "pricing.cta.enterprise": "Talk to Sales",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know, answered.",
    "faq.q1": "How long does setup take?",
    "faq.a1": "Core setup takes 24 hours; full setup with 3D/AR up to 5 days. AI menu import takes seconds.",
    "faq.q2": "Is it really 0% commission?",
    "faq.a2": "Yes. We never take a cut of your online orders. You only pay a flat subscription.",
    "faq.q3": "Is it compliant with the 2026 regulation?",
    "faq.a3": "Yes. Calories, allergens, grams and prices are added automatically and kept up to date.",
    "faq.q4": "Can I use my own models in the 3D menu?",
    "faq.a4": "Yes. Upload your own .glb/.usdz files or request custom 3D model production.",
    "faq.q5": "Is a contract required?",
    "faq.a5": "No. With monthly or yearly billing you can cancel anytime.",
    "contact.title": "Request a Demo",
    "contact.subtitle": "Fill in the form for a personalized demo and we'll get back within 24 hours.",
    "contact.name": "Full Name",
    "contact.restaurant": "Restaurant Name",
    "contact.email": "Email",
    "contact.phone": "Phone (Optional)",
    "contact.message": "Message (Optional)",
    "contact.submit": "Request Demo",
    "contact.submitting": "Submitting...",
    "contact.success": "Request received! We'll get back to you shortly.",
    "contact.error.required": "This field is required.",
    "contact.error.email": "Enter a valid email.",
    "footer.tagline": "Turkey's 3D & AR QR menu platform.",
    "footer.rights": "© 2026 Menuverse. All rights reserved.",
    "footer.brand": "Menuverse",
    "common.learnMore": "Learn More",
  },
  ar: {
    "nav.demo": "عرض القائمة",
    "nav.industries": "القطاعات",
    "nav.features": "المميزات",
    "nav.pricing": "الأسعار",
    "nav.faq": "الأسئلة",
    "nav.contact": "اتصل بنا",
    "nav.getStarted": "ابدأ الآن",
    "nav.about": "من نحن",
    "nav.testimonials": "آراء العملاء",
    "hero.pill": "عمولة 0% · قائمة ثلاثية الأبعاد وواقع معزز · إعداد بالذكاء الاصطناعي في 5 دقائق",
    "hero.title.line1": "حوّل قائمتك",
    "hero.title.highlight": "إلى تجربة",
    "hero.title.line2": "ثلاثية الأبعاد",
    "hero.subtitle": "امسح رمز QR، واستكشف الأطباق بزاوية 360 درجة، وشاهدها بحجمها الحقيقي على طاولتك مع الواقع المعزز. الإعداد خلال 24 ساعة.",
    "hero.cta.primary": "ابدأ الآن",
    "hero.cta.secondary": "شاهد العرض المباشر",
    "hero.stat.commission.value": "0%",
    "hero.stat.commission.label": "عمولة الطلبات",
    "hero.stat.interactive.value": "3D وAR",
    "hero.stat.interactive.label": "قائمة تفاعلية",
    "hero.stat.compliance.value": "2026",
    "hero.stat.compliance.label": "متوافق مع الوزارة",
    "industries.title": "مصمم لكل مكان",
    "industries.subtitle": "حل قائمة رقمية مصمم لستة قطاعات مختلفة.",
    "ind.restaurant": "مطاعم وطعام فاخر",
    "ind.cafe": "مقاهي ومخابز",
    "ind.hotel": "مطاعم الفنادق والمنتجعات",
    "ind.bar": "أماكن البار والكوكتيل",
    "ind.fastfood": "الوجبات السريعة والسلاسل",
    "ind.vegan": "مفاهيم صحية ونباتية",
    "features.title": "مميزات قوية",
    "features.subtitle": "منصة قوائم رقمية متكاملة تنقل أعمالك إلى المستقبل.",
    "feat.1.title": "قائمة ثلاثية الأبعاد وواقع معزز",
    "feat.1.desc": "دور الأطباق 360 درجة وشاهدها بحجمها الحقيقي على طاولتك.",
    "feat.2.title": "طلب سريع عبر رمز QR",
    "feat.2.desc": "اطلب بلمسة واحدة من رمز الطاولة.",
    "feat.3.title": "زيادة المبيعات البصرية",
    "feat.3.desc": "ارفع متوسط قيمة السلة عبر تحسين السلة.",
    "feat.4.title": "علامة بيضاء مخصصة",
    "feat.4.desc": "تخصيص كامل بألوان علامتك التجارية وشعارك.",
    "feat.5.title": "إدارة مركزية للأسعار والمخزون",
    "feat.5.desc": "حدّث الأسعار والمخزون فوراً من لوحة واحدة.",
    "feat.6.title": "دعم متعدد اللغات",
    "feat.6.desc": "ترجمة تلقائية باللغات التركية والإنجليزية والعربية مع دعم RTL.",
    "feat.7.title": "استيراد القائمة بالذكاء الاصطناعي",
    "feat.7.desc": "حوّل قوائم PDF/Excel إلى رقمية بالذكاء الاصطناعي في ثوانٍ.",
    "feat.8.title": "طلب عبر الإنترنت مخصص (0%)",
    "feat.8.desc": "نظام الطلب المتكامل الخاص بك بدون أي عمولة.",
    "features.compliance": "متوافق مع لائحة القوائم لعام 2026 الصادرة عن وزارة الزراعة: السعرات والحساسية والغرامات تُضاف تلقائياً.",
    "demo.title": "منصة التذوق ثلاثية الأبعاد التفاعلية",
    "demo.subtitle": "البطاقة الحقيقية التي سيراها ضيوفك. اختر طبقاً وقم بتدويره واعرضه على الطاولة.",
    "demo.drag": "اسحب • قرّب",
    "demo.showOnTable": "اعرض على الطاولة",
    "demo.viewInAR": "اعرض بالواقع المعزز",
    "demo.addToOrder": "أضف إلى الطلب",
    "demo.qrTitle": "امسح بهاتفك",
    "demo.qrDesc": "امسح رمز QR بهاتفك لتشغيل تجربة الواقع المعزز.",
    "category.mainDishes": "الأطباق الرئيسية",
    "category.desserts": "الحلويات",
    "category.drinks": "المشروبات",
    "dish.pizza.name": "بيتزا الكمأة",
    "dish.pizza.desc": "عجين مفرد، كمأة الشتاء، جبنة موزاريلا دي بوفالا، طماطم سان مارزانو.",
    "dish.iceCream.name": "آيس كريم الفواكه",
    "dish.iceCream.desc": "آيس كريم حرفي يقدم مع الفواكه الطازجة وقطع الويفر المقرمشة.",
    "dish.sushi.name": "سوشي أوماكاسي",
    "dish.sushi.desc": "اختيار الشيف من 8 قطع نيجيري، تونة زعانف زرقاء، أوني، أسقلوب هوكايدو.",
    "dish.coffee.name": "قهوة مميزة",
    "dish.coffee.desc": "قهوة مختصة مخمرة طازجة، تقدم في كوب سيراميك مصنوع يدويًا.",
    "dish.burger.name": "تشيز برجر كلاسيك",
    "dish.burger.desc": "قطعة لحم بقر مشوية عصارية، شيدر مذاب، خس طازج، طماطم، وخبز بريوش بالسمسم.",
    "dish.hotdog.name": "هوت دوج مشوي",
    "dish.hotdog.desc": "نقانق مشوية مقدمة في خبز طري محمص مع الخردل، المذاق، البصل الطازج، والكاتشب.",
    "dish.donut.name": "دونجل بالرشات الوردي",
    "dish.donut.desc": "دونات مخبوزة طازجة مع صقيع وردي ورشات ملونة مقرمشة، تقدم على طبق سيراميك حديث.",
    "dish.cupcake.name": "كัพ كيك الفانيليا واللافندر",
    "dish.cupcake.desc": "كัพ كيك فانيليا مع كريمة الزبدة الناعمة بنكهة اللافندر ولؤلؤ السكر الرقيق.",
    "dish.strawberryCake.name": "كيك الفراولة",
    "dish.strawberryCake.desc": "كيك فراولة وردي ناعم مزين بالفراولة الحمراء الطازجة ويقدم على حامل كيك سيراميك أبيض.",
    "dish.orangeJuice.name": "عصير برتقال طازج",
    "dish.orangeJuice.desc": "عصير برتقال معصور طازجًا يقدم في كوب طويل مع شريحة برتقال وقشة بيضاء.",
    "dish.mintTea.name": "شاي بالنعناع الطازج",
    "dish.mintTea.desc": "شاي كهرماني دافئ يقدم في كوب سيراميك مع صحن حديث وأوراق نعناع طازجة.",
    "dish.strawberryJuice.name": "عصير فراولة طازج",
    "dish.strawberryJuice.desc": "عصير فراولة منعش يقدم في كوب مستدير مع قشة مخططة بالوردي وتزين الفراولة الطازجة.",
    "how.title": "كيف يعمل؟",
    "how.subtitle": "أطلق مشروعك في خمس دقائق. في ثلاث خطوات بسيطة.",
    "how.1.title": "جهّز محتوى قائمتك",
    "how.1.desc": "ارفع قائمتك الحالية بصيغة PDF/Excel ودع الذكاء الاصطناعي يحوّلها.",
    "how.2.title": "فعّل رمز QR وثلاثي الأبعاد",
    "how.2.desc": "كوّن النماذج ثلاثية الأبعاد والأسعار واللغات.",
    "how.3.title": "إطلاق مباشر",
    "how.3.desc": "ضع رموز QR على الطاولات ودع الضيوف يستكشفون.",
    "testi.title": "ماذا يقول عملاؤنا؟",
    "testi.subtitle": "آراء من أماكن مختلفة في جميع أنحاء تركيا.",
    "testi.1.name": "إمره كايا",
    "testi.1.role": "إسطنبول · مطعم فاخر",
    "testi.1.quote": "ارتفعت مبيعاتنا 34% في ثلاثة أشهر بفضل القائمة ثلاثية الأبعاد.",
    "testi.2.name": "آيشه دمير",
    "testi.2.role": "أنقرة · مقهى ومخبز",
    "testi.2.quote": "استغرق الإعداد يوماً واحداً فقط. عمولة 0% أحدثت فرقاً كبيراً.",
    "testi.3.name": "محمد يلماظ",
    "testi.3.role": "أنطاليا · مطعم فندق",
    "testi.3.quote": "دعم متعدد اللغات وRTL مثالي لضيوفنا الدوليين.",
    "pricing.title": "أسعار مرنة",
    "pricing.subtitle": "اختر الخطة المناسبة لأعمالك. ألغِ في أي وقت.",
    "pricing.monthly": "شهري",
    "pricing.yearly": "سنوي",
    "pricing.save": "شهران مجاناً",
    "pricing.basic.name": "الأساسية",
    "pricing.basic.desc": "قائمة رقمية أساسية للأنشطة النامية.",
    "pricing.premium.name": "بريميوم",
    "pricing.premium.desc": "3D/AR وطلب بعمولة 0% وربط بنقاط البيع.",
    "pricing.enterprise.name": "المؤسسات",
    "pricing.enterprise.desc": "حل علامة بيضاء للمنشآت متعددة الفروع.",
    "pricing.basic.f1": "قائمة QR رقمية",
    "pricing.basic.f2": "إدارة الأسعار والمخزون",
    "pricing.basic.f3": "لغة واحدة",
    "pricing.basic.f4": "دعم بالبريد الإلكتروني",
    "pricing.basic.f5": "نطاقك الخاص",
    "pricing.premium.f1": "قائمة 3D وAR تفاعلية",
    "pricing.premium.f2": "طلب بعمولة 0%",
    "pricing.premium.f3": "تكامل POS/KDS",
    "pricing.premium.f4": "TR/EN/AR متعدد اللغات + RTL",
    "pricing.premium.f5": "استيراد بالذكاء الاصطناعي (20/شهر)",
    "pricing.enterprise.f1": "فروع غير محدودة",
    "pricing.enterprise.f2": "علامة بيضاء مخصصة",
    "pricing.enterprise.f3": "إعداد ذكاء اصطناعي مخصص",
    "pricing.enterprise.f4": "دعم أولوية 24/7",
    "pricing.enterprise.f5": "وصول API",
    "pricing.popular": "الأكثر شيوعاً",
    "pricing.cta.basic": "ابدأ",
    "pricing.cta.premium": "انتقل إلى بريميوم",
    "pricing.cta.enterprise": "تحدث إلى المبيعات",
    "faq.title": "الأسئلة الشائعة",
    "faq.subtitle": "كل ما تحتاج معرفته، مجاب عنه.",
    "faq.q1": "كم يستغرق الإعداد؟",
    "faq.a1": "يستغرق الإعداد الأساسي 24 ساعة، والإعداد الكامل مع 3D/AR حتى 5 أيام.",
    "faq.q2": "هل هي عمولة 0% حقاً؟",
    "faq.a2": "نعم. لا نقتطع أي نسبة من طلباتك عبر الإنترنت. تدفع اشتراكاً ثابتاً فقط.",
    "faq.q3": "هل تتوافق مع لائحة 2026؟",
    "faq.a3": "نعم. تُضاف السعرات والمواد المسببة للحساسية والغرامات والأسعار تلقائياً.",
    "faq.q4": "هل يمكنني استخدام نماذجي في القائمة ثلاثية الأبعاد؟",
    "faq.a4": "نعم. ارفع ملفات .glb/.usdz الخاصة بك أو اطلب إنتاجاً مخصصاً.",
    "faq.q5": "هل العقد إلزامي؟",
    "faq.a5": "لا. مع الفوترة الشهرية أو السنوية يمكنك الإلغاء في أي وقت.",
    "contact.title": "اطلب عرضاً تجريبياً",
    "contact.subtitle": "املأ النموذج لعرض تجريبي مخصص وسنعاود الاتصال خلال 24 ساعة.",
    "contact.name": " الاسم الكامل",
    "contact.restaurant": "اسم المطعم",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف (اختياري)",
    "contact.message": "الرسالة (اختياري)",
    "contact.submit": "اطلب العرض",
    "contact.submitting": "جارٍ الإرسال...",
    "contact.success": "تم استلام طلبك! سنعاود الاتصال بك قريباً.",
    "contact.error.required": "هذا الحقل مطلوب.",
    "contact.error.email": "أدخل بريداً إلكترونياً صالحاً.",
    "footer.tagline": "منصة قوائم QR ثلاثية الأبعاد والواقع المعزز في تركيا.",
    "footer.rights": "© 2026 مينوفيرس. جميع الحقوق محفوظة.",
    "footer.brand": "مينوفيرس",
    "common.learnMore": "اعرف المزيد",
  },
};