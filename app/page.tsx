import Articles from "@/components/Articles";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";

export default function Home() {
  return (
   <main>
        <Cursor />
        <Hero />
        <SectionAbout />
        <Articles />
   </main>
  );
}
