import { Meteor } from 'meteor/meteor';
import { OrdersCollection } from '../collections/OrdersCollections';

Meteor.publish('orders', function publishOrders() {
    return OrdersCollection.find({ userId: this.userId });
});