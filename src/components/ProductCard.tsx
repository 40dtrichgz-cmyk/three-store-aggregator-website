import type { Product } from '@/data/stores';
import GlassCard from '@/components/GlassCard';

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat('th-TH');

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <GlassCard className="group flex flex-col overflow-hidden p-0">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur">
          สินค้าตัวอย่าง
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{product.description}</p>
        <p className="mt-2 text-lg font-bold text-brand-700 dark:text-brand-300">
          ฿{priceFormatter.format(product.price)}
        </p>
      </div>
    </GlassCard>
  );
}
