import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../collections/ProductsCollection';

Meteor.publish('products', function publishProducts() {
    return ProductsCollection.find({ });
});