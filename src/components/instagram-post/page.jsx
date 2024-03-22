import { IoMdHeartEmpty } from "react-icons/io";
import { RiChat3Line } from "react-icons/ri";

export default function Post({img, text}) {
  return(
    <div className="group relative w-[210px] h-[210px] bg-pink-200">
      <div className="bg-black/30 hidden p-8 group-hover:block absolute text-white w-[210px] h-[210px]">
        <div className="flex text-3xl justify-center p-3"><IoMdHeartEmpty /><RiChat3Line /></div>
        <div className="text-center text-sm">{text}</div>
      </div>
      <img src={img} className="w-[210px] h-[210px] object-cover"></img>
    </div>
  )
}