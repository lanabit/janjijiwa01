import Carousel from "~/components/carousel";
import Hero from "~/components/hero";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="absolute my-[-350px] h-[1000px]">
        <Carousel />
      </div>
      <div className="h-[350px]">coba coba</div>
    </>
  );
}
