type SectionHeaderProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeader({ eyebrow, title, description, align = "left", inverse = false }: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-2xl`}>
      <span className="eyebrow">{eyebrow}</span>
      {title ? <h2 className={`section-title mt-3 ${inverse ? "text-white" : "text-brand-forest"}`}>{title}</h2> : null}
      {description ? (
        <p className={`mt-5 text-base leading-8 ${inverse ? "text-white/70" : "text-brand-muted"}`}>{description}</p>
      ) : null}
    </div>
  );
}
