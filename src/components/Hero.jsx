import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Inject Spline viewer script once if not already present
    const existing = document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.11.5/build/spline-viewer.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.11.5/build/spline-viewer.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0c0c1a] to-[#0e0e1f]">
      {/* Grain + aurora gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(1200px_600px_at_-10%_-10%,rgba(106,17,203,0.35),transparent), radial-gradient(900px_500px_at_110%_10%,rgba(37,117,252,0.35),transparent)'}} />
        <div className="absolute inset-0 mix-blend-overlay opacity-25" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      {/* Spline Web Component Background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line react/no-unknown-property */}
        <spline-viewer
          url="https://prod.spline.design/6M-n7dsMTjjlWRvN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0e0e1f]" />
    </section>
  );
}
