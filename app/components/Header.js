'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full border-b fixed top-0 z-50 bg-white">
            <nav className="w-full px-4 sm:px-8">
                <div className="max-w-screen-lg mx-auto flex items-center justify-between h-[70px] sm:h-[80px]">

                    {/* LOGO */}
                    <h1 className="text-xl sm:text-3xl font-bold text-headerFontColor">
                        <Link href="/">Honig Land Imkerei🍯</Link>
                    </h1>

                    {/* DESKTOP MENU */}
                    <ul className="hidden sm:flex gap-x-6 items-center text-headerFontColor font-bold text-lg">
                        <li className="cursor-pointer">
                            <Link href="/shop">Shop 🛍️</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="/contact">Contact 📞</Link>
                        </li>
                    </ul>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="sm:hidden text-3xl text-headerFontColor"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✖️" : "☰"}
                    </button>
                </div>

                {/* MOBILE MENU DROPDOWN */}
                {menuOpen && (
                    <div className="sm:hidden bg-white border-t animate-slideDown">
                        <ul className="flex flex-col gap-4 py-4 text-headerFontColor font-bold text-lg">
                            <li className="px-4">
                                <Link
                                    href="/shop"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Shop 🛍️
                                </Link>
                            </li>
                            <li className="px-4">
                                <Link
                                    href="/contact"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact 📞
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* ANIMATION */}
            <style jsx>{`
                .animate-slideDown {
                    animation: slideDown 0.25s ease-out;
                }
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </header>
    );
}
