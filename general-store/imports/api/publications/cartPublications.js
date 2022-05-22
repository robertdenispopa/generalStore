import { Meteor } from 'meteor/meteor';
import { CartCollection } from '../collections/CartCollection';

Meteor.publish('cart', function publishCart() {
    return CartCollection.find({ userId: this.userId });
});