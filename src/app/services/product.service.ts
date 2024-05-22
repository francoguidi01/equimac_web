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
            name: 'Procesador de Alimentos Inteligente', 
            description: 'El procesador de alimentos inteligente es la solución perfecta para la producción eficiente de alimentos en masa. Con tecnología de vanguardia y controles intuitivos, garantiza resultados consistentes y de alta calidad.', 
            details: [
                'Capacidad: 1000 kg/h',
                'Material: Acero inoxidable de grado alimenticio',
                'Funciones: Triturar, cortar, mezclar, amasar',
                'Dimensiones: 1200mm x 800mm x 1600mm'
            ], 
            images: ['/assets/Machine2.jpg', '/assets/Machine3.jpg', '/assets/Machine2.jpg'] 
        },
        { 
            id: 2, 
            name: 'Horno de Convección Industrial', 
            description: 'El horno de convección industrial es la elección ideal para hornear una amplia variedad de productos, desde panes hasta pasteles. Ofrece un rendimiento superior y una distribución uniforme del calor para resultados perfectos en cada lote.', 
            details: [
                'Capacidad: 10 bandejas',
                'Control de temperatura: 50°C - 300°C',
                'Potencia: 20 kW',
                'Dimensiones: 1200mm x 900mm x 1500mm'
            ], 
            images: ['/assets/Machine3.jpg', '/assets/Machine2.jpg', '/assets/Machine3.jpg'] 
        },
        { 
            id: 3, 
            name: 'Mezclador de Ingredientes Automático', 
            description: 'El mezclador de ingredientes automático simplifica el proceso de preparación de alimentos al mezclar de manera eficiente una variedad de ingredientes. Con controles programables y una construcción robusta, garantiza una producción sin problemas.', 
            details: [
                'Capacidad: 500 litros',
                'Material: Acero inoxidable de grado alimenticio',
                'Velocidad de mezcla ajustable',
                'Dimensiones: 1400mm x 1000mm x 1800mm'
            ], 
            images: ['/assets/Machine2.jpg', '/assets/Machine3.jpg', '/assets/Machine2.jpg'] 
        },
        { 
            id: 4, 
            name: 'Freidora de Producción Continua', 
            description: 'La freidora de producción continua es perfecta para la preparación rápida y eficiente de alimentos fritos en grandes cantidades. Equipada con tecnología de filtrado avanzada, garantiza aceite limpio y resultados consistentes.', 
            details: [
                'Capacidad: 50 litros',
                'Material: Acero inoxidable',
                'Control de temperatura: 120°C - 200°C',
                'Sistema de filtrado automático'
            ], 
            images: ['/assets/Machine3.jpg', '/assets/Machine2.jpg', '/assets/Machine3.jpg'] 
        },
        { 
            id: 5, 
            name: 'Línea de Producción de Snacks', 
            description: 'La línea de producción de snacks es una solución completa para la fabricación de una variedad de aperitivos, desde papas fritas hasta palitos de maíz. Diseñada para una operación eficiente y fácil limpieza, es ideal para la producción a gran escala.', 
            details: [
                'Capacidad: 200 kg/h',
                'Material: Acero inoxidable de grado alimenticio',
                'Incluye equipos de corte, freído y condimentado',
                'Dimensiones: 15000mm x 2000mm x 2500mm'
            ], 
            images: ['/assets/Machine2.jpg', '/assets/Machine3.jpg', '/assets/Machine2.jpg'] 
        },
        { 
            id: 6, 
            name: 'Empanizadora Automática', 
            description: 'La empanizadora automática simplifica el proceso de empanizado de una variedad de productos, desde filetes de pollo hasta vegetales. Con ajustes de velocidad y grosor, garantiza un recubrimiento uniforme y un producto final de alta calidad.', 
            details: [
                'Capacidad: 500 kg/h',
                'Material: Acero inoxidable de grado alimenticio',
                'Control de velocidad y grosor del recubrimiento',
                'Dimensiones: 1200mm x 1000mm x 1600mm'
            ], 
            images: ['/assets/Machine3.jpg', '/assets/Machine2.jpg', '/assets/Machine3.jpg'] 
        },
        { 
            id: 7, 
            name: 'Máquina de Envasado al Vacío', 
            description: 'La máquina de envasado al vacío es esencial para mantener la frescura y prolongar la vida útil de una variedad de productos alimenticios, desde carnes hasta productos lácteos. Con controles de sellado precisos, garantiza un envasado seguro y hermético.', 
            details: [
                'Capacidad: 300 paquetes/hora',
                'Material: Acero inoxidable de grado alimenticio',
                'Control de sellado y vacío ajustable',
                'Dimensiones: 1500mm x 800mm x 1200mm'
            ], 
            images: ['/assets/Machine2.jpg', '/assets/Machine3.jpg', '/assets/Machine2.jpg'] 
        },
        { 
            id: 8, 
            name: 'Cortadora de Verduras Automática', 
            description: 'La cortadora de verduras automática es perfecta para la preparación rápida y uniforme de una variedad de verduras, desde zanahorias hasta pepinos. Equipada con cuchillas ajustables, ofrece cortes precisos y eficientes.', 
            details: [
                'Capacidad: 800 kg/h',
                'Material: Acero inoxidable de grado alimenticio',
                'Cuchillas ajustables para diferentes cortes',
                'Dimensiones: 1400mm x 900mm x 1600mm'
            ], 
            images: ['/assets/Machine3.jpg', '/assets/Machine2.jpg', '/assets/Machine3.jpg'] 
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


