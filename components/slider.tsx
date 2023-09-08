import React from "react";
import { Swiper } from "swiper/react";

interface SliderProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  textColor?: string;
}

const Slider: React.FC<SliderProps> = ({
  children,
  title,
  className,
  textColor = "black",
}) => {
  return (
    <div className={`text-white mt-16 ${className}`}>
      <div
        style={{ color: textColor }}
        className="text-xl lg:text-[2rem] font-bold pb-6"
      >
        {title}
      </div>
      <div className="flex justify-center items-center">
        <Swiper spaceBetween={20} slidesPerView="auto" className="w-full">
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
