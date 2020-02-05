export class StoreItem {
    id: number;
    category: string[];
    name: string;
    description: string;
    price: number;

    constructor(id: number, category: string[], name: string, description: string, price: number) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}