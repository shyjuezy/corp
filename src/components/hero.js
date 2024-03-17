import React from "react";
import Image from "next/image";

export default function Hero({ src, alt, title }) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-transparent to-slate-800"></div>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-6xl text-white">{title}</h1>
      </div>
    </div>
  );
}
