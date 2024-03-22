import Image from "next/image";
import Instagram from "~/components/instagram-feed/page";
import LowerBanner from "~/components/lower-banner/page";
export default function Home() {
  return (
    <>
    <Instagram />
    <LowerBanner />
    </>
  );
}
