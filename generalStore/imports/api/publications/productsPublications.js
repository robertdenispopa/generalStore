import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../collections/ProductsCollections';

Meteor.publish('products', function publishProducts() {
    return ProductsCollection.find({ });
});