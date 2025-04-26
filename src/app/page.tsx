import Image from "next/image";
import Earth from "./assets/Earth.png";

export default function Home() {
  return (
    <div className="h-screen absolute top-0 left-0 right-0 justify-center -z-10 flex items-end">
      <Image src={Earth} alt="Logo" width={500} height={500} className="" />
    </div>
  );
}
