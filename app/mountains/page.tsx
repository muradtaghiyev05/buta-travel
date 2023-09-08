"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

import "swiper/css";

import Slider from "@/components/slider";
import { beachDestinations, categories } from "@/data";
import { DatePickerDemo } from "@/components/ui/datepicker";
import { SearchOptions } from "@/components/search-options";

const MountainsPage = () => {
  return (
    <div className="mountains-page">
      <div className="mountains-hero hero relative h-[70vh] min-h-[800px] lg:h-screen pt-12 lg:pt-20">
        <div className="text-white text-[2rem] md:text-7xl font-bold mt-8 mb-10 xl:mb-32 px-6 md:px-24">
          The whole world <br /> awaits.
        </div>

        <div className="px-6 md:px-24">
          <div className="flex flex-col xl:flex-row items-center justify-between rounded-2xl max-xl:gap-5 xl:px-6 xl:py-4 bg-transparent xl:bg-[#ffffff19] xl:backdrop-blur-lg">
            <div className="flex-1 flex items-center w-full gap-2 max-xl:px-4 max-xl:py-3 max-xl:rounded-3xl max-xl:bg-[#ffffff19] max-xl:backdrop-blur-lg">
              <Image
                src="/icons/search-icon.svg"
                width={20}
                height={20}
                alt="search"
              />
              <input
                className="bg-transparent w-full outline-none border-none text-white placeholder:text-opacity-70 placeholder:text-gray-300"
                type="text"
                placeholder="Search destionations, hotels"
                required
              />
            </div>
            <div className="flex flex-col xl:flex-row max-xl:gap-4 max-xl:w-full items-center">
              <div className="w-full flex justify-center max-xl:rounded-3xl max-xl:bg-[#ffffff19] max-xl:backdrop-blur-lg">
                <DatePickerDemo placeholder="Check in" />
                <DatePickerDemo placeholder="Check out" />
              </div>
              <SearchOptions />
              <button className="max-xl:w-full px-5 py-1 md:px-10 md:py-2 rounded-3xl text-sm md:text-base bg-white text-[#2659C3]">
                Search
              </button>
            </div>
          </div>
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
                <span
                  style={{
                    opacity: item.active ? 1 : 0.4,
                    textDecoration: item.active ? "underline" : "none",
                  }}
                  className="whitespace-nowrap underline-offset-4 text-sm md:text-base"
                >
                  {item.title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Slider>
      </div>

      <Slider
        className="pl-6 md:pl-24"
        title="Connect with other travelers in our community"
      >
        {beachDestinations.map((item) => (
          <SwiperSlide
            key={item.id}
            className="left-2 px-4 py-6 rounded-2xl beach-slide my-4"
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
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{item.title}</span>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/icons/star-icon.svg"
                      width={24}
                      height={24}
                      alt="score"
                    />
                    {item.score}
                  </div>
                </div>
                <span className="text-sm opacity-50">{item.duration}</span>
                <div className="flex justify-between my-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/flight-icon.svg"
                      width={24}
                      height={24}
                      alt="flight"
                    />
                    <span className="text-xs opacity-50">
                      {item.flights} Flights
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/hotel-icon.svg"
                      width={24}
                      height={24}
                      alt="Hotels"
                    />
                    <span className="text-xs opacity-50">
                      {item.hotels} Hotels
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/car-icon.svg"
                      width={24}
                      height={24}
                      alt="Transfers"
                    />
                    <span className="text-xs opacity-50">
                      {item.transfers} Transfers
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/activity-icon.svg"
                      width={24}
                      height={24}
                      alt="activity"
                    />
                    <span className="text-xs opacity-50">
                      {item.activities} Activities
                    </span>
                  </div>
                </div>
                <ul className="list-disc px-4">
                  {item.info.map((data, index) => (
                    <li key={index} className="text-sm opacity-50">
                      {data}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end pt-3">
                  <span className="line-through">₹{item.previousPrice}</span>
                  <span className="text-2xl pl-6">₹{item.currentPrice}</span>
                  <span className="opacity-50 text-xs">Per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>

      <Slider className="pl-6 md:pl-24" title="Recently viewed">
        {beachDestinations.map((item) => (
          <SwiperSlide
            key={item.id}
            className="left-2 px-4 py-6 rounded-2xl beach-slide my-4"
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
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{item.title}</span>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/icons/star-icon.svg"
                      width={24}
                      height={24}
                      alt="score"
                    />
                    {item.score}
                  </div>
                </div>
                <span className="text-sm opacity-50">{item.duration}</span>
                <div className="flex justify-between my-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/flight-icon.svg"
                      width={24}
                      height={24}
                      alt="flight"
                    />
                    <span className="text-xs opacity-50">
                      {item.flights} Flights
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/hotel-icon.svg"
                      width={24}
                      height={24}
                      alt="Hotels"
                    />
                    <span className="text-xs opacity-50">
                      {item.hotels} Hotels
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/car-icon.svg"
                      width={24}
                      height={24}
                      alt="Transfers"
                    />
                    <span className="text-xs opacity-50">
                      {item.transfers} Transfers
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/activity-icon.svg"
                      width={24}
                      height={24}
                      alt="activity"
                    />
                    <span className="text-xs opacity-50">
                      {item.activities} Activities
                    </span>
                  </div>
                </div>
                <ul className="list-disc px-4">
                  {item.info.map((data, index) => (
                    <li key={index} className="text-sm opacity-50">
                      {data}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end pt-3">
                  <span className="line-through">₹{item.previousPrice}</span>
                  <span className="text-2xl pl-6">₹{item.currentPrice}</span>
                  <span className="opacity-50 text-xs">Per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>

      <Slider className="pl-6 md:pl-24" title="All Inclusive Packages!">
        {beachDestinations.map((item) => (
          <SwiperSlide
            key={item.id}
            className="left-2 px-4 py-6 rounded-2xl beach-slide my-4"
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
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{item.title}</span>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/icons/star-icon.svg"
                      width={24}
                      height={24}
                      alt="score"
                    />
                    {item.score}
                  </div>
                </div>
                <span className="text-sm opacity-50">{item.duration}</span>
                <div className="flex justify-between my-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/flight-icon.svg"
                      width={24}
                      height={24}
                      alt="flight"
                    />
                    <span className="text-xs opacity-50">
                      {item.flights} Flights
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/hotel-icon.svg"
                      width={24}
                      height={24}
                      alt="Hotels"
                    />
                    <span className="text-xs opacity-50">
                      {item.hotels} Hotels
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/car-icon.svg"
                      width={24}
                      height={24}
                      alt="Transfers"
                    />
                    <span className="text-xs opacity-50">
                      {item.transfers} Transfers
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/activity-icon.svg"
                      width={24}
                      height={24}
                      alt="activity"
                    />
                    <span className="text-xs opacity-50">
                      {item.activities} Activities
                    </span>
                  </div>
                </div>
                <ul className="list-disc px-4">
                  {item.info.map((data, index) => (
                    <li key={index} className="text-sm opacity-50">
                      {data}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end pt-3">
                  <span className="line-through">₹{item.previousPrice}</span>
                  <span className="text-2xl pl-6">₹{item.currentPrice}</span>
                  <span className="opacity-50 text-xs">Per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>

      <Slider className="pl-6 md:pl-24" title="Honeymoon Freebies Special">
        {beachDestinations.map((item) => (
          <SwiperSlide
            key={item.id}
            className="left-2 px-4 py-6 rounded-2xl beach-slide my-4"
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
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{item.title}</span>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/icons/star-icon.svg"
                      width={24}
                      height={24}
                      alt="score"
                    />
                    {item.score}
                  </div>
                </div>
                <span className="text-sm opacity-50">{item.duration}</span>
                <div className="flex justify-between my-4">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/flight-icon.svg"
                      width={24}
                      height={24}
                      alt="flight"
                    />
                    <span className="text-xs opacity-50">
                      {item.flights} Flights
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/hotel-icon.svg"
                      width={24}
                      height={24}
                      alt="Hotels"
                    />
                    <span className="text-xs opacity-50">
                      {item.hotels} Hotels
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/car-icon.svg"
                      width={24}
                      height={24}
                      alt="Transfers"
                    />
                    <span className="text-xs opacity-50">
                      {item.transfers} Transfers
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src="/icons/activity-icon.svg"
                      width={24}
                      height={24}
                      alt="activity"
                    />
                    <span className="text-xs opacity-50">
                      {item.activities} Activities
                    </span>
                  </div>
                </div>
                <ul className="list-disc px-4">
                  {item.info.map((data, index) => (
                    <li key={index} className="text-sm opacity-50">
                      {data}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end pt-3">
                  <span className="line-through">₹{item.previousPrice}</span>
                  <span className="text-2xl pl-6">₹{item.currentPrice}</span>
                  <span className="opacity-50 text-xs">Per person</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default MountainsPage;
