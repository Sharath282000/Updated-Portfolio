import Contact from "@/components/Contact";
import ExperienceTimeline from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="mb-5">
      <main>
        <Hero/>
        {/* <RecentPosts/> */}
        <ExperienceTimeline/>
        <Works/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}
