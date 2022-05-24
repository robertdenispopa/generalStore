import { Meteor } from 'meteor/meteor';
import { OrdersCollection } from '../collections/OrdersCollections';



Meteor.publish('orders', function publishOrders() {
    let currentUser = Meteor.user();
    if(currentUser.profile.usertype === 'Seller'){
      return OrdersCollection.find({ userId: currentUser._id });  
    }
    
    if(currentUser.profile.usertype === 'Buyer') {
      return OrdersCollection.find({ buyerId: currentUser._id });   
    }
    
});