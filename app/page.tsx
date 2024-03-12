import Hero from "@/components/Hero";
import PopularBikes from "@/components/PopularBikes";
import PopularModelHero from "@/components/PopularModelHero";
import RotatingWheel from "@/components/RotatingWheel";
import Service from "@/components/service/Service";

export default function Home() {
  return (
    <main>
      <RotatingWheel containerStyles={"left-0 -ml-52"} />
      <Hero />
      <Service />
      <RotatingWheel containerStyles={" right-0 xl:-mr-50 -mr-52"} />
      <PopularModelHero />
      <PopularBikes />
    </main>
  );
}
