const products = [
    { id: "1", name: "Remera", description: "", stock: 20 },
    { id: "2", name: "Medias", description: "", stock: 8 },
    { id: "3", name: "Pantalón", description: "", stock: 15 },
    { id: "4", name: "Zapatilla", description: "", stock: 8 },
    { id: "5", name: "Chomba", description: "", stock: 15 },
    { id: "6", name: "Buzo", description: " ", stock: 8 },
    { id: "7", name: "Campera", description: "", stock: 8 },
];


export const getProducts = () => { 

    return new Promise( (resolve, reject) => { 
        if(products.length > 0) {
            setTimeout ( () => { 
                resolve( products )   
            }, 3500)
        } else {
            reject("Sin Stock, intente más tarde por favor")
        }
    } )
}