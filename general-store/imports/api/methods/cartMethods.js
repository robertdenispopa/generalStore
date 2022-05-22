import { check } from 'meteor/check';
import { CartCollection } from '../collections/CartCollection';
    
Meteor.methods({
    'cart.insert'(toSend) {
    check(toSend.name, String);
    
    if (!this.userId) {
    throw new Meteor.Error('Not authorized.');
    }
    
    CartCollection.insert({
        name:toSend.name,
        description:toSend.description, 
        price:toSend.price,
        userOfItem:toSend.userOfItem,
        createdAt: new Date,
        userId: this.userId,
    })
    },
    
    'cart.remove'(carId) {
    check(carId, String);
    
    if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
    }

    const car = CartCollection.findOne({ _id: carId, userId: this.userId });

    if (!car) {
        throw new Meteor.Error('Access denied.');
    }
    
    CartCollection.remove(carId);
    },

});