'use client';

import bild_1 from '../assets/images/bild-7.jpg';
import bild_2 from '../assets/images/bild-8.jpg';
import bild_3 from '../assets/images/bild-9.jpg';
import bild_4 from '../assets/images/bild-10.jpg';
import bild_5 from '../assets/images/bild-11.jpg';
import bild_6 from '../assets/images/bild-12.jpg';
import bild_7 from '../assets/images/bild-13.jpg';

import ProductCard from '../components/ProductCard';

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-24 px-4 md:px-8">
            <h2 className="font-bold text-2xl md:text-3xl text-headerFontColor mb-12">
                Unsere Produkte
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                <ProductCard image={bild_1} />
                <ProductCard image={bild_2} />
                <ProductCard image={bild_3} />
                <ProductCard image={bild_4} />
                <ProductCard image={bild_5} />
                <ProductCard image={bild_6} />
                <ProductCard image={bild_7} />
            </div>
        </div>
    );
} 