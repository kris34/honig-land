'use client';

import Image from "next/image";

export default function ProductCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center justify-between p-6 sm:p-8 rounded-2xl shadow-xl bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 rounded-t-2xl"></div>

      <div className="flex flex-col items-center text-center space-y-4 mt-2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          🍯 {title}
        </h2>

        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-yellow-300">
          <Image
            src={image}
            fill
            priority
            alt="product image"
            className="object-cover"
          />
        </div>

        <p className="text-gray-700 text-sm sm:text-base max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
