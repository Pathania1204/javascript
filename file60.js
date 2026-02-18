const cart = {
    items : [],
    addItems(item){
        this.items.push(item)
    },
    showItems() {
        console.log(this.items);
    },
};
cart.addItems("Laptop"),
cart.addItems("Desktop"),
cart.showItems()