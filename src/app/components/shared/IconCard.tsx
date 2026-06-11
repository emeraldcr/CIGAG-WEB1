import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  children?: ReactNode;
  inverse?: boolean;
};

export function IconCard({ icon: Icon, title, description, children, inverse = false }: IconCardProps) {
  return (
    <article className={`surface-card group ${inverse ? "surface-card-dark" : ""}`}>
      <div className="icon-box">
        <Icon aria-hidden="true" size={21} />
      </div>
      <div>
        <h3 className={inverse ? "text-white" : "text-brand-forest"}>{title}</h3>
        {description ? <p className={inverse ? "text-white/60" : "text-brand-muted"}>{description}</p> : null}
      </div>
      {children}
    </article>
  );
}
