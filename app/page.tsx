"use client"
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar/Index";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <div>
          <h1 className="text-2xl text-primary font-semibold text-center">COMING SOON</h1>
          <div className="flex justify-center items-center py-2">
            <Button onClick={()=> alert("ok berhasil")}>Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
