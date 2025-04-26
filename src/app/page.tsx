import Image from "next/image";
import Earth from "./assets/Earth.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-20">
      <div className="text-5xl md:text-7xl text-center text-primary font-open-sans font-bold">
          <h1 className="py-24"><strong>Open</strong> Lab</h1>
      <Image src={Earth} alt="Logo" width={500} height={500} className="" />
      </div>
    </div>
  );
}
