"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";


export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Unleash the Creativity of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-blue-500">
                Interactive Mockups
              </span>
            </h1>
          </>
        }
      >
        <img
          src='image.png'
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
