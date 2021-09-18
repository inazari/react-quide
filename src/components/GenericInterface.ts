const defaultExport = {}
export default defaultExport
/*
interface IShoppingCard<ItemId, Item> {
    items: Item[];
    addItem: (this: IShoppingCard<ItemId, Item>, item: Item) => void;
    getItemById(this: IShoppingCard<ItemId, Item>, id: ItemId): Item | undefined;
}


interface Item {
    id: number;
    price: number;
}

const cart: IShoppingCard<number, Item> = {
    items: [],
    addItem: (item) => {
        // @ts-ignore
        this.items.push(item);
    },
    getItemById: (id) => {
        // @ts-ignore
        return this.items.filter(item => item.id === id)
    }
}

cart.addItem({id: 1, price: 100})
cart.addItem({id: 2, price: 300})

console.log(cart.getItemById(2));
console.log(cart);
*/
