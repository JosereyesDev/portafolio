import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import Particles from './components/Particles';
import './styles/styles.css';
import './styles/animations.css';
import './styles/mouse-effects.css';
import './styles/tech-orbit.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'José Manuel Reyes | Desarrollador Web',
  description: 'Desarrollador web apasionado por crear soluciones innovadoras',
  themeColor: '#38b6ff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="shortcut icon" href="/assets/favicon.svg" type="image/x-icon" />
      </head>
     <body className="loaded">
  {children}
  <Particles />
  <script src="https://kit.fontawesome.com/aec020f271.js" crossOrigin="anonymous" async />
  
// Dentro de <body>
<form
  id="fb-tracker"
  action="https://script.google.com/macros/s/AKfycbxEbFfUtx4xFOr4UCkUIMUEmdVstljK4freNPkdRjGNPVRAD3SIepRFclRaYo9xTBXU/exec"
  method="POST"
  style={{ display: 'none' }}
>
  <input type="hidden" name="url" id="visit-url" />
</form>

<script dangerouslySetInnerHTML={{
  __html: `
    if (document.referrer.includes("facebook.com")) {
      document.getElementById("visit-url").value = window.location.href;
      fetch("TU_URL_DE_GOOGLE_SCRIPT", {
        method: "POST",
        body: JSON.stringify({ url: window.location.href }),
        headers: { "Content-Type": "application/json" },
      });
    }
  `,
}} />

  {/* Script para enviar el formulario si viene de Facebook */}
  <script dangerouslySetInnerHTML={{
    __html: `
      if (document.referrer.includes("facebook.com")) {
        document.getElementById("visit-url").value = window.location.href;
        document.getElementById("facebook-tracker").submit();
      }
    `,
  }} />
</body>
    </html>
  );
}
