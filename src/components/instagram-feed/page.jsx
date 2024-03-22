import Post from "../instagram-post/page"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa";

export default function Instagram() {
  return(
    <div className="flex justify-center">
    <div>
    <div className="grid grid-cols-5 my-16 w-[70vw]">
      <div className="col-span-2 w-[400px]">
        <div className="ml-24 ">
        <Image
          src="/wulan/logo-janjijiwa.png"
          width={150}
          height={50}
          alt="logo"
          />
          <div>Temukan postingan dan info terbaru lewat Instagram Janji Jiwa</div>
          <div className="hover:cursor-pointer hover:bg-green-700 hover:text-white w-[160px] gap-4 flex items-center p-3 border-2 border-green-700"><FaInstagram />kopijanjijiwa</div>
        </div>
      </div>
      <div className="text-xl col-span-3 w-[650px]">
        <div className="grid grid-cols-3 gap-2">
          <Post img="/wulan/posts/1.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/2.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/3.png" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/4.png" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/5.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/6.png" text="text template that goes something like this..."></Post>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-5 mt-16 w-[70vw]">
      <div className="col-span-2 w-[400px]">
        <div className="ml-24">
        <Image
          src="/wulan/logo-jiwatea.png"
          width={150}
          height={50}
          alt="logo"
          />
          <div>Temukan postingan dan info terbaru lewat Instagram Jiwa Tea</div>
          <div className="hover:cursor-pointer hover:bg-green-700 hover:text-white w-[120px] flex gap-4 items-center p-3 border-2 border-green-700"><FaInstagram />jiwatea</div>
        </div>
      </div>
      <div className="text-xl col-span-3 w-[650px]">
        <div className="grid grid-cols-3 gap-2">
          <Post img="/wulan/posts/7.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/8.png" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/9.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/10.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/12.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/19.jpeg" text="text template that goes something like this..."></Post>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-5 my-16 w-[70vw]">
      <div className="col-span-2 w-[400px]">
        <div className="ml-24">
        <Image
          src="/wulan/logo-burgergeber.png"
          width={100}
          height={50}
          alt="logo"
          />
          <div>Temukan postingan dan info terbaru lewat Instagram Burger Geber</div>
          <div className="hover:cursor-pointer gap-3 hover:bg-green-700 hover:text-white w-[160px] flex items-center p-3 border-2 border-green-700"><FaInstagram />burgergeber</div>
        </div>
      </div>
      <div className="text-xl col-span-3 w-[650px]">
        <div className="grid grid-cols-3 gap-2">
          <Post img="/wulan/posts/13.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/14.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/15.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/16.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/17.jpeg" text="text template that goes something like this..."></Post>
          <Post img="/wulan/posts/18.png" text="text template that goes something like this..."></Post>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}