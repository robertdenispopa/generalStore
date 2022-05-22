import { check } from 'meteor/check';
import { OrdersCollection } from '../collections/OrdersCollection';
    
Meteor.methods({
    'orders.insert'(toSend) {
    check(toSend.name, String);
    
    if (!this.userId) {
    throw new Meteor.Error('Not authorized.');
    }
    
    OrdersCollection.insert({
        name:toSend.name,
        description:toSend.description, 
        price:toSend.price,
        createdAt: new Date,
        userId: toSend.userId,
        address: toSend.address,
    })
    },
    
    'orders.remove'(orderId) {
    check(orderId, String);
    
    if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
    }

    const order = OrdersCollection.findOne({ _id: orderId, userId: this.userId });

    if (!order) {
        throw new Meteor.Error('Access denied.');
    }
    
    OrdersCollection.remove(orderId);
    },
    
    'orders.setIsChecked'(orderId, checked) {
    check(orderId, String);
    check(checked, Boolean);
    
    if (!this.userId) {
    throw new Meteor.Error('Not authorized.');
    }
    
    const order = OrdersCollection.findOne({ _id: orderId, userId: this.userId });

    if (!order) {
        throw new Meteor.Error('Access denied.');
    }

    OrdersCollection.update(orderId, {
        $set: {
        checked
        }
    });
    }
});