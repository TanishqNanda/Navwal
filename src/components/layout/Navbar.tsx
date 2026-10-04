import { CTAButton } from "../ui/CTAButton";

export function Navbar() {
  return (
    <nav className="px-2 py-6 bg-black">
      <div className="flex justify-between">
        <p className="font-mono text-bold text-3xl text-white px-4">NAVWAL</p>
        <CTAButton buttonName="Automate My Business"/>
      </div>
    </nav>
  );
}

