export class Product {
    id: number;
    name: string;
    description: string;
    details: string[];
    images: string[];

    constructor(id?: number, name?: string, description?:string, details?:string[], images?: string[]) {
        this.id = id ?? 0;
        this.name = name ?? '';
        this.description = description ?? '';
        this.details = details ?? [];
        this.images = images ?? [];
    }
}
