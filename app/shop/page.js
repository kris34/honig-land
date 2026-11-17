'use client';

import bild_1 from '../assets/images/bild-7.jpg';
import bild_2 from '../assets/images/bild-8.jpg';
import bild_3 from '../assets/images/bild-9.jpg';
import bild_4 from '../assets/images/bild-10.jpg';
import bild_6 from '../assets/images/bild-12.jpg';
import bild_7 from '../assets/images/bild-13.jpg';
import bild_19 from '../assets/images/bild_19.jpg';
import bild_18 from '../assets/images/bild_18.jpg';
import bild_20 from '../assets/images/bild_20.jpg';
import bild_21 from '../assets/images/bild_21.jpg';


import ProductCard from '../components/ProductCard';

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-24 px-4 md:px-8">
            <h2 className="font-bold text-2xl md:text-3xl text-headerFontColor mb-12">
                Unsere Produkte
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                <ProductCard image={bild_1} title={'Lindenhonig'} description={'Schmeckt intensiv und hat ein minziges Aroma. Manchmal enthält er auch Zitrusnoten. Leicht malzig erinnert sein Geschmack ein wenig an Karamell. Seine Farbe variiert von hellgelb mit leichtem Grünstich bis Beige.'} />
                <ProductCard image={bild_2} title={'Rapshonig'} description={'Ist mild und riecht leicht nach Kohl. Er hat eine hellbeige bis weiße Farbe. Sein blumiger Geschmack ist süß und er besitzt ein kohlartiges Aroma.'} />
                <ProductCard image={bild_4} title={'Obstblütenhonig'} description={'Obstblütenhonig schmeckt mild, süß und fruchtig-aromatisch, oft mit blumigen Noten. Der Geschmack kann je nach Herkunft und den verarbeiteten Obstblüten leicht variieren, aber die allgemeine Charakteristik ist ein angenehmer, milder und fruchtiger Geschmack.'} />
                <ProductCard image={bild_6} title={'Sommertracht mit Lindenhonig'} description={'Lindenhonig schmeckt intensiv, oft mit einer minzigen oder mentholartigen Note und einer leicht würzigen, blumigen Note. Er kann auch fruchtige oder zitronige Anklänge haben. Je nach Anteil von Nektar und Honigtau variiert die Süße und der Geschmack von leicht bis kräftig'} />
                <ProductCard image={bild_7} title={'Robinienhonig'} description={'Robinienhonig hat einen milden, lieblichen und blumigen Geschmack mit einer kräftigen Süße. Er bleibt dank seines hohen Fruchtzuckeranteils lange flüssig und hat eine helle, fast klare Farbe. Er eignet sich gut für Tee, Müsli und Desserts, kann aber auch zum Süßen von Salaten, Soßen und Desserts verwendet werden.'} />
                <ProductCard image={bild_18} title={'Waldhonig'} description={'Waldhonig verfügt über würzige Aromen und schmeckt je nach Sorte leicht herb und malzig. Seine Konsistenz ist flüssig und seine Farbe reicht von Bernstein bis Schwarz. In der Regel kristallisiert er nur langsam aus.'} />
                <ProductCard image={bild_20} title={'Waldblüte'} description={'Waldblütenhonig schmeckt komplex, vereint die blumige Süße von Blütenhonig mit den kräftigen, malzigen und harzigen Noten von Waldhonig. Er ist intensiver als reiner Blütenhonig, aber nicht so erdig wie reiner Waldhonig, und wird oft als leicht würzig mit angenehmer Süße beschrieben'} />
                <ProductCard image={bild_21} title={'Feldblütenhonig'} description={'Feldblütenhonig wird aus dem Nektar einer Vielzahl von Blüten gewonnen und zeichnet sich durch einen charakteristischen Geschmack aus, der je nach Standort und Erntezeit variiert.'} />
                <ProductCard image={bild_3} title={'Propolis'} description={'Propolis ist eine harzige Mischung aus Pflanzenmaterialien und Bienensekreten, die Honigbienen sammeln, um ihren Bienenstock abzudichten, zu reinigen und zu schützen. Es dient als natürliches Antibiotikum, Antimykotikum und Antivirusmittel, das Bakterien, Pilze und Viren abwehrt, und wird auch für seine entzündungshemmenden, schmerzlindernden und wundheilungsfördernden Eigenschaften beim Menschen genutzt. Propolis enthält Flavonoide, Phenole und ätherische Öle'} />
                <ProductCard image={bild_19} title={'Bienenpollen'} description={'Bienenpollen ist eine Mischung aus Blütenpollen, Nektar, Enzymen und Wachs, die von Bienen gesammelt wird und sich durch eine hohe Nährstoffdichte auszeichnet. Er ist reich an Proteinen, Vitaminen, Mineralstoffen, Aminosäuren und Antioxidantien. Die Körner sind gelb bis bräunlich und haben einen süßen, blumigen Geschmack'} />
            </div>
        </div>
    );
} 