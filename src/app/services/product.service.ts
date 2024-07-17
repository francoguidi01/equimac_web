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
{
    id: 49,
    name: 'Cortadora de Papas Trinidad 250 Acero Inoxidable',
    description: 'La Cortadora de Papas Trinidad ofrece versatilidad y precisión para los entusiastas de la cocina y los profesionales gastronómicos. Equipada con tres discos horizontales o verticales según la configuración elegida, esta máquina facilita el corte de papas y otros alimentos de manera eficiente y uniforme. Fabricada por la reconocida marca Trinidad, cuenta con una cuchilla de acero inoxidable de alta calidad, motor eléctrico monofásico de 220 volts y potencia de 0.16 HP. Incluye afilador incorporado y es desarmable para facilitar la limpieza e higiene.',
    details: [
        'Gabinete: Acero inoxidable y aluminio anodizado.',
        'Cuchilla: Acero inoxidable, diámetro de 250 mm.',
        'Transmisión: Sin Fin y corona.',
        'Regulación de corte: 0 a 14 mm.',
        'Afilador incorporado: SI.',
        'Desarmable para mayor higiene.',
        'Patas de goma antideslizantes: SI.',
        'Altura de corte pieza cuadrada: 140 mm.',
        'Altura de corte pieza redonda: 155 mm.',
        'Motor eléctrico monofásico 220 Volts.',
        'Potencia: 0.16 HP.',
        'Peso: 16 kgs (Aprox).'
    ],
    images: []
}
,
{
    id: 50,
    name: 'Reb. de pan de miga 60 y 55 cms ACERO INOX. MAEQUIP',
    description: 'Cortadora de pan de miga grande, diseñada para rebanar pan de miga de 330 mm x 550 mm en diferentes grosores de 7 mm, 8 mm, 9 mm, 10 mm, 12 mm, etc. Eficiente, fuerte, silenciosa y rápida. Construida con materiales de primera calidad, motor trifásico de 1,5 HP. Dimensiones: 1,50 m (largo) x 0,85 m (ancho) x 1,60 m (alto). Peso aproximado: 400 kg.',
    details: [
        'Motor trifásico de 1,5 HP.',
        'Dimensiones: 1,50 m x 0,85 m x 1,60 m.',
        'Peso aproximado: 400 kg.',
        'Capacidad de rebanado: 330 mm x 550 mm.'
    ],
    images: []
}
,
{
    id: 51,
    name: 'Rebanadora lactal 41 y 30 cms MAEQUIP',
    description: 'Rebanadora compacta de pan lactal con estructura de acero de aluminio revestida de acero inoxidable. Aprobada por la OMS, con capacidad para rebanar panes de hasta 360 mm de largo y 220 mm de alto. Cuenta con un motor de 370 W, operando a 220v / 50Hz y produciendo 252 rebanadas por minuto. Dimensiones: 78 cm (ancho) x 68 cm (profundidad) x 78 cm (altura). Peso: 52 kg.',
    details: [
        'Estructura compacta de acero de aluminio revestida de acero inoxidable.',
        'Grosor de rebanadas: 12 mm.',
        'Largo del pan lactal: Hasta 360 mm.',
        'Alto del pan: 220 mm.',
        'Cantidad de piezas rebanadas por minuto: 252 rebanadas.',
        'Voltaje: 220v / 50Hz.',
        'Potencia: 370 W.',
        'Peso: 52 kg.'
    ],
    images: []
}
,
{
    id: 52,
    name: 'Descortezadora de pan de miga 040 MAEQUIP',
    description: 'Máquina para sacar la corteza del pan de miga de forma rápida y sencilla. Equipada con mesa móvil y tope regulable para mayor seguridad. Trabaja con sierra sin-fin y cuenta con un motor de 1 HP. Dimensiones: 1,30 m (largo) x 1 m (ancho) x 1,90 m (alto).',
    details: [
        'Mesa móvil con tope regulable.',
        'Trabaja con sierra sin-fin.',
        'Motor de 1 HP.',
        'Dimensiones: 1,30 m x 1 m x 1,90 m.'
    ],
    images: []
}
,
{
    id: 53,
    name: 'Fabricadora de Hielo MODELO ZBY-40 y MODELO: ZBY-60',
    description: 'La elegante máquina de hielo compacta produce 40 kg de hielo o 60 kg dependiendo del modelo en cubos cada 24 horas, con un amplio depósito de almacenamiento aislado. Construida íntegramente en acero inoxidable, su diseño compacto permite una fácil instalación debajo del mostrador o detrás de la barra. Con conexiones de agua y desagüe de red, opera las 24 horas del día para tener siempre hielo disponible. Los controles electrónicos inteligentes detienen la producción cuando el depósito está lleno y la reinician automáticamente al retirar hielo. Incluye ciclo de autolimpieza y filtro de aire incorporado para mantenimiento fácil y efectivo.',
    details: [
        'Producción de hielo: 40 kg (ZBY-40) o 60 kg (ZBY-60) en cubos cada 24 horas.',
        'Material: Exterior en acero inoxidable.',
        'Depósito de almacenamiento aislado.',
        'Conexiones de agua y desagüe de red.',
        'Controles electrónicos inteligentes con función de paro automático y reinicio.',
        'Ciclo de autolimpieza y filtro de aire incorporado.',
        'Tamaño compacto para instalación bajo mostrador o detrás de barra.'
    ],
    images: []
}
,
{
    id: 54,
    name: 'Fabricadora de Hielo CUBE 25 MORETTI',
    description: 'La fabricadora de hielo CUBE 25 MORETTI es ideal para aplicaciones comerciales y residenciales que requieren una producción constante de hielo. Con una capacidad de producción de 1 kg por hora y un almacenamiento de hasta 8 kg con corte automático, esta máquina garantiza un suministro continuo de hielo. Su diseño compacto de terminaciones en acero inoxidable la hace perfecta para instalaciones bajo mesada. Equipada con refrigerante R-134a y operación automática de descarga, asegura un funcionamiento eficiente y confiable.',
    details: [
        'Capacidad de producción: 1 Kg por hora.',
        'Capacidad de almacenaje: 8 kg con corte automático.',
        'Medidas: 400 mm x 490 mm x 790 mm.',
        'Voltaje de operación: AC 220-240V (50 HZ).',
        'Potencia de entrada: 400 WATTS.',
        'Refrigerante: R- 134a.',
        'Tipo de descarga: Automática.',
        'Modo de fabricación del hielo: Tipo Spray.'
    ],
    images: []
}
,
{
    id: 55,
    name: 'Licuadora 2 lts. TURBOBLENDER TB50',
    description: 'La Licuadora TURBOBLENDER TB50 de 2 litros es una potente máquina ideal para batidos, smoothies, licuados y tragos frozen. Equipada con un motor de 1500W (3 HP) y velocidad máxima de centrifugado de 25000 RPM, cuenta con vaso de Tritán BPA FREE de 2 litros. Sus medidas son 18 cm x 48 cm x 22 cm (Ancho x Alto x Profundo), pesa 4.7 kg y ofrece tecla ON/OFF con control de velocidad variable y función de pulso para operación libre. Incluye cuchilla de acero inoxidable de alta calidad con rodamientos para triturado rápido de hielo. Dispone de protección contra sobrecalentamiento, doble automática y sobre alimentación de corriente. Incluye bastón mezclador y opción de lavador rápido para jarras.',
    details: [
        'Potencia: 1500W - 3 HP.',
        'Velocidad Máxima de Centrifugado: 25000 RPM.',
        'Vaso 2 Lts de Tritán BPA FREE.',
        'Medidas: 18 cm x 48 cm x 22 cm (Ancho x Alto x Profundo).',
        'Peso: 4.7 kg.',
        'Tecla ON/OFF con control de velocidad variable.',
        'Pulso para Funcionamiento Libre.',
        'Cuchilla de Acero Inoxidable de Alta calidad en Rodamientos para el rápido triturado de hielo.',
        'Protección contra Sobre calentamiento, Doble Automática y Sobre alimentación de Corriente.',
        'Incluye Bastón Mezclador.',
        'Stock permanente de todos los consumibles y repuestos.',
        'Opcional: Lavador rápido para Jarras.'
    ],
    images: []
}
,
{
    id: 56,
    name: 'Licuadora 3 lts. Master Blend panel digital BL306/D SILCOOK VIA CHE',
    description: 'La Licuadora Master Blend BL306/D es perfecta para cualquier receta gracias a su potencia de 1500W y velocidad de 28000 RPM. Con capacidad de jarra de 3 litros y cuchilla de acero con doble reten para picar hielo, asegura un entorno perfecto para licuar de forma rápida y suave. Operando a voltaje de 220-240V / 50-60 HZ, cuenta con switch de seguridad y panel digital para control preciso.',
    details: [
        'Potencia: 1500W.',
        'Velocidad: 28.000 RPM.',
        'Voltaje: 220 – 240 V / 50 – 60 HZ.',
        'Capacidad de la Jarra: 3 Lts.',
        'Cuchilla de Acero con Doble Reten para picar hielo.',
        'Ideal para realizar cualquier receta con rapidez y suavidad.',
        'Switch de Seguridad.',
        'Panel Digital para control preciso.'
    ],
    images: []
}
,
{
    id: 57,
    name: 'Fideero eléctrico/manual 300mm',
    description: 'Fideero con rodillos cortantes de acero inyectados en ABS de 300 mm. Calibración de cilindros mediante conjunto de leva excéntrica. Transmisión por engranajes. Corta tallarines de 2,5 mm y cintas de 7,5 mm de ancho. Incluye manija y prensas para facilitar la operación.',
    details: [
        'Rodillos cortantes de acero inyectados en ABS de 300 mm.',
        'Calibración de cilindros mediante conjunto de leva excéntrica.',
        'Transmisión por engranajes.',
        'Corta tallarines de 2,5 mm y cintas de 7,5 mm de ancho.',
        'Incluye manija y prensas.'
    ],
    images: []
}
,
{
    id: 58,
    name: 'Marcador de ñoquis eléctrico/manual',
    description: 'Marcador de ñoquis con rodillos fabricados en acero con revestimiento antiadherente (ABS) ranurado rectificados de 300 mm. Transmisión por poleas y correa, funciona con tecla de encendido. Revestido en acero inoxidable, ideal para marcar ñoquis. Incluye manija y prensas para facilitar su uso.',
    details: [
        'Rodillos fabricados en acero con revestimiento antiadherente (ABS) ranurado rectificados de 300 mm.',
        'Transmisión por poleas y correa.',
        'Funciona con tecla de encendido.',
        'Revestido en acero inoxidable.',
        'Incluye manija y prensas.'
    ],
    images: []
}
,
{
    id: 59,
    name: 'Raviolero eléctrico/manual 300mm',
    description: 'Raviolero con cuerpo íntegro de acero inoxidable brillante. Rodillos ravioleros de acero inoxidable con revestimiento antiadherente ABS (Termoplástico Amorfo). Dimensiones: Ancho 400 mm, Alto 150 mm, Profundidad 160 mm, Peso aproximado 5 kg. Ideal para la producción de raviolis con facilidad de uso manual o eléctrico.',
    details: [
        'Cuerpo íntegro de acero inoxidable brillante.',
        'Rodillos ravioleros de acero inoxidable con revestimiento antiadherente ABS (Termoplástico Amorfo).',
        'Dimensiones: Ancho 400 mm, Alto 150 mm, Profundidad 160 mm, Peso aproximado 5 kg.',
        'Ideal para la producción de raviolis.',
        'Funcionamiento eléctrico/manual.'
    ],
    images: []
}
,
{
    id: 60,
    name: 'Sobadora eléctrica/manual 300mm/400mm/600mm',
    description: 'Sobadora ideal para el sobado y estirado de todo tipo de masa, disponible en variantes eléctricas y manuales con diferentes anchos de rodillo (300 mm, 400 mm, 600 mm). Construida íntegramente en acero inoxidable brillante, con motor monofásico de 1/3 HP (1400 RPM). Apertura máxima de rodillos de 8 mm y apertura mínima de 1 mm. Incluye bandeja transportadora y manija con prensas para mayor comodidad.',
    details: [
        'Disponible en variantes de 300 mm, 400 mm, 600 mm de ancho de rodillo.',
        'Construida íntegramente en acero inoxidable brillante.',
        'Motor monofásico 1/3 HP (1400 RPM).',
        'Apertura máxima de rodillos de 8 mm y apertura mínima de 1 mm.',
        'Ideal para el sobado y estirado de todo tipo de masa.',
        'Incluye bandeja transportadora de 300 x 400 mm.',
        'Manija y prensas para facilitar la operación.'
    ],
    images: []
}
,
{
    id: 61,
    name: 'Cutter 2,5/4/8 lt Metvisa ',
    description: 'Procesadora Industrial Gastronómica Cutter Metvisa de 8 litros. Corta, tritura y mezcla alimentos sólidos sin líquido. Construcción robusta en acero inoxidable. Dimensiones: Altura 585 mm, Frente 305 mm, Hondo 300 mm. Peso 17.5 kg. Voltaje disponible en 127V/220V. Capacidad para procesar hasta 8 kg de alimentos.',
    details: [
        'Voltaje: 127V/220V.',
        'Capacidad: 2.5,4,8 litros.',
        'Ideal para cortar, triturar y mezclar alimentos sólidos sin líquido.'
    ],
    images: []
}
,
{
    id: 62,
    name: 'Cutter 6/9 lt SILCOOK VIA CHEFF HP900',
    description: 'Cutter con capacidad de 6 o 9 litros, potencia de motor de 750W, voltaje de 220V / 50 HZ y variador de velocidad de 1100 a 2800 RPM. Equipado con tapa visor, doble switch de seguridad y cuchilla de acero inoxidable. Ideal para procesar alimentos de manera eficiente en entornos gastronómicos.',
    details: [
        'Capacidad: 6/9 litros.',
        'Potencia de motor: 750W.',
        'Voltaje: 220V / 50 HZ.',
        'Variador de velocidad: 1100 - 2800 RPM.',
        'Tapa visor.',
        'Doble switch de seguridad.',
        'Cuchilla de acero inoxidable.'
    ],
    images: []
}
,
{
    id: 63,
    name: 'Procesadora MORETTI/VISA VC65 1 hp / 1/2 hp',
    description: 'Procesadora de acero inoxidable resistente y duradera. Corta, rebana y cubetea todo tipo de vegetales con variedad de discos accesorios intercambiables. Equipada con excelente sistema de seguridad durante la operación.',
    details: [
        'Material: Acero inoxidable.',
        'Ideal para cortar, rebanar y cubetear vegetales.',
        'Variedad de discos accesorios fácilmente intercambiables.',
        'Excelente sistema de seguridad en operación.'
    ],
    images: []
}
,
{
    id: 64,
    name: 'Cortalegumbres ANDI aluminio/acero 6 discos',
    description: 'Cortalegumbres con kit de 6 discos intercambiables para cortar rodajas, tiras, cubos, corte ondulado, juliana, rallado, etc. Fabricado en acero/aluminio inoxidable AISI 304 con discos de acero inoxidable AISI 420 templado. Motor monofásico de 0.5 HP con mandos eléctricos en baja tensión (24V) y dispositivos de seguridad.',
    details: [
        'Kit de 6 discos intercambiables.',
        'Material: Acero/aluminio inoxidable AISI 304.',
        'Discos de acero inoxidable AISI 420 templado.',
        'Motor monofásico de 0.5 HP.',
        'Mandos eléctricos en baja tensión (24V).',
        'Dispositivos de seguridad para detener la marcha al accionar la manija o abrir la tapa.'
    ],
    images: []
}
,
{
    id: 65,
    name: 'Mixer TURBOBLENDER Mix 350/750',
    description: 'Mixer comercial de uso industrial con cuchilla de acero sólido de alta calidad. Potencia de 350 Watts y velocidad fija de 16,000 RPM. Capacidad de procesado de 20 a 40 litros. Diseño con brazo desmontable para facilitar la limpieza y el traslado. Incluye botón bloqueador y de seguridad para operación continua.',
    details: [
        'Uso: Comercial e industrial.',
        'Cuchilla de acero sólido de alta calidad.',
        'Potencia: 350 Watts.',
        'Velocidad fija: 16,000 RPM.',
        'Capacidad de procesado: 20 a 40 litros.',
        'Brazo desmontable de 25 cm.',
        'Botón bloqueador y de seguridad para operación continua.'
    ],
    images: []
}
,
{
    id: 66,
    name: 'Balanza Electrónica Market con pilas MORETTI',
    description: 'Balanza electrónica con alimentación a pilas y capacidad para 70 PLU. Dispone de 5 vendedores simultáneos, conexión a PC e impresor de tickets. Capacidad de pesaje hasta 30 kg con precisión de 10 g. Incluye display LCD backlight y teclado numérico con 25 teclas.',
    details: [
        'Capacidad: 30 kg x 10 g.',
        'Tara máxima: 9.990 kg.',
        'Dimensiones del plato: 327 mm Largo / 230 mm Ancho.',
        'Memorias: 70 a través de teclas directas PLU.',
        'Función Vendedores: 5 de forma simultánea.',
        'Display: Operador y columna para cliente LCD backlight.',
        'Alimentación: 3 pilas AA o 3 pilas D (a elección).',
        'Teclado: 25 teclas numérico + 70 directas PLU.',
        'Peso: 3.40 Kg neto.'
    ],
    images: []
}
,
{
    id: 67,
    name: 'Balanza Electrónica Delta 15 bat. 12 hs. autonomía KRETZ',
    description: 'Balanza electrónica alfanumérica con autonomía de batería hasta 100 horas según uso. Capacidad de 450 PLU con funciones avanzadas como pre-empaque, contador y alarma por peso. Incluye comunicación serial, gabinete ABS de alta resistencia y bandeja de acero inoxidable.',
    details: [
        'Capacidad: 0 kg a 6 kg x 2 g y de 6 kg a 15 kg x 5 g.',
        'Tara: -5.9 kg.',
        'Autonomía de batería: 100 horas (según uso).',
        'Dimensiones: 355 mm x 335 mm x 106 mm.',
        'Peso: 2.7 kg.',
        'Fuente de alimentación: Entrada 110-240 Vca, Salida 15 Vcc 700 mA.',
        'Display: LCD retroiluminado.',
        'Teclado: 21 teclas a prueba de líquidos.',
        'Conexión: RS232.'
    ],
    images: []
}
,
{
    id: 68,
    name: 'Balanza Electrónica Report LT-232 alto 30 kg Vidrio Bajo/sin vidrio KRETZ',
    description: 'Balanza electrónica con display digital para pesar con exactitud. Equipada con tecla Tara para restar el peso del recipiente y códigos PLU para simplificar operaciones de caja y control de inventario. Ideal para negocios que requieren precisión y eficiencia.',
    details: [
        'Tipo de pantalla: LCD.',
        'Capacidad: 30 kg.',
        'Funciones: Tecla Tara, códigos PLU.',
        'Display digital para visualización clara y precisa.',
        'Facilita la tarea de pesar productos con exactitud.',
        'Ayuda a minimizar errores en las transacciones.'
    ],
    images: []
}
,
{
    id: 69,
    name: 'Balanza Electrónica Master 150 Kg KRETZ con y sin columna',
    description: 'Balanza electrónica robusta y confiable con capacidad de 150 kg y precisión de 50 g. Equipada con función contadora, suma de pesadas, indicador digital de peso y opción de funcionamiento a batería. Ideal para industrias y negocios que manejan grandes volúmenes de mercadería.',
    details: [
        'Capacidad: 150 kg x 50 g.',
        'Funciones: Contadora, suma de pesadas.',
        'Indicador digital de peso con ángulo de visión regulable.',
        'Opción de funcionamiento a batería.',
        'Plataforma de acero inoxidable de 520 mm x 440 mm.',
        'Salida de comunicación: Puerto serie (RS-232).',
        'Display digital para operador y cliente.'
    ],
    images: []
}
,
{
    id: 70,
    name: 'Balanza Electrónica Rielera 600 (200gr) KRETZ',
    description: 'Balanza electrónica tipo riel para uso en frigoríficos y carnicerías. Capacidad de 600 kg con división de 200 g. Incluye indicador digital de peso en gabinete de acero estanco, tecla de tara e impresión, y funciones avanzadas como conteo de pesadas y totales acumulados. Conexión RS-232 para PC.',
    details: [
        'Capacidad: 600 kg.',
        'División: 200 g.',
        'Tipo de pantalla: LCD.',
        'Indicador digital de peso en gabinete de acero estanco.',
        'Funciones: Tecla de tara e impresión, conteo de pesadas y totales acumulados.',
        'Conexión: RS-232 para PC.',
        'Ideal para frigoríficos y carnicerías.'
    ],
    images: []
}
,
{
    id: 71,
    name: 'Balanza Electrónica Cenit 31 c/RS-232 control remoto KRETZ',
    description: 'Balanza electrónica con capacidad de 30 kg y precisión de 10 g. Equipada con doble visor para operador y cliente, plato de acero inoxidable, memoria de 120 PLU, y sistema antishock de protección. Permite suma de artículos pesables y no pesables, cálculo de vuelto y conexión RS-232 para impresores KRETZ.',
    details: [
        'Capacidad: 30 kg x 10 g.',
        'Memoria: 120 PLU programables.',
        'Doble visor: Operador y cliente.',
        'Plato de acero inoxidable de 390 mm.',
        'Funciones: Tara, suma de artículos, cálculo de vuelto.',
        'Sistema antishock de protección.',
        'Conexión: RS-232 para impresores KRETZ.',
        'Control remoto infrarrojo (sin cables).'
    ],
    images: []
}
,
{
    id: 73,
    name: 'Mezcladoras de carne FINESCHI LEGITIMA',
    description: 'Las mezcladoras de carne Fineschi Legítima son ideales para la preparación de embutidos, garantizando una mezcla perfecta y homogénea. Equipadas con una batea volcable de acero inoxidable que facilita su limpieza, estas mezcladoras están diseñadas para el uso profesional exigente. Su robusto chasis de hierro y las paletas de hierro aseguran durabilidad y eficiencia en cada proceso.',
    details: [
        'Capacidad: 50/100 litros.',
        'Batea y tapa en acero inoxidable.',
        'Paletas de hierro.',
        'Chasis de hierro.',
        'Motor monofásico de ¾ / 1.5 HP (posibilidad de trifásico).'
    ],
    images: []
}
,
{
    id: 74,
    name: 'Anafe 4 hornallas R-Fund MORELLI (101163)',
    description: 'El Anafe 4 hornallas R-Fund MORELLI ahora Mr.Cheff combina diseño y funcionalidad excepcionales. Equipado con perillas de baquelita de alta resistencia, bandejas anti-derrame y mecheros de fundición de alto poder calorífico, este modelo garantiza una cocina eficiente y segura. Incluye patas de acero inoxidable y patines regulables para mayor estabilidad.',
    details: [
        'Ancho: 75.0 cm.',
        'Alto: 90.0 cm.',
        'Profundidad: 75.0 cm.',
        'Dimensiones del embalaje: Alto: 0.900 m, Ancho: 0.750 m, Profundidad: 0.750 m.',
        'Marcas: Morelli, Depaolo.'
    ],
    images: []
}
,
{
    id: 75,
    name: 'Anafe 2 hornallas horizontal sin revestir con pie BAR',
    description: 'El Anafe 2 hornallas horizontal sin revestir con pie BAR ofrece simplicidad y eficiencia. Con estructura de acero inoxidable y rejillas de fundición, este modelo es ideal para cocinas profesionales. Cuenta con dos hornallas, una de 1800 kcal y otra de 2200 kcal, siendo apto para uso con múltiples tipos de gas.',
    details: [
        'Medidas: Alto: 18 cm, Ancho: 61 cm, Profundo: 33 cm.',
        'Estructura de acero inoxidable.',
        'Rejas de fundición.',
        '1 hornalla de: 1800 kcal, 1 hornalla de: 2200 kcal.',
        'Multigas.'
    ],
    images: []
}
,
{
    id: 76,
    name: 'Anafe 6 hornallas R-Fund 1100 antes Mr. CHEFF MORELLI/DEPAOLO (700350)',
    description: 'Los Anafes Morelli/DEPAOLO 1100 antes Mr. CHEFF son la elección ideal para chefs y profesionales exigentes. Con diseño modular y mecheros industriales de alto rendimiento, están fabricados en acero inoxidable con patas pintadas negras para una estética duradera. Disponibles en versiones Cheff y Basic para adaptarse a diversas necesidades.',
    details: [
        'Diseño modular.',
        'Mecheros industriales.',
        'Acero inoxidable.',
        'Patas pintadas negras.'
    ],
    images: []
}
,
{
    id: 77,
    name: 'Anafe 1 hornalla Dragon Power 24.000 cal',
    description: 'El Anafe 1 hornalla Dragon Power 24.000 cal ofrece una potencia excepcional y resistencia estructural. Con estructura reforzada que soporta grandes pesos, está equipado con el mechero Dragon Power de 21.5 cm de diámetro, garantizando un alto rendimiento. Ideal para cocinas profesionales que requieren potencia y durabilidad.',
    details: [
        '1 Hornalla.',
        'Estructura reforzada.',
        'Soporta gran peso.',
        'MECHERO DRAGÓN POWER de 21.5 cm de diámetro.',
        'Consumo total: 24.000 Kcal/Hr.',
        'Dimensiones: Ancho: 50 cm, Profundidad: 50 cm, Altura: 35 cm.'
    ],
    images: []
}
,
{
    id: 78,
    name: 'Anafe de Acero 2/4/6 Hornallas Rejas de Fundición',
    description: 'Anafe robusto y duradero con gabinete, base y laterales fabricados en acero inoxidable esmerilado. Equipado con bandeja antiderrame desmontable, rejas de fundición enlozadas y respaldo desmontable. Cuenta con 2/4/6 mecheros estrella de 9.000 Kcal/h cada uno y patas regulables para ajuste de altura.',
    details: [
        'Gabinete, base y laterales 100% acero inoxidable esmerilado.',
        'Bandeja antiderrame desmontable.',
        'Rejas de fundición enlozadas.',
        'Respaldo desmontable.',
        '2/4/6 Mecheros estrella (9.000 Kcal/h cada uno).',
        'Patas regulables.'
    ],
    images: []
}
,
{
    id: 79,
    name: 'Anafe 2/4/6 hornallas estructural Sol Real economico El Gauchito',
    description: 'Anafe con estructura robusta Sol Real económico El Gauchito, ideal para uso intensivo. Equipado con rejas de fundición, bandeja antiderrame extraíble y base soporte reforzada desarmable para facilitar la limpieza y el mantenimiento.',
    details: [
        'Rejas de fundición.',
        'Bandeja antiderrame extraíble.',
        'Base soporte reforzada desarmable.'
    ],
    images: []
}
,
{
    id: 80,
    name: 'Anafe 2 hornallas alto rendimiento - apto hogar Speedy',
    description: 'Anafe de alto rendimiento ideal para uso hogareño intensivo. Totalmente construido en acero inoxidable esmerilado con hornallas de acero de 7 mm y instalación eléctrica con cables siliconados para alta temperatura. Contiene contención de derrames para las dos hornallas y medidas de hornalla de 29 x 29 cm.',
    details: [
        'Hornallas de acero 7 mm.',
        'Instalación eléctrica con cables siliconados para alta temperatura.',
        'Medidas hornalla: 29 x 29 cm.'
    ],
    images: []
}
,
{
    id: 81,
    name: 'Anafe 4 hornallas alto rendimiento Speedy',
    description: 'Anafe de alto rendimiento con cuatro hornallas cuadradas de 2,5 kW/h de potencia cada una. Equipado con control individual de temperatura de 0 a 300º, hornalla de acero reforzado de 7 mm y medidas de cada hornalla de 29 x 29 cm. Potencia total de 10 kW.',
    details: [
        'Cuatro hornallas cuadradas de 2,5 kW/h de potencia.',
        'Control individual de temperatura de 0 a 300º.',
        'Hornalla de acero reforzado de 7 mm.',
        'Medidas totales: Frente 60 cm, Fondo 66 cm.'
    ],
    images: []
}
,
{
    id: 82,
    name: 'Heladera Exhibidora EURO 1290*710*1250 MONDINO',
    description: 'Heladera exhibidora EURO Mondino con construcción interna en acero inoxidable y aislación de densidad 40 kgs/m3 espuma Bayer bajo norma ABNT. Equipada con frente de termo panel de cristal templado, laterales de termo panel recto de cristal templado y 2 estantes de vidrio iluminados por LED. Control digital de temperatura y sistema de circulación de aire forzado para mantener la temperatura homogénea.',
    details: [
        'Capacidad: 490 litros.',
        'Temperatura: +2 a +7°C.',
        'Humedad Relativa: 75%.',
        'Potencia: 220V/50Hz.',
        'Sistema de circulación de aire forzado (defrost).'
    ],
    images: []
}
,
{
    id: 83,
    name: 'Heladera Exhibidora EURO 2000 MONDINO',
    description: 'Heladera exhibidora EURO Mondino con construcción interna en acero inoxidable y aislación de densidad 40 kgs/m3 espuma Bayer bajo norma ABNT. Equipada con frente de termo panel de cristal templado, laterales de termo panel recto de cristal templado y 2 estantes de vidrio iluminados por LED. Control digital de temperatura y sistema de circulación de aire forzado para mantener la temperatura homogénea.',
    details: [
        'Capacidad: 930 litros.',
        'Temperatura: +2 a +7°C.',
        'Humedad Relativa: 75%.',
        'Potencia: 220V/50Hz.',
        'Sistema de circulación de aire forzado (defrost).'
    ],
    images: []
}
,
{
    id: 84,
    name: 'Heladera Exhibidora BAKERY 1500*860*1340 MONDINO',
    description: 'Heladera exhibidora BAKERY Mondino modelo VTBR1500 con construcción interna en acero inoxidable AISI 430. Equipada con mesada superior de acero inoxidable, aislación de densidad 40 kgs/m3 espuma Bayer bajo norma ABNT y revestimiento de base en chapa color negra. Incluye puertas traseras corredizas, 3 estantes de vidrio y bandejas de acero inoxidable desmontables. Iluminación interior por LED, control digital de temperatura y unidad condensadora de 1/2 HP – R 404.',
    details: [
        'Medidas: 1500 x 860 x 1340 mm.',
        'Capacidad: 913 litros.',
        'Temperatura: +2 a +7°C.',
        'Humedad Relativa: 75%.',
        'Potencia: 220V/1/50Hz.'
    ],
    images: []
}
,
{
    id: 85,
    name: 'Campana Morelli Ferro 900',
    description: 'Campana de cocina Morelli Ferro con una capacidad de aspiración de 900m³/h y 100W de potencia. Equipada con panel frontal de acero inoxidable, 3 velocidades de aspiración, luz LED, salida al exterior y filtros de aluminio desmontables. Dimensiones: Ancho 90 cm x Alto 45-85 cm x Profundidad 51 cm.',
    details: [
        'Panel frontal de acero inoxidable.',
        'Capacidad de aspiración: 900m³/h.',
        'Potencia: 100W.',
        '3 velocidades de aspiración.',
        'Luz LED.',
        'Salida al exterior.',
        'Filtros de aluminio desmontables.'
    ],
    images: []
}
,
{
    id: 86,
    name: 'Cocina industrial 4 Hornallas 55/60 MORELLI pta. acero r/fund FORZA',
    description: 'Cocina industrial MORELLI FORZA con 4 hornallas y horno. Gabinete exterior construido en acero inoxidable AISI 430, horno con loza de fácil limpieza y sistema de rack desmontables. Equipada con parrilla de ladrillos refractarios, robinetes industriales y válvula de seguridad.',
    details: [
        'Medidas: 87 x 85 x 62 cm.',
        'Gabinete exterior en acero inoxidable AISI 430.',
        'Horno con loza de fácil limpieza y sistema de rack desmontables.',
        'Parrilla de ladrillos refractarios.',
        'Robinetes industriales.',
        'Válvula de seguridad.'
    ],
    images: []
}
,
{
    id: 87,
    name: 'Cocina industrial 4 Hornallas Acero Esmerilado R-fund plancha y tostador DEPAOLO',
    description: 'Cocina industrial DEPAOLO con 4 hornallas, plancha bifera y tostador incorporado. Construida en acero inoxidable esmerilado, equipada con horno pizzero con ladrillos refractarios y bandeja antiderrame. Incluye válvula de seguridad y puerta de acero con pirómetro indicador de temperatura.',
    details: [
        '4 hornallas con quemador redondo.',
        'Plancha bifera incorporada.',
        'Tostador incorporado con pinza carlitera.',
        'Horno pizzero con ladrillos refractarios.',
        'Bandeja antiderrame bajo las hornallas.',
        'Reja de fundición cubre hornallas.',
        'Válvula de seguridad.'
    ],
    images: []
}
,
{
    id: 88,
    name: 'Cocina industrial 6 Hornallas 90 USMAN mod. MIRROR (3030)',
    description: 'Cocina industrial USMAN mod. MIRROR (3030) con 6 hornallas y horno. Construcción en acero inoxidable esmerilado, equipada con horno con piso refractario y termómetro en puerta. Hornallas con quemadores de aluminio y mesada estampada.',
    details: [
        'Construcción en acero inoxidable esmerilado.',
        'Horno con piso refractario y termómetro en puerta.',
        'Hornallas con quemadores de aluminio.',
        'Mesada estampada.'
    ],
    images: []
}
,
{
    id: 89,
    name: 'Cocina industrial 4 Hornallas 700 45 c Linea pesada Bar',
    description: 'Cocina industrial Bar línea pesada con 4 hornallas. Gabinete en acero inoxidable esmerilado, horno enlozado con piso de tejuelas refractarias y válvula de seguridad. Incluye dos rejillas extraíbles y dos mecheros estrella de 9.000 Kcal/h cada uno.',
    details: [
        'Gabinete 100% acero inoxidable esmerilado.',
        'Horno enlozado con piso de tejuelas refractarias.',
        'Válvula de seguridad.',
        'Rejas de fundición enlozadas.',
        'Bandejas antiderrame desmontables.'
    ],
    images: []
}
,
{
    id: 90,
    name: 'Cocina industrial 6 Hornallas 1000 32c Linea pesada Bar',
    description: 'Cocina industrial Bar línea pesada con 6 hornallas. Estructura tubular con perillas de Nylon y detalles en serigrafía. Exterior en acero inoxidable esmerilado AISI 430, mesadas en acero inoxidable AISI 304 con bandejas antiderrames enlozadas o de acero. Interior de horno completamente enlozado con aislante térmico de lana mineral y piso de tejuelas refractarias.',
    details: [
        'Estructura tubular.',
        'Perillas de Nylon.',
        'Exterior en acero inoxidable esmerilado AISI 430.',
        'Mesadas en acero inoxidable AISI 304 con bandejas antiderrames enlozadas o de acero.',
        'Interior de horno completamente enlozado.',
        'Aislante térmico de lana mineral y piso de tejuelas refractarias.'
    ],
    images: []
}
,
{
    id: 91,
    name: 'Parrilla DEPAOLO',
    description: 'Equipada con un robinete por tramo, deflector de fundición tipo nido de abeja, estructura de acero inoxidable y grasero antiderrame también de acero inoxidable. Base de hierro y válvula de seguridad incluida. Apta para gas natural o envasado. Producto de industria nacional.',
    details: [
        'Medidas disponibles: 0,50 x 0,60 mts // 1,00 x 0,60 mts // 1,50 x 0,60 mts.',
        'Robinete por tramo.',
        'Deflector de fundición tipo nido de abeja.',
        'Estructura de acero inoxidable.',
        'Grasero antiderrame de acero inoxidable.',
        'Base de hierro.',
        'Con válvula de seguridad.',
        'Apta para gas natural o envasado.',
        'Industria nacional.'
    ],
    images: []
}
,
{
    id: 92,
    name: 'Calabro Asador Vertical 6-12-24 Pollos',
    description: 'El sistema giratorio vertical elimina el uso de espadas y proporciona condiciones óptimas para cocinar diferentes tipos de alimentos de manera uniforme. No produce humo y tiene un tiempo de cocción aproximado de 1 hora y 30 minutos. Equipado con quemadores infrarrojos a gas y ruedas para facilitar su manipulación. Fabricado en exterior de acero inoxidable AISI 430 brillante o esmerilado.',
    details: [
        'Sistema giratorio vertical.',
        'No produce humo.',
        'Tiempo de cocción aproximado: 1 hora y 30 minutos.',
        'Quemadores infrarrojos a gas.',
        'Ruedas para facilitar el manejo.',
        'Exterior de acero inoxidable AISI 430 brillante o esmerilado.'
    ],
    images: []
}
,
{
    id: 93,
    name: 'Asador Criollo Chico 6-12 Pollos SOL REAL',
    description: 'Asador criollo con gabinete de acero inoxidable esmerilado. Techo desmontable y puerta simple de vidrio templado. Ideal para cocinar sin humo en interiores. Incluye sistema de rejas porta pollos con mango sujetador, doble mechero lateral con controles independientes de regulación de temperatura, bandeja inferior recolectora de grasa y válvula de seguridad.',
    details: [
        'Gabinete de acero inoxidable esmerilado.',
        'Techo desmontable.',
        'Puerta simple de vidrio templado.',
        'Cocción sin humo, ideal para interiores.',
        'Incluye sistema de rejas porta pollos y mango sujetador.',
        'Doble mechero lateral con controles independientes.',
        'Bandeja inferior recolectora de grasa.',
        'Válvula de seguridad.',
        'Capacidad: 6-12 pollos.'
    ],
    images: []
}
,
{
    id: 94,
    name: 'Panchera Eléctrica ROA con Calienta Pan (CP/30)',
    description: 'Panchera eléctrica con capacidad para 28 salchichas largas (super) y calienta pan para aproximadamente 10 panes. Cuenta con regulación automática de temperatura por ciclo de termostato. Construida completamente en acero inoxidable con patas de goma antideslizantes. Incluye división movible para salchichas y pinza de acero. Funciona con alimentación eléctrica a 220V y bajo consumo. Ideal para maxiquioscos, buffets, cibercafés, bares, clubs, autoservicios, canchas, oficinas, hogares, pancherías, etc.',
    details: [
        'Capacidad: 28 salchichas largas (super), 10 panes aprox.',
        'Regulación automática de temperatura por ciclo de termostato.',
        'Construcción integramente en acero inoxidable.',
        'Patas de goma antideslizantes.',
        'Incluye división movible para salchichas y pinza de acero.',
        'Funcionamiento eléctrico a 220V y bajo consumo.'
    ],
    images: []
}
,
{
    id: 95,
    name: 'Panchera Simple de Acero Inoxidable',
    description: 'Panchera completamente realizada en acero inoxidable, con patas de goma antideslizantes. Tiene una capacidad para 28 salchichas. Equipada con termostato regulable de 30 a 120°C. Funciona con una potencia de 500W y alimentación eléctrica a 220V/50-60Hz.',
    details: [
        'Realizada completamente en acero inoxidable.',
        'Patas de goma antideslizantes.',
        'Capacidad: 28 salchichas.',
        'Termostato regulable de 30 a 120°C.',
        'Potencia: 500W.',
        'Alimentación: 220V/50-60Hz.',
        'Medidas: 35.5 x 23.5 x 25 cm.'
    ],
    images: []
}
,
{
    id: 96,
    name: 'Calentadora Eléctrica de Pan SP45',
    description: 'Calentadora eléctrica de pan fabricada en acero inoxidable. Tiene capacidad para 45 panes con regulador de temperatura. Equipada con termostato regulable, cajón para calentar pan y funciona con alimentación eléctrica a 220V 50-60Hz. Potencia total de 0.55 kW.',
    details: [
        'Fabricada en acero inoxidable.',
        'Capacidad: 45 panes.',
        'Regulador de temperatura.',
        'Termostato regulable.',
        'Cajón para calentar pan.',
        'Tensión de alimentación: 220V 50-60Hz.',
        'Potencia total: 0.55 kW.'
    ],
    images: []
}
,
{
    id: 97,
    name: 'Tostador Doble con Plancha Bifera DEPAOLO',
    description: 'Tostador doble DEPAOLO con plancha bifera, diseñado para gas envasado. Ideal para hacer tostados crujientes y sabrosos, así como para gratinar o utilizar como grill. Equipado con válvula de seguridad para una operación segura.',
    details: [
        'Marca: DEPAOLO',
        'Modelo: 066020',
        'Para gas envasado.',
        'Ideal para tostados y comidas a la plancha.',
        'Uso como grill o para gratinar.',
        'Válvula de seguridad.'
    ],
    images: []
}
,
{
    id: 98,
    name: 'Tostadora Simple Automática Eléctrica SPEEDY',
    description: 'Tostadora eléctrica SPEEDY estándar de bajo consumo. Diseñada para un uso manual y fácil limpieza. No requiere pre-calentamiento ni tiraje al exterior. Fácil mantenimiento y desarme rápido para limpieza y mantenimiento.',
    details: [
        'Marca: SPEEDY',
        'Funcionamiento automático eléctrico.',
        'Bajo consumo eléctrico.',
        'Fácil limpieza y mantenimiento.',
        'No requiere pre-calentamiento ni tiraje al exterior.'
    ],
    images: []
}
,
{
    id: 99,
    name: 'Waflera Eléctrica Simple SILCOOK',
    description: 'Waflera eléctrica SILCOOK de dimensiones 28 x 38 x 23 cm, voltaje de 220V/50Hz y potencia de 1.5 kW. Peso de 11 kg, ideal para preparar waffles de manera eficiente y rápida.',
    details: [
        'Dimensiones: 28 x 38 x 23 cm.',
        'Voltaje: 220V / 50Hz.',
        'Potencia: 1.5 kW.',
        'Peso: 11 kg.'
    ],
    images: []
}
,
{
    id: 100,
    name: 'Picadora de Carne Fineschi FL Mod. 32 Gabinete Acero Inox',
    description: 'Picadora de carne Fineschi Legitima, motor monofásico de 1.5 HP. Calibre 32 con plato rectangular de 26x34 cm y mortero plástico. Conjunto picador de fundición interna y cromado externamente. Completamente desarmable para una fácil limpieza.',
    details: [
        'Marca: Fineschi Legitima',
        'Motor: 1.5 HP Monofásico',
        'Calibre: 32',
        'Plato rectangular de 26x34 cm',
        'Mortero plástico',
        'Componentes de fundición interna y cromado externo',
        'Completamente desarmable para limpieza'
    ],
    images: []
}
,
{
    id: 101,
    name: 'Picadora de Carne Fineschi FL Gabinete Cuadrado Mod. 42 Acero Inox. 5.5 HP Trif',
    description: 'Picadora de carne Fineschi Legitima, motor trifásico de 5.5 HP. Calibre 42 con cuerpo de acero inoxidable. Producción por hora de hasta 1100 kg. Cabezal, gusano y volante de fundición de hierro o acero inoxidable. Bandeja de acero inoxidable.',
    details: [
        'Marca: Fineschi Legitima',
        'Motor: 5.5 HP Trifásico',
        'Calibre: 42',
        'Producción por hora: 1100 kg',
        'Cuerpo de acero inoxidable',
        'Cabezal, gusano y volante de fundición de hierro o acero inoxidable',
        'Bandeja de acero inoxidable'
    ],
    images: []
}
,
{
    id: 102,
    name: 'Sierra Carnicera Fineschi FL 350 Mesada de Acero 1.5 HP',
    description: 'Sierra carnicera Fineschi Legitima con hoja de 350 cm. Gabinete metálico recubierto con pintura epoxi y mesada de acero inoxidable. Motor monofásico o trifásico de 1.5 HP.',
    details: [
        'Marca: Fineschi Legitima',
        'Hoja de sierra de 350 cm',
        'Gabinete metálico con pintura epoxi',
        'Mesada de acero inoxidable',
        'Motor: 1.5 HP (Monofásico o trifásico)'
    ],
    images: []
}
,
{
    id: 103,
    name: 'Sierra Carnicera Morelli 900215',
    description: 'Sierra carnicera Morelli con hoja de 3.28 m y motor de 1.5 HP. Mesada de acero inoxidable, ideal para uso industrial en carnicerías y procesamiento de carne.',
    details: [
        'Marca: Morelli',
        'Hoja de sierra: 3.28 m',
        'Motor: 1.5 HP',
        'Mesada de acero inoxidable',
        'Dimensiones: 190 x 70 x 70 cm (alto x frente x profundidad)'
    ],
    images: []
}
,
{
    id: 104,
    name: 'Churrera desde 2 kg 1 boca ROMA',
    description: 'Máquina churrera ROMA con capacidad para 2 kg de masa y salida de 1 boca. Cilindro y cremallera de acero inoxidable, cuerpo de fundición de aluminio.',
    details: [
        'Capacidad: 2 kg de masa',
        'Salida: 1 boca',
        'Cilindro de acero inoxidable',
        'Cuerpo de fundición de aluminio',
        'Cremallera de fundición de hierro'
    ],
    images: []
}
,
{
    id: 105,
    name: 'Churrera desde 4 kg 3 boca ROMA',
    description: 'Máquina churrera ROMA con capacidad para 4 kg de masa y salida de 3 bocas. Cilindro y cremallera de acero inoxidable, cuerpo de fundición de aluminio.',
    details: [
        'Capacidad: 4 kg de masa',
        'Salida: 3 bocas',
        'Cilindro de acero inoxidable',
        'Cuerpo de fundición de aluminio',
        'Cremallera de fundición de hierro'
    ],
    images: []
}
,
{
    id: 106,
    name: 'Churrera desde 8 kg 5 boca ROMA',
    description: 'Máquina churrera ROMA con capacidad para 8 kg de masa y salida de 5 bocas. Cilindro y cremallera de acero inoxidable, cuerpo de fundición de aluminio.',
    details: [
        'Capacidad: 8 kg de masa',
        'Salida: 5 bocas',
        'Cilindro de acero inoxidable',
        'Cuerpo de fundición de aluminio',
        'Cremallera de fundición de hierro'
    ],
    images: []
}
,
{
    id: 107,
    name: 'Churrera 4 Kg. 3-5 Bocas con Cinta 0.70-1.5 y Caballete ROMA',
    description: 'Churrera ROMA con recipiente cilindro de acero inoxidable, cabezal con 3-5 bocas de salida. Cuerpo de fundición de aluminio, cremallera de fundición de hierro. Accionamiento manual con cinta transportadora y caballete de hierro soldado.',
    details: [
        'Recipiente cilindro de Acero Inoxidable',
        'Cabezal con 3-5 Bocas de Salida',
        'Cuerpo de Fundición de Aluminio',
        'Cremallera de Fundición de Hierro',
        'Accionamiento a manija manual dos velocidades',
        'Cinta transportadora de 70 cm largo - 1.5 cm largo',
        'Caballete base de Hierro Soldado'
    ],
    images: []
}
,
{
    id: 108,
    name: 'Embutidora Vertical 5-15 lts FINESCHI LEGITIMA',
    description: 'Embutidora vertical Fineschi Legitima con cilindro de acero inoxidable de 5 o 15 litros de capacidad. Equipada con 2 velocidades y juego de 3 embudos para morcilla, chorizo y salchicha.',
    details: [
        'Marca: Fineschi Legitima',
        'Capacidad: 5 o 15 litros',
        'Cilindro de acero inoxidable',
        '2 velocidades',
        'Incluye juego de 3 embudos',
        'Ideal para embutidos diversos'
    ],
    images: []
}
,
{
    id: 109,
    name: 'Embutidora Neumática 40 lts con Compresor 1.5 HP FINESCHI LEGITIMA',
    description: 'Embutidora de chorizos Fineschi Legítima con capacidad de 40 litros y compresor de 1.5 HP. Fabricada en acero inoxidable de alta calidad para durabilidad y resistencia. Incluye 3 embudos para salchichas, chorizos y morcillas.',
    details: [
        'Capacidad: 40 litros',
        'Cilindro: Acero inoxidable',
        'Base: Acero inoxidable',
        'Valvulas y herrajes: Hierro y acero inoxidable',
        'Piston: Construcción en APM',
        'Peso: 54 kg',
        'Potencia compresor: 2 HP',
        'Capacidad compresor: 25Lts.'
    ],
    images: []
}
,
{
    id: 110,
    name: 'Embutidora Neumática 75 lts con Compresor 2 HP FINESCHI LEGITIMA',
    description: 'Embutidora neumática Fineschi Legítima modelo E-75 con capacidad de cilindro de 75 litros. Fabricada íntegramente en acero inoxidable. Incluye compresor de 2 HP para un rendimiento eficiente.',
    details: [
        'Modelo: E-75',
        'Capacidad de cilindro: 75 litros',
        'Material: Acero inoxidable',
        'Piston: APM',
        'Compresor: 2 HP',
        'Base, pollera, cilindro en acero inoxidable',
        'Bridas, tapa, válvulas, varillas y manijas en acero inoxidable'
    ],
    images: []
}
,
{
    id: 111,
    name: 'Heladera Bajo Barra 1,50 sin Cubre Equipo 2 Puertas Stefanelli ⅓',
    description: 'Heladera bajo barra de 1,50 metros sin cubre equipo con 2 puertas. Ideal para mantener alimentos y bebidas refrigerados en espacios reducidos. Equipada con controlador digital Eliwell EWPlus y sistema de condesación forzada.',
    details: [
        'Medidas Externas: Frente 150 cm, Profundidad 75 cm, Alto 87 cm',
        'Temperatura de Trabajo: 3 a 7°C',
        'Gas Refrigerante: R134A',
        'Conexion: 220v Monofásico',
        'Aislación: Poliuretano de 38kg/m³',
        'Estantes: Rejillas epoxi',
        'Piso: Acero con rejillas de piso epoxi',
        'Exterior del gabinete: Acero esmerilado',
        'Interior del gabinete: Galvanizado',
        'Puertas: Cierre con burlete imantado'
    ],
    images: []
}
,
{
    id: 112,
    name: 'Heladera Bajo Barra 2,00 sin Cubre Equipo 3 Puertas Stefanelli ⅓',
    description: 'Heladera bajo barra de 2,00 metros sin cubre equipo con 3 puertas. Adecuada para espacios que requieren mayor capacidad de almacenamiento refrigerado. Equipada con controlador digital Eliwell EWPlus y sistema de condesación forzada.',
    details: [
        'Medidas Externas: Frente 200 cm, Profundidad 75 cm, Alto 87 cm',
        'Temperatura de Trabajo: 3 a 7°C',
        'Gas Refrigerante: R134A',
        'Conexion: 220v Monofásico',
        'Aislación: Poliuretano de 38kg/m³',
        'Estantes: Rejillas epoxi',
        'Piso: Acero con rejillas de piso epoxi',
        'Exterior del gabinete: Acero esmerilado (excepto respaldo)',
        'Interior del gabinete: Galvanizado',
        'Puertas: Cierre con burlete imantado'
    ],
    images: []
}
,
{
    id: 113,
    name: 'Heladera Bajo Barra 2,50 sin Cubre Equipo 4 Puertas Stefanelli ⅓',
    description: 'Heladera bajo barra de 2,50 metros sin cubre equipo con 4 puertas. Ideal para grandes necesidades de refrigeración en establecimientos comerciales. Equipada con controlador digital Eliwell EWPlus y sistema de condesación forzada.',
    details: [
        'Medidas Externas: Frente 250 cm, Profundidad 75 cm, Alto 87 cm',
        'Temperatura de Trabajo: 3 a 7°C',
        'Gas Refrigerante: R134A',
        'Conexion: 220v Monofásico',
        'Aislación: Poliuretano de 38kg/m³',
        'Estantes: Rejillas epoxi',
        'Piso: Acero con rejillas de piso epoxi',
        'Exterior del gabinete: Acero esmerilado (excepto respaldo)',
        'Interior del gabinete: Galvanizado',
        'Puertas: Cierre con burlete imantado'
    ],
    images: []
}
,
{
    id: 114,
    name: 'Heladera Bajo Barra 2,58 sin Cubre Equipo 5 Puertas Stefanelli ½',
    description: 'Heladera bajo barra de 2,58 metros sin cubre equipo con 5 puertas. Diseñada para almacenar una gran cantidad de productos refrigerados. Equipada con controlador digital Eliwell EWPlus y sistema de condesación forzada.',
    details: [
        'Medidas Externas: Frente 300 cm, Profundidad 75 cm, Alto 87 cm',
        'Temperatura de Trabajo: 3 a 7°C',
        'Gas Refrigerante: R134A',
        'Conexion: 220v Monofásico',
        'Aislación: Poliuretano de 38kg/m³',
        'Estantes: Rejillas epoxi',
        'Piso: Acero con rejillas de piso epoxi',
        'Exterior del gabinete: Acero esmerilado',
        'Interior del gabinete: Galvanizado',
        'Puertas: Cierre con burlete imantado'
    ],
    images: []
}
,
{
    id: 115,
    name: 'Heladera Bajo Barra 1,45 con Cubre Equipo 2 Puertas Frider',
    description: 'Heladera bajo barra de 1,45 metros con cubre equipo y 2 puertas de la marca Frider. Ideal para mantener alimentos refrigerados en condiciones óptimas. Equipada con control de temperatura digital y construcción robusta en acero inoxidable.',
    details: [
        'Medidas: 1450 x 755 x 850 mm',
        'Potencia: 1/3 HP',
        'Gabinete exterior: Chapa de acero inoxidable esmerilado',
        'Piso exterior: Chapa galvanizada',
        'Interior: Chapa de acero inoxidable brillante',
        'Aislación: Poliuretano expandido de 40 Kg/m³ libre de CFC',
        'Evaporador: Techo por aire forzado',
        'Puertas: Tipo placa con cierre magnético y resorte de tensión',
        'Patas: Plástico reforzado regulables'
    ],
    images: []
}
,
{
    id: 116,
    name: 'Heladera Bajo Barra 1,93 con Cubre Equipo 3 Puertas Frider',
    description: 'Heladera bajo barra de 1,93 metros con cubre equipo y 3 puertas de la marca Frider. Perfecta para la conservación de alimentos en ambientes comerciales como restaurantes y hoteles. Equipada con control de temperatura digital y construcción robusta en acero inoxidable.',
    details: [
        'Medidas: 1930 x 755 x 850 mm',
        'Gabinete exterior: Chapa de acero inoxidable esmerilado',
        'Piso exterior: Chapa galvanizada',
        'Interior: Chapa de acero inoxidable brillante',
        'Aislación: Poliuretano expandido de 40 Kg/m³ libre de CFC',
        'Evaporador: Techo por aire forzado',
        'Control de temperatura: Digital',
        'Puertas: Tipo placa con cierre magnético y resorte de tensión',
        'Patas: Plástico reforzado regulables'
    ],
    images: []
}
,
{
    id: 117,
    name: 'Heladera Carnicera Frider Mod. 73/93 A 1,50/2,00 (1+2)',
    description: 'Heladera carneciera con gabinete en paneles de poliuretano inyectado de 40 Kg/m³. Exterior en chapa prepintada blanca y interior en chapa galvanizada. Equipada con base en caño tubular, patas de aluminio, y sistema de cierre con resortes de tensión.',
    details: [
        'Potencia: 3/4 HP',
        'Modelo: 73 y 93 Pies',
        'Interior: Piso en acero inoxidable brillante',
        'Puertas: Placas con burlete magnético y manijas incorporadas embutidas',
        'Gancheras: Techo y cintura',
        'Aislación: Poliuretano de 40 Kg/m³'
    ],
    images: []
}
,
{
    id: 118,
    name: 'Heladera Carnicera Frider Mod. 124/154 A 2,50/3,00 (2+2)',
    description: 'Heladera carneciera con interior galvanizado y piso en acero inoxidable. Exterior completo en acero inoxidable. Equipada con puertas batientes de alta calidad, patas de plástico reforzadas, y sistema de frío forzado.',
    details: [
        'Potencia: 1/2 HP',
        'Modelo: 124 y 154 Pies',
        '3 gancheras y choriceras con techo reforzado',
        'Aislación: Terlgopor de alta densidad'
    ],
    images: []
}
,
{
    id: 119,
    name: 'Heladera Carnicera Orlandos Mod. 73 y 93 1,50 y 2,00 (1+2)',
    description: 'Heladera carneciera con gabinete de acero inoxidable AISI 430 y interior galvanizado. Equipada con ganchera de techo y cintura, y piso de acero inoxidable.',
    details: [
        'Potencia: 3/4 HP',
        'Medidas (mm): 1700 x 900 x 2060 (Modelo 73), 2000 x 900 x 2060 (Modelo 93)'
    ],
    images: []
}
,
{
    id: 120,
    name: 'Latera 1 Puerta 60 Latas Mondino',
    description: 'Latera con capacidad para 60 latas, construida con exterior en chapa pre pintada blanca y interior en chapa galvanizada. Equipada con sistema de refrigeración estática y unidad condensadora de 1/2 HP.',
    details: [
        'Capacidad: 1650 litros',
        'Temperatura: -0°C a +5°C',
        'Aislación: Poliuretano densidad 40 kg/m³',
        'Medidas: 850 x 1200 x 2200 mm (altura)'
    ],
    images: []
}
,
{
    id: 121,
    name: 'Latera 2 Puertas 150, 44 Latas RH',
    description: 'Latera con capacidad aproximada de 1400 litros, equipada con 40 estantes para latas de 60x40 cm. Interior en galvanizado y exterior en acero inoxidable brillante. Sistema de cierre con doble sistema de cierre y controlador digital de temperatura.',
    details: [
        'Capacidad: 1400 litros aproximadamente',
        'Temperatura: 2 a 5°C',
        'Exterior: Acero inoxidable brillante',
        'Interior: Galvanizado'
    ],
    images: []
}
,
{
    id: 122,
    name: 'Latera 3 Puertas 210, 66 Latas RH',
    description: 'Latera con capacidad para 66 latas, equipada con sistema de refrigeración por frío forzado y control de temperatura automático. Exterior en chapa prepintada blanca y aislación en poliuretano inyectado de 38 Kg/m³.',
    details: [
        'Capacidad: 210 latas',
        'Temperatura: 0°C a 5°C',
        'Exterior: Chapa prepintada blanca',
        'Interior: Chapa galvanizada'
    ],
    images: []
}
,
{
    id: 123,
    name: 'Góndola Láctea 1300 Equipada Lat/Plast-Acero Frider',
    description: 'Góndola refrigerada de 1300 mm equipada, con gabinete interior y exterior en chapa galvanizada. Equipada con estantes regulables en chapa prepintada blanca y sistema de frío con evaporador aletado por aire forzado.',
    details: [
        'Iluminación: Tubos fluorescentes',
        'Aislación: Poliuretano expandido 40 Kg/m³',
        'Base: Caño estructural pintado',
        'Control de temperatura: Automático'
    ],
    images: []
}
,
{
    id: 124,
    name: 'Góndola Láctea 2500 Equipada Lat/Plast-Acero Frider',
    description: 'Góndola refrigerada de 2500 mm equipada, con gabinete interior y exterior en chapa galvanizada. Equipada con estantes regulables en chapa prepintada blanca y sistema de frío con evaporador aletado por aire forzado.',
    details: [
        'Iluminación: Tubos fluorescentes',
        'Aislación: Poliuretano expandido 40 Kg/m³',
        'Base: Caño estructural pintado',
        'Control de temperatura: Automático'
    ],
    images: []
}
,
{
    id: 125,
    name: 'Cámaras Termopanel Prep/Prep',
    description: 'Nuestras cámaras termopanel son soluciones de alta calidad diseñadas para cumplir con los requisitos más exigentes en la industria de la refrigeración y almacenamiento. Totalmente modulares, estas cámaras están construidas con materiales de primera categoría, garantizando durabilidad y eficiencia térmica.',
    details: [
        'Paneles totalmente modulares: Facilitando el montaje y la flexibilidad en el diseño.',
        'Revestimiento exterior: Chapa de acero prepintada blanca.',
        'Revestimiento interior: Chapa electro zincada galvanizada.',
        'Aislación en poliuretano: Ofrece un aislamiento térmico superior.',
        'Sistema de armado: Ganchos excéntricos para instalación rápida y segura.',
        'Puerta corrediza: Facilita el acceso y maximiza el espacio utilizable.',
        'Estructura rielera autoportante: Brinda soporte robusto sin estructuras adicionales.',
        'Rejilla piso interior: Garantiza un flujo de aire óptimo.',
        'Válvula de descompresión: Mantiene la integridad estructural y funcional.',
        'Revestimiento en acero inoxidable: Para mayor durabilidad y resistencia.'
    ],
    images: []
},
{
    id: 126,
    name: 'Puertas para Cámaras Termopanel',
    description: 'Nuestras puertas para cámaras frigoríficas están diseñadas para ofrecer la máxima eficiencia térmica y seguridad. Fabricadas con materiales de alta calidad, estas puertas garantizan durabilidad y rendimiento óptimo en entornos de almacenamiento refrigerado.',
    details: [
        'Exterior en blanco: Acabado limpio y profesional.',
        'Interior en galvanizado: Resistente a la corrosión y duradero.',
        'Bisagra con inclinación para arriba: Facilita apertura y cierre suave.',
        'Tronera con rampa: Mejora la accesibilidad y el manejo dentro de la cámara.',
        'Traba con manija alta (segura): Operación segura y fácil.',
        'Doble traba (superior e inferior): Asegura un cierre hermético.'
    ],
    images: []
},
{
    id: 127,
    name: 'Equipos de Frío Compactos',
    description: 'Nuestros equipos de frío compactos ofrecen un rendimiento superior en aplicaciones de refrigeración industrial y comercial. Con construcción robusta y componentes de alta calidad, garantizan una operación eficiente y confiable en todo momento.',
    details: [
        'Diseño compacto: Fácil instalación en espacios reducidos.',
        'Alta eficiencia: Compresores potentes para enfriamiento rápido y uniforme.',
        'Construcción robusta: Materiales duraderos para entornos exigentes.',
        'Control de temperatura preciso: Regulación precisa de la temperatura.',
        'Fácil mantenimiento: Diseño accesible para tareas de servicio.'
    ],
    images: []
},
//BOLLERAS PLATO
{
    id: 128,
    name: 'Corbol inoxidable',
    description: 'La Bollera Corbol es una máquina ideal para la elaboración de panes redondos, saborizados, rosetas, panes de hamburguesa, pizzetas, entre otros. Incluye dos sinfín intercambiables de acuerdo al peso requerido: con el tamaño nº 1 podrá realizar bollos de 20 a 60 gramos; y con el nº 2 podrá realizar bollos de los 60 a 120 gramos.',
    details: [
        'Eficiente y rápida: Es muy eficiente y rápida al momento de producir.',
        'Materiales de primera calidad: Construida con materiales de primera calidad.',
        'Motores de alta potencia: Tiene dos motores de 1 HP.',
        'Dimensiones: 1,60m (largo) x 0,56m (ancho) x 1,40m (alto).',
        'Peso: Peso aproximado de 300Kg.',
        'Alta producción: Producción de 80 bollos por minuto.'
    ],
    images: []
},
{
    id: 129,
    name: 'Bollera de mesa',
    description: 'Máquina para el armado de bollos de masa para hacer pizzas, pizzetas, rosetas, berlinesas, pancitos saborizados, chippa, pan para hamburguesas y más.',
    details: [
        'Diseño compacto: Fácil de instalar y usar en espacios reducidos.',
        'Versatilidad: Ideal para una variedad de productos horneados.',
        'Construcción robusta: Hecha con materiales duraderos para un uso prolongado.',
        'Eficiencia: Permite el armado rápido y uniforme de bollos de masa.',
        'Fácil de limpiar: Diseño accesible para un mantenimiento sencillo.'
    ],
    images: []
},
//RALLADORAS DE PAN/QUESO
{
    id: 130,
    name: 'Ralladora gigante motor 3hp',
    description: 'El equipo ideal para moler todo tipo de pan seco y convertirlo en pan rallado o moler productos dulces y reutilizarlos para galletitería o pastelería. Rápidamente, transforma su excedente de venta en un nuevo producto de fácil comercialización y con valor agregado.',
    details: [
        'Modelo industrial: Alto rendimiento y diseño de pie.',
        'Dos bocas de salida: Incluye tolva superior y dos bocas de salida.',
        'Motor potente: Motor de 3 HP 380V/50Hz.',
        'Dimensiones: Medidas de 510mm de frente, 440mm de fondo y 1125mm de alto.',
        'Diámetro de tolva: 320mm.',
        'Alta producción: Producción aproximada de 250 a 300 Kg/h.'
    ],
    images: []
},
{
    id: 131,
    name: 'Ralladora 60 kg/h 1 hp Fineschi',
    description: 'CARACTERÍSTICAS: Gabinete metálico recubierto con pintura epoxi. Marca: FL. Motor: 1 hp. Producción: 60kg/hora. Voltaje: 220V. Consumo: 1.5 kw/hora. Diámetro: 28cm. Alto: 62cm. Peso: 10.7kg.',
    details: [
        'Gabinete metálico: Recubierto con pintura epoxi.',
        'Motor: 1 hp, Voltaje: 220V.',
        'Producción: 60 kg/hora.',
        'Consumo: 1.5 kw/hora.',
        'Dimensiones: Diámetro de 28cm, Alto de 62cm.',
        'Peso: 10.7 kg.'
    ],
    images: []
},
{
    id: 132,
    name: 'Ralladora queso Paniz (3 discos)',
    description: 'Diseñado para rallar y desmenuzar diversos alimentos como quesos, hortalizas, vegetales y frutas. Posee tres discos de acero inoxidable para obtener diversos rallados.',
    details: [
        'Construcción: Acero inoxidable.',
        'Discos intercambiables: Tres discos de acero inoxidable de 20 cm de diámetro (rallado fino y rallado en hebras de 5 y 8 mm).',
        'Depósito desmontable: Acero inoxidable.',
        'Motor: 1/3 Hp, Voltaje: 220V.',
        'Velocidad: 490 RPM.',
        'Producción: 60 kg/hora.',
        'Consumo: 0.46 kw/hora.',
        'Peso: 19 kg.'
    ],
    images: []
},
//GRINISERAS MANUALES
{
    id: 133,
    name: 'Grisinera automática 45mm/330 mm. BAROLAT',
    description: 'GRISINERA PANCHERA JUNIOR MB CON 2 CABEZALES, UNO DE GRISINES Y OTRO DE PANCHO. TAMBIÉN SE PUEDE UTILIZAR UN CABEZAL CORTANTE CON CARGO ADICIONAL, ASÍ COMO OTRA MEDIDA DE CABEZAL DE GRISINES. LA MÁQUINA VIENE PROVISTA DE 2 CABEZALES, GRISINERA PANCHERA JR.',
    details: [
        'Corte tradicional y panchera: Adaptable para distintos tipos de productos.',
        'Rodillos de APM: Rodillos para grisines (de Ø 6, 8 o 10mm) o para panchos (de Ø18 mm).',
        'Rolos cortadores: 2 rolos cortadores de Ø 70 x 160 mm.',
        'Montaje robusto: Montada sobre bujes de bronce antifricción.',
        'Alta producción: Producción aproximada de 25 a 30 kg de masa por hora.',
        'Peso: 22 kg.'
    ],
    images: []
},
//HORNOS ROTATIVOS CONVECTORES TUNEL
{
    id: 134,
    name: 'HEB1A 43*32 convector SILCOOK VIA CHEFF',
    description: 'Convector de alta eficiencia para uso profesional, ideal para cocinas comerciales y chefs exigentes.',
    details: [
        'Voltaje: 220V / 50Hz.',
        'Potencia: 2.67 kW.',
        'Doble turbina: Con temporizador e inversión de giro.',
        'Timer de cocción: 120 minutos de rango.',
        'Rango de temperatura: 50ºC a 300ºC.',
        'Puerta: Doble vidrio templado.',
        'Botón de inyección de vapor: Para una cocción óptima.',
        'Dimensiones externas: 59.5 x 53 x 57 cm.',
        'Dimensiones internas: 46 x 37.5 x 36 cm.',
        'Capacidad: 4 bandejas de 44 x 32 x 15 cm.',
        'Accesorios: Incluye 4 rejillas de 30 x 40 cm.',
        'Peso: 38 kg.'
    ],
    images: []
},
{
    id: 135,
    name: 'DORATO 4B 42*28,5 convector MORELLI',
    description: 'El Horno Convector Morelli Dorato de 4 bandejas es el compañero ideal para el desarrollo de su proyecto gastronómico. Diseñado para un uso intensivo en pastelería, este producto puede cocinar ultracongelados sin ningún tipo de inconvenientes. Gracias a su potencia y el calor parejo otorgado por su gran turbina integrada en el interior, es capaz de cocinar en minutos dejándolo crocante por dentro y dorado por fuera.',
    details: [
        'Capacidad: 4 bandejas de 420 x 285 mm.',
        'Dimensiones: Ancho: 545 mm, Alto: 550 mm, Profundidad: 550 mm.',
        'Exterior: Acero inoxidable.',
        'Interior: Enlozado de fácil limpieza.',
        'Puerta: Doble vidrio templado.'
    ],
    images: []
},
{
    id: 136,
    name: 'DELI 4B 43*32 convector MORETTI',
    description: 'Alta calidad de cocción gracias a su doble resistencia y ventilador. Muy simple de operar, instalar y mantener. Construido íntegramente de acero inoxidable.',
    details: [
        'Temperatura de Cocción: Máximo 300°C.',
        'Temporizador: Hasta 120 minutos.',
        'Apertura de puerta: 90 grados.',
        'Capacidad: 4 bandejas de 43 x 32 cm incluidas en el producto.',
        'Alimentación: 220V-240V 50Hz.',
        'Potencia: 2670 watts.',
        'Dimensiones: Ancho: 59 cm, Largo: 60 cm, Alto: 55 cm.'
    ],
    images: []
},
{
    id: 137,
    name: 'BAKERY 4B 60*40 convector MORETTI',
    description: 'Ideal para restaurantes, hoteles, estaciones de servicio y supermercados. Alta calidad de cocción gracias a su doble resistencia y ventilador. Muy simple de operar, instalar y mantener. Construido íntegramente de acero inoxidable. Función HUMIDIFICADOR de VAPOR y acción manual.',
    details: [
        'Temperatura de cocción: Máximo 300°C.',
        'Temporizador: Hasta 120 minutos.',
        'Apertura de puerta: 90 grados.',
        'Capacidad: 4 bandejas de 60 x 40 cm incluidas en el producto.',
        'Alimentación: 220V-240V / 50Hz.',
        'Potencia: 6400 watts.',
        'Dimensiones internas: 84 x 68 x 58 cm.',
        'Peso neto: 75 kg.'
    ],
    images: []
},
{
    id: 138,
    name: 'OVEN 70 5B 70*45 convector MORETTI',
    description: 'Capacidad para 5 bandejas de 700×450 mm. Trifásico, con uniformidad en la cocción de todo tipo de alimentos. Panel de control programable con activación manual del forzador. Sistema de humidificación mediante pulsador de vapor. Gabinete exterior e interior en acero inoxidable de primera calidad. Regulación de termostato: 0°C a 300°C. Puerta de vidrio templado. Aislación térmica de fibra mineral.',
    details: [
        'Capacidad: 5 bandejas de 700×450 mm.',
        'Tipo de alimentación: Trifásico.',
        'Uniformidad en la cocción: Garantiza uniformidad en la cocción de todo tipo de alimentos.',
        'Panel de control: Programable con activación manual del forzador.',
        'Sistema de humidificación: Pulsador de vapor.',
        'Material: Gabinete exterior e interior en acero inoxidable de primera calidad.',
        'Regulación termostato: 0°C a 300°C.',
        'Regulación tiempo: Sí.',
        'Puerta: Vidrio templado.',
        'Aislación térmica: Fibra mineral.',
        'Dimensiones: Profundidad 126 cm, Frente 98 cm, Alto 95 cm.',
        'Función del horno: Panadería, rotisería.',
        'Tipo de cocción: Convección.',
        'Temperatura mínima: 50°C.',
        'Temperatura máxima: 300°C.'
    ],
    images: []
},
{
    id: 139,
    name: 'MICROPRO-25/34 microondas MORETTI',
    description: 'Microondas único en el mercado con capacidad de 25 litros. Totalmente construido en acero inoxidable y teclado de material de alto impacto para uso industrial riguroso. Dispone de funciones de uso manual y programable.',
    details: [
        'Capacidad: 25 litros.',
        'Material: Construido totalmente en acero inoxidable.',
        'Teclado: Material de alto impacto para uso industrial riguroso.',
        'Uso: Manual y programable.',
        'Medidas: 51x43x31 cm.',
        'Medidas embalaje: 58x48x38 cm.',
        'Peso: 14.7 kg.',
        'Potencia: 1500 watts.',
        'Uso recomendado: Industrial.'
    ],
    images: []
},
{
    id: 140,
    name: 'PANING convector 6/10 bandejas ZONDA Convector 3B Digital HORNO CONVECTOR ELECTRICO 3 BANDEJAS DIGITAL ZONDA',
    description: 'Horno convector modelo Macar Paning de 45x70, con capacidad para 10 bandejas de 45x70 cm. Puede operar con gas envasado o natural, y está disponible en versiones trifásica o monofásica.',
    details: [
        'Modelo: Macar Paning.',
        'Capacidad: 10 bandejas de 45x70 cm.',
        'Tipo de combustible: Gas envasado/natural.',
        'Tipo de alimentación: Trifásico o monofásico.'
    ],
    images: []
},
{
    id: 141,
    name: 'ROT-CAR full 70*45 4/6/8/10 bandejas',
    description: 'Horno ROT-CAR adecuado para la cocción de todo tipo de panes: francés, lactal, de sandwich, pan dulce, grisines, alfajores, vainillas, tostadas, bizcochos, pre-pizzas, etc. Los hornos alcanzan la temperatura deseada en 12 minutos. El consumo de gas y gasoil corresponde a una hora de uso continuo del quemador, pero para la cocción se necesitan 30 minutos de uso del quemador por hora, por lo tanto, el consumo consignado debe reducirse a la mitad.',
    details: [
        'Apto para la cocción de todo tipo de panes.',
        'Tiempo de alcanzar la temperatura deseada: 12 minutos.',
        'Consumo de gas y gasoil: Para la cocción se necesitan 30 minutos de uso del quemador por hora.',
        'Capacidades disponibles: 4, 6, 8, 10 bandejas de tamaño 70x45.'
    ],
    images: []
},
{
    id: 142,
    name: 'Burner HC 45(30 doc)/105(60 doc)/125(75)/145(90)/165(110)',
    description: 'Los hornos continuos Burner HC están fabricados totalmente en acero inoxidable. Poseen control digital de temperatura, encendido electrónico, variador de velocidad, quemador a gas automático con forzador y válvula solenoide de seguridad. La cinta está montada sobre planchuela, ambas fabricadas en acero inoxidable calidad 304.',
    details: [
        'Capacidades: 45 (30 doc), 105 (60 doc), 125 (75), 145 (90), 165 (110) (las capacidades están expresadas en ancho de cinta en centímetros y número de docenas de productos por hora).',
        'Material: Fabricados totalmente en acero inoxidable calidad 304.',
        'Características adicionales: Control digital de temperatura, encendido electrónico, variador de velocidad, quemador a gas automático con forzador y válvula solenoide de seguridad.'
    ],
    images: []
},
//QUEMADORES INDUSTRIALES
{
    id: 143,
    name: 'BALTUR mod. BTG 11 (85000)/BALTUR mod. BTG 66 (50000)',
    description: 'Quemador de gas homologado por la CE según normativa europea EN676. Funcionamiento mono etapa con ajuste del aire comburente y de la cabeza de combustión. Toma de aire de combustión con mampara de mariposa y regulación manual del caudal de aire. Diseñado para fácil mantenimiento, permitiendo extraer el grupo pulverizador sin desmontar el quemador de la caldera. Brida de conexión corrediza para adaptarse a diferentes tipos de generadores de calor.',
    details: [
        'Homologación: CE conforme a EN676.',
        'Funcionamiento: Mono etapa.',
        'Ajustes: Aire comburente y cabeza de combustión ajustables.',
        'Toma de aire: Con mampara de mariposa.',
        'Regulación: Manual del caudal de aire.',
        'Mantenimiento: Fácil mantenimiento con extracción del grupo pulverizador sin desmontar el quemador de la caldera.',
        'Conexión: Brida corrediza para adaptarse a diferentes generadores de calor.',
        'Seguridad: Rampa gas con válvula de funcionamiento y de seguridad, presostato de mínima, regulador de presión y filtro gas.',
        'Integración: Posibilidad de integrar con kit para la estanqueidad de las válvulas.',
        'Conector: Conector de 7 bornes para alimentación eléctrica y termostática.',
        'Control de llama: Mediante electrodo de ionización con predisposición para conexión del microamperímetro.',
        'Protección: Tapa de protección fonoabsorbente en material plástico.'
    ],
    images: []
},
//HORNOS PASTELEROS
{
    id: 144,
    name: 'Pastelero 12/18 moldes MORELLI',
    description: 'Este horno es una herramienta de alto rendimiento diseñada para grandes producciones y altas exigencias. Cuenta con un sistema de calor envolvente y circulación de aire interno para lograr una cocción pareja. Fabricado con materiales de alta calidad y características que aseguran seguridad y eficiencia.',
    details: [
        'Capacidad: 12 moldes o 3 bandejas (no incluidos).',
        'Material: Exterior en acero inoxidable.',
        'Características adicionales: Válvula de seguridad, burlete de alta temperatura, 4 patas fijas, nuevo sistema de base desarmable, piso, respaldo y techo totalmente en ladrillo refractario, horno enlozado de gran capacidad, tapa ciega.'
    ],
    images: []
},
{
    id: 145,
    name: 'Pastelero 18 moldes 32000 ladrillos/ 70 LIVIANO MAEQUIP Bar Pastelero 18 moldes 32000 lajas 70 LIVIANO MAEQUIP Bar Pastelero 18 moldes 32000 bar 72 MAEQUIP Pastelero 18 moldes 32000 bar 82 MAEQUIP  Pastelero 12 moldes 24000 bar MAEQUIP',
    description: 'Los Hornos Pasteleros están diseñados para grandes producciones de alimentos y altas exigencias. Cuentan con un sistema de calor envolvente que logra una cocción uniforme en cualquier preparación. El Horno Pastelero H6 fue especialmente diseñado para ser utilizado tanto en pequeños negocios gastronómicos como en quinchos y parrilleros.',
    details: [
        'Capacidad: 12 moldes.',
        'Diseño: Sistema de calor envolvente para cocción uniforme.',
        'Uso recomendado: Ideal para grandes producciones y altas exigencias gastronómicas.',
        'Aplicación: Adecuado para pequeños negocios gastronómicos, quinchos y parrilleros.'
    ],
    images: []
},
{
    id: 146,
    name: 'Pizzero 3 moldes DEPAOLO sin pinza (033010) Pizzero 3 moldes DEPAOLO con pinza (033020) Pizzero 6 moldes DEPAOLO con gratinador (033035) Pizzero 6 moldes DEPAOLO con pinza (033060)',
    description: 'Horno pizzero con capacidad para 3 moldes, fabricado con cuerpo de acero inoxidable esmerilado y interior completamente enlozado. Cuenta con piso de tejuelas refractarias y 3 quemadores comandados por 1 llave, con válvula de seguridad. Apto para gas envasado y natural con su respectiva regulación. Incluye base de apoyo, es de industria nacional y lleva la marca DEPAOLO.',
    details: [
        'Capacidad: 3 moldes.',
        'Material: Cuerpo de acero inoxidable esmerilado, interior enlozado, piso de tejuelas refractarias.',
        'Quemadores: 3 quemadores comandados por 1 llave, con válvula de seguridad.',
        'Compatibilidad de gas: Apto para gas envasado y natural (con regulación correspondiente).',
        'Especificaciones de gas: Entrada de gas de 1/2 pulgada, 6000 calorías/hora.',
        'Medidas exteriores: Frente 50 cm x Profundidad 47 cm x Altura 59 cm / Altura con base 130 cm.',
        'Medidas interiores: Frente 39 cm x Profundidad 42 cm.',
        'Origen: Industria nacional.',
        'Marca: DEPAOLO.'
    ],
    images: []
},
{
    id: 147,
    name: 'Pizzero 12 moldes DEPAOLO (033037) Pizzero 18 moldes DEPAOLO (33090) Pizzero 24 moldes DEPAOLO (33100)',
    description: 'Horno pizzero con capacidad para 24 moldes, estructura tubular y gabinete de acero AISI 430 esmerilado. La cámara interior es de chapa D.D. calibre 20 y está totalmente enlozada. Cuenta con aislación de lana mineral y piso refractario. Incluye válvula de seguridad y está configurado para gas natural, aunque es apto para gas envasado con la instalación adecuada por un gasista matriculado (picos no incluidos). Equipado con 6 quemadores y 2 válvulas de seguridad.',
    details: [
        'Capacidad: 24 moldes.',
        'Material: Estructura tubular, gabinete de acero AISI 430 esmerilado, cámara interior de chapa D.D. calibre 20 totalmente enlozada, aislación de lana mineral, piso refractario.',
        'Gas: Configurado para gas natural. Apto para gas envasado con cambio de picos realizado por un gasista matriculado (picos no incluidos).',
        'Quemadores: 6 quemadores y 2 válvulas de seguridad.'
    ],
    images: []
},
{
    id: 148,
    name: 'Pizzero WFC 101D Electrico SILCOOK VIA CHEFF Pizzero WFC 102 Electrico SILCOOK VIA CHEFF Pizzero WFC 102CA Electrico SILCOOK VIA CHEFF Pizzero WFC 204D Electrico SILCOOK VIA CHEFF',
    description: 'Horno pizzero con cámara de vapor repotenciada, elaborado con un frente de acero inoxidable de alta calidad para una disipación eficiente del calor y una vida útil prolongada. Equipado con base de piedra refractaria y controles de temperatura superior e inferior independientes. Este modelo incorpora una caldera para una humificación intensa, reemplazando el sistema anterior de inyección de vapor.',
    details: [
        'Medidas: 1220 x 820 x 575 mm.',
        'Medidas de la cámara: 860 x 640 x 215 mm.',
        'Potencia: 6.6 KW.',
        'Voltaje: 380 V.',
        'Frecuencia: 50 Hz.',
        'Base de piedra refractaria.',
        'Timer incorporado.',
        'Caldera de vapor.',
        'Material: Cuerpo de acero inoxidable.',
        'Tiempo de calentamiento: 8 minutos.',
        'Rango de temperatura: 20 a 400°C.'
    ],
    images: []
},
//HELADERAS VERTICALES
{
    id: 149,
    name: 'INELRO mod. MT120 INELRO mod. MT120 cervecera INELRO mod. MT11 NORDICA BLACK INELRO mod. MT11 INELRO mod. MT14 INELRO mod. MT470 INELRO mod. MT17 Tradicional INELRO mod. MT08 INELRO mod. MT19 INELRO mod. MT17 ECO BLACK INELRO mod. MT26 (antes MT750) INELRO mod. MT34 BLACK INELRO mod. MT980 con cenefa INELRO mod. MT42 (3 puertas)',
    description: 'Refrigerador comercial con compresor de última generación y termostato mecánico. Equipado con iluminación interior por tubo LED de 7.5W, puerta doble vidrio exterior templado Low-e y estantes con tratamiento anti corrosión. Posee condensación estática, evaporador Roll Bond y ventilador evaporador tangencial. Utiliza agente espumante Ciclo Isopentano (Libre CFC, densidad 38Kg/M³) y gas refrigerante ecológico R134a (libre de CFC). El gabinete interior es de ABS, mientras que el exterior está electrozincado y prepintado en color blanco.',
    details: [
        'Compresor: Última generación.',
        'Termostato: Mecánico.',
        'Iluminación: Tubo LED (7.5W).',
        'Puerta: Doble vidrio exterior templado Low-e.',
        'Estantes: Tratamiento anti corrosión.',
        'Condensación: Estática.',
        'Evaporador: Roll Bond.',
        'Ventilador evaporador: Tangencial.',
        'Agente espumante: Ciclo Isopentano (Libre CFC, 38Kg/M³).',
        'Gas refrigerante: R134a, ecológico (Libre CFC).',
        'Puerta: Color blanco.',
        'Interior gabinete: ABS.',
        'Exterior gabinete: Electrozincado - Prepintado.'
    ],
    images: []
},
{
    id: 150,
    name: 'FRIDER 2 puertas ( 915 lt.) marco aluminio FRIDER 3 puertas ( 1425 lt.) marco aluminio FRIDER 4 puertas ( 1976 lt.) marco aluminio FRIDER 5 puertas (1976 lt.) marco aluminio',
    description: 'Refrigerador comercial de gran capacidad con 5 puertas y un volumen de 1976 litros. Cuenta con gabinete en chapa electrozincada prepintada blanca con protección vinílica y aislación en poliuretano expandido de 40 Kg/m3 libre de CFC. Equipado con evaporador de techo con forzador de aire y descongelamiento automático. Las puertas tienen marco de aluminio blanco, termopanel triple vidriado calefaccionado, burlete magnético y sistema de cierre con resorte de tensión. Incluye excelente iluminación lateral y cenefa superior iluminada. Dispone de parrillas interiores regulables y plastificadas en color blanco, control de temperatura automático digital y patas plásticas regulables para nivelación. El equipo de frío se encuentra ubicado en la parte superior del refrigerador.',
    details: [
        'Capacidad: 1976 litros.',
        'Gabinete: Chapa electrozincada prepintada blanca con protección vinílica.',
        'Aislación: Poliuretano expandido de 40 Kg/m3 libre de CFC.',
        'Evaporador: Techo con forzador de aire y descongelamiento automático.',
        'Puertas: Marco de aluminio blanco, termopanel triple vidriado calefaccionado, burlete magnético, sistema de cierre con resorte de tensión.',
        'Iluminación: Excelente iluminación lateral y cenefa superior iluminada.',
        'Parrillas: Interiores regulables, plastificadas color blanco.',
        'Control de temperatura: Automático digital.',
        'Patas: Plásticas regulables para nivelación.',
        'Ubicación del equipo de frío: Parte superior.'
    ],
    images: []
},
{
    id: 151,
    name: 'MONDINO 4 puertas (1976 lt.)',
    description: 'Refrigerador diseñado para mantener todo tipo de productos alimenticios y medicinales. Construido con interior y exterior en acero inoxidable calidad 430, contrafrente en acero galvanizado. Las puertas cuentan con marco de aluminio, fina serigrafía y termo panel de 3 vidrios. El cerramiento de las puertas es automático con bisagras con resortes y cierre magnético. Aislación con densidad de 40 kgs/m3 espuma Bayer bajo norma ABNT, con retardante de llama clasificación R1. Incluye parrillas regulables de alambre con pintura epoxi horneable, patas reforzadas regulables y resistentes a la regulación termomecánica. Ofrece una temperatura de 0°C a 5°C, humedad relativa del 62%, refrigeración forzada, controlador digital de temperatura y descongelamiento automático. Iluminación LED integrada.',
    details: [
        'Capacidad: 1976 litros.',
        'Interior y exterior: Acero inoxidable calidad 430, contrafrente en acero galvanizado.',
        'Puertas: Marco de aluminio con fina serigrafía, termo panel de 3 vidrios, cerramiento automático con bisagras con resortes y cierre magnético.',
        'Aislación: Densidad 40 kgs/m3 espuma Bayer bajo norma ABNT, retardante de llama clasificación R1.',
        'Parrillas: Regulables de alambre con pintura epoxi horneable (5 unidades).',
        'Patas: Reforzadas regulables, resistentes a la regulación termomecánica.',
        'Temperatura: 0°C a 5°C.',
        'Humedad Relativa: 62%.',
        'Refrigeración: Forzada.',
        'Controlador: Digital de temperatura y descongelamiento automático.',
        'Iluminación: LED.'
    ],
    images: []
},
{
    id: 152,
    name: 'Vertical EURO 750 4 caras exposición MONDINO Vertical EURO 1400 4 caras exposición MONDINO Vertical EURO 2000 4 caras exposición MONDINO xxx Vertical Roble 1300 4 caras exposicion 2 puerta RH Vertical Roble 700 4 caras exposicion 1 puerta RH',
    description: 'Exhibidora vertical con construcción en acero negro, diseñada para mantener una temperatura de trabajo de +2°C a +6°C. Cuenta con resistencia anti-empañante en las 4 caras de vidrio triple vidriado y termo panel float. Equipada con sistema de frío italiano que incluye evaporador y forzador de techo, así como iluminación interior LED. Incluye 5 estantes de vidrio regulables más piso, interior revestido en acero inoxidable y puerta de vidrio termopanel de abertura batiente.',
    details: [
        'Construcción: Acero negro.',
        'Temperatura de Trabajo: +2°C / +6°C.',
        'Resistencia Anti-Empañante: En 4 caras de vidrio triple vidriado.',
        'Termo Panel: Float.',
        'Sistema de Frío: Italiano con evaporador y forzador de techo.',
        'Iluminación: Interior LED.',
        'Estantes: 5 de vidrio regulables + piso.',
        'Interior: Revestido en acero inoxidable.',
        'Puerta: Vidrio termopanel de abertura batiente.',
        'Medidas (mm): 600 x 600 x 1800.'
    ],
    images: []
},
//HELADERAS MOSTRADOR/ SUPERNOVA
{
    id: 153,
    name: 'Minisuper 150 1/3 HP Stefanelli Minisuper 200 1/2 HP Stefanelli',
    description: 'Minisuper con estructura de acero galvanizado prepintado, diseñado con aislación de poliuretano inyectado y laterales en chapa prepintada también inyectados en poliuretano. Equipado con rejillas reforzadas, excelente iluminación, frente con triple vidrio templado y evaporador por aire forzado. Incorpora equipamiento Embraco de 1/4 HP para el sistema de refrigeración.',
    details: [
        'Estructura: Acero galvanizado prepintado.',
        'Aislación: Poliuretano inyectado.',
        'Laterales: Chapa prepintada inyectados en poliuretano.',
        'Rejillas: Reforzadas.',
        'Iluminación: Excelente.',
        'Frente: Triple vidrio templado.',
        'Evaporador: Aire forzado.',
        'Equipamiento: Embraco de 1/4 HP.',
    ],
    images: []
},
{
    id: 154,
    name: 'Mostrador 160 ( 1.05 + 0.45 ) ORLANDOS Mostrador 200 ( 1.50 + 0.50 ) ORLANDOS Mostrador 240 ( 2.00 + 0.50 ) ORLANDOS Mostrador 300 ( 2.50 + 0.50 ) ORLANDOS Mostrador 200 V/C ( 1.50 + 0.50 ) ORLANDOS Mostrador 240 V/C ( 2.00 + 0.50 ) ORLANDOS Mostrador 300 V/C ( 2.50 + 0.50 ) ORLANDOS',
    description: 'Mostrador con opción de cubre equipo, diseñado con contrafrente y piso en acero inoxidable, termopanel de triple vidrio, recubrimiento en laminado plástico y puertas con marco plástico y cierre automático. Las puertas superiores son corredizas con perfil de aluminio.',
    details: [
        'Contrafrente y piso: Acero inoxidable.',
        'Termopanel: Triple vidrio.',
        'Recubrimiento: Laminado plástico.',
        'Puertas: Marco plástico con cierre automático.',
        'Puertas superiores: Corredizas con perfil de aluminio.',
        'Medidas disponibles: 2m, 2.40m, 3m (longitud)',
        'Profundidad: 0.82m',
        'Altura: 1.03m'
    ],
    images: []
},
{
    id: 155,
    name: 'supernova 2.40 ( 2.00 + 0.50 ) supernova 3,00 ( 2.50 + 0.50 ) supernova 2.00 V/C ( 1.50 + 0.50 ) supernova 2.50 V/C ( 2.00 + 0.50 ) Supernova 3,00 V/C ( 2.50 + 0.50 )',
    description: 'Mostrador diseñado con interior galvanizado (opcional acero inoxidable), tapa de acero inoxidable, puertas superiores de vidrio corredizas, puertas inferiores batientes con herrajes de primera calidad, vidrio templado doble, sistema de frío forzado, unidad condensadora de ½ HP, patas de plástico reforzado, rejillas pintadas con pintura EPOXI y reforzadas. Incluye 4 estantes + piso en madera.',
    details: [
        'Interior: Galvanizado (opcional acero inoxidable).',
        'Tapa: Acero inoxidable.',
        'Puertas superiores: Vidrio corredizas.',
        'Puertas inferiores: Batientes con herrajes de primera calidad.',
        'Vidrio: Templado doble.',
        'Sistema de frío: Forzado.',
        'Unidad condensadora: ½ HP.',
        'Patas: Plástico reforzado.',
        'Rejillas: Pintadas con pintura EPOXI y reforzadas.',
        'Incluye: 4 estantes + piso en madera.',
        'Gas: R 22.',
        'Temperatura de trabajo: Entre 0º y 5º.'
    ],
    images: []
},
//HELADERAS BATEAS
{
    id: 156,
    name: 'Curva 2000 mm. 1/2 hp. CICLÓN Curva 1200 mm. 1/3 hp. CICLÓN Curva 1500 mm. 1/3 hp. CICLÓN Curva 1800 mm. 1/2 hp. CICLÓN Curva 2400 mm. 3/4 hp. CICLÓN',
    description: 'Refrigerador curvo de 2400 mm con capacidad de 3/4 hp, ideal para aplicaciones comerciales. Equipado con tecnología de aislamiento de poliuretano, condensación forzada y controlador digital para mantener precisamente la temperatura deseada.',
    details: [
        'Cúpula: Curva',
        'Aislación: Poliuretano de 38 kg/m³ de densidad',
        'Condensación: Forzada',
        'Evaporador: Aletado',
        'Controlador digital: Eliwell EWPlus',
        'Plano de trabajo: Acero',
        'Piso: Acero',
        'Exterior del gabinete: Chapa pre-pintada',
        'Interior del gabinete: Chapa pre-pintada',
        'Luz interior: Led',
        'Dimensiones: Frente 125 cm, Profundidad 1000 mm, Alto 136 cm',
        'Rango de temperatura: 3°C a 8°C',
        'Gas refrigerante: R-134a',
        'Voltaje / frecuencia: 220v / 50Hz'
    ],
    images: []
},
{
    id: 157,
    name: 'Curva 1800 mm. 1/3 hp. Mod. PREMIUM FRIDER Curva 2400 mm. 1/2 hp. Mod. PREMIUM FRIDER Curva 3000 mm. 3/4 hp. Mod. PREMIUM FRIDER',
    description: 'Heladera comercial tipo batea premium de 3000 mm con capacidad de 3/4 hp. Cuenta con gabinete exterior en chapa blanca, piso interior en acero inoxidable brillante, laterales en plástico termoformado marmolados y aislación en poliuretano inyectado libre de CFC. Incluye mesada de trabajo en acero inoxidable brillante para mayor durabilidad y facilidad de limpieza.',
    details: [
        'Tipo: Batea',
        'Gabinete exterior: Chapa blanca',
        'Piso interior: Acero inoxidable brillante',
        'Laterales: Plástico termoformado marmolados',
        'Aislación: Poliuretano inyectado 40 Kg/m³ libre de CFC',
        'Mesada de trabajo: Acero inoxidable brillante',
        'Dimensiones: Curva de 3000 mm',
        'Capacidad: 3/4 hp'
    ],
    images: []
},
{
    id: 158,
    name: 'Recta 1200 mm. 1/3 hp. Mod. LUANA LUXE FRIDER Recta 1800 mm. 1/2 hp. Mod. LUANA LUXE FRIDER Recta 2400 mm. 3/4 hp. Mod. LUANA LUXE FRIDER Recta 3000 mm. 1 hp. Mod. LUANA LUXE FRIDER',
    description: 'Heladera comercial tipo recta de 3000 mm con capacidad de 1 hp, modelo Luana Luxe de la marca Frider. Equipada con gabinete exterior en chapa prepintada, piso interior en acero inoxidable brillante, laterales en plástico termoformado color gris y aislación en poliuretano inyectado libre de CFC. Incluye mesada de trabajo en acero inoxidable brillante para mayor durabilidad y facilidad de limpieza.',
    details: [
        'Tipo: Recta',
        'Gabinete exterior: Chapa prepintada',
        'Piso interior: Acero inoxidable brillante',
        'Laterales: Plástico termoformado color gris',
        'Aislación: Poliuretano inyectado 40 Kg/m³ libre de CFC',
        'Mesada de trabajo: Acero inoxidable brillante',
        'Dimensiones: Recta de 3000 mm',
        'Capacidad: 1 hp'
    ],
    images: []
},
{
    id: 159,
    name: 'Curva 1200 mm. 1/3 hp. Mod. LUANA FRIDER Curva 1800 mm. 1/2 hp. Mod. LUANA FRIDER Curva 2400 mm. 3/4 hp. Mod. LUANA FRIDER Curva 3000 mm. 1 hp. Mod. LUANA FRIDER',
    description: 'Heladera comercial tipo batea curva de 3000 mm con potencia de 1 hp, modelo Luana de la marca Frider. Equipada con gabinete exterior en chapa blanca, piso interior en acero inoxidable mate y laterales en plástico termoformado. Aislación en poliuretano inyectado libre de CFC y mesada de trabajo en acero inoxidable brillante. Incluye base de perfiles de chapa galvanizada Nº 20, zócalo inferior en acero o chapa, patas de plástico reforzadas regulables, paragolpes de protección en PVC, sistema de refrigeración por frío estático y parrillas plastificadas blancas. La cúpula cuenta con vidrio curvo templado rebatible, laterales de vidrio serigrafiado, mesada superior en aluminio anodizado, brazos de soporte de aluminio, iluminación con tubos LED y mesada de trabajo en acero inoxidable brillante.',
    details: [
        'Tipo: Batea Curva',
        'Gabinete exterior: Chapa blanca',
        'Piso interior: Acero inoxidable mate',
        'Laterales: Plástico termoformado',
        'Aislación: Poliuretano inyectado 40 Kg/m³ libre de CFC',
        'Mesada de trabajo: Acero inoxidable brillante',
        'Base: Perfiles de chapa galvanizada Nº 20',
        'Zócalo inferior: Acero o chapa',
        'Patas: Plástico reforzadas regulables',
        'Paragolpes: PVC',
        'Sistema de refrigeración: Frío estático',
        'Cúpula: Vidrio curvo templado rebatible',
        'Iluminación: Tubos LED',
        'Dimensiones: Curva de 3000 mm',
        'Potencia: 1 hp'
    ],
    images: []
}













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


