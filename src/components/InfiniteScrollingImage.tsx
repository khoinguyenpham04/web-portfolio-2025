"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingImages() {
  const [speed, setSpeed] = useState<"fast" | "normal" | "slow">("normal");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSpeed("normal");
      } else {
        setSpeed("slow");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-[20rem] md:h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-2 md:pt-5 pb-2 md:pb-0">
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed={speed}
      />
    </div>
  );
}

const images = [
  {
    src: "/carousel/speakwisely.jpeg",
    alt: "ChronoQuest",
  },
  {
    src: "/carousel/studymapper.jpeg",
    alt: "studymapper",
  },
  {
    src: "/carousel/ichack26.jpg",
    alt: "ICHack 2026",
  },
  {
    src: "/carousel/delego.jpeg",
    alt: "Delego",
  },
  {
    src: "/carousel/leetcoach.jpeg",
    alt: "LeetCoach",
  },
  {
    src: "/carousel/memoral.jpeg",
    alt: "Memoral",
  },
  {
    src: "/carousel/race-the-ages.png",
    alt: "racetheagescollage",
  },
];
