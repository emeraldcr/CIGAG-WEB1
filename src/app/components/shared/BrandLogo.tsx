import { brand } from "../../data/siteContent";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={`${compact ? "h-9 w-9" : "h-10 w-10"} brand-gradient flex shrink-0 items-center justify-center rounded-lg shadow-gold`}>
        <span className="text-xs font-bold tracking-[0.12em] text-white">{brand.mark}</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-[0.14em] text-brand-gold">{brand.name}</span>
        <span className="mt-1 text-[0.58rem] uppercase tracking-[0.18em] text-white/45">{brand.descriptor}</span>
      </div>
    </div>
  );
}
