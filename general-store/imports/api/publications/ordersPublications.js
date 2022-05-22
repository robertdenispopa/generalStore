import { Meteor } from 'meteor/meteor';
import { OrdersCollection } from '../collections/OrdersCollection';

Meteor.publish('orders', function publishOrders() {
    return OrdersCollection.find({ userId: this.userId });
});