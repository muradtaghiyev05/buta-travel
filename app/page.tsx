"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";

import "swiper/css";

import Slider from "@/components/slider";
import {
  categories,
  offers,
  properties,
  travelers,
  vacationDestinations,
} from "@/data";

export default function Home() {
  const [isMobileActive, setIsMobileActive] = useState(true);

  return (
    <div className="home-page">
      <div className="home-hero hero relative h-[70vh] max-h-[800px] lg:h-screen pt-12 lg:pt-20">
        <div className="text-white text-[2rem] md:text-7xl font-bold mt-8 mb-10 lg:mb-32 px-6 md:px-24">
          The whole world <br /> awaits.
        </div>

        <Slider
          className="px-6 md:px-24"
          title="Top categories"
          textColor="white"
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id} className="category-slide">
              <Link
                href={item.link}
                className="flex flex-col justify-center items-center gap-1"
              >
                <Image src={item.icon} alt="icon" width={32} height={32} />
                <span className="whitespace-nowrap opacity-40 text-sm md:text-base">
                  {item.title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Slider>

        <Slider
          textColor="white"
          className="pt-6 pl-6 md:pl-24"
          title="Top Vacation Destinations"
        >
          {vacationDestinations.map((item) => (
            <SwiperSlide key={item.id} className="vacation-slide">
              <Link href="#">
                <Image
                  src={item.imgUrl}
                  alt="vacation"
                  fill
                  className="rounded-lg"
                />
                <span className="absolute bottom-4 left-4 font-medium text-lg lg:text-2xl">
                  {item.title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <Slider className="pt-16 pl-6 md:pl-24" title="Offers">
        {offers.map((item) => (
          <SwiperSlide
            key={item.id}
            className="left-2 px-4 py-6 rounded-lg offer-slide my-4"
          >
            <div className="flex gap-6 w-full">
              <div className="relative flex-1">
                <Image
                  className="rounded-2xl"
                  src={item.imgUrl}
                  alt="offer"
                  fill
                />
              </div>
              <div className="flex-1 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-1 text-black">
                  <span className="opacity-50 text-sm lg:text-base">
                    {item.type}
                  </span>
                  <span className="text-lg lg:text-2xl font-medium">
                    {item.title}
                  </span>
                  <span className="opacity-50 text-sm lg:text-base">
                    {item.description}
                  </span>
                </div>
                <div>
                  <button className="bg-[#2659C3] rounded-[2rem] py-2 px-4 lg:py-4 lg:px-8">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>

      <Slider className="pl-6 md:pl-24" title="Browse by property type">
        {properties.map((item) => (
          <SwiperSlide key={item.id} className="vacation-slide">
            <Link href="#">
              <Image
                src={item.imgUrl}
                alt="vacation"
                fill
                className="rounded-lg"
              />
              <span className="absolute bottom-4 left-4 font-medium text-lg lg:text-2xl">
                {item.title}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Slider>

      <div className="relative h-[300px] lg:h-[400px] mt-16 mx-6 md:mx-24 text-white">
        <Image className="rounded-3xl" src="/assets/plan.png" alt="plan" fill />
        <div className="absolute left-6 top-12 lg:left-12 lg:top-24">
          <h2 className="font-bold text-3xl lg:text-6xl pb-3 lg:pb-6">
            Plan your trip with travel expert
          </h2>
          <p className="text-lg lg:text-3xl">
            Our professional advisors can craft your perfect itinerary
          </p>
        </div>
      </div>

      <Slider
        className="pl-6 md:pl-24"
        title="Connect with other travelers in our community"
      >
        {travelers.map((item) => (
          <SwiperSlide
            key={item.id}
            className="left-2 px-4 py-6 rounded-2xl traveler-slide my-4"
          >
            <div className="w-full">
              <div className="relative h-[160px] lg:h-[200px]">
                <Image
                  className="rounded-2xl"
                  src={item.imgUrl}
                  alt="offer"
                  fill
                />
              </div>
              <div className="flex flex-col gap-0.5 lg:gap-1 text-black pt-3 lg:pt-6">
                <span className="text-lg lg:text-2xl">{item.title}</span>
                <span className="opacity-50 text-sm lg:text-base">
                  {item.host}
                </span>
                <span className="opacity-50 text-sm lg:text-base">
                  {item.users}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>

      <div className="download-mobile-app flex justify-center items-center lg:items-end h-[80vh] mt-10">
        <div className="flex px-5 md:px-10 lg:px-20 justify-center text-white gap-6">
          <div className="flex-1 hidden lg:block">
            <div className="relative w-[260px] h-[500px]">
              <Image
                className="absolute top-0 left-0"
                src="/assets/mobile-black.png"
                alt="mobile-app"
                fill
              />
              <Image
                className="absolute top-0 left-0 p-3 pb-0"
                src="/assets/mobile-mockup.png"
                alt="mobile-app"
                fill
              />
            </div>
          </div>

          <div className="flex-[3_3_0%]">
            <h3 className="text-2xl lg:text-5xl font-bold">
              Your all-in-one travel app.
            </h3>
            <p className="lg:text-2xl pt-6 pb-8">
              Book flights, hotels, trains & rental cars anywhere in the world
              in just seconds. Get real-time flight updates, travel info,
              exclusive deals, and 30% more Trip Coins only on the app!
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div>
                <div>
                  <button
                    style={{
                      backgroundColor: isMobileActive
                        ? "rgba(255, 255, 255, 0.40)"
                        : "transparent",
                    }}
                    className="px-4 py-2 rounded-2xl mr-6"
                    onClick={() => setIsMobileActive(true)}
                  >
                    Mobile
                  </button>
                  <button
                    style={{
                      backgroundColor: isMobileActive
                        ? "transparent"
                        : "rgba(255, 255, 255, 0.40)",
                    }}
                    className="px-4 py-2 rounded-2xl"
                    onClick={() => setIsMobileActive(false)}
                  >
                    Email
                  </button>
                </div>
                <div>
                  <p className="py-4 text-sm">
                    Enter your phone number to receive a text with a link to
                    download the app.
                  </p>
                  <div
                    className="px-4 py-2 rounded-2xl flex items-center justify-between"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.40)" }}
                  >
                    <div className="flex-1 flex">
                      <span className="mr-2 text-gray-300">+994</span>
                      <input
                        className="bg-transparent w-full outline-none border-none placeholder:text-gray-300"
                        type="tel"
                        placeholder="55-111-10-10"
                        pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        required
                      />
                    </div>
                    <button className="px-5 py-1 md:px-10 md:py-2 rounded-3xl text-sm md:text-base bg-white text-[#2659C3]">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col items-center gap-2">
                <div className="flex-1 h-px md:w-px bg-white opacity-20" />
                <span>or</span>
                <div className="flex-1 h-px md:w-px bg-white opacity-20" />
              </div>
              <div className="flex flex-row md:flex-col gap-2 justify-between">
                <Link href="#">
                  <Image
                    src="/assets/googleplay.png"
                    alt="play-store"
                    width={200}
                    height={60}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/assets/appstore.png"
                    alt="app-store"
                    width={200}
                    height={60}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
