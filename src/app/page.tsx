import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";


export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 md:p-6 lg:p-8 xl:p-10 gap-8 md:gap-12 lg:gap-16">

      <Slider />
      <Featured />
      <Offer />

    </main>
  );
}
