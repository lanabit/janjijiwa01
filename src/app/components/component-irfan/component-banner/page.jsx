import Image from "next/image"

export default function MiddleSectionMid() {
    return(
        <div>
            <div className="bg-[url(/gambar-irf/component-banner/banner.webp)] w-[60vw] h-[13vw] mx-auto my-8 py-3">
                <div className="flex flex-col justify center">
                    <span className="my-2 mx-auto text-[#98b702]">
                        ______
                    </span>
                    <span className="mx-auto font-bold text-xl text-white">
                        Bergabunglah dengan kami!
                    </span>
                    <span className="my-2 mx-24 text-center text-sm text-white px-40">
                        Jadilah bagian dari keluarga besar Jiwa Group. Bertumbuh bersama memajukan industri F&B di Indonesia.
                    </span>
                    <button className="my-2 mx-auto w-[8vw] rounded btn border-none bg-[#98b702] text-white">
                            Selengkapnya
                        </button>
                </div>
            
        </div>
                <div className="gap-4 flex items-center w-[60vw] mx-auto my-8 py-3">
                    <div className="text-[#98b702]">⎯⎯⎯</div>
                    <div className="font-bold text-xl">Jiwa Group On The Air</div> 
                </div>

        </div>
        
    )
}