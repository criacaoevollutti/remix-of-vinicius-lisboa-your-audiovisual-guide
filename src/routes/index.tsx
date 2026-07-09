import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Why } from "@/components/landing/Why";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { Course } from "@/components/landing/Course";
import { Bonuses } from "@/components/landing/Bonuses";
import { Offer } from "@/components/landing/Offer";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { landingContent } from "@/content/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: landingContent.meta.title },
      { name: "description", content: landingContent.meta.description },
      { property: "og:title", content: landingContent.meta.ogTitle },
      { property: "og:description", content: landingContent.meta.ogDescription },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Why />
      <About />
      <Testimonials />
      <Course />
      <Bonuses />
      <Offer />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
