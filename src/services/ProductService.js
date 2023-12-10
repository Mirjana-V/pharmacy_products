const firstProducts = [
    {
        id: '1',
        name: 'Aspirin',
        manufacturer: {id: '1', name: 'Manufacturer 1'},
        price: 10,
        expiryDate: new Date('2023-12-7'),
    },

    {
        id: '2',
        name: 'Brufen',
        manufacturer: {id: '2', name: 'Manufacturer 2'},
        price: 12,
        expiryDate: new Date('2023-12-8'),
    },

    {
        id: '3',
        name: 'Cafetin',
        manufacturer: {id: '3', name: 'Manufacturer 3'},
        price: 14,
        expiryDate: new Date('2023-12-9'),
    },

    {
        id: '4',
        name: 'Levopront',
        manufacturer: {id: '4', name: 'Manufacturer 4'},
        price: 16,
        expiryDate: new Date('2023-12-10'),
    }
];


let products = [...firstProducts];

const ProductService = {
    getAllProducts: () => products,

    getProductById: (id) =>products.find((product) => product.id === id),

    addProduct: (newProduct) => {
        products.push(newProduct);
        console.log('gde je novi proizvod');
    },

    updateProduct: (id, updatedProduct) => {
        const index = products.findIndex((product) => product.id === id);
        if (index !== -1) {
            products[index] = {...products[index], ...updatedProduct};
        }
    },

    deleteProduct: (id) => {
        products = products.filter((product) => product.id !== id);
    }
}

export default ProductService;