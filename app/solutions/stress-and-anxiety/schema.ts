export const stressAndAnxietySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Manage Stress & Anxiety with Sound Therapy | Saora",
  description:
    "Discover effective natural solutions for stress and anxiety management through sound therapy, mindfulness, and meditation. Learn how Saora's app can help you find inner peace.",
  url: "https://saora.app/solutions/stress-and-anxiety",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "Saora - Sound Therapy & Meditation",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
    keywords:
      "stress management, anxiety relief, sound therapy, meditation app, mindfulness, natural anxiety treatment, stress reduction, mental health app, relaxation techniques, sleep anxiety",
    featureList: [
      "Curated soundscapes for stress relief",
      "Guided breathing exercises",
      "Customizable meditation sessions",
      "Sleep sounds for anxiety relief",
      "Progress tracking",
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://saora.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: "https://saora.app/solutions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Stress and Anxiety",
        item: "https://saora.app/solutions/stress-and-anxiety",
      },
    ],
  },
  potentialAction: {
    "@type": "DownloadAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://apps.apple.com/app/saora",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
        "http://schema.org/IOSPlatform",
      ],
    },
  },
};
