import { ExternalLink, Facebook, Home, Store } from 'lucide-react';
import { PAGES, type PageId } from '@/hooks/usePageRoute';
import { STORES } from '@/data/stores';
import type { Store as StoreData } from '@/data/stores';
import ThemeToggle from '@/components/ThemeToggle';
import type { ThemeMode } from '@/hooks/useTheme';

type SidebarProps = {
  page: PageId;
  onNavigate: (page: PageId) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
};

const storeByPage = (page: PageId): StoreData | undefined =>
  STORES.find((store) => store.slug === page);

const socialLinkClass =
  'flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-white/70 hover:text-brand-700 dark:text-slate-400 dark:hover:bg-white/15 dark:hover:text-brand-300';

export default function Sidebar({ page, onNavigate, theme, onToggleTheme }: SidebarProps) {
  const itemBase =
    'flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all duration-300';
  const itemActive = 'bg-white/70 text-brand-700 shadow-md dark:bg-white/15 dark:text-brand-300';
  const itemIdle = 'text-slate-600 hover:bg-white/50 dark:text-slate-300 dark:hover:bg-white/10';

  return (
    <aside className="glass-nav fixed inset-x-3 top-3 z-40 rounded-3xl px-3 py-3 md:inset-x-auto md:inset-y-4 md:left-4 md:top-4 md:flex md:w-64 md:flex-col md:px-4 md:py-6">
      <div className="flex items-center justify-between gap-3 md:mb-8 md:px-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-lg shadow-brand-600/30">
            <Store className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">4zHouse.Site</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">เลือกซื้อได้ครบ</p>
          </div>
        </div>
        <div className="md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>

      <nav className="mt-4 flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className={`${itemBase} ${page === 'home' ? itemActive : itemIdle} whitespace-nowrap`}
        >
          <Home className="h-4 w-4" />
          หน้าแรก
        </button>

        {PAGES.filter((item) => item !== 'home').map((item) => {
          const store = storeByPage(item);
          if (!store) return null;
          const Icon = store.icon;
          const active = page === store.slug;
          return (
            <div key={store.slug} className={`flex items-center gap-1 rounded-2xl ${active ? itemActive : ''}`}>
              <button
                type="button"
                onClick={() => onNavigate(store.slug)}
                className={`${itemBase} ${active ? '' : itemIdle} flex-1 whitespace-nowrap text-left`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{store.name}</span>
              </button>
              <a
                href={store.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`เปิด TikTok ของ ${store.name}`}
                title="เปิด TikTok"
                className={socialLinkClass}
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={store.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`เปิด Facebook ของ ${store.name}`}
                title="เปิด Facebook"
                className={`${socialLinkClass} mr-1`}
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
            </div>
          );
        })}
      </nav>

      <div className="mt-auto hidden items-center justify-between px-2 pt-6 md:flex">
        <span className="text-xs text-slate-500 dark:text-slate-400">โหมดการแสดงผล</span>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </aside>
  );
}
