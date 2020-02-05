export class StoreItem {
    id: number;
    category: string[];
    name: string;
    description: string;
    price: number;
    gallery: string[];

    constructor(id: number, category: string[], name: string, description: string, price: number, gallery: string[]) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.description = description;
        this.price = price;
        this.gallery = gallery;
    }
}