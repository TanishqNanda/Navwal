import { CTAButton } from "../ui/CTAButton";

export function Navbar() {
  return (
     <nav className="sticky top-0 z-40 border-b border-gray-200 bg-paper/80 backdrop-blur-xl px-2 py-5  ">
      <div className="flex justify-between">
        <p className="font-bold text-3xl text-black px-4">NAVWAL</p>
        <CTAButton>Automate My Business</CTAButton>
      </div>
    </nav>
  );
}

                                       //w-full px-2 py-6 bg-black/80 backdrop-blur-md