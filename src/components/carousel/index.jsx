import Image from "next/image";

export default function Carousel() {
  return (
    <div className="h-[100vh] py-20">
      <div className="carousel carousel-center max-w-full p-4 space-x-4 gap-4">
        <div className="carousel-item py-20">
          <Image
            src="/gambar-iqbal/banner1.jpg"
            className="rounded-none"
            width={1000}
            height={500}
          />
        </div>
        <div className="carousel-item py-20">
          <Image
            src="/gambar-iqbal/banner2.jpg"
            className="rounded-none"
            width={1000}
            height={500}
          />
        </div>
        <div className="carousel-item py-20">
          <Image
            src="/gambar-iqbal/banner3.jpg"
            className="rounded-none"
            width={1000}
            height={500}
          />
        </div>
        <div className="carousel-item py-20">
          <Image
            src="/gambar-iqbal/banner4.jpg"
            className="rounded-none"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
