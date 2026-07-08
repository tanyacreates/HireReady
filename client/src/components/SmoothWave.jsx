import React, { useEffect, useRef } from 'react';

export default function SmoothWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let phase = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.parentElement.offsetWidth * dpr;
      canvas.height = canvas.parentElement.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, width, height);

      phase += 0.005; // Smooth animation speed

      // 1. Broad Gold/Yellow Outer Ribbon
      drawRibbon(ctx, width, height, {
        phase: phase,
        frequency: 0.0035, // slightly slower frequency for wider waves
        amplitude: 72,
        thickness: 52,
        twistFreq: 1.1,
        colorStops: [
          { pos: 0, color: 'rgba(253, 230, 138, 0.35)' }, // Light gold
          { pos: 0.35, color: 'rgba(251, 191, 36, 0.9)' }, // Golden yellow
          { pos: 0.65, color: 'rgba(254, 215, 170, 0.85)' }, // Warm peach-gold
          { pos: 0.85, color: 'rgba(245, 158, 11, 0.85)' },  // Warm orange
          { pos: 1, color: 'rgba(251, 191, 36, 0.35)' }
        ]
      });

      // 2. Thinner Blue Inner Ribbon (glowing core)
      drawRibbon(ctx, width, height, {
        phase: phase + 0.08, // Slight phase offset
        frequency: 0.0035,
        amplitude: 72,
        thickness: 28,
        twistFreq: 1.1,
        colorStops: [
          { pos: 0, color: 'rgba(96, 165, 250, 0.95)' },  // Bright sky blue
          { pos: 0.4, color: 'rgba(59, 130, 246, 0.95)' },  // Rich blue
          { pos: 0.75, color: 'rgba(147, 197, 253, 0.8)' },
          { pos: 1, color: 'rgba(37, 99, 235, 0.9)' }
        ]
      });

      // 3. Delicate White/Highlight Ribbon
      drawRibbon(ctx, width, height, {
        phase: phase - 0.04,
        frequency: 0.0035,
        amplitude: 72,
        thickness: 6,
        twistFreq: 1.1,
        colorStops: [
          { pos: 0, color: 'rgba(255, 255, 255, 0.95)' },
          { pos: 0.5, color: 'rgba(255, 255, 255, 0.25)' },
          { pos: 1, color: 'rgba(255, 255, 255, 0.85)' }
        ]
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const drawRibbon = (ctx, width, height, config) => {
      const { phase, frequency, amplitude, thickness, twistFreq, colorStops } = config;
      const centerY = height / 2;

      ctx.beginPath();
      
      // Top Edge Path
      for (let x = 0; x <= width; x += 4) {
        const sineVal = Math.sin(x * frequency + phase) * amplitude;
        // Introduce a secondary harmonic wave for a more natural look
        const wave = sineVal + Math.sin(x * (frequency * 1.8) - phase) * (amplitude * 0.15);
        const y = centerY + wave;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      // Bottom Edge Path (drawn backwards)
      for (let x = width; x >= 0; x -= 4) {
        const sineVal = Math.sin(x * frequency + phase) * amplitude;
        const wave = sineVal + Math.sin(x * (frequency * 1.8) - phase) * (amplitude * 0.15);
        // Modulate thickness to simulate 3D rotation / twisting
        const twist = Math.cos(x * frequency * twistFreq + phase * 2);
        const currentThickness = thickness * (0.1 + 0.9 * Math.abs(twist));
        const y = centerY + wave + currentThickness;
        ctx.lineTo(x, y);
      }

      ctx.closePath();

      // Create horizontal gradient along the ribbon length
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      colorStops.forEach(stop => {
        grad.addColorStop(stop.pos, stop.color);
      });

      ctx.fillStyle = grad;
      ctx.fill();
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-transparent">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Dynamic grain/noise overlay for premium texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
