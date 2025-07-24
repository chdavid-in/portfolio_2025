// src/components/ClientLogoMarquee.tsx
import React from "react";

const logos = [
  "src/assets/client-logos/Apple.png",
  "src/assets/client-logos/Cisco.png",
  "src/assets/client-logos/firstpass.png",
  "src/assets/client-logos/HSBC.png",
  "src/assets/client-logos/scb.png",
  "src/assets/client-logos/um.png",
  "src/assets/client-logos/bby.png",
  // Add more paths
];

export default function ClientLogoMarquee() {
  return (
    <div className="relative overflow-hidden w-full py-0 md:py-24">
      <div className="flex w-max animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index}`}
            className="h-[32px] mx-6 filter grayscale contrast-0 brightness-50 md:h-[60px] md:mx-12 dark:brightness-100 dark:contrast-75 hover:grayscale-none hover:filter-none transition duration-500"
          />
        ))}
      </div>
    </div>
  );
}
