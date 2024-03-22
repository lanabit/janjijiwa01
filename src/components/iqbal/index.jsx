import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed w-[100vw] bg-white z-[100]">
      <div className="h-20 px-40 flex justify-between items-center">
        {/* left navbar */}
        <ul className="flex gap-20 font-bold text-[#06585c]">
          <li className="flex items-center ">
            {" "}
            BRAND <RiArrowDropDownLine size={30} />
          </li>

          <li className="flex items-center">
            {" "}
            PARTNERSHIP <RiArrowDropDownLine size={30} />
          </li>
        </ul>

        {/* mid navbar */}
        <div className="">
          <Image src="/gambar-iqbal/jiwa-logo.png" width={100} height={100} />
        </div>

        {/* right navbar */}
        <ul className="flex gap-6 font-bold text-[#06585c]">
          <li className="flex items-center">
            {" "}
            JIWA+ <RiArrowDropDownLine size={30} />
          </li>
          <li className="flex items-center">
            {" "}
            CORPORATE <RiArrowDropDownLine size={30} />
          </li>
          <li className="flex items-center">
            ACCOUNT <RiArrowDropDownLine size={30} />
          </li>
          <div className="flex gap-2">
            <Image src="/gambar-iqbal/indonesia.png" width={20} height={10} />
            {"|"}
            <Image src="/gambar-iqbal/en.png" width={20} height={10} />
          </div>
        </ul>
      </div>
    </div>
  );
}
