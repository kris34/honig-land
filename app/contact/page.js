'use client';

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col justify-start items-center text-center pt-20 p-6">
            <h2 className="mb-4 font-bold text-headerFontColor text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Kontakt & Anfragen 🐝💛
            </h2>

            <div className="mt-6 w-full max-w-4xl rounded-lg p-6 text-gray-800 bg-white shadow-xl lg:text-xl">
                <h3 className="text-2xl font-bold mb-4">📞 Kontaktinformationen</h3>

                <div className="grid gap-4 text-lg">
                    <p>📧 <span className="font-semibold">E-Mail:</span> info@gnandstein-honig.de</p>
                    <p>📱 <span className="font-semibold">Telefon:</span> +49 123 456789</p>
                    <p>📍 <span className="font-semibold">Adresse:</span> Gnandstein, Deutschland</p>
                </div>
            </div>
        </div>
    );
}
