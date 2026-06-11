import { ArrowRight, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "whatsapp";
  icon?: LucideIcon;
  target?: string;
  rel?: string;
  className?: string;
};

export function CTAButton({ href, children, variant = "primary", icon: Icon = ArrowRight, target, rel, className = "" }: CTAButtonProps) {
  return (
    <a href={href} target={target} rel={rel} className={`btn btn-${variant} ${className}`}>
      <span>{children}</span>
      <Icon aria-hidden="true" size={17} />
    </a>
  );
}
