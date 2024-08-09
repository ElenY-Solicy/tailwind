import Clients from "@/components/features/Clients";
import Demo from "@/components/features/Demo";
import Design from "@/components/features/Design";
import Hero from "@/components/features/Hero";
import Local from "@/components/features/Local";
import Manage from "@/components/features/Manage";
import Marketing from "@/components/features/Marketing";
import Pixel from "@/components/features/Pixel";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Manage />
      <Pixel />
      <Local />
      <Design />
      <Marketing />
      <Demo />
    </>
  );
}
