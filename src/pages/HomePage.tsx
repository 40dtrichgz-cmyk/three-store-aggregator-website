import { ArrowRight, BadgeCheck, Clock, ExternalLink, Facebook, Handshake, MessageCircle } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import { STORES } from '@/data/stores';
import type { PageId } from '@/hooks/usePageRoute';

type HomePageProps = {
  onNavigate: (page: PageId) => void;
};

const WHY_US = [
  {
    title: 'ครบในที่เดียว',
    description: 'บ้าน ร้านค้า และสินค้าสัตว์เลี้ยง เลือกดูได้จากเว็บเดียว ไม่ต้องไปหลายที่',
    icon: BadgeCheck,
  },
  {
    title: 'ติดต่อได้ทันที',
    description: 'ทุกร้านมีทั้ง TikTok และ Facebook กดปุ่มเพื่อทักถามรายละเอียดหรือขอใบเสนอราคาได้เลย',
    icon: MessageCircle,
  },
  {
    title: 'ให้คำปรึกษาก่อนตัดสินใจ',
    description: 'ทีมงานช่วยแนะนำแบบ ขนาด และงบประมาณให้เหมาะกับความต้องการของคุณ',
    icon: Handshake,
  },
  {
    title: 'ตอบไว ไม่ทิ้งคุณไว้',
    description: 'สอบถามได้ตลอดช่วงเวลาทำการ พร้อมดูแลหลังการขายจนคุณพอใจ',
    icon: Clock,
  },
];

const socialButtonClass =
  'glass-pill flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-700 transition hover:scale-105 hover:bg-white/80 dark:text-white';

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-32 pt-28 md:space-y-14 md:px-8 md:pb-16 md:pt-10 md:pl-80">
      <section className="reveal">
        <GlassCard className="relative overflow-hidden p-8 md:p-12" tilt={false}>
          <div className="relative z-10 max-w-2xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-white/10 dark:text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              3 ร้านในเครือ พร้อมให้บริการ
            </span>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
              บ้าน ร้านค้า และ
              <span className="bg-gradient-to-r from-brand-700 to-sand-500 bg-clip-text text-transparent dark:from-brand-300 dark:to-sand-300">
                {' '}สัตว์เลี้ยง
              </span>
              <br />
              ครบจบในที่เดียว
            </h1>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
              รวมบ้านน็อกดาวน์ เคาน์เตอร์ขายของ และบ้านสัตว์เลี้ยงคุณภาพ เลือกชมสินค้าตัวอย่างและติดต่อแต่ละร้านได้ทันที
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#knockdown"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                เริ่มดูสินค้า
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl dark:bg-brand-500/20"
          />
        </GlassCard>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">เลือกร้านที่คุณสนใจ</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">กดดูสินค้าตัวอย่าง หรือติดตามร้านบน TikTok และ Facebook</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {STORES.map((store, index) => {
            const Icon = store.icon;
            return (
              <GlassCard key={store.slug} className="reveal flex flex-col overflow-hidden p-0" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={store.heroImage} alt={store.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-brand-700 shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{store.name}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{store.tagline}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigate(store.slug)}
                      className="flex-1 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
                    >
                      ดูสินค้า
                    </button>
                    <a
                      href={store.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`เปิด TikTok ของ ${store.name}`}
                      title="TikTok"
                      className={socialButtonClass}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={store.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`เปิด Facebook ของ ${store.name}`}
                      title="Facebook"
                      className={socialButtonClass}
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">ทำไมต้องซื้อกับเรา</h2>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {WHY_US.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>
    </div>
  );
}
