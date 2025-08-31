'use client';

import Image from 'next/image';
import bild_1 from '../assets/images/bild-1.png';
import bild_2 from '../assets/images/bild-2.png';
import bild_3 from '../assets/images/bild-3.png';
import bild_4 from '../assets/images/bild-4.png';
import bild_5 from '../assets/images/bild-5.png';
import bild_6 from '../assets/images/bild-6.png';

import Link from 'next/link';


export default function HomepageBanner() {
    return (
        <div className="flex flex-col justify-center items-center text-center p-6">
            <div className="bee bee-1 text-4xl"><span className="buzz">🐝</span></div>

            <h2 className="mb-4 font-bold text-headerFontColor text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Honig & mehr, mit Liebe aus Gnandstein 🇩🇪🧡
            </h2>

            <p className="mb-6 text-gray-700 sm:text-lg md:text-xl lg:text-2xl">
                Natürlicher Honig aus kleinen Familienimkereien 🍯<br />
                Lecker, gesund und mit Liebe zur Natur 🐝
            </p>

            <button className="cursor-pointer mb-10 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition">
                Produkte entdecken 🛒
            </button>

            <div className="w-full max-w-5xl grid grid-cols-1 gap-5 items-center justify-center md:grid-cols-2 bg-white p-10 shadow-lg rounded-xl">
                {[bild_5, bild_1].map((img, i) => (
                    <div
                        key={i}
                        className="relative w-full aspect-square rounded-xl"
                    >
                        <Image
                            src={img}
                            alt={`Galerie Bild ${i + 1}`}
                            fill
                            className="rounded-xl object-cover shadow-xl"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-10 w-full max-w-4xl rounded-lg p-6 text-gray-800 bg-white shadow-xl lg:text-xl">
                🐝 Unser Honig wird von Hand aus reinen Wiesen und Wäldern gewonnen.<br />
                🍋 Perfekt für Tee, Desserts oder als gesunder Snack.<br />
                💛 Unterstützen Sie kleine Familienimkereien und genießen Sie Natur pur!
            </div>

            <div className="mt-10 w-full max-w-4xl rounded-lg p-6 text-gray-800 bg-white shadow-xl lg:text-xl">
                <div className="grid gap-6">
                    <h2 className="text-2xl font-bold">Über uns</h2>
                    <p className="text-lg">Wir sind Dirk und Boryana.</p>

                    <div className="flex gap-4 justify-center">
                        <div className="relative md:w-64 w-full aspect-square rounded-xl">
                            <Image
                                src={bild_4}
                                fill
                                priority
                                alt="bild 4"
                                className="rounded-xl object-cover shadow-xl"
                            />
                        </div>
                        <div className="relative md:w-64 w-full aspect-square rounded-xl">
                            <Image
                                src={bild_6}
                                fill
                                priority
                                alt="bild 6"
                                className="rounded-xl object-cover shadow-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
