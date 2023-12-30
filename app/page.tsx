import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar/Index";
import { CarouselSize } from "@/components/CarouselSize";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <div>
          <h1 className="text-2xl text-primary font-semibold text-center">COMING SOON</h1>
          <div className="flex justify-center items-center py-2">
            <CarouselSize/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
