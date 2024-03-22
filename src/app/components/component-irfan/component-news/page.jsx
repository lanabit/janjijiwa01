import Image from "next/image"

export default function MiddleSectionTop() {
    return(
        <div>
              <div className="grid flex justify-center py-3">
                <span className="mx-auto text-[#98b702]">
                    _________
                </span>
                <span className="font-bold text-xl text-[#06585c]">
                    Terbaru dari Jiwa Group
                </span>
              </div>
              <div className=" flex justify-center gap-5  py-10 px-44 ">
                    <div className="card w-[400px]">
                        <Image src="/gambar-irf/component-news/gambar1.jpeg" width={400} height={400} />
                        <span className="font-thin text-sm">
                            2024/02/23 - 03:30:03pm
                        </span>
                        <span className="pb-2 font-bold text-[#06585c]">
                            Daripada Ampas Kopi Dibuang, Mending Dijadikan Pupuk Tanaman!
                        </span>
                        <span className="text-sm">
                            Kopi secara alami kaya akan nutrisi seperti kalium, nitrogen, dan magnesium, menjadikannya pilihan yang sangat baik untuk pemupukan tanah. Bahkan, ampas kopi dapat berfungsi sebagai kompos alami yang berkontribusi pada kesehatan dan kesuburan tanah.
                        </span>
                        <span className="pt-2 text-[#06585c] font-bold text-xs hover:scale-105 duration-500">
                            <button>
                                SEE DETAIL →
                            </button>
                        </span>
                    </div>
                    <div className="card w-[400px]">
                        <Image src="/gambar-irf/component-news/gambar2.jpeg" width={400} height={400} />
                        <span className="font-thin text-sm">
                            2024/01/11 - 09:20:24am
                        </span>
                        <span className="pb-2 font-bold text-[#06585c]">
                            Janji Jiwa Raih Penghargaan sebagai The Brand Of The Year Dua Tahun Berturut- turut
                        </span>
                        <span className="text-sm">
                            Janji Jiwa mampu mempertahankan gelar sebagai Brand of The Year untuk kategori "Retail Coffee” dari World Branding Awards 2023-2024 selama 2 tahun berturut-turut
                        </span>
                        <span className="pt-2 text-[#06585c] font-bold text-xs hover:scale-105 duration-500">
                            <button>
                                SEE DETAIL →
                            </button>
                        </span>
                    </div>
                    <div className="card w-[400px]">
                        <Image src="/gambar-irf/component-news/gambar3.jpeg" width={400} height={400} />
                        <span className="font-thin text-sm">
                            2023/11/13 - 03:27:44pm
                        </span>
                        <span className="pb-2 font-bold text-[#06585c]">
                            Saat Kopi, Rempah dan Gadis Kretek Bertemu - Kolaborasi Janji Jiwa dan Netflix
                        </span>
                        <span className="text-sm">
                        Kolaborasi spesial dari Janji Jiwa x Gadis Kretek by Netflix menghadirkan 2 menu spesial
                        </span>
                        <span className="pt-2 text-[#06585c] font-bold text-xs hover:scale-105 duration-500">
                            <button>
                                SEE DETAIL →
                            </button>
                        </span>
                    </div>
              </div>
              <div className="flex justify-center">
                    <button className="rounded btn bg-[#06585c] text-white">
                        Selengkapnya
                    </button>
              </div>
        </div>
    )
}