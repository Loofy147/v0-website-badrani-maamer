import type { Language } from "./types"

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      properties: "Propriétés",
      financing: "Financement",
      about: "À Propos",
      contact: "Contact",
      login: "Connexion",
      dashboard: "Tableau de Bord",
    },
    hero: {
      title: "Réalisez Votre Rêve Immobilier",
      subtitle: "Trouvez votre propriété idéale à Blida avec des options de financement flexibles",
      cta: "Découvrir les Propriétés",
      ctaSecondary: "Options de Financement",
    },
    properties: {
      title: "Propriétés en Vedette",
      subtitle: "Découvrez notre sélection de biens immobiliers premium",
      viewAll: "Voir Tout",
      viewDetails: "Voir Détails",
      bedrooms: "Chambres",
      bathrooms: "Salles de Bain",
      surfaceArea: "Surface",
      floor: "Étage",
      available: "Disponible",
      reserved: "Réservé",
      sold: "Vendu",
      apartment: "Appartement",
      commercial: "Commercial",
      villa: "Villa",
      office: "Bureau",
    },
    financing: {
      title: "Solutions de Financement",
      subtitle: "Options de paiement flexibles adaptées à vos besoins",
      calculate: "Calculer",
      downPayment: "Acompte",
      monthlyPayment: "Paiement Mensuel",
      duration: "Durée",
      months: "mois",
      islamic: "Conforme Charia",
    },
    about: {
      title: "À Propos de Nous",
      description: "Promotion Badrani Maamar est votre partenaire de confiance dans l'immobilier à Blida.",
      whyUs: "Pourquoi Nous Choisir",
      experience: "Expérience Prouvée",
      trust: "Confiance & Transparence",
      support: "Support Dédié",
    },
    contact: {
      title: "Contactez-Nous",
      name: "Nom Complet",
      email: "Email",
      phone: "Téléphone",
      message: "Message",
      submit: "Envoyer",
      success: "Message envoyé avec succès",
      error: "Erreur lors de l'envoi",
    },
    footer: {
      description: "Votre partenaire de confiance pour l'immobilier à Blida",
      quickLinks: "Liens Rapides",
      followUs: "Suivez-Nous",
      rights: "Tous droits réservés",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      properties: "العقارات",
      financing: "التمويل",
      about: "من نحن",
      contact: "اتصل بنا",
      login: "تسجيل الدخول",
      dashboard: "لوحة التحكم",
    },
    hero: {
      title: "حقق حلمك العقاري",
      subtitle: "اعثر على العقار المثالي في البليدة مع خيارات تمويل مرنة",
      cta: "اكتشف العقارات",
      ctaSecondary: "خيارات التمويل",
    },
    properties: {
      title: "العقارات المميزة",
      subtitle: "اكتشف مجموعتنا من العقارات الممتازة",
      viewAll: "عرض الكل",
      viewDetails: "عرض التفاصيل",
      bedrooms: "غرف النوم",
      bathrooms: "الحمامات",
      surfaceArea: "المساحة",
      floor: "الطابق",
      available: "متاح",
      reserved: "محجوز",
      sold: "مباع",
      apartment: "شقة",
      commercial: "تجاري",
      villa: "فيلا",
      office: "مكتب",
    },
    financing: {
      title: "حلول التمويل",
      subtitle: "خيارات دفع مرنة تناسب احتياجاتك",
      calculate: "احسب",
      downPayment: "الدفعة الأولى",
      monthlyPayment: "الدفع الشهري",
      duration: "المدة",
      months: "شهر",
      islamic: "متوافق مع الشريعة",
    },
    about: {
      title: "من نحن",
      description: "ترقية بدراني معمر هو شريكك الموثوق في العقارات في البليدة.",
      whyUs: "لماذا نحن",
      experience: "خبرة مثبتة",
      trust: "الثقة والشفافية",
      support: "دعم متخصص",
    },
    contact: {
      title: "اتصل بنا",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      message: "الرسالة",
      submit: "إرسال",
      success: "تم إرسال الرسالة بنجاح",
      error: "خطأ في الإرسال",
    },
    footer: {
      description: "شريكك الموثوق للعقارات في البليدة",
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة",
    },
  },
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
