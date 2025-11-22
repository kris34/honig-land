'use client';

import Link from 'next/link';
import germanFlagImage from '../assets/images/flag-germany.webp'
import Image from 'next/image';

export default function Header() {
    return (
        <header className="w-full border-b fixed top-0 z-50 bg-white">
            <nav className="w-full flex items-center px-4 sm:px-8">

                <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between h-[80px]">
                    <h1 className="text-2xl sm:text-3xl font-bold text-headerFontColor">
                        <Link href='/'>Honig Land 🍯</Link>
                    </h1>

                    <ul className="flex gap-x-4 sm:gap-x-8 items-center text-headerFontColor font-bold text-[16px] sm:text-[20px]">
                        <li className="flex items-center gap-1 cursor-pointer select-none">
                            <Link href="/shop">Shop 🛍️</Link>
                        </li>
                        <li className="flex items-center gap-1 cursor-pointer select-none">
                            <Link href="/contact">Contact 📞</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    );
}
