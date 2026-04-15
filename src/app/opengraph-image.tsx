import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

// Force dynamic rendering — avoids prerendering issues on Windows/CI;
// on Vercel (Linux) this generates the image on first request and then caches it.
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export const alt = 'Wolf Agro Services – Fournisseur agro-export, Niger';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // Load logo from local public folder (works at build time & runtime)
  const logoPath = join(process.cwd(), 'public', 'lovable-uploads', 'logo.png');
  const logoBuffer = readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1B3A2D',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Background texture overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 20% 50%, rgba(200,169,110,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)',
            display: 'flex',
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#C8A96E',
            display: 'flex',
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="Wolf Agro Services"
          style={{ width: 240, objectFit: 'contain', marginBottom: 36 }}
        />

        {/* Title */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: '-0.5px',
            textAlign: 'center',
            lineHeight: 1.2,
            display: 'flex',
          }}
        >
          Wolf Agro Services
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#C8A96E',
            fontSize: 26,
            fontWeight: 400,
            marginTop: 16,
            textAlign: 'center',
            display: 'flex',
          }}
        >
          Fournisseur agro-export structuré, Niger
        </div>

        {/* Separator */}
        <div
          style={{
            width: 60,
            height: 2,
            background: 'rgba(200,169,110,0.5)',
            marginTop: 28,
            marginBottom: 28,
            display: 'flex',
          }}
        />

        {/* Sub-tagline */}
        <div
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 20,
            textAlign: 'center',
            display: 'flex',
          }}
        >
          Sourcing direct · Qualité contrôlée · Logistique FOB / CIF
        </div>

        {/* Products pills */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
            marginTop: 36,
          }}
        >
          {['Gomme arabique', 'Sésame', 'Oignon de Galmi', 'Arachide'].map((label) => (
            <div
              key={label}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(200,169,110,0.3)',
                color: 'rgba(255,255,255,0.75)',
                fontSize: 15,
                padding: '6px 16px',
                borderRadius: 20,
                display: 'flex',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            right: 40,
            color: 'rgba(255,255,255,0.3)',
            fontSize: 16,
            display: 'flex',
          }}
        >
          wolfagroservices.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
