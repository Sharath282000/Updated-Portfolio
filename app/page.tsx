import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="mb-5">
      <main>
        <Hero/>
        <RecentPosts/>
        <Works/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}
