import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white flex flex-col lg:flex-row gap-4 lg:gap-28 p-10">
      <div className="text-[2rem] font-bold text-center sm:text-start">
        Trxvl.
      </div>
      <div className="w-full text-center sm:text-start">
        <div className="text-sm text-[#808080] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <ul className="flex flex-col gap-4">
            <li>Seslendirme ve Alt Jazz</li>
            <li>Media Market</li>
            <li>Gillie</li>
            <li>Size Last</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>Self Betimes</li>
            <li>Yatırımcı İlişkileri</li>
            <li>Basal Himmler</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>Yard Market</li>
            <li>İş İmkanları</li>
            <li>Car Tercihleri</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>Hedge Karla</li>
            <li>Mullein Koşulları</li>
            <li>Autumnal Bulgier</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-6">
          <button className="border border-[#808080] px-4 py-2 text-[#808080]">
            Helmet KOD
          </button>
          <div className="flex gap-2">
            <Link href="#">
              <Image src="/icons/fb-logo.png" width={24} height={24} alt="fb" />
            </Link>
            <Link href="#">
              <Image
                src="/icons/insta-logo.png"
                width={24}
                height={24}
                alt="fb"
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/twitter-logo.png"
                width={24}
                height={24}
                alt="fb"
              />
            </Link>
            <Link href="#">
              <Image src="/icons/yt-logo.png" width={24} height={24} alt="fb" />
            </Link>
          </div>
        </div>
        <span className="text-[#808080] text-xs">
          © 1997-2021 Netflix, Inc. (i-062d573a0ee099242)
        </span>
      </div>
    </footer>
  );
};

export default Footer;
