import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ProductsCollection } from '../imports/api/collections/ProductsCollections';
import { OrdersCollection } from '../imports/api/collections/OrdersCollections';
import { HistoryCollection } from '../imports/api/collections/HistoryCollections';

import '../imports/api/methods/productsMethods';
import '../imports/api/methods/ordersMethods';
import '../imports/api/methods/historyMethods';
import '../imports/api/methods/accountMethods';

import '../imports/api/publications/productsPublications';
import '../imports/api/publications/ordersPublications';
import '../imports/api/publications/historyPublications';

const insertProduct = (product, user) => 
    ProductsCollection.insert({ 
        userId: user._id,
        name: product.name, 
        description: product.description, 
        price: product.price, 
        createdAt: new Date(),
    });

const insertOrder = (product, user) => 
    OrdersCollection.insert({ 
        userId: user._id,
        name: product.name, 
        description: product.description, 
        price: product.price, 
        createdAt: new Date(),
    });    
    

const SEED_USERNAME = 'meteorite';

var options = {
    username: 'meteorite',
    password: 'password',
    profile: {
        address:'Archis, Arad',
        usertype: 'ADMIN',
    }
}


Meteor.startup(() => {

    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
            username: options.username,
            password: options.password,
            profile: {
                name:"Popa Denis",
                address: 'Archis, Arad',
                usertype: 'ADMIN',
            }
        });
    }

    const user = Accounts.findUserByUsername(SEED_USERNAME);

    if (ProductsCollection.find().count() === 0) {
    [
        
        {
            name: 'First ', 
            description: "ceva", 
            price: 100,

        },
        {   
            name: 'Second ', 
            description: "ceva", 
            price: 100
        },
    ].forEach(product => insertProduct(product, user))

    
}

    if (OrdersCollection.find().count() === 0) {
    [
        
        {
            name: 'First ', 
            description: "ceva", 
            price: 100
        },
        {   
            name: 'Second ', 
            description: "ceva", 
            price: 100
        },
    ].forEach(product => insertOrder(product, user))

    
}
});