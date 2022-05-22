import { check } from 'meteor/check';
import { HistoryCollection } from '../collections/HistoryCollections';
    
Meteor.methods({
    'history.insert'(toSend) {
    check(toSend.name, String);
    
    if (!this.userId) {
    throw new Meteor.Error('Not authorized.');
    }
    
    HistoryCollection.insert({
        name:toSend.name,
        description:toSend.description, 
        price:toSend.price,
        userOfItem:toSend.userOfItem,
        createdAt: new Date,
        userId: this.userId,
    })
    },
    
    'history.remove'(carId) {
    check(carId, String);
    
    if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
    }

    const car = HistoryCollection.findOne({ _id: carId, userId: this.userId });

    if (!car) {
        throw new Meteor.Error('Access denied.');
    }
    
    HistoryCollection.remove(carId);
    },

});