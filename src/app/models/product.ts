export class Product {
    id: number;
    name: string;
    image: string;
      
 
    constructor(id?: number, name?: string, image?: string){
        this.id = id ?? 0;
        this.name = name ?? '';
        this.image = image ?? '';
    }
}
