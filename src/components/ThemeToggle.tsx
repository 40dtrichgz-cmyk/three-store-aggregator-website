import { Moon, Sun } from 'lucide-react';
import type { ThemeMode } from '@/hooks/useTheme';

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'}
      className="glass-pill flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:scale-105 active:scale-95 dark:text-slate-100"
    >
      <span key={theme} className="animate-spin-in">
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </span>
    </button>
  );
}
