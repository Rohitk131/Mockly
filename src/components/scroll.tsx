"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Unleash the Creativity of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                Interactive Mockups
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://cdn.dribbble.com/userupload/4256578/file/original-4a31ccd7bbd26d1858d646ebe04aecc0.jpg`}
          alt="A vibrant interactive mockup design showcasing creativity"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
