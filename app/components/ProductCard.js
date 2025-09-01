'use client';

import Image from "next/image";

export default function ProductCard({ image }) {
    return (
        <div className="flex flex-col items-center justify-between p-6 sm:p-8 rounded-2xl shadow-xl bg-gradient-to-tr from-[#fcd34d] to-[#fbbf24] hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100 drop-shadow">
                    🍯 Honig
                </h2>




                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                        src={image}
                        fill
                        priority
                        alt="product image"
                        className="object-cover"
                    />
                </div>

                <p className="text-gray-800 text-sm sm:text-base max-w-sm">
                    Delicious honey straight from the farm. Perfect for your breakfast or tea.
                </p>

                <button className="mt-4 px-5 py-2 bg-white text-yellow-700 font-semibold rounded-lg shadow hover:bg-yellow-50 transition-colors duration-200">
                    Add to Cart 🛒
                </button>
        </div>
            </div>
    );
}
