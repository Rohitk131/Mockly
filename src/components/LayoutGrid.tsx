"use client";
import React from "react";
import { LayoutGrid } from "../components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "https://i.ibb.co/pZTVm4r/mockup-14.png",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "https://i.ibb.co/K9zG2wn/mockup-17.png",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "https://i.ibb.co/QPPRW89/mockup-18.png",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "https://i.ibb.co/TR60q5M/mockup-19.png",
  },
];

