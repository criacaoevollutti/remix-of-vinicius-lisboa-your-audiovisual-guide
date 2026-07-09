import { landingContent } from "@/content/landing";
import logoUrl from "@/assets/vinicius-lisboa-logo.png";

export function Nav() {
  const { nav, brand } = landingContent;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logoUrl} alt={brand.logoAlt} className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#oferta"
          className="text-sm font-medium px-4 py-2 rounded-md bg-orange-gradient text-primary-foreground hover:opacity-90 transition shadow-glow"
        >
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
