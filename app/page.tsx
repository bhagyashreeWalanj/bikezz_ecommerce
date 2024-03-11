import Hero from "@/components/Hero";
import PopularBikes from "@/components/PopularBikes";
import PopularModelHero from "@/components/PopularModelHero";
import Service from "@/components/service/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <PopularModelHero />
      <PopularBikes />
    </main>
  );
}
