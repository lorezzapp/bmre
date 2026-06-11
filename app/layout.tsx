import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BoostMyRealEstate — Websites voor Airbnb's die converteren",
  description: "Professionele websites voor vakantiewoningen die directe boekingen genereren.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
      </head>
      <body>{children}</body>
    </html>
  )
}
