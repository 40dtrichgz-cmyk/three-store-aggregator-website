import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import { useRef } from 'react';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  tilt?: boolean;
};

export default function GlassCard({ children, className = '', style, tilt = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !tilt) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty('--rx', `${(0.5 - y) * 8}deg`);
    el.style.setProperty('--ry', `${(x - 0.5) * 10}deg`);
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`glass ${className}`}
    >
      {children}
    </div>
  );
}
