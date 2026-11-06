import { ArrowRight, ExternalLink, Facebook } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import ProductCard from '@/components/ProductCard';
import { STORES, type Store } from '@/data/stores';
import type { PageId } from '@/hooks/usePageRoute';

type StorePageProps = {
  store: Store;
  onNavigate: (page: PageId) => void;
};

export default function StorePage({ store, onNavigate }: StorePageProps) {
  const Icon = store.icon;
  const otherStores = STORES.filter((item) => item.slug !== store.slug);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-32 pt-28 md:space-y-14 md:px-8 md:pb-16 md:pt-10 md:pl-80">
      <section className="reveal">
        <GlassCard className="relative overflow-hidden p-0" tilt={false}>
          <div className="relative aspect-[21/9] min-h-[260px] overflow-hidden">
            <img src={store.heroImage} alt={store.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
          </div>
          <div className="absolute inset-x-0 bottom-0 space-y-4 p-6 text-white md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-brand-700 shadow-lg">
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{store.name}</h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">{store.tagline}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={store.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 transition hover:-translate-y-0.5 hover:bg-brand-400"
              >
                ดูร้านบน TikTok
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={store.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
              >
                <Facebook className="h-4 w-4" />
                เพจ Facebook
              </a>
              <button
                type="button"
                onClick={scrollToProducts}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
              >
                ดูสินค้าตัวอย่าง
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="space-y-5">
        <p className="text-base leading-relaxed text-slate-700 md:text-lg dark:text-slate-300">{store.description}</p>
        <div className="grid gap-5 md:grid-cols-3">
          {store.highlights.map((item) => {
            const HighlightIcon = item.icon;
            return (
              <GlassCard key={item.title} className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                  <HighlightIcon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">ภาพจากร้าน</h2>
        <div className={`grid gap-5 ${store.gallery.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {store.gallery.map((src, index) => (
            <GlassCard key={src} className="reveal overflow-hidden p-2" style={{ animationDelay: `${index * 120}ms` }}>
              <img
                src={src}
                alt={`${store.name} ภาพที่ ${index + 1}`}
                loading="lazy"
                className="h-auto w-full rounded-[22px] object-contain"
              />
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="products" className="scroll-mt-28 space-y-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{store.productsTitle}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ตัวอย่างสินค้าเพื่อให้เห็นภาพ ราคาอาจมีการเปลี่ยนแปลง</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {store.products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section>
        <GlassCard className="flex flex-col items-start gap-5 p-8 md:flex-row md:items-center md:justify-between md:p-10" tilt={false}>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">สนใจสั่งซื้อหรือสอบถามเพิ่มเติม?</h2>
            <p className="text-sm text-slate-600 md:text-base dark:text-slate-300">ทักแชทหาร้านบน TikTok หรือ Facebook ได้เลย ทีมงานพร้อมช่วยเลือกให้เหมาะกับคุณ</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={store.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              ไปที่ร้านบน TikTok
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={store.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 dark:text-white"
            >
              <Facebook className="h-4 w-4" />
              เพจ Facebook
            </a>
          </div>
        </GlassCard>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">ร้านอื่นในเครือ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {otherStores.map((other) => {
            const OtherIcon = other.icon;
            return (
              <button
                key={other.slug}
                type="button"
                onClick={() => onNavigate(other.slug)}
                className="glass group flex items-center gap-4 p-5 text-left"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                  <OtherIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 dark:text-white">{other.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{other.tagline}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-brand-600 dark:group-hover:text-brand-300" />
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
