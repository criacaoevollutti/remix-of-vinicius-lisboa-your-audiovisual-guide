import logoUrl from "@/assets/vinicius-lisboa-logo.png";
import { landingContent } from "@/content/landing";

export function Footer() {
  const { footer, brand } = landingContent;

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt={brand.logoAlt} className="h-12 w-auto" />
        </div>
        <div className="flex items-center gap-6">
          {footer.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-orange transition"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p>{footer.copyright.replace("{year}", String(new Date().getFullYear()))}</p>
      </div>
    </footer>
  );
}
