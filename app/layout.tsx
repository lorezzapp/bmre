import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vakantiehuis Boeken Zonder Airbnb | Eigen Website & Directe Boekingen | BoostMyRealEstate",
  description: "Stop met commissie betalen aan Airbnb of Booking.com. Krijg een eigen professionele website voor je vakantiehuis en ontvang directe boekingen — 0% commissie. Al 500+ verhuurders gingen je voor.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700;9..40,800&display=swap" rel="stylesheet" />
        
        {/* Schema Markup for SoftwareApplication */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "BoostMyRealEstate",
            "applicationCategory": "BusinessApplication",
            "description": "Platform voor vakantieverhuurders om directe boekingen te ontvangen zonder Airbnb of Booking.com commissie.",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "EUR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })
        }} />
        
        {/* Schema Markup for FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Kan ik mijn vakantiehuis verhuren zonder Airbnb?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja. Met een eigen professionele website trekt je vakantiehuis gasten aan via Google, zonder afhankelijkheid van Airbnb of Booking.com."
                }
              },
              {
                "@type": "Question",
                "name": "Hoe vinden gasten mijn vakantiehuis op Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BoostMyRealEstate optimaliseert jouw website voor zoektermen zoals 'vakantiehuis huren [regio]', zodat je bovenaan de zoekresultaten staat."
                }
              },
              {
                "@type": "Question",
                "name": "Wat kost een eigen boekingswebsite?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vanaf €29 per maand. De gemiddelde besparing op Airbnb-commissie is €3.100 per jaar."
                }
              }
            ]
          })
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
