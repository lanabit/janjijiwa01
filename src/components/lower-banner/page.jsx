import Image from "next/image"
export default function LowerBanner() {
  return(
    <div>
      <div className="relative bg-[#06585C] p-16 w-full lg:w-[70vw] h-[300px] mx-auto overflow-hidden mb-16">
        <div className="flex">
          <div className="text-white text-3xl font-bold">
            Nikmati brand favoritmu tanpa ante & dapatkan banyak promo menarik hanya di JIWA+
          </div>
          <div>
            <Image
            src="/wulan/phone.png"
            width={400}
            height={100}
            alt="phone"
            quality={100} />
            <div className="flex gap-8 absolute mx-[-500px] lg:mx-[-800px] my-[-50px] lg:my-[-150px]">
              <Image
                src="/wulan/appstore.png"
                width={150}
                height={50}/>
                <Image
                src="/wulan/googleplay.png"
                width={150}
                height={50}/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}