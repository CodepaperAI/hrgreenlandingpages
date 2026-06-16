import type { Metadata } from "next";
import "./globals.css";

const gtmId = "GTM-KJDG3Q2K";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hrgreenrootslandscaping.com"),
  title: {
    default: "HR Greenroots Landscaping | Service Landing Pages",
    template: "%s | HR Greenroots Landscaping"
  },
  description:
    "Lead-focused landscaping service landing pages for HR Greenroots across Mississauga, Toronto, and the GTA.",
  openGraph: {
    type: "website",
    siteName: "HR Greenroots Landscaping"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
