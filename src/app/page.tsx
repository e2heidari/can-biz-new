import RootCategories from "./ui/Categories/Root";
import Hero from "./ui/Hero/hero";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <RootCategories />
    </div>
  );
}
