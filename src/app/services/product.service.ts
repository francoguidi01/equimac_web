import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList = new Array<Product>();

  constructor() {
    this.productList.push(
      
        {
            id: 1,
            name: 'Amasadora Mb',
            description: 'Amasadora sin mando 7 KG Harina 11 kg masa TACHO ACERO CUERPO PINTADO. Proyectada para cubrir las necesidades de panaderías, confiterías, pizzerías, etc.',
            details: [
                'Estructura Metálica resistente.',
                'Ideal para todo tipo de masas.',
                'Capacidad de amasado: 7 kg de harina y 11 kg de masa.',
                'Tacho de acero con cuerpo pintado para durabilidad.',
                'Tiempo de amasado: 8 a 10 minutos aproximadamente.',
                'Batea de acero inoxidable AISI 304.',
                'Montada sobre rodamientos cónicos y blindados.',
                'Equipada con caja reductora con sinfín y corona.'
            ],
            images: []
        },
        {
            id: 2,
            name: 'Amasadora MAEQUIP F 20/30/50 kg',
            description: 'Amasadora de mesa MAEQUIP F, ideal para panaderías y pizzerías, con una capacidad de 20 a 50 kg de masa. Equipada con una batea de acero inoxidable de 25 litros y un motor de alta potencia para un rendimiento superior.',
            details: [
                'Batea de acero inoxidable con diámetro de 40 cm y altura de 20 cm.',
                'Montada sobre rulemanes con plato para mayor estabilidad.',
                'Capacidad de amasado: de 5 a 11 kilos de harina.',
                'Batea sin tetón para una limpieza más fácil.',
                'Motor de 3/4 HP con plaqueta de arranque.',
                'Transmisión por cadena para un funcionamiento robusto.',
                'Estructura en caño resistente.',
                'Chasis y refuerzos de chapa de 2 mm de espesor.'
            ],
            images: []
        }
,        
{
    id: 3,
    name: 'Amasadora ALPAN 50/100 kg',
    description: 'Amasadora convencional a horquilla ALPAN, diseñada para manejar grandes volúmenes de masa con una capacidad de hasta 100 kg. Equipada con batea de cono y rasqueta para una mezcla eficiente y un motor monofásico para un rendimiento confiable.',
    details: [
        'Diseñada para manejar hasta 50 kg de harina.',
        'Amasadora a horquilla de fundación pesada.',
        'Batea con cono y rasqueta para una mezcla uniforme.',
        'Motor monofásico reacondicionado para un rendimiento optimizado.',
        'Estructura robusta para durabilidad y estabilidad.'
    ],
    images: []
}
,
{
    id: 4,
    name: 'Amasadora Rápida AE-25MF mono 1 vel VISA',
    description: 'Amasadora rápida AE-25MF de VISA, diseñada para panaderías y pastelerías que requieren un equipo eficiente y robusto para sus procesos de mezcla. Con motor monofásico de una velocidad, garantiza un amasado rápido y homogéneo.',
    details: [
        'Motor monofásico de una velocidad para un funcionamiento eficiente.',
        'Diseñada para un amasado rápido y homogéneo.',
        'Estructura robusta y duradera para uso industrial.',
        'Ideal para panaderías, pastelerías y negocios de repostería.',
        'Fácil de limpiar y mantener.'
    ],
    images: []
}
,
{
    id: 5,
    name: 'Amasadora Rápida SX50 SILCOOK',
    description: 'Amasadora rápida SX50 de SILCOOK, diseñada para ofrecer un rendimiento superior en la preparación de masas. Con 2 velocidades, función de reversa, visor digital y panel Soft Touch, esta amasadora es ideal para panaderías y pastelerías que buscan eficiencia y precisión en su producción.',
    details: [
        'Potencia: 3 kW / 220V.',
        'Dos velocidades + reversa para el quitado de amasijo.',
        'Visor digital e indicador de temperatura de la masa.',
        'Incluye timer y parada de emergencia para mayor seguridad.',
        'Sistema de distribución a cinta (no a cadena) para un funcionamiento suave y silencioso.',
        'Panel Soft Touch para un manejo intuitivo.',
        'Dimensiones: Largo 57 cm, Profundidad 91 cm, Altura 109 cm.',
        'Peso: 168 kg.'
    ],
    images: []
}
,
{
    id: 7,
    name: 'Amasadora Rapida SH 20A/30A/40A/60A/60B CATANIA 8 kg h electromecanica',
    description: 'Amasadora rápida a espiral SH-20A de CATANIA, diseñada para ofrecer un amasado eficiente y homogéneo. Con una capacidad de hasta 8 kg de harina y 12 kg de masa, esta amasadora electromecánica es ideal para panaderías y pastelerías que buscan un equipo robusto y confiable.',
    details: [
        'Amasadora rápida a espiral.',
        'Modelo: SH-20A.',
        'Marca: CATANIA.',
        'Capacidad máxima de harina: 8 Kg.',
        'Capacidad máxima de masa: 12 kg.',
        'Construidas en Hierro fundido pintura epoxi.',
        'Batea y espiral de acero inoxidable.',
        'Tablero de control análogo.',
        'Rejillas de protección elaboradas en acero con corte automático cuando se levanta la misma.',
        'Dos velocidades.',
        'Tiempo de amasado: 8 a 12 min.',
        'Temporizador.',
        'Potencia: 1,1 kW / 1,5 HP.',
        'Voltaje: 220 V / 50 Hz Monofásica.',
        'Capacidad de batea/bowl: 20 Lt.',
        'Velocidad del gancho: 132/264 RPM.',
        'Velocidad de la batea: 13/26 RPM.',
        'Medidas: 70x50x77 cm (altura, ancho, largo).'
    ],
    images: []
}
,
{
    id: 8,
    name: 'Batidora 4,6 lts. Mod. KMC 570 N KENWOOD',
    description: 'Batidora Amasadora Kenwood KMC 570 de 4,6 litros, ideal para uso doméstico y profesional ligero. Equipada con los tres ganchos funcionales (amasador, batidor y mezclador) para una versatilidad completa en la preparación de alimentos.',
    details: [
        'Potencia de 1000 watts.',
        'Bowl de acero inoxidable con capacidad de 4,6 litros.',
        'Control automático de velocidad por pulso.',
        'Mantiene velocidad y potencia constante para resultados óptimos.',
        'Sistema de rotación planetaria para una mezcla uniforme.',
        'Capacidad para hasta 2,7 kg de masa.',
        'Ideal para uso doméstico y profesional ligero.'
    ],
    images: []
}
,
{
    id: 9,
    name: 'Batidora Mixer-5/7 MORETTI',
    description: 'Excelente para realizar tortas, alimentos de masa y más, la Batidora Mixer-5/7 de MORETTI trabaja de forma eficiente y suave. Equipada con un bowl de acero inoxidable y diseñada para manejar hasta 500 gramos de masa final.',
    details: [
        'Capacidad de 5 litros.',
        'Capacidad de amasado: 500 gramos de masa final.',
        '3 velocidades (55 – 280 rpm) para una variedad de aplicaciones.',
        'Potencia de 300 watts.',
        'Voltaje: 220V.'
    ],
    images: []
}
,
{
    id: 10,
    name: 'Batidora CATANIA 7/10/15/20/30/40 lts.',
    description: 'Batidora CATANIA con cuerpo de fundición de hierro, ideal para uso comercial e industrial. Equipada con accesorios (batidor, amasador minio y mezclador) en acero inoxidable y bowl de 30 litros también en acero inoxidable.',
    details: [
        'Capacidades disponibles: 7, 10, 15, 20, 30 y 40 litros.',
        'Cuerpo de fundición de hierro para durabilidad y estabilidad.',
        'Accesorios (batidor, amasador minio y mezclador) en acero inoxidable.',
        'Bowl de 30 litros en acero inoxidable.',
        '3 velocidades: 110/200/420 RPM para diferentes tipos de mezcla.',
        'Transmisión a engranajes para un funcionamiento robusto.',
        'Manivela para ascender y descender el bowl.',
        'Potencia: 1,5 kW / 2 HP.',
        'Voltaje: 380V (trifásica) opcional 220V/50Hz monofásica.',
        'Rejilla protectora con corte automático de energía para seguridad.'
    ],
    images: []
}
,
{
    id: 11,
    name: 'Batidora SILCOOK VIA CHEFF 10/20/30 lts.',
    description: 'Batidora SILCOOK VIA CHEFF ideal para uso profesional, con capacidades de 10, 20 y 30 litros. Equipada con bowl de acero inoxidable de 20 litros y capacidad máxima de 5 kg de harina seca. Posee tres velocidades mecánicas y doble switch de seguridad para un funcionamiento seguro.',
    details: [
        'Voltaje: 220 V / 50 Hz.',
        'Potencia: 1.1 kW.',
        'Bowl de acero inoxidable con capacidad de 20 litros.',
        'Capacidad máxima de harina seca: 5 kg.',
        'Tres velocidades mecánicas para ajuste de mezcla.',
        'Doble switch de seguridad para protección adicional.'
    ],
    images: []
},
{
    id: 12,
    name: 'Batidora INDUPAN 20/40 lts.',
    description: 'Batidora INDUPAN con estructura de acero inoxidable y sistema planetario de rotación construido en fundición. Equipada con recipiente de trabajo de acero inoxidable y motor de dos velocidades más variador de polea móvil para ajustar el régimen de mezclado según la necesidad. Cuenta con sistema de elevación por palanca y protección para manos.',
    details: [
        'Estructura realizada en acero inoxidable.',
        'Sistema planetario de rotación en fundición.',
        'Recipiente de trabajo en acero inoxidable.',
        'Motor de dos velocidades más variador de polea móvil.',
        'Sistema de elevación de recipiente por palanca.',
        'Protección para manos para seguridad adicional.'
    ],
    images: []
}
,
{
    id: 13,
    name: 'Batidora A muñeca MAEQUIP 20 lts.',
    description: 'Batidora A muñeca MAEQUIP ideal para crema pastelera, bizcochuelos, etc. Equipada con tacho de acero inoxidable de 20 litros (30 cm de diámetro x 30 cm de alto), motor de 3/4 HP y sistema de tres velocidades mediante cambio de polea. Construida completamente en fundición de hierro para robustez y durabilidad.',
    details: [
        'Ideal para crema pastelera, bizcochuelos, etc.',
        'Tacho de acero inoxidable de 20 litros (30 cm diámetro x 30 cm alto).',
        'Motor de 3/4 HP.',
        'Tres velocidades por cambio de polea.',
        'Construido 100% de fundición de hierro.',
        'Medidas: 40 x 70 x 100 cm (frente, prof., alt).'
    ],
    images: []
}
,     
{
    id: 14,
    name: 'Sobadoras 450/500/600 de mesa',
    description: 'Sobadoras disponibles en modelos de 450, 500 y 600 mm de ancho, con opción de mesa o pie. Marcas disponibles: MAEQUIP, FINESCHI, DINO en versiones trifásicas o monofásicas según la necesidad.',
    details: [
        'Marcas disponibles: MAEQUIP, FINESCHI, DINO (trifásica o monofásica).'
    ],
    images: []
}
,
{
    id: 15,
    name: 'Sobadora laminadora 450 mm de pie MAEQUIP',
    description: 'Sobadora laminadora eléctrica de pie MAEQUIP, ideal para pastelerías y panaderías. Capacidad para laminar hasta 15 kg de masa con una separación máxima entre rodillos de 25 mm. Equipada con rodillos de cromo para durabilidad y fácil limpieza.',
    details: [
        'Tipo: Sobadora laminadora eléctrica de pie.',
        'Capacidad: 15 kg de masa.',
        'Separación máxima entre rodillos: 25 mm.',
        'Tensión: 220 V.',
        'Frecuencia: 50 Hz.',
        'Potencia: 750 Watt.',
        'Consumo: 0,75 Kw/h.',
        'Medidas: 75 x 90 x 123 cm (altura).',
        'Peso: 77 kg.',
        'Material de los rodillos: Cromo.'
    ],
    images: []
}
,
{
    id: 16,
    name: 'Trinchadora de panes',
    description: 'Trinchadora ideal para el perfecto armado de panes de masa. Equipada con un sistema a paños que permite una regulación milimétrica para cortes precisos. Montada sobre rodamientos blindados para una operación suave y duradera.',
    details: [
        'Perfecto armado de panes de masa.',
        'Sistema a paños para regulación milimétrica.',
        'Montada sobre rodamientos blindados para mayor durabilidad.'
    ],
    images: []
}
,
{
    id: 17,
    name: 'Armadora Bonetto',
    description: 'La Armadora Bonetto es una máquina de producción diseñada para formar pan de miga de hasta 12 kg, también utilizada para armar pan lactal. Se destaca por su eficiente desgasificado y armado rápido, reduciendo así el tiempo de sobado de la masa y la mano de obra empleada.',
    details: [
        'Capacidad para formar pan de miga de hasta 12 kg.',
        'Ideal también para armar pan lactal.',
        'Eficiente desgasificado y armado rápido.',
        'Reduce el tiempo de sobado de la masa y la mano de obra empleada.'
    ],
    images: []
}
,
{
    id: 18,
    name: 'Laminadora de mesa SXL450 SILCOOK',
    description: 'Laminadora de mesa SXL450 de SILCOOK, adecuada para el procesamiento de hojaldre y todo tipo de masa. Cuenta con un diseño de estructura plegable para ocupar menos espacio, switch interruptor de emergencia y roller de tubo de acero sin costura con tratamiento de cromado duro para un espacio de rodillo no adhesivo.',
    details: [
        'Adecuado para el procesamiento de hojaldre y todo tipo de masa.',
        'Diseño de estructura plegable para ahorrar espacio.',
        'Roller o rodillo de tubo de acero sin costura, tratamiento de cromado duro.',
        'Espacio de rodillo no adhesivo para un laminado limpio.',
        'Motor y placa equipados con dispositivo de protección contra sobrecargas y pérdidas de fase.',
        'Operación segura, higiénica y fácil de limpiar.',
        'Rejilla protectora con switch de seguridad incorporado.',
        'Placas de descarga de acero inoxidable para mayor durabilidad.'
    ],
    images: []
}
,
{
    id: 19,
    name: 'Armadora de Medialunas',
    description: 'La Armadora de Medialunas es una máquina pequeña diseñada para trabajar sobre mesada. Permite elaborar medialunas, desde las pequeñitas de copetín hasta las tradicionales, así como cañoncitos y sacramentos. Además, puede armar pan tipo Miñón, Flautas y todo tipo de masa que deba ser enrollada, con pesos individuales desde 10 gramos hasta 145 gramos de peso crudo por pieza. Es fácilmente regulable para obtener diferentes tipos de armados.',
    details: [
        'Diseñada para trabajar sobre mesada.',
        'Elabora medialunas, cañoncitos, sacramentos, pan tipo Miñón, Flautas y más.',
        'Capacidad para diferentes tamaños y tipos de masa, desde 10 gramos hasta 145 gramos de peso crudo por pieza.',
        'Fácilmente regulable para obtener diferentes tipos de armados.'
    ],
    images: []
}
,
{
    id: 20,
    name: 'Freidora Eléctrica Via Cheff',
    description: 'Freidora eléctrica disponible en capacidades de 8 litros, 11 litros o doble de 16 litros, marca Via Cheff. Ideal para uso comercial en cocinas profesionales.',
    details: [
        'Capacidades disponibles: 8 litros, 11 litros o doble de 16 litros.',
        'Disponible con o sin canilla (desagüe).',
        'Marca: Via Cheff.',
        'Ideal para uso en cocinas profesionales.'
    ],
    images: []
}
,
{
    id: 21,
    name: 'Freidora Nova MORELLI STD',
    description: 'Freidora marca MORELLI disponible en capacidades de 15 litros o 35 litros, potenciadas o no potenciadas según la configuración deseada.',
    details: [
        'Capacidades disponibles: 15 litros o 35 litros.',
        'Potenciadas o no potenciadas según configuración.',
        'Marca: MORELLI.'
    ],
    images: []
}
,
{
    id: 22,
    name: 'Freidora DEPAOLO',
    description: 'Freidora DEPAOLO disponible en capacidades de 18 litros o 33 litros, ideal para cocinas comerciales y profesionales.',
    details: [
        'Capacidades disponibles: 18 litros o 33 litros.',
        'Marca: DEPAOLO.',
        'Ideal para cocinas comerciales y profesionales.'
    ],
    images: []
}
,
{
    id: 23,
    name: 'FM-20/30 automático MORELLI',
    description: 'Freidora automática MORELLI disponible en capacidades de 20 litros o 30 litros, ideal para uso comercial y profesional.',
    details: [
        'Capacidades disponibles: 20 litros o 30 litros.',
        'Marca: MORELLI.',
        'Diseño automático para mayor eficiencia.'
    ],
    images: []
}
,
{
    id: 24,
    name: 'Alta Recuperación 50 lts. MAEQUIP BAR',
    description: 'Freidora de alta recuperación MAEQUIP BAR con capacidad de 50 litros, ideal para cocinas industriales y grandes volúmenes.',
    details: [
        'Capacidad: 50 litros.',
        'Marca: MAEQUIP.',
        'Diseño de alta recuperación para un rendimiento eficiente.'
    ],
    images: []
}
,
{
    id: 25,
    name: 'Eléctrica 15 litros de pie -6 kw SPEEDY',
    description: 'Freidora eléctrica de 15 litros, disponible con o sin pie, marca SPEEDY. Potencia de 6 kW, ideal para diversos entornos comerciales.',
    details: [
        'Capacidad: 15 litros.',
        'Opciones disponibles: con o sin pie.',
        'Potencia: 6 kW.',
        'Marca: SPEEDY.'
    ],
    images: []
}
,
{
    id: 26,
    name: 'Freidora churros DEPAOLO',
    description: 'Freidora especializada para churros, marca DEPAOLO, ideal para preparaciones de repostería y snacks.',
    details: [
        'Especializada para churros.',
        'Marca: DEPAOLO.',
        'Perfecta para repostería y snacks.'
    ],
    images: []
}
,
{
    id: 27,
    name: 'Canasto para Freír Estañado',
    description: 'Canasto para freír recubierto con estaño, disponible en varias medidas para adaptarse a tus necesidades: 26x26 cm, 22x22 cm, 32x16 cm, 28x14 cm, 26x13 cm y 24x14 cm.',
    details: [
        'Material: Estaño.',
        'Ideal para freír alimentos con seguridad y eficiencia.',
        'Disponible en varias medidas para adaptarse a diferentes tamaños de alimentos.'
    ],
    images: []
}
,
{
    id: 28,
    name: 'Cheff 30 automático Minisit MORELLI',
    description: 'Hervidor de pasta automático Cheff 30 de la marca MORELLI. Equipado con grifería para reposición de agua y válvula de seguridad automática para un manejo seguro y eficiente.',
    details: [
        'Marca: MORELLI.',
        'Hervidor de pasta automático.',
        'Grifería para reposición de agua integrada.',
        'Válvula de seguridad automática.'
    ],
    images: []
}
,
{
    id: 29,
    name: 'Standard 30/50 litros MAEQUIP BAR',
    description: 'Hervidor de pastas de 30 litros o 50 litros de la marca MAEQUIP BAR. Ideal para cocinas industriales sin canastos incluidos.',
    details: [
        'Capacidades disponibles: 30 litros o 50 litros.',
        'Marca: MAEQUIP BAR.',
        'No incluye canastos.'
    ],
    images: []
}
,
{
    id: 30,
    name: 'Freezer 130/550/700 lts. full Blanco INELRO ciego A++',
    description: 'Freezer INELRO con capacidades disponibles de 130 litros, 550 litros o 700 litros. Funciones de frío avanzadas, interior en chapa pre pintada blanca, desagote frontal y refrigerante R600a.',
    details: [
        'Capacidades disponibles: 130 litros, 550 litros o 700 litros.',
        'Funciones de frío avanzadas.',
        'Interior en chapa pre pintada blanca.',
        'Refrigerante R600a.',
        'Ruedas giratorias de alta resistencia.'
    ],
    images: []
}
,
{
    id: 31,
    name: 'Freezer 130/270/350 lts. full Plata INELRO P+',
    description: 'Freezer INELRO con capacidades disponibles de 130 litros, 270 litros (P++) o 350 litros (P+). Funciones de frío, interior en chapa pre pintada plata, desagote frontal y refrigerante R600a.',
    details: [
        'Capacidades disponibles: 130 litros, 270 litros (P++) o 350 litros (P+).',
        'Funciones de frío.',
        'Interior en chapa pre pintada plata.',
        'Refrigerante R600a.',
        'Ruedas giratorias de alta resistencia.'
    ],
    images: []
}
,
{
    id: 32,
    name: 'Freezer 270/350/550 lts. tapa vidrio plano inclinado INELRO',
    description: 'Nuevo Freezer Exhibidor Horizontal INELRO con tapa de vidrio curvo plano inclinado. Ruedas dobles giratorias de alta resistencia.',
    details: [
        'Capacidades disponibles: 270 litros, 350 litros o 550 litros.',
        'Tapa de vidrio curvo plano inclinado.',
        'Ruedas dobles giratorias de alta resistencia.'
    ],
    images: []
}
,
{
    id: 33,
    name: 'Vertical INELRO mod. BT17/19 Exhibidor',
    description: 'Exhibidora Vertical de Baja Temperatura INELRO, sin cenefa, con condensación y evaporación forzada. Controlador inteligente con indicador de temperatura, cinco estantes móviles y puerta con paneles de vidrio calefaccionados.',
    details: [
        'Modelo: BT17/19.',
        'Exhibidora Vertical de Baja Temperatura.',
        'Sin cenefa.',
        'Condensación y evaporación forzada.',
        'Controlador inteligente con indicador de temperatura.',
        'Puerta con 2 paneles de vidrio calefaccionados.'
    ],
    images: []
}
,
{
    id: 34,
    name: 'Freezer 550 lts. TVI tapa vidrio inclinada TEORA',
    description: 'Freezer TEORA con tapa de vidrio inclinada, capacidad de 550 litros. Equipado con canastos, condensación estática, evaporador de serpentina de cobre y termostato dual (enfriador/freezer).',
    details: [
        'Capacidad: 550 litros.',
        'Tapa de vidrio inclinada.',
        'Incluye 2 canastos.',
        'Condensación estática.',
        'Evaporador de serpentina de cobre.',
        'Termostato dual (enfriador/freezer).'
    ],
    images: []
}
,
{
    id: 35,
    name: 'Freezer 1.170 lts. Triple tapa ciega C720 BERCOMAR',
    description: 'Freezer BERCOMAR con capacidad de 1.170 litros, triple tapa ciega. Gabinete exterior de chapa de acero prepintada, interior de chapa galvanizada, condensación forzada y temperatura regulable de -18ºC a -25ºC.',
    details: [
        'Capacidad: 1.170 litros.',
        'Triple tapa ciega.',
        'Gabinete exterior de chapa de acero prepintada.',
        'Interior de chapa galvanizada.',
        'Condensación forzada.',
        'Temperatura regulable de -18ºC a -25ºC.'
    ],
    images: []
}
,
{
    id: 36,
    name: 'KIA mod. 420 lts',
    description: 'Refrigerador KIA de 420 litros con luz interior de 15W y luz cenefa de plafón bajo consumo. Incluye 4 estantes ajustables y 2 patines ajustables para facilitar su colocación.',
    details: [
        'Capacidad: 420 litros.',
        'Dimensión externa: 60 x 63 x 206 cm.',
        'Peso bruto: 78/82 kg.',
        'Luz interior: 15 W.',
        'Luz cenefa: Plafón bajo consumo.',
        'Incluye 4 estantes ajustables.',
        'Incluye 2 patines ajustables.'
    ],
    images: []
}
,
{
    id: 37,
    name: 'ENVASADORA PRO 26 NEOVAC',
    description: 'Permite envasar todo tipo de productos realizando vacío total. Construida en acero inoxidable, manejo sencillo con ciclo de trabajo controlado automáticamente desde el cierre de la campana de acrílico.',
    details: [
        'Alimentación: 220V/50Hz.',
        'Gabinete: Acero inoxidable.',
        'Dimensiones externas: 360 x 330 x 480 mm.',
        'Bomba de vacío: 10 m3/hora.',
        'Tamaño de cámara: 50 x 280 x 345 mm.',
        'Largo de sellado: 260 mm.',
        'Inyecta gas: No.'
    ],
    images: []
}
,
{
    id: 38,
    name: 'ENVASADORA PRO 42 NEOVAC',
    description: 'Envasadora con capacidad para realizar vacío total. Fabricada en acero inoxidable, ideal para productos diversos. Permite programar temperatura y tiempo de sellado.',
    details: [
        'Alimentación: 220V/50Hz.',
        'Gabinete: Acero inoxidable.',
        'Dimensiones externas: 520 x 470 x 610 mm.',
        'Bomba de vacío: 20 m3/hora.',
        'Tamaño de cámara: 105 x 435 x 400 mm.',
        'Largo de sellado: 420 mm.'
    ],
    images: []
}
,
{
    id: 39,
    name: 'ENVASADORA PRO 42-g NEOVAC',
    description: 'Envasadora de acero inoxidable con modo de sellado al vacío. Incluye función de inyección de gas, ideal para conservar alimentos frescos por más tiempo.',
    details: [
        'Material: Acero inoxidable.',
        'Modos de sellado: Vacío.',
        'Inyecta gas: Sí.',
        'Altura x Largo: 370 mm x 490 mm.',
        'Peso: 28.4 kg.'
    ],
    images: []
}
,
{
    id: 40,
    name: 'ENVASADORA PRO 42 max NEOVAC',
    description: 'Envasadora avanzada con capacidad para realizar vacío y inyección de gas. Fabricada en acero inoxidable, ideal para producción industrial con múltiples envasados simultáneos.',
    details: [
        'Alimentación: 220V/50Hz.',
        'Gabinete: Acero inoxidable.',
        'Dimensiones externas: 520 x 470 x 610 mm.',
        'Tamaño de cámara: 105 x 410 x 460 mm.',
        'Largo de sellado: 390 mm.',
        'Bomba de vacío: 20 m3/hora.',
        'Inyecta gas: Sí.',
        'Cantidad de envasados simultáneos: 4.'
    ],
    images: []
}
,
{
    id: 41,
    name: 'Selladora tipo cizalla C300/CC300/C400/CC400',
    description: 'Selladora horizontal tipo cizalla para bolsas de polipropileno, SMS, friselina y similares. Gabinete de chapa esmaltada, regulación electrónica para diferentes espesores de bolsas.',
    details: [
        'Indicador luminoso de inicio y fin de operación.',
        'Producción recomendada: 300/400 sellados por hora.',
        'Apta para fabricación de barbijos.',
        'Impulso manual para sellado horizontal.',
        'Tensión: 220 volts.',
        'Consumo eléctrico: 3.50A.',
        'Largo de sellado: 30 cm.',
        'Ancho de sellado: 1.5 mm.'
    ],
    images: []
}
,
{
    id: 42,
    name: 'Rollo de tinta para fechador FE791',
    description: 'Repuesto de cinta térmica negra para fechador FE791 y Lipari Hot Stamping. Fabricada en polietileno y polipropileno para utilizar con equipos de hot stamping. Ideal para impresión térmica en diferentes materiales.',
    details: [
        'Tipo: Polietileno y polipropileno.',
        'Uso: Repuesto de cinta térmica para fechadores FE791 y Lipari Hot Stamping.',
        'Color: Negro.'
    ],
    images: []
}
,
{
    id: 43,
    name: 'Fechador térmico con soporte rebobinador FR333',
    description: 'Fechador térmico construido en acero inoxidable, diseñado para impresión seca e inviolable. Permite colocar 1, 2 o 3 líneas de impresión (fecha de envasado, vencimiento y número de lote) con un área máxima de 23 x 13 mm. Apto para imprimir sobre envases de polietileno, polipropileno, laminados OPP, papel, cartulina, etc. Utiliza un sistema que combina tinta con temperatura para transferir calor desde los cuños hacia la cinta, logrando una impresión nítida en el envase.',
    details: [
        'Construcción: Acero inoxidable.',
        'Impresión: Seca e inviolable.',
        'Líneas de impresión: 1, 2 o 3 líneas.',
        'Área máxima de impresión: 23 x 13 mm.',
        'Altura de la tipografía: 3,5 mm.',
        'Tensión: 220 volts.',
        'Potencia: 26,4 Watts.',
        'Consumo eléctrico: 0,12A.',
        'Dimensiones: 180 x 275 x 280 mm.',
        'Peso: 3,6 kg.'
    ],
    images: []
}
,
{
    id: 44,
    name: 'Selladora horizontal y vertical 40 cm H400 y V400',
    description: 'Selladora de tipo impulso de pedal, diseñada para sellar materiales como polietileno y polipropileno. Ideal para aplicaciones tanto horizontales como verticales con un largo de sellado de 400 mm y un ancho de sellado de 3 mm.',
    details: [
        'Tipo de selladora: Impulso de pedal.',
        'Materiales de sellado: Polietileno, Polipropileno.',
        'Largo de sellado: 400 mm.',
        'Ancho de sellado: 3 mm.',
        'Potencia: 770 W.',
        'Con apagado automático: No.'
    ],
    images: []
}
,
{
    id: 45,
    name: 'Selladora y refiladora vertical 40 cm. pie con pedal VR400',
    description: 'Selladora y refiladora vertical con pedal, modelo VR400. Ideal para sellar y refilar materiales como polietileno y polipropileno. Tiene un largo de sellado de 40 cm y un ancho de sellado de 3 mm con función de corte incorporada.',
    details: [
        'Modelo: VR400.',
        'Largo de sellado: 40 cm.',
        'Ancho de sellado: 3 mm + corte.',
        'Función: Sellado y refilado.',
        'Tipo de activación: Pedal.'
    ],
    images: []
}
,
{
    id: 46,
    name: 'Termoselladora para film PVC PROFESIONAL TS3500',
    description: 'Termo selladora para film línea profesional ST3500. La evolución del termosellado ofrece una solución óptima y eficiente de envasado para emprendedores y empresas, combinando estética, sustentabilidad y ahorro.',
    details: [
        'Ideal para sellado de film PVC.',
        'Línea profesional para alto rendimiento.',
        'Diseño moderno y ergonómico.',
        'Ofrece un sellado eficiente y seguro.',
        'Estructura robusta y duradera.'
    ],
    images: []
}
,
{
    id: 47,
    name: 'Dispenser porta rollo de film con corte 751',
    description: 'Dispenser porta rollo de film con corte manual incorporado, modelo 751. Ideal para rotiserías, cocinas profesionales y hogares. Apto para rollos de cocina como film de PC, papel aluminio, papel manteca, etc. Ancho aplicable de hasta 38 cm.',
    details: [
        'Medida: 42x15x5.5 cm (frente.profundo.alto).',
        'Capacidad: Rollo de film de 38 cm de ancho x 600 mts.',
        'Colores disponibles: Azul, rojo, blanco y gris (según disponibilidad).',
        'Marca: Lipari.',
        'Modelo: 751.',
        'El corte se realiza en forma manual con cuchilla incorporada.'
    ],
    images: []
}
,
{
    id: 48,
    name: 'Planchas lisas Speedy',
    description: 'Planchas lisas ideales para cocinar alimentos frisados directamente sin descongelar previamente, garantizando alta calidad de cocción y sabor. Equipadas con termostato incorporado y sistema de corte automático de temperatura. Gabinete en acero inoxidable esmerilado y superficie teflonada para facilitar la limpieza.',
    details: [
        'Tensión: 220 V/380 v',
       'Medidas dependiendo plancha: 30 cm x 40 cm,40x40, 70x50,100x50',
       'Capacidad de hamburguesas: 12, 16, 30, 50'
    ],
    images: []
},








    )

  }


  getAll() {
    return this.productList;
  }


  getById(productId: number) {
    let products = this.productList.filter(product => { return product.id == productId })
    return (products.length > 0) ? products[0] : null;
  }

  private normalize(text: string): string {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  searchProducts(query: string) {
    const normalizedQuery = this.normalize(query);
    return this.productList.filter(product =>
      this.normalize(product.name).startsWith(normalizedQuery)
    );
  }

  
}


